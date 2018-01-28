const listOfFiles = require('./module.js');

const callback = (err, files) => {
  if (err) {
    console.log(err);
  } else {
    files.forEach((file) => { console.log(file); });
  }
};

listOfFiles(process.argv[2], process.argv[3], callback);
