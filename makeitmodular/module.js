const fs = require('fs');
const path = require('path');

const filesFilter = file => path.extname(file).toLowerCase() === `.${extension}`;

const readdirCallBack = (err, files) => {
  const filteredFiles = files.filter(filesFilter);
  filteredFiles.forEach((file) => { console.log(file); });
};


const listOfFiles = (filePath, extension, callback) => {
  fs.readdir(filePath, (err, files) => {
    if (err) {
      callback(err, null);
    } else {
      const filteredFiles = files.filter(file => path.extname(file).toLowerCase() === `.${extension}`);
      callback(null, filteredFiles);
    }
  });
};

module.exports = listOfFiles;
