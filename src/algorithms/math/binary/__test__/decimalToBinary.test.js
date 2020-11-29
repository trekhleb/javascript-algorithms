import decimalToBinary from '../decimalToBinary';

describe('Convert a decimal number to binary number', () => {
  it('should return decimal number', () => {
    expect(decimalToBinary(0)).toBe(0);
    expect(decimalToBinary(1)).toBe(1);
    expect(decimalToBinary(5)).toBe(101);
    expect(decimalToBinary(10)).toBe(1010);
    expect(decimalToBinary(853)).toBe(1101010101);
    expect(decimalToBinary(1010)).toBe(1111110010);
    expect(decimalToBinary(12345)).toBe(11000000111001);
    expect(decimalToBinary('abc1230')).toBe('Enter a valid decimal number');
  });
});
