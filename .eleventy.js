const markdownIt = require("markdown-it");
const mdFA = require("markdown-it-fontawesome");
const mdContainer = require("markdown-it-container");
const mdAttrs = require("markdown-it-attrs");

const { DateTime } = require("luxon");
const Color = require("color");

const rssPlugin = require("@11ty/eleventy-plugin-rss");
const syntaxHighlightPlugin = require("@11ty/eleventy-plugin-syntaxhighlight");
// const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

const yaml = require("js-yaml");
const pretty = require("pretty");
// const html = require("node-html-parser");

const waveforms = require("./scripts/waveforms");

// const images = require("./scripts/images");
// const imageData = require("./src/assets/data/images.json");

const markdownLibrary = markdownIt({
  html: true,
  typographer: true,
})
  .use(mdAttrs)
  .use(mdContainer, "group")
  .use(mdFA);

function lightOrDark(color) {
  return Color(color).isDark() ? "light" : "dark";
}

function addOptions( eleventy ) {

  // Merge data instead of overriding
  eleventy.setDataDeepMerge(true);

  // To Support .yaml Extension in _data
  // You may remove this if you can use JSON
  eleventy.addDataExtension("yml, yaml", (contents) =>
    yaml.load(contents)
  );

  // Copy Static Files to /_Site
  eleventy.addPassthroughCopy({
    "./src/admin/config.yml": "./admin/config.yml",
    "./src/admin/preview.css": "./admin/preview.css",
  });

  // Copy Image Folder to /_site
  eleventy.addPassthroughCopy("./src/assets");
  eleventy.addPassthroughCopy("./src/robots.txt");

  // Set up markdown
  eleventy.setLibrary("md", markdownLibrary);
  eleventy.setTemplateFormats(["md", "html"]);

  eleventy.setLiquidOptions({
    dynamicPartials: false,
    strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
    extname: ".html",
  });
}

function addPlugins( eleventy ) {
  // Syntax Highlighting for Code blocks
  eleventy.addPlugin(syntaxHighlightPlugin);

  // rss plugin
  eleventy.addPlugin(rssPlugin);

  //Image transformation
  // eleventy.addPlugin(eleventyImageTransformPlugin, {
  //   extensions: "html",
  //   formats: ["webp"]
  // });
}

function addFilters( eleventy ) {
  // human readable date
  eleventy.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  eleventy.addFilter("debugger", (...args) => {
    console.log(...args);
    debugger;
  });

  eleventy.addFilter("contrast", function (color) {
    return lightOrDark(color || "#121212");
  });

  eleventy.addFilter("prose", function (pages) {
    const result = pages.reduce((text, page, i, arr) => {
      if (i == arr.length - 1) text += "or ";
      text += `[${page.page}](${page.url || `/` + page.page})`;
      if (i < arr.length - 1) text += ", ";

      return text;
    }, "");

    return result;
  });

  eleventy.addFilter("where", function (array, key, value) {
    return array.filter((item) => {
      const keys = key.split(".");
      const reducedKey = keys.reduce((object, key) => {
        return object[key];
      }, item);

      return reducedKey === value ? item : false;
    });
  });

  eleventy.addFilter("hasTags", (collection, tags = "") => {
    const tagArray = tags.split(" ");
    const include = tagArray.filter((tag) => tag[0] !== "-");
    const exclude = tagArray
      .filter((tag) => tag[0] === "-")
      .map((x) => x.substring(1));
    const positiveTags = tagArray.filter((tag) => tag[0] !== "-");

    return collection.filter((item) => {
      const excluded = exclude.some((tag) => item.data.tags?.includes(tag));
      if (excluded) return false;

      const included = include.filter((tag) => item.data.tags?.includes(tag));
      return positiveTags.length === included.length;
    });
  });


  eleventy.addFilter("inFolder", function (array, inputPath) {
    let path = inputPath.split("/");
    let search = path.splice(0, path.length - 1).join("/");
    return array.filter((item) => {
      return (
        item.template.parsed.dir.indexOf(search) >= 0 &&
        item.template.inputPath != inputPath
      );
    });
  });

  eleventy.addFilter("inProject", function (collection, projectPath) {
    if (!collection || !projectPath) return {};

    let list = collection.filter(
      (post) =>
        post.data.project != "" && projectPath.indexOf(post.data.project) >= 0
    );

    return list;
  });

  eleventy.addFilter("fromFile", function (collection, file) {
    if (!collection || !file || file == "") return null;

    let post = collection.find((post) => post.template.parsed.name === file);
    return post;
  });

  eleventy.addFilter("fromFiles", function (collection, files) {
    if (typeof files === "string") files = files.split(", ");

    if (!collection || !files) return [];
    return files.map((file) =>
      collection.find((post) => post.template.parsed.name === file)
    );
  });

  eleventy.addFilter("markdown", function (string) {
    return string ? markdownLibrary.render(string) : string;
  });

  eleventy.addFilter("inline", function (string) {
    return string ? markdownLibrary.renderInline(string) : string;
  });

  eleventy.addFilter("getRandom", function (items = [], avoid) {
    let selected = items[Math.floor(Math.random() * items.length)];
    if (!selected) return null;

    while (selected.url === avoid.url)
      selected = items[Math.floor(Math.random() * items.length)];

    return selected;
  });

}

function addShortcodes( eleventy ) {

  eleventy.addPairedShortcode("section", (content, color) => {
    const overrides = {
      contrast: color ? ` ${lightOrDark(color)}` : "",
      style: color ? ` style="--primary: ${color || "transparent"}"` : "",
    };

    return `<section class="block block-loose stack constrain colorize palette${
      overrides.contrast
    }"${overrides.style}>${markdownLibrary.render(content)}</section>`;
  });

  let hoisted;

  eleventy.on("eleventy.before", async () => {
    waveforms();
    // images(eleventy);
    hoisted = {};
  });

  eleventy.addPairedShortcode("hoist", function (content, slot, source) {
    if (!source) source = this.page.title;

    if (!hoisted[this.page.outputPath]) hoisted[this.page.outputPath] = {};
    if (!hoisted[this.page.outputPath][slot])
      hoisted[this.page.outputPath][slot] = {};
    hoisted[this.page.outputPath][slot][source] = content;

    return "";
  });

  eleventy.addShortcode("inject", function (slot) {
    if (hoisted[this.page.outputPath] && hoisted[this.page.outputPath][slot])
      return markdownLibrary.render(
        Object.values(hoisted[this.page.outputPath][slot]).join("\r\n")
      );
    return "";
  });

}

function addTransforms( eleventy ) {

  eleventy.addTransform("images", function (content) {
    // check for dev vs prod
    if ( process.env.ELEVENTY_RUN_MODE !== "build" ) return content;

    // check for html
    if (!(this.page.outputPath || "").endsWith(".html")) return content;
    
    // point images to netlify resizer
    return content.replace(
      /"(\/assets\/uploads\/(.*)\.(jpg|jpeg|png|webp))"/gi,
      `"assets/uploads/resized/$2.$3" style="background-color: ${$1} "`
    );

    // SVG IMAGES, NOT READY
    // return content.replace(
    //   /"(?<path>\/assets\/uploads\/(?<name>.*)\.(?<ext>jpg|jpeg|png|webp))"/gi, (match, p1, p2, p3, offset, string, groups) => {
    //     const { name, ext } = groups;
    //     const file = name + "." + ext;
    //     const data = imageData.files[file];
    //     const svg = data.svg;
    //     const resized = isBuild ? "resized/" : "";
    //     const bgColor = data?.colors
    //       ? `background-image: url(/assets/previews/${svg}); background-position: center center; background-size: cover;`
    //       : "";
    //     const dimensions = `width="${parseInt(data?.dimensions.width)}" height="${parseInt(data?.dimensions.height)}"`;
    //     //
    //     return `"/assets/uploads/${resized}${name}.${ext}" ${dimensions} style="${bgColor}"`;
    //   }
    // );
  });

  eleventy.addTransform("prettify", function (content) {
    // check for dev vs prod
    if (process.env.ELEVENTY_RUN_MODE !== "build") return content;

    // check for html
    if (!(this.page.outputPath || "").endsWith(".html")) return content;

    return pretty(content, { ocd: true });
  });

}


module.exports = function (eleventy) {
  addOptions( eleventy );
  addPlugins( eleventy );
  addFilters( eleventy );
  addShortcodes( eleventy );
  addTransforms( eleventy );

  // Let Eleventy transform HTML files as nunjucks
  // So that we can use .html instead of .njk
  return {
    dir: {
      input: "src",
    },
  };
};
