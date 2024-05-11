const { promisify } = require("util");
const Cache = require("./cache");
const getColors = require("get-image-colors");
const getSizeOf = promisify( require("image-size") );

const { sqip } = require("sqip");



module.exports = async ( eleventyConfig ) => {

  eleventyConfig.watchIgnores.add("src/assets/previews/**")
  eleventyConfig.watchIgnores.add("src/assets/data/**");

  let asset = new Cache("images", "*.jpg", "*.jpeg", "*.png", "*.webp");
   
  if( asset.valid )
    return asset.data;

  console.log("🪄 lets svg some images");

  const errors = []; 

  for( let i = 0; i < asset.paths.length; i++ ) {
    const path = asset.paths[i];
    // const name = asset.names[i];
    const update = {
      // colors: ["#FF0000"],
      svg: "",
      dimensions: {
        width: 100,
        height: 100
      }
    }      
 
    try {
      
      const svg = await sqip({
        input: path,
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

      update.svg = svg.metadata.filename + ".svg";
    } catch (e) {
      errors.push(`⛔️ Couldn't extract shapes from ${path}.`);
    }

    // try {
    //   const colors = await getColors(path);
    //   update.colors = colors.map( color => color.hex() );
    // } catch(e) {
    //   errors.push( `⛔️ Couldn't extract colors from ${path}.`)
    // }

    try {
      const dimensions = await getSizeOf(path);
      update.dimensions = dimensions
    } catch(e) {
      errors.push(`⛔️ Couldn't extract dimensions from ${path}.`);
    }

    asset.update(path, update);
    asset.save();
  }

  if( errors.length )
    errors.forEach( error => console.log(error) );

  if( asset.paths.length > 0 )
      console.log ("🪄 all images svg'd");
  

  eleventyConfig.watchIgnores.remove("src/assets/previews/**");
  eleventyConfig.watchIgnores.remove("src/assets/data/**");

  return asset.data;
  
  
}