const markdownIt = require("markdown-it");
const mdFA = require("markdown-it-fontawesome");
const mdContainer = require("markdown-it-container");
const mdAttrs = require("markdown-it-attrs");
const { html5Media: mdMedia } = require("markdown-it-html5-media");

const markdown = markdownIt({
  html: true,
  typographer: true,
})
  .use(mdContainer, "dynamic", {
    validate: function () {
      return true;
    },
    render: function (tokens, idx) {
      const token = tokens[idx];
      return token.nesting === 1
        ? `<div class="${token.info.trim()}">`
        : "</div>";
    },
  })
  .use(mdMedia, {
    videoAttrs: `class="video" muted autoplay loop`,
  })
  .use(mdAttrs)
  .use(mdFA);

module.exports = markdown;