const assert = require('assert');
const toUnixTimestamp = require('../../src/utils/toUnixTimestamp');

describe('utils/toUnixTimestamp.js', () => {
  describe('toUnixTimestamp(date)', () => {
    it('accepts one arguments', () => {
      const actual = toUnixTimestamp.length;
      const expected = 1;

      assert.equal(actual, expected);
    });

    it('returns a number', () => {
      const inputDate = new Date('25 October 1989, 01:20');
      const returnValue = toUnixTimestamp(inputDate);

      assert.equal(typeof returnValue, 'number');
    });

    it('does not modify the input argument', () => {
      const inputDate = new Date('25 October 1989, 01:20:19');
      const expected = inputDate.toString();

      toUnixTimestamp(inputDate);

      const actual = inputDate.toString();

      assert.equal(actual, expected);
    });

    it('returns the date as a unix timestamp', () => {
      const inputDate = new Date('25 October 1989, 01:20:19');
      const expected = 625278019;
      const actual = toUnixTimestamp(inputDate);

      assert.equal(actual, expected);
    });
  });
});
