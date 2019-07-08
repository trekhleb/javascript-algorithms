import binaryToDecimal from '../binaryToDecimal';

describe('Convert a binary number to decimal number', () => {
  it('should return decimal number', () => {
    expect(binaryToDecimal(101)).toBe(5);
    expect(binaryToDecimal(1101010101)).toBe(853);
    expect(binaryToDecimal(22323)).toBe('Enter the valid number');
  });
});
