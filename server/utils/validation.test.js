const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject non-string values', () => {
    var testText = 1234;
    expect(isRealString(testText)).toBe(false);
  });

  it('should reject strings with only spaces', () => {
    var testText = '       ';
    expect(isRealString(testText)).toBe(false);
  });

  it('should accept string text', () => {
    var testText = ' test       ';
    expect(isRealString(testText)).toBe(true);
    });


});
