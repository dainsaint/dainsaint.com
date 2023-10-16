const markdownIt = require("markdown-it");
const markdownItContainer = require("markdown-it-container");
const markdownItAttrs = require("markdown-it-attrs");
const yaml = require("js-yaml");
const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const htmlmin = require("html-minifier");

function lightOrDark(color) {
  // Variables for red, green, blue values
  var r, g, b, hsp;

  // Check the format of the color, HEX or RGB?
  if (color.match(/^rgb/)) {
    // If RGB --> store the red, green, blue values in separate variables
    color = color.match(
      /^rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*(\d+(?:\.\d+)?))?\)$/
    );

    r = color[1];
    g = color[2];
    b = color[3];
  } else {
    // If hex --> Convert it to RGB: http://gist.github.com/983661
    color = +("0x" + color.slice(1).replace(color.length < 5 && /./g, "$&$&"));

    r = color >> 16;
    g = (color >> 8) & 255;
    b = color & 255;
  }

  // HSP (Highly Sensitive Poo) equation from http://alienryderflex.com/hsp.html
  hsp = Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (b * b));

  // Using the HSP value, determine whether the color is light or dark
  if (hsp > 127.5) {
    return "dark";
  } else {
    return "light";
  }
}

module.exports = function (eleventyConfig) {
  // Disable automatic use of your .gitignore
  // eleventyConfig.setUseGitIgnore(false);

  // Merge data instead of overriding
  eleventyConfig.setDataDeepMerge(true);

  // human readable date
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  // Syntax Highlighting for Code blocks
  eleventyConfig.addPlugin(syntaxHighlight);

  // To Support .yaml Extension in _data
  // You may remove this if you can use JSON
  eleventyConfig.addDataExtension("yaml", (contents) => yaml.load(contents));

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
    "./src/admin/preview.css": "./admin/preview.css",
    // "./node_modules/alpinejs/dist/cdn.min.js": "./static/js/alpine.js",
    // "./node_modules/prismjs/themes/prism-tomorrow.css":
    //   "./static/css/prism-tomorrow.css",
  });

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/assets");

  // Minify HTML
  // eleventyConfig.addTransform("htmlmin", function (content, outputPath) {
  //   // Eleventy 1.0+: use this.inputPath and this.outputPath instead
  //   if (outputPath.endsWith(".html")) {
  //     let minified = htmlmin.minify(content, {
  //       useShortDoctype: true,
  //       removeComments: true,
  //       collapseWhitespace: true,
  //     });
  //     return minified;
  //   }

  //   return content;
  // });

  let markdownLibrary = markdownIt({
    html: true,
  })
    .use(markdownItAttrs)
    .use(markdownItContainer, "group");

  eleventyConfig.setLibrary("md", markdownLibrary);
  eleventyConfig.setTemplateFormats([
    "md",
    "html",
  ]);

  eleventyConfig.addFilter("contrast", function (color) {
    return lightOrDark(color || "#FFFFFF");
  });

  eleventyConfig.addFilter("where", function (array, key, value) {
    return array.filter((item) => {
      const keys = key.split(".");
      const reducedKey = keys.reduce((object, key) => {
        return object[key];
      }, item);

      return reducedKey === value ? item : false;
    });
  });

  eleventyConfig.addFilter("inFolder", function (array, inputPath) {
    let path = inputPath.split("/");
    let search = path.splice(0, path.length - 1).join("/");
    return array.filter((item) => {
      return (
        item.template.parsed.dir.indexOf(search) >= 0 &&
        item.template.inputPath != inputPath
      );
    });
  });

  eleventyConfig.addFilter("fromFile", function (collection, file) {
    if (!collection || !file || file == "") return null;

    let list = collection.filter(
      (post) => post.template.inputPath.indexOf(file) >= 0
    );

    if (list.length) return list[0];
    else return {};
  });

  eleventyConfig.addFilter("inProject", function (collection, projectPath) {
    if (!collection || !projectPath) return {};

    let list = collection.filter(
      (post) =>
        post.data.project != "" && projectPath.indexOf(post.data.project) >= 0
    );

    return list;
  });

  eleventyConfig.addFilter("fromFiles", function (collection, files) {
    if (!collection || !files) return [];

    return collection.filter(
      (post) =>
        files.filter((file) => post.template.inputPath.indexOf(file) >= 0)
          .length
    );
  });

  eleventyConfig.addFilter("markdown", function (string) {
    return string ? markdownLibrary.render(string) : string;
  });

  eleventyConfig.addFilter("getRandom", function (items = [], avoid) {
    let selected = items[Math.floor(Math.random() * items.length)];
    if( !selected )
      return null;
    
    while (selected.url === avoid.url)
      selected = items[Math.floor(Math.random() * items.length)];

    return selected;
  });

  eleventyConfig.addShortcode("youtube", function (video_id) {
    return `<section class="youtube">
<style>.embed-container { position: relative; padding-bottom: 56.25%; height: 0; overflow: hidden; max-width: 100%; } .embed-container iframe, .embed-container object, .embed-container embed { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }</style>

<div class='embed-container'>
<iframe src='https://www.youtube.com/embed/${video_id}?modestbranding=1&showinfo=0&rel=0&iv_load_policy=3&color=white' frameborder='0' allowfullscreen></iframe>
</div>

  </section>
  `;
  });

  eleventyConfig.addShortcode("i", function (icon) {
    return `<i class="fa fa-${icon}"></i>`;
  });

  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
    extname: ".html",
  });

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    dir: {
      input: "src",
    },
  };
};
