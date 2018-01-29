const fs = require('fs');
const path = require('path');

// const filesFilter = file => path.extname(file).toLowerCase() === `.${extension}`;
//
// const readdirCallBack = (err, files) => {
//   const filteredFiles = files.filter(filesFilter);
//   // filteredFiles.forEach((file) => { console.log(file); });
//   callBack(filteredFiles);
// };
// fs.readdir(process.argv[2], readdirCallBack);

const readDirWithCallback = (filePath, extension, callBack) => {
  fs.readdir(filePath, (err, files) => {
    if (err) {
      callBack(null);
    } else {
      const filteredFiles = files.filter(file => path.extname(file).toLowerCase() === `.${extension}`);
      callBack(filteredFiles);
    }
  });
};

module.exports = readDirWithCallback;
