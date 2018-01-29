const testFun = require('./index');

describe('Passing file paths', () => {
  test('/Users/aakashraju/learnyounode/myfirstio/  Expected output: ["test.txt", "test2.txt"]', (done) => {
    function callback(data) {
      expect(data).toEqual(['test.txt', 'test2.txt']);
      done();
    }
    testFun('/Users/aakashraju/learnyounode/myfirstio/', 'txt', callback);
  });
});

describe('No files of that particular extension', () => {
  test('/Users/aakashraju/learnyounode/myfirstio/  Expected output: []', (done) => {
    function callback(data) {
      expect(data).toEqual([]);
      done();
    }
    testFun('/Users/aakashraju/learnyounode/myfirstio/', 'png', callback);
  });
});

describe('Incorrect path', () => {
  test('/Users/aakashraju/learnyounode/myfirstio2/  Expected output: null', (done) => {
    function callback(data) {
      expect(data).toEqual(null);
      done();
    }
    testFun('/Users/aakashraju/learnyounode/myfirstio2/', 'png', callback);
  });
});
