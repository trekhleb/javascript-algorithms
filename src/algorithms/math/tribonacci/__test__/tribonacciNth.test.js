import tribonacciNth from '../tribonacciNth';

describe('tribonacciNth', () => {
  it('should calculate tribonacci correctly', () => {
    expect(tribonacciNth(1)).toBe(0);
    expect(tribonacciNth(2)).toBe(1);
    expect(tribonacciNth(3)).toBe(1);
    expect(tribonacciNth(4)).toBe(2);
    expect(tribonacciNth(5)).toBe(4);
    expect(tribonacciNth(6)).toBe(7);
    expect(tribonacciNth(7)).toBe(13);
    expect(tribonacciNth(8)).toBe(24);
    expect(tribonacciNth(20)).toBe(35890);
    expect(tribonacciNth(30)).toBe(15902591);
    expect(tribonacciNth(50)).toBe(3122171529233);
  });
});
