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
