import dpUniquePaths from '../dpUniquePaths';

describe('dpUniquePaths', () => {
  it('should find the number of unique paths on board', () => {
    expect(dpUniquePaths(3, 2)).toBe(3);
    expect(dpUniquePaths(7, 3)).toBe(28);
    expect(dpUniquePaths(3, 7)).toBe(28);
    expect(dpUniquePaths(10, 10)).toBe(48620);
    expect(dpUniquePaths(100, 1)).toBe(1);
    expect(dpUniquePaths(1, 100)).toBe(1);
  });
});
