const fs = require('fs');
const path = require('path');

module.exports = async () => {
  let filePath = path.join(__dirname, '..', 'assets','img','deco' );
  let files = fs.readdirSync( filePath );
  const result = {
    deco: files.filter( x => x.indexOf(".webp") >= 0 ).map( x => x.replace('.webp', '') )
  };

  // console.log( result );

  return result
}
