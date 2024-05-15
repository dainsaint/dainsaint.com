const audioPeaks = require("node-audio-peaks");
const audioDuration = require("get-audio-duration");
const glob = require("glob");
// const fs = require("fs");
const Cache = require("../../scripts/cache");

module.exports = async () => {

  const asset = new Cache({
    name: "waveforms",
    input: `.`,
    output: `./src/assets/data`,
  });  

  const files = glob.sync("./src/assets/uploads/*.mp3", {
    nodir: true
  });
  
  const changedFiles = files.filter( file => !asset.isValid( file ) )

  if (!changedFiles.length) {
    console.log(`🔊 No audio files changed, skipping`);
    return;
  }
  
  console.log(`🔊 Processing for ${changedFiles.length} files...`);
  console.time(`🔊 Processed waveforms for ${changedFiles.length} files in`);
  const precision = 100;
  for (const file of changedFiles) {
    const peaks = await audioPeaks.getAudioPeaks(file, 100).toPromise();
    const duration = await audioDuration.getAudioDurationInSeconds(file);

    const update = {
      peaks: peaks.map((x) => Math.round(x * precision) / precision),
      duration,
    };

    asset.update( file, update);
  }
  console.timeEnd(`🔊 Processed waveforms for ${changedFiles.length} files in`);

  return asset.data;
}; 
