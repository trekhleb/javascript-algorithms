import fibonacciMatriz from '../fibonacciMatriz';

describe('fibonacciMatriz', () => {
  it('should calculate fibonacci correctly', () => {
    expect(fibonacciMatriz(1)).toBe(1);
    expect(fibonacciMatriz(2)).toBe(1);
    expect(fibonacciMatriz(3)).toBe(2);
    expect(fibonacciMatriz(4)).toBe(3);
    expect(fibonacciMatriz(5)).toBe(5);
    expect(fibonacciMatriz(6)).toBe(8);
    expect(fibonacciMatriz(7)).toBe(13);
    expect(fibonacciMatriz(8)).toBe(21);
    expect(fibonacciMatriz(20)).toBe(6765);
    expect(fibonacciMatriz(30)).toBe(832040);
    expect(fibonacciMatriz(50)).toBe(12586269025);
    expect(fibonacciMatriz(70)).toBe(190392490709135);
  });
});
