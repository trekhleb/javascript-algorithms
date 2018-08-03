import fibonacciLogn from '../fibonacciLogn';

describe('fibonacciLogn', () => {
  it('should calculate fibonacci correctly', () => {
    expect(fibonacciLogn(1)).toBe(1);
    expect(fibonacciLogn(2)).toBe(1);
    expect(fibonacciLogn(3)).toBe(2);
    expect(fibonacciLogn(4)).toBe(3);
    expect(fibonacciLogn(5)).toBe(5);
    expect(fibonacciLogn(6)).toBe(8);
    expect(fibonacciLogn(7)).toBe(13);
    expect(fibonacciLogn(8)).toBe(21);
    expect(fibonacciLogn(20)).toBe(6765);
    expect(fibonacciLogn(78)).toBe(8944394323791464);
    // this is the largest representable integer we can test
    // fib(79) results is incorrectly 14472334024676220, it should be 14472334024676221
  });
});
