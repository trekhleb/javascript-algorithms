import leastCommonMultiple, { leastCommonMultipleArray } from '../leastCommonMultiple';

describe('leastCommonMultiple', () => {
  it('should find least common multiple', () => {
    expect(leastCommonMultiple(0, 0)).toBe(0);
    expect(leastCommonMultiple(1, 0)).toBe(0);
    expect(leastCommonMultiple(0, 1)).toBe(0);
    expect(leastCommonMultiple(4, 6)).toBe(12);
    expect(leastCommonMultiple(6, 21)).toBe(42);
    expect(leastCommonMultiple(7, 2)).toBe(14);
    expect(leastCommonMultiple(3, 5)).toBe(15);
    expect(leastCommonMultiple(7, 3)).toBe(21);
    expect(leastCommonMultiple(1000000, 2)).toBe(1000000);
    expect(leastCommonMultiple(-9, -18)).toBe(18);
    expect(leastCommonMultiple(-7, -9)).toBe(63);
    expect(leastCommonMultiple(-7, 9)).toBe(63);
  });

  it('should find least common multiple of an array', () => {
    expect(leastCommonMultipleArray([4, 6])).toBe(12);
    expect(leastCommonMultipleArray([6, 21, 14])).toBe(42);
    expect(leastCommonMultipleArray([3, 5, 7])).toBe(105);
    expect(leastCommonMultipleArray([2, 3, 5, 7, 11])).toBe(2310);
    expect(leastCommonMultipleArray([1000000, 2, 3])).toBe(3000000);
    expect(leastCommonMultipleArray([-9, -18, -27])).toBe(54);
    expect(leastCommonMultipleArray([7, -9, 3])).toBe(63);
  });
});
