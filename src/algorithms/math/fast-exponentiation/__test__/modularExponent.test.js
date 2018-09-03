import modularExponent from '../modularExponent';

describe('modularExponent', () => {
  it('should calculate power using fast exponentiation algorithm', () => {
    expect(modularExponent(5, 5, 23)).toBe(20);
  });
  it('should calculate power using fast exponentiation algorithm', () => {
    expect(modularExponent(123, 4, 10001)).toBe(3755);
  });
  it('should calculate power using fast exponentiation algorithm', () => {
    expect(modularExponent(2, 15, 13)).toBe(8);
  });
  it('should calculate power using fast exponentiation algorithm', () => {
    expect(modularExponent(43, 3, 1000000007)).toBe(79507);
  });
});
