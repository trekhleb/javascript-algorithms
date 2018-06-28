import factorialRecursive from '../factorialRecursive';

describe('factorialRecursive', () => {
  it('should calculate factorial', () => {
    expect(factorialRecursive(0)).toBe(1);
    expect(factorialRecursive(1)).toBe(1);
    expect(factorialRecursive(5)).toBe(120);
    expect(factorialRecursive(8)).toBe(40320);
    expect(factorialRecursive(10)).toBe(3628800);
  });
});
