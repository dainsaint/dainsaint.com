const getSizeOf = require("image-size");

module.exports = function () {
  function processImages(tree) {
    tree.match({ tag: "img" }, (node) => {
      const isRemote = node.attrs.src.startsWith("http");
      if( isRemote )
        return node;

      const dimensions = getSizeOf('./src/' + node.attrs.src )
      node.attrs.width = dimensions.width;
      node.attrs.style = ` aspect-ratio: ${dimensions.width} / ${dimensions.height};`;
      if( !node.attrs.alt )
        node.attrs.alt = "";

      return node;
    });

    return tree;
  }

  return processImages;
};
