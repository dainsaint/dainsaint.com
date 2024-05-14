const fs = require("fs");
// const { sha512 } = require("js-sha512");


const ensureDirectory = (directory) => {
  if(!fs.existsSync(directory))
    fs.mkdirSync(directory, {recursive: true});
}
const getAssetCache = (destination) => {
  if (!fs.existsSync(destination)) {
    fs.writeFileSync(destination, JSON.stringify({}), "utf-8");
  }

  const cache = require("." + destination);
  return cache;
}; 

const getHash = (file) => {
  return fs.statSync(file).mtimeMs
}

const hasChanged = (data, file) => {
  return data && (data.__hash < getHash(file));
}

module.exports = class Cache {
  constructor( { name, input, output } ) {
    ensureDirectory(output);
    this.destination = `${output}/${name}.json`;
    this.input = `${input}/`;
    this.data = getAssetCache(this.destination); 
  }

  isValid( file ) {
    const cached = this.data[file];
    return cached && !hasChanged( cached, this.input + file );
  }

  update (file, update) {
    update.__hash = getHash(this.input + file);
    this.data[file] = update;
    this.save();
  }

  save () {
    fs.writeFileSync(this.destination, JSON.stringify(this.data, null, 2));
  }
}