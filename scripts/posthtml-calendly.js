
module.exports = function () {
  function processCalendly(tree) {
    tree.match([{ tag: "a" }], (node) => {
      const isBookingLink = node.attrs?.href == "/book";
      if( isBookingLink ) {
          node.attrs.href = "https://cal.com/dainsaint/chat";
          node.attrs.target = "_blank";
      }
      return node;
    });

    return tree;
  }

  return processCalendly;
};
