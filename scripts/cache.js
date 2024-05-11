const glob = require("glob");
const fs = require("fs");

const getAssetCache = (destination) => {
  if (!fs.existsSync(destination))
    fs.writeFileSync(destination, JSON.stringify({files: {}}), "utf-8");

  const cache = require("." + destination);
  return cache;
}; 

const getFilenameFromPath = (path) => path.split("/").at(-1);

module.exports = class Cache {
  constructor( name, ...extensions ) {
    const sources = extensions.flatMap( ext => glob.sync(`./src/assets/uploads/${ext}`, {
      nodir: true,
    }));

    this.destination = `./src/assets/data/${name}.json`;

    this.data = getAssetCache(this.destination);
    this.paths = sources.filter(
      (source) =>
        fs.statSync(source).ctimeMs >
        (this.data.files[getFilenameFromPath(source)]?.lastModified || 0)
    );
    this.files = this.paths.map(getFilenameFromPath);
    this.valid = this.paths.length == 0;
  }

  update (path, delta) {
    delta.lastModified = fs.statSync(path).ctimeMs;
    this.data.files[getFilenameFromPath(path)] = delta;
  }

  save () {
    fs.writeFileSync(this.destination, JSON.stringify(this.data, null, 2));
  }
}