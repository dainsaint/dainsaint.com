const { AssetCache } = require("@11ty/eleventy-fetch");

const { promisify } = require("util");
const fs = require("fs");
const glob = require("glob");

const getColors = require("get-image-colors");
const getSizeOf = promisify( require("image-size") );
const { sqip } = require("sqip");

const getKeyFromPath = (path) => path.replace(/\.?src\/?/, '/');


const processSvg = async (source, errors) => {
  const filename = source.split("/").at(-1).split('.')[0];
  const preview = `./_site/assets/previews/${filename}.svg`;

  if (fs.existsSync(preview)) 
    return `/assets/previews/${filename}.svg`;

  try {
    await sqip({
      input: source,
      output: "./_site/assets/previews/",
      plugins: [
        {
          name: "sqip-plugin-primitive",
          options: {
            numberOfPrimitives: 20,
            mode: 0,
          },
        },
        "sqip-plugin-svgo",
      ],
    });

    return `/assets/previews/${filename}.svg`;
  } catch (e) {
    errors.push(`⛔️ Couldn't extract shapes from ${source}.`);
  }

  return "";
}

const processColors = async (source, errors) => {
  try {
    const colors = await getColors(source);
    return colors.map( color => color.hex() );
  } catch(e) {
    errors.push( `⛔️ Couldn't extract colors from ${source}.`)
  }

  return [];
}

const processDimensions = async (source, errors) => {
  try {
    return await getSizeOf(source);
  } catch (e) {
    errors.push(`⛔️ Couldn't extract dimensions from ${source}.`);
  }

  return {}
}


module.exports = async (source) => {

  const errors = [];

  
  console.log("processing", source);
  const key = getKeyFromPath(source);
  const svg = await processSvg("./src" + source, errors);
  // const colors = await processColors(source, errors);
  const dimensions = await processDimensions("./src" + source, errors);

  const data = {
    svg,
    // colors,
    dimensions,
  };
  
  if (errors.length) errors.forEach((error) => console.log(error));

  return data;
};


// module.exports = async (eleventy) => {
//   const asset = new AssetCache("images");

//   if (asset.isCacheValid("1d"))
//     return asset.getCachedValue();

//   // eleventy.watchIgnores.add("./src/assets/previews/**")

//   const exts = ["jpg", "jpeg", "png", "webp", "avif"];
//   const sources = exts.flatMap( ext => glob.sync(`./src/assets/uploads/*.${ext}`, {
//     nodir: true,
//   }));

//   const errors = [];
//   const data = {};
//   console.log(sources);

//   for (const source of sources) {
//     console.log("processing", source);
//     const key = getKeyFromPath(source);
//     const svg = await processSvg(source, errors);
//     // const colors = await processColors(source, errors);
//     const dimensions = await processDimensions(source, errors);

//     data[key] = {
//       svg, 
//       // colors,
//       dimensions,
//     };
//   }

//   console.log("🪄 lets svg some images");

//   if (errors.length) errors.forEach((error) => console.log(error));

//   await asset.save(data, "json");
  
//   // eleventy.watchIgnores.delete("./src/assets/previews/**");

//   return data;
// }