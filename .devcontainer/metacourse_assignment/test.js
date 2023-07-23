// timesTwo.test.js

const timesTwo = require('./timesTwo');

describe('timesTwo function', () => {
  it('returns the number times 2', () => {
    const inputNumber = 10;
    const expectedResult = 20;

    const result = timesTwo(inputNumber);

    expect(result).toEqual(expectedResult);
  });
});
