const getColors = require("get-image-colors");

const Cache = require("./cache");

const colorize = async( asset, node ) => {
  const file = node.attrs.src;
  let data = {};

  if( asset.isValid(file) ) {
    data = asset.data[file];
  } else {
    try {
      const palette = await getColors(asset.input + file);
      const colors = palette.map((color) => color.hex());
      data = { colors };
      asset.update(file, data);
    } catch (e) {
      // console.log( e )
    }
  }
  
  if( data.colors )
    node.attrs.style += ` background-color: ${data.colors[0]};`
  else 
    node.attrs.style += ` background-color: var(--palette-2);`;


  node.attrs.src = "";

  return node;
}


module.exports = function (eleventy) {
  
  function processImages(tree) {
    const asset = new Cache({
      name: "image-colors",
      input: `./${eleventy.page.dir.input}`,
      output: `./.cache`,
    });

    const promises = [];

    tree.match({ tag: "img" }, (node) => {

      const isRemote = node.attrs.src.startsWith("http");
      if (isRemote) return node;

      promises.push(colorize(asset, node));
      return node;
    });

    return Promise.all(promises).then(() => tree);
  }

  return processImages;
};