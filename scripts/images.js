const { AssetCache } = require("@11ty/eleventy-fetch");

const { promisify } = require("util");
const fs = require("fs");
const glob = require("glob");

const getColors = require("get-image-colors");
const getSizeOf = promisify( require("image-size") );
const { sqip } = require("sqip");

const getKeyFromPath = (path) => path.replace(/\.?src\/?/, '/');

const processSvg = async (source, errors) => {
  try {
    const svg = await sqip({
      input: source,
      output: "./src/assets/previews/",
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

    return svg.metadata.filename + ".svg";
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
}

const processDimensions = async (source, errors) => {
  try {
    return await getSizeOf(source);
  } catch (e) {
    errors.push(`⛔️ Couldn't extract dimensions from ${source}.`);
  }

  return {}
}

module.exports = async ( eleventyConfig ) => {

  const asset = new AssetCache("images");

  if( asset.isCacheValid('1d') )
    return asset.getCachedValue();

  eleventyConfig.watchIgnores.add("src/assets/previews/**")
  eleventyConfig.watchIgnores.add("src/assets/data/**");

  const extensions = ["*.jpg", "*.jpeg", "*.png", "*.webp"];
  const sources = extensions.flatMap((ext) =>
    glob.sync(`./src/assets/uploads/${ext}`, {
      nodir: true,
    })
  );
  
  const errors = []; 
  const data = {}

  for( const source of sources ) {
    console.log( "processing", source );
    const key = getKeyFromPath(source);
    // const svg = await processSvg( source, errors );
    const colors = await processColors(source, errors);
    const dimensions = await processDimensions(source, errors);

    data[key] = {
      colors,
      dimensions,
    };
  }
 
  console.log("🪄 lets svg some images");

  
  if( errors.length )
    errors.forEach( error => console.log(error) );

  eleventyConfig.watchIgnores.delete("src/assets/previews/**");
  eleventyConfig.watchIgnores.delete("src/assets/data/**");

  asset.save(data, "json");

  return data;
  
  
}