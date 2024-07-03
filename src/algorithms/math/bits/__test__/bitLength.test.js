import bitLength from '../bitLength';

describe('bitLength', () => {
  it('should calculate number of bits that the number is consists of', () => {
    expect(bitLength(0b0)).toBe(0);
    expect(bitLength(0b1)).toBe(1);
    expect(bitLength(0b01)).toBe(1);
    expect(bitLength(0b101)).toBe(3);
    expect(bitLength(0b0101)).toBe(3);
    expect(bitLength(0b10101)).toBe(5);
    expect(bitLength(0b11110101)).toBe(8);
    expect(bitLength(0b00011110101)).toBe(8);
  });
});
