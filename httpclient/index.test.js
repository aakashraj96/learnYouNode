const http = require('http');
const testFun = require('./index');

const server = http.createServer((req, res) => {
  res.end('Hello');
});
server.listen(8000);
server.close();

describe('Testing get request by creating server', () => {
  test('Passing http://127.0.0.1:8000 and expecting Hello', () => {
    function callback(data) {
      expect(data).toEqual('Hello');
    }
    testFun('http://127.0.0.1:8000', callback);
  });
  test('Wrong server host http://127.0.0.1:8001 and expecting Hello', () => {
    function callback(data) {
      expect(data).toEqual(null);
    }
    testFun('http://127.0.0.1:8001', callback);
  });
});
