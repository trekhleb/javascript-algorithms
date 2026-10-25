import { testCases16Bits, testCases32Bits, testCases64Bits } from '../testCases';
import { bitsToFloat16, bitsToFloat32, bitsToFloat64 } from '../bitsToFloat';

describe('bitsToFloat16', () => {
  it('should convert floating point binary bits to floating point decimal number', () => {
    for (let testCaseIndex = 0; testCaseIndex < testCases16Bits.length; testCaseIndex += 1) {
      const [decimal, binary] = testCases16Bits[testCaseIndex];
      const bits = binary.split('').map((bitString) => parseInt(bitString, 10));
      expect(bitsToFloat16(bits)).toBeCloseTo(decimal, 4);
    }
  });
});

describe('bitsToFloat32', () => {
  it('should convert floating point binary bits to floating point decimal number', () => {
    for (let testCaseIndex = 0; testCaseIndex < testCases32Bits.length; testCaseIndex += 1) {
      const [decimal, binary] = testCases32Bits[testCaseIndex];
      const bits = binary.split('').map((bitString) => parseInt(bitString, 10));
      expect(bitsToFloat32(bits)).toBeCloseTo(decimal, 7);
    }
  });
});

describe('bitsToFloat64', () => {
  it('should convert floating point binary bits to floating point decimal number', () => {
    for (let testCaseIndex = 0; testCaseIndex < testCases64Bits.length; testCaseIndex += 1) {
      const [decimal, binary] = testCases64Bits[testCaseIndex];
      const bits = binary.split('').map((bitString) => parseInt(bitString, 10));
      expect(bitsToFloat64(bits)).toBeCloseTo(decimal, 14);
    }
  });
});

describe('bitsToFloat special cases', () => {
  const binaryToBits = (binary) => binary.split('').map((bitString) => parseInt(bitString, 10));

  it('should convert all-zero bits to zero', () => {
    expect(bitsToFloat16(binaryToBits('0000000000000000'))).toBe(0);
    expect(bitsToFloat32(binaryToBits('00000000000000000000000000000000'))).toBe(0);
  });

  it('should convert subnormal numbers exactly', () => {
    // The smallest positive subnormal half-precision number: 2^(-14) * 2^(-10) = 2^(-24).
    expect(bitsToFloat16(binaryToBits('0000000000000001'))).toBe(2 ** -24);
    // A subnormal number with several fraction bits set: 2^(-14) * (2^(-1) + 2^(-2)).
    expect(bitsToFloat16(binaryToBits('0000001100000000'))).toBe((2 ** -14) * 0.75);
  });

  it('should convert all-ones exponent to Infinity or NaN', () => {
    expect(bitsToFloat16(binaryToBits('0111110000000000'))).toBe(Infinity);
    expect(bitsToFloat16(binaryToBits('1111110000000000'))).toBe(-Infinity);
    expect(bitsToFloat16(binaryToBits('0111110000000001'))).toBe(NaN);
    expect(bitsToFloat32(binaryToBits('01111111100000000000000000000000'))).toBe(Infinity);
  });
});
