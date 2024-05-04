const markdownIt = require("markdown-it");
const markdownItFA = require("markdown-it-fontawesome");
const markdownItContainer = require("markdown-it-container");
const markdownItAttrs = require("markdown-it-attrs");
const markdownDoMarkdown = require("@digitalocean/do-markdownit");
const yaml = require("js-yaml");
const { DateTime } = require("luxon");
const syntaxHighlightPlugin = require("@11ty/eleventy-plugin-syntaxhighlight");
// const imageTransformPlugin = require("@11ty/eleventy-img");

const waveforms = require("./scripts/waveforms");

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
  eleventyConfig.addPlugin(syntaxHighlightPlugin);

  //Image transformation
  // eleventyConfig.addPlugin(imageTransformPlugin, {
  //   extensions: "html",
  //   formats: ["webp"]
  // });

  // To Support .yaml Extension in _data
  // You may remove this if you can use JSON
  eleventyConfig.addDataExtension("yml, yaml", (contents) => yaml.load(contents));

  // Copy Static Files to /_Site
  eleventyConfig.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
    "./src/admin/preview.css": "./admin/preview.css"
  });

  // Copy Image Folder to /_site
  eleventyConfig.addPassthroughCopy("./src/assets");

  // Set up markdown
  let markdownLibrary = markdownIt({
    html: true,
    typographer: true,
  })
    .use(markdownItAttrs)
    .use(markdownItContainer, "group")
    .use(markdownItContainer, "aside")
    .use(markdownItContainer, "columns")
    .use(markdownDoMarkdown, { heading_id: false })
    .use(markdownItFA);

  eleventyConfig.setLibrary("md", markdownLibrary);
  eleventyConfig.setTemplateFormats([
    "md",
    "html",
  ]);

  eleventyConfig.addFilter("debugger", (...args) => {
    console.log(...args);
    debugger;
  });

  eleventyConfig.addFilter("contrast", function (color) {
    return lightOrDark(color || "#121212");
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

  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
    extname: ".html",
  });

  eleventyConfig.addPairedShortcode("section", (content, color ) => {
    return `<section class="page-section ${ color && lightOrDark(color) }" style="--background: ${color || 'transparent'}">${content}</section>`;
  })

  eleventyConfig.on("eleventy.before", async() => {
    waveforms();
  })

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    dir: {
      input: "src",
    },
  };
};
