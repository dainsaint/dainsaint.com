const { DateTime } = require("luxon");

module.exports = {
  setup: (eleventy, markdown) => {
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
      return string ? markdown.render(string) : string;
    });

    eleventy.addFilter("inline", function (string) {
      return string ? markdown.renderInline(string) : string;
    });

    eleventy.addFilter("getRandom", function (items = [], avoid) {
      let selected = items[Math.floor(Math.random() * items.length)];
      if (!selected) return null;

      while (selected.url === avoid.url)
        selected = items[Math.floor(Math.random() * items.length)];

      return selected;
    });
  },
};
