// const fs = require('fs');
// const bufferObj = fs.readFileSync(process.argv[2]);
// console.log(bufferObj.toString().split('\n').length - 1);
const fs = require('fs');

const readFile = (filePath) => {
  const bufferObj = fs.readFileSync(filePath);
  return bufferObj.toString().split('\n').length - 1;
};

module.exports = readFile;
