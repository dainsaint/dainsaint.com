const audioPeaks = require("node-audio-peaks");
const audioDuration = require("get-audio-duration");
const glob = require("glob");
const fs = require("fs");

const assetCacheFile = "./src/assets/data/waveforms.json";

const getAssetCache = () => {
  if (!fs.existsSync(assetCacheFile))
    fs.writeFileSync(assetCacheFile, "{files: {}}", "utf-8");

  const cache = require("." + assetCacheFile);
  return cache;
};

const getFilenameFromPath = path => path.split("/").at(-1);

module.exports = async () => {
  const paths = glob.sync("./src/assets/uploads/*.mp3", {
    nodir: true,
  });

  const data =  getAssetCache();
  
  const files = paths.filter(
    (path) =>
      fs.statSync(path).ctimeMs >
      ( data.files[getFilenameFromPath(path)]?.lastModified || 0 )
  );

  if (!files.length) {
    console.log(`🔊 No audio files changed, skipping`); 
    return;
  }
 
  const precision = 100;
  console.time(`🔊 Processed waveforms for ${files.length} files in`);
  for( const file of files ) {
    const peaks = await audioPeaks.getAudioPeaks(file, 100).toPromise();
    const duration = await audioDuration.getAudioDurationInSeconds(file);
    const lastModified = fs.statSync(file).ctimeMs;
    console.log( file, lastModified)
    const name = getFilenameFromPath(file);
    data.files[name] = {
      peaks: peaks.map((x) => Math.round(x * precision) / precision),
      duration,
      lastModified
    };
  }
  console.timeEnd(`🔊 Processed waveforms for ${files.length} files in`);
  
  fs.writeFileSync(assetCacheFile, JSON.stringify(data));
};
