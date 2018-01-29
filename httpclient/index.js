const http = require('http');

// http.get(process.argv[2], (response) => {
//   response.on('data', (data) => {
//     console.log(data.toString());
//   });
// });
const makeGetRequest = (port, callBack) => {
  http.get(port, (response) => {
    response.on('data', (data) => {
      callBack(data.toString());
    });
    response.on('error', () => {
      callBack(null);
    });
  });
};

module.exports = makeGetRequest;
