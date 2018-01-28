const arraySum = require('./index');

describe('Testing inputs', () => {
  test('Passing 1,2 , expected 3', () => {
    expect(arraySum(1, 2)).toEqual(3);
  });

  test('Passing decimal 1.2 and 3.4 expected 4.6 ', () => {
    expect(arraySum(1.2, 3.4)).toEqual(4.6);
  });

  test('Passing negative decimal -1.2 and -3.4 expected 4.6 ', () => {
    expect(arraySum(-1.2, -3.4)).toEqual(-4.6);
  });
});

describe('Testing empty array', () => {
  test('Passing empty expected 0', () => {
    expect(arraySum()).toEqual(0);
  });
});
