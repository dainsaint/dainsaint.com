const fs = require("fs");
const md5File = require("md5-file");

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


module.exports = class Cache {
  constructor( { name, input, output } ) {
    ensureDirectory(output);
    this.destination = `${output}/${name}.json`;
    this.input = input;
    this.data = getAssetCache(this.destination); 
  }

  getHash( file ) {
    return md5File.sync( this.input + "/" + file);
  }

  hasChanged( entry, file ) {
    return entry && entry.__hash != this.getHash(file);
  }

  isValid( file ) {
    const cached = this.data[file];
    return cached && !this.hasChanged( cached, file );
  }

  update (file, update) {
    update.__hash = this.getHash(file);
    this.data[file] = update;
    this.save();
  }

  save () {
    fs.writeFileSync(this.destination, JSON.stringify(this.data, null, 2));
  }
}