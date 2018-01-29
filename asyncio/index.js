const fs = require('fs');

// fs.readFile(process.argv[2], (err, bufferObj) => {
//   console.log(bufferObj.toString().split('\n').length - 1);
// });

const readFileCallback = (filePath, callBack) => {
  fs.readFile(filePath, (err, bufferObj) => {
    if (err) {
      callBack(null);
    } else {
      callBack((bufferObj.toString().split('\n').length - 1));
    }
  });
};

module.exports = readFileCallback;
