const getSizeOf = require("image-size");

module.exports = function () {
  function processImages(tree) {
    tree.match({ tag: "img" }, (node) => {
      const isRemote = node.attrs.src.startsWith("http");
      if( isRemote )
        return node;

      try {
        const dimensions = getSizeOf('./src/' + node.attrs.src )
        node.attrs.width = dimensions.width;
        node.attrs.height = dimensions.height;

        const aspect = 
          Math.abs( dimensions.width / dimensions.height - 2) <= .75 ? 'wide'
          : Math.abs( dimensions.height / dimensions.width - 2) <= .75 ? 'tall'
          : 'square'

        node.attrs.class = node.attrs.class ? node.attrs.class + " " + aspect : aspect;

        // node.attrs.style = ` aspect-ratio: ${dimensions.width} / ${dimensions.height};`;
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
