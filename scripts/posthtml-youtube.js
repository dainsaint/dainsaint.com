const { parser } = require("posthtml-parser");

const getTemplate = (id, attrs) => {
  return parser(
  `<aside class="youtube js-youtube ${ attrs?.class || "" }" data-video="${id}" style="background-image: url(https://img.youtube.com/vi/${id}/sddefault.jpg)">
    <div class="youtube-play"></div>
  </aside>`);
};

const youtubeRegex =
  /(?:https?:\/\/)?(?:www\.)?youtu(?:\.be\/|be.com\/\S*(?:watch|embed)(?:(?:(?=\/[-a-zA-Z0-9_]{11,}(?!\S))\/)|(?:\S*v=|v\/)))([-a-zA-Z0-9_]{11,})/;

module.exports = function () {
  function processYoutube(tree) {
    tree.match([{ tag: "p" }, { tag: "li" }, { tag: "div" }], (node) => {
      if (!node.content?.length) return node;

      for (let i = 0; i < node.content.length; i++) {
        
        const text = node.content[i];
        if (typeof text !== "string") continue;

        const match = text.trim().match(youtubeRegex);
        if (!match) continue;

        const id = match[1];
        node.content[i] = getTemplate(id, node.attrs);
      }

      return node;
    });

    return tree;
  }

  return processYoutube;
};
