import fastExponent from '../fastExponent';

describe('fastExponent', () => {
  it('should calculate power using fast exponentiation algorithm', () => {
    expect(fastExponent(5, 5)).toBe(3125);
  });
  it('should calculate power using fast exponentiation algorithm', () => {
    expect(fastExponent(123, 4)).toBe(228886641);
  });
  it('should calculate power using fast exponentiation algorithm', () => {
    expect(fastExponent(2, 15)).toBe(32768);
  });
  it('should calculate power using fast exponentiation algorithm', () => {
    expect(fastExponent(43, 3)).toBe(79507);
  });
});
