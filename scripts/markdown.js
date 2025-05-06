const fs = require("fs");
const { parser } = require("posthtml-parser");
const render = require("posthtml-render")

const markdownIt = require("markdown-it");
const mdFA = require("markdown-it-fontawesome");
const mdContainer = require("markdown-it-container");
const mdAttrs = require("markdown-it-attrs");
const { html5Media: mdMedia } = require("markdown-it-html5-media");

var Plugin = require('markdown-it-regexp');

function mdIcons(md) {
	// FA4 style.
	md.use(Plugin(
		/\:icon-([\w\-]+)\:/,
		function (match, utils) {
      const name = utils.escape(match[1])

      try {
        const file = fs.readFileSync(`./src/assets/icons/${name}.svg`);
        const text = file.toString();
        
        const svgDoc = parser(text);
        const svg = svgDoc.find( node => node?.tag == 'svg' );
        svg.attrs.class = "icon";

        return render.render(svg);
      } catch (e){
        console.log(`⛔️ Couldn't find icon named "${name}"`);
        return `:icon-${name}:`;
      }
		}
	));
};

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
  .use(mdFA)
  .use(mdIcons);

module.exports = markdown;