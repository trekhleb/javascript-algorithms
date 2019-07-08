import decimalToBinary from '../decimalToBinary';

describe('Convert a decimal number to binary number', () => {
  it('should return decimal number', () => {
    expect(decimalToBinary(5)).toBe(101);
    expect(decimalToBinary(853)).toBe(1101010101);
    expect(decimalToBinary('sdsf')).toBe('Enter a valid decimal number');
  });
});
