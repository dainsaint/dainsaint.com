const markdownIt = require("markdown-it");
const mdFA = require("markdown-it-fontawesome");
const mdContainer = require("markdown-it-container");
const mdAttrs = require("markdown-it-attrs");

const yaml = require("js-yaml");
const { DateTime } = require("luxon");
const syntaxHighlightPlugin = require("@11ty/eleventy-plugin-syntaxhighlight")
const rssPlugin = require("@11ty/eleventy-plugin-rss");


// const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
const Color = require("color");

const waveforms = require("./scripts/waveforms");

function lightOrDark(color) {
  return Color(color).isDark() ? "light" : "dark";
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

  // rss plugin
  eleventyConfig.addPlugin(rssPlugin);

  //Image transformation
  // eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
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
    .use(mdAttrs)
    .use(mdContainer, "group")
    .use(mdFA);

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

  eleventyConfig.addFilter("prose", function(pages) {
    const result = pages.reduce( (text, page, i, arr) => {
      if (i == arr.length - 1) text += "or ";
      text += `[${page.page}](${page.url || `/` + page.page})`
      if (i < arr.length - 1) text += ", ";
      
      return text;
    }, "")

    return result;
  })

  eleventyConfig.addFilter("where", function (array, key, value) {
    return array.filter((item) => {
      const keys = key.split(".");
      const reducedKey = keys.reduce((object, key) => {
        return object[key];
      }, item);

      return reducedKey === value ? item : false;
    });
  });

  eleventyConfig.addFilter("hasTags", (collection, tags = "") => {
    const tagArray = tags.split(" ");
    const include = tagArray.filter((tag) => tag[0] !== "-");
    const exclude = tagArray.filter((tag) => tag[0] === "-").map( x => x.substring(1) );
    const positiveTags = tagArray.filter((tag) => tag[0] !== "-")

    return collection.filter((item) => {      
      const excluded = exclude.some((tag) => item.data.tags?.includes(tag));
      if (excluded) return false;

      const included = include.filter((tag) => item.data.tags?.includes(tag));
      return positiveTags.length === included.length;
    });
  });

  eleventyConfig.addCollection("dynamic", (collectionApi) => collectionApi);

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

  eleventyConfig.addFilter("inProject", function (collection, projectPath) {
    if (!collection || !projectPath) return {};

    let list = collection.filter(
      (post) =>
        post.data.project != "" && projectPath.indexOf(post.data.project) >= 0
    );

    return list;
  });

  eleventyConfig.addFilter("fromFile", function (collection, file) {
    if (!collection || !file || file == "") return null;

    let list = collection.filter(
      (post) => post.template.inputPath.indexOf(file) >= 0
    );

    if (list.length) return list[0];
    else return {};
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

  eleventyConfig.addPairedShortcode("section", (content, color) => {
    const overrides = {
      contrast: color ? ` ${lightOrDark(color)}` : '',
      style: color ? ` style="--background: ${color || 'transparent'}"` : ''
    }    

    return `<section class="block-loose background palette${ overrides.contrast }"${ overrides.style }><div class="stack constrain">${ markdownLibrary.render(content) }</div></section>`;
  })

  let hoisted;

  eleventyConfig.on("eleventy.before", async() => {
    waveforms();
    hoisted = {};
  })

  eleventyConfig.addPairedShortcode("hoist", function (content, slot, source) {
    if (!source)
      source = this.page.title;
    
    if (!hoisted[this.page.outputPath]) hoisted[this.page.outputPath] = {};
    if (!hoisted[this.page.outputPath][slot])
      hoisted[this.page.outputPath][slot] = {};
    hoisted[this.page.outputPath][slot][source] = content;

    return "";
  });

  eleventyConfig.addShortcode("inject", function (slot) {
    if (hoisted[this.page.outputPath] && hoisted[this.page.outputPath][slot])
      return Object.values( hoisted[this.page.outputPath][slot] );
    return "";
  });

  
  eleventyConfig.addTransform("images", function(content) {
    if ( !(this.page.outputPath || "").endsWith(".html") )
      return content;

    // check for dev vs prod
    if( process.env.ELEVENTY_RUN_MODE !== "build" )
      return content;

    // resize images
    return content.replace(/assets\/uploads\/(.*)\.(jpg|jpeg|png|webp)/gi, "assets/uploads/resized/$1.$2");
  })
  

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    dir: {
      input: "src",
    },
  };
};
