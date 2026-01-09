import factorialRecursiveTCO from '../factorialRecursiveTCO';

describe('factorialRecursiveTCO', () => {
  it('should calculate factorial', () => {
    expect(factorialRecursiveTCO(0)).toBe(1);
    expect(factorialRecursiveTCO(1)).toBe(1);
    expect(factorialRecursiveTCO(5)).toBe(120);
    expect(factorialRecursiveTCO(8)).toBe(40320);
    expect(factorialRecursiveTCO(10)).toBe(3628800);
  });
});
