const { parser } = require("posthtml-parser");

const idify = (audio) => {
  return audio
    .split("/")
    .at(-1)
    ?.split(".")
    .at(0)
    .toLowerCase()
    .replace(/^[0-9]*/g, "")
    .trim()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-");
};

const getTemplate = (audio) => {
  const id = idify(audio);

  return parser(`<aside class="audio" data-slug="${id}">
    <div class="audio-controls">
      <button class="audio-button" id="${id}-audio-button">
        <i class="audio-icon fa-solid fa-play"></i>
      </button>
    </div>
    <div class="audio-content">
      <div id="${id}-audio">
      </div>
      <audio src="${audio}" preload="none">
      </audio>
    </div>
  </aside>`);
};

const audioRegex = /(.*.mp3)/;

module.exports = function () {
  function processAudio(tree) {
    tree.match([{ tag: "p" }, { tag: "li"}, { tag: "div" }], (node) => {
      if (!node.content?.length) return node;
        
      for( let i = 0; i < node.content.length; i++ ) {
        const text = node.content[i];
        if (typeof text !== "string") continue;

        const match = text.trim().match(audioRegex);
        if (!match) continue;

        const audio = match[1];
        node.content[i] = getTemplate(audio);
      }

      return node;
    });

    return tree;
  }

  return processAudio;
};
