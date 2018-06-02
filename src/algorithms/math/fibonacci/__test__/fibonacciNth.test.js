import fibonacciNth from '../fibonacciNth';

describe('fibonacciNth', () => {
  it('should calculate fibonacci correctly', () => {
    expect(fibonacciNth(1)).toBe(1);
    expect(fibonacciNth(2)).toBe(1);
    expect(fibonacciNth(3)).toBe(2);
    expect(fibonacciNth(4)).toBe(3);
    expect(fibonacciNth(5)).toBe(5);
    expect(fibonacciNth(6)).toBe(8);
    expect(fibonacciNth(7)).toBe(13);
    expect(fibonacciNth(8)).toBe(21);
    expect(fibonacciNth(20)).toBe(6765);
  });
});
