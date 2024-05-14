const audioPeaks = require("node-audio-peaks");
const audioDuration = require("get-audio-duration");

const Cache = require("./cache");

const precision = 100;

const analyze = (asset, node) => new Promise((resolve, reject) => {

  (async () => {
    const file = node.attrs.src;

    if (asset.isValid(file)) {
      console.log(`🔊 Loading ${file} from cache`);
      resolve(node);
      return;
    }

    console.log(`🔊 Analyzing ${file} from cache...`);
    const path = asset.input + file;
    const peaks = await audioPeaks.getAudioPeaks(path, 100).toPromise();
    const duration = await audioDuration.getAudioDurationInSeconds(path);
    const update = {
      peaks: peaks.map((x) => Math.round(x * precision) / precision),
      duration,
    };

    asset.update(file, update);

    resolve(node);

  })()
})

module.exports = function ( eleventy ) {
  function processWaveforms(tree) {

    const asset = new Cache({
      name: "waveforms",
      input: `./${eleventy.page.dir.input}`,
      output: `./${eleventy.page.dir.output}/data`
    });
    
    const promises = [];

    tree.match({ tag: "audio" }, (node) => {
      promises.push( analyze(asset, node) );
      return node;
    });

    // console.log( promises );
    return Promise.all(promises).then( () => tree );
  }

  return processWaveforms;
};