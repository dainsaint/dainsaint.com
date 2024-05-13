const { AssetCache } = require('@11ty/eleventy-fetch');
const { parse } = require("rss-to-json");



module.exports = async () => {
  let asset = new AssetCache("newsletter");
  if( asset.isCacheValid("1d"))
    return asset.getCachedValue();

  try {
    const json = await parse("https://buttondown.email/dainsaint/rss");
    asset.save( json, "json" );
    return json;
  } catch(e) {
    console.log(e);
  }


  return {};
};
