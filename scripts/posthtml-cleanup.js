
module.exports = function () {
  function processYoutube(tree) {
    tree.match([{ tag: "p" }], (node) => {
      if( !node.content?.length ) return null;
      else return node;
    });

    return tree;
  }

  return processYoutube;
};
