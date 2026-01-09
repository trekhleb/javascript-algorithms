import leastCommonMultipleArray from '../lcm-array.js';

describe('leastCommonMultiple', () => {
  it('should find least common multiple', () => {
    expect(() => leastCommonMultipleArray([])).toThrow(Error('Array is empty'));
    expect(leastCommonMultipleArray([0, 0])).toBe(0);
    expect(leastCommonMultipleArray([1, 0])).toBe(0);
    expect(leastCommonMultipleArray([0, 1])).toBe(0);
    expect(leastCommonMultipleArray([4, 6])).toBe(12);
    expect(leastCommonMultipleArray([6, 21])).toBe(42);
    expect(leastCommonMultipleArray([7, 2])).toBe(14);
    expect(leastCommonMultipleArray([3, 5])).toBe(15);
    expect(leastCommonMultipleArray([7, 3])).toBe(21);
    expect(leastCommonMultipleArray([1000000, 2])).toBe(1000000);
    expect(leastCommonMultipleArray([-9, -18])).toBe(18);
    expect(leastCommonMultipleArray([-7, -9])).toBe(63);
    expect(leastCommonMultipleArray([-7, 9])).toBe(63);
    expect(leastCommonMultipleArray([2, 3, 5])).toBe(30);
    expect(leastCommonMultipleArray([2, 4, 5])).toBe(20);
    expect(leastCommonMultipleArray([2, 4, 6, 8])).toBe(24);
    expect(leastCommonMultipleArray([2, 4, 6, 7, 8])).toBe(168);
    expect(leastCommonMultipleArray([2, 3, 5, 7, 11, 13, 17, 19])).toBe(
      9699690
    );
  });
});
