const readFileAsync = require('./index');

describe('Passing file paths', () => {
  test('/Users/aakashraju/learnyounode/myfirstio/test.txt  Expected output: 4', () => {
    expect(readFileAsync('/Users/aakashraju/learnyounode/myfirstio/test.txt')).toEqual(4);
  });

  test(' Empty File /Users/aakashraju/learnyounode/myfirstio/test2.txt  Expected output: 0', () => {
    expect(readFileAsync('/Users/aakashraju/learnyounode/myfirstio/test2.txt')).toEqual(0);
  });
});
