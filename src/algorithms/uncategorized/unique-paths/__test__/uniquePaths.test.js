import uniquePaths from '../uniquePaths';

describe('uniquePaths', () => {
  it('should find the number of unique paths on board', () => {
    expect(uniquePaths(3, 2)).toBe(3);
    expect(uniquePaths(7, 3)).toBe(28);
    expect(uniquePaths(3, 7)).toBe(28);
    expect(uniquePaths(10, 10)).toBe(48620);
    expect(uniquePaths(100, 1)).toBe(1);
    expect(uniquePaths(1, 100)).toBe(1);
  });
});
