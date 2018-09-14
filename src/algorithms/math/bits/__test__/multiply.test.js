import multiply from '../multiply';

describe('multiply', () => {
  it('should multiply two numbers', () => {
    expect(multiply(0, 0)).toBe(0);
    expect(multiply(2, 0)).toBe(0);
    expect(multiply(0, 2)).toBe(0);
    expect(multiply(1, 2)).toBe(2);
    expect(multiply(2, 1)).toBe(2);
    expect(multiply(6, 6)).toBe(36);
    expect(multiply(-2, 4)).toBe(-8);
    expect(multiply(4, -2)).toBe(-8);
    expect(multiply(-4, -4)).toBe(16);
    expect(multiply(4, -5)).toBe(-20);
    expect(multiply(2, 121)).toBe(242);
    expect(multiply(121, 2)).toBe(242);
  });
});
