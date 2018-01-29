const testFun = require('./index');

describe('Passing file paths', () => {
  test('/Users/aakashraju/learnyounode/myfirstio/test.txt  Expected output: 4', (done) => {
    function callback(data) {
      expect(data).toBe(4);
      done();
    }
    testFun('/Users/aakashraju/learnyounode/myfirstio/test.txt', callback);
  });

  test('Empty file in /Users/aakashraju/learnyounode/myfirstio/test2.txt  Expected output: 0', (done) => {
    function callback(data) {
      expect(data).toBe(0);
      done();
    }
    testFun('/Users/aakashraju/learnyounode/myfirstio/test2.txt', callback);
  });
});

describe('File doesnt exist', () => {
  test('/Users/aakashraju/learnyounode/myfirstio/test3.txt  Expected output: null', (done) => {
    function callback(data) {
      expect(data).toBe(null);
      done();
    }
    testFun('/Users/aakashraju/learnyounode/myfirstio/test3.txt', callback);
  });
});
