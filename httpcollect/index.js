const http = require('http');

const getFunction = (host, callback) => {
  http.get(host, (response) => {
    let result = '';
    response.on('data', (data) => {
      result += data.toString();
    });
    response.on('end', () => {
      // console.log(result.length);
      // console.log(result);
      callback(result);
    });
    response.on('error', () => {
      callback(null);
    });
  });
};

module.exports = getFunction;
