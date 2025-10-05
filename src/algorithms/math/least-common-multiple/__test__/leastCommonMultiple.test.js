import leastCommonMultiple from '../leastCommonMultiple';

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
});
