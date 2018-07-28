import greedyJumpGame from '../greedyJumpGame';

describe('greedyJumpGame', () => {
  it('should solve Jump Game problem in greedy manner', () => {
    expect(greedyJumpGame([1, 0])).toBe(true);
    expect(greedyJumpGame([100, 0])).toBe(true);
    expect(greedyJumpGame([2, 3, 1, 1, 4])).toBe(true);
    expect(greedyJumpGame([1, 1, 1, 1, 1])).toBe(true);
    expect(greedyJumpGame([1, 1, 1, 10, 1])).toBe(true);
    expect(greedyJumpGame([1, 5, 2, 1, 0, 2, 0])).toBe(true);

    expect(greedyJumpGame([1, 0, 1])).toBe(false);
    expect(greedyJumpGame([3, 2, 1, 0, 4])).toBe(false);
    expect(greedyJumpGame([0, 0, 0, 0, 0])).toBe(false);
    expect(greedyJumpGame([5, 4, 3, 2, 1, 0, 0])).toBe(false);
  });
});
