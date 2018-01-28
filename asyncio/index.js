const fs = require('fs');

// fs.readFile(process.argv[2], (err, bufferObj) => {
//   console.log(bufferObj.toString().split('\n').length - 1);
// });

// const asyncFileRead = (filePath) => {
//   const promise = new Promise((resolve, reject) => {
//     fs.readFile(filePath, (error, data) => {
//       if (error) {
//         reject(error);
//       } else {
//         // console.log('the output is ', data.toString().split('\n').length - 1);
//         resolve(data.toString().split('\n').length - 1);
//       }
//     });
//   });
//
//
//   return promise;
// };
//
// const readFileAsync = filePath => asyncFileRead(filePath).then(result =>
//   // console.log('the result is ', result);
//   result);

async function readFileAsync(filePath) {
  const promise = new Promise((resolve, reject) => {
    fs.readFile(filePath, (error, data) => {
      if (error) {
        reject(error);
      } else {
        // console.log('the output is ', data.toString().split('\n').length - 1);
        resolve(data.toString().split('\n').length - 1);
      }
    });
  });

  return await promise;
}


console.log(readFileAsync('/Users/aakashraju/learnyounode/myfirstio/test.txt'));

module.exports = readFileAsync;
