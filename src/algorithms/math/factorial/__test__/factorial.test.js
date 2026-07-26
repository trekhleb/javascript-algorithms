import factorial from '../factorial';

describe('factorial', () => {
  it('should calculate factorial', () => {
    expect(factorial(0)).toBe(1);
    expect(factorial(1)).toBe(1);
    expect(factorial(5)).toBe(120);
    expect(factorial(8)).toBe(40320);
    expect(factorial(10)).toBe(3628800);
  });

  it('should throw an error for negative numbers', () => {
    const negativeFactorial = () => {
      factorial(-1);
    };
    expect(negativeFactorial).toThrow('Factorial is not defined for negative numbers');

    const negativeFactorial2 = () => {
      factorial(-5);
    };
    expect(negativeFactorial2).toThrow('Factorial is not defined for negative numbers');
  });
});
