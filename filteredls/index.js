const fs = require('fs');
const path = require('path');

const filesFilter = file => path.extname(file).toLowerCase() === `.${process.argv[3]}`;

const readdirCallBack = (err, files) => {
  const filteredFiles = files.filter(filesFilter);
  filteredFiles.forEach((file) => { console.log(file); });
};
fs.readdir(process.argv[2], readdirCallBack);
