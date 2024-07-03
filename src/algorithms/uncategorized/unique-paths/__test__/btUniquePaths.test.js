import btUniquePaths from '../btUniquePaths';

describe('btUniquePaths', () => {
  it('should find the number of unique paths on board', () => {
    expect(btUniquePaths(3, 2)).toBe(3);
    expect(btUniquePaths(7, 3)).toBe(28);
    expect(btUniquePaths(3, 7)).toBe(28);
    expect(btUniquePaths(10, 10)).toBe(48620);
    expect(btUniquePaths(100, 1)).toBe(1);
    expect(btUniquePaths(1, 100)).toBe(1);
  });
});
