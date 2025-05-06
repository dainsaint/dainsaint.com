const fs = require("fs");
const { parser } = require("posthtml-parser");

module.exports = function () {
  function processImages(tree) {
    tree.match({ tag: "img" }, (node) => {
      const isSvg = node.attrs.src.endsWith("svg");
      if( !isSvg )
        return node;

      try {
        const file = fs.readFileSync('./src/' + node.attrs.src);
        const text = file.toString();
        
        const svgDoc = parser(text);
        const svg = svgDoc.find( node => node?.tag == 'svg' );
        svg.attrs.class = node.attrs.class;
        return svg;
        
      } catch(e) {console.log("⛔️ Couldn't process image", node.attrs.src)}

      if( !node.attrs.alt )
        node.attrs.alt = "";

      if( process.env.ELEVENTY_RUN_MODE === "build" )
          node.attrs.src = node.attrs.src.replace("assets/uploads", "assets/resized/uploads");

      return node;
    });

    return tree;
  }

  return processImages;
};
