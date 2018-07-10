import greedyJumpGame from '../greedyJumpGame';

describe('greedyJumpGame', () => {
  it('should solve Jump Game problem in greedy manner', () => {
    expect(greedyJumpGame([1, 0])).toBeTruthy();
    expect(greedyJumpGame([100, 0])).toBeTruthy();
    expect(greedyJumpGame([2, 3, 1, 1, 4])).toBeTruthy();
    expect(greedyJumpGame([1, 1, 1, 1, 1])).toBeTruthy();
    expect(greedyJumpGame([1, 1, 1, 10, 1])).toBeTruthy();
    expect(greedyJumpGame([1, 5, 2, 1, 0, 2, 0])).toBeTruthy();

    expect(greedyJumpGame([1, 0, 1])).toBeFalsy();
    expect(greedyJumpGame([3, 2, 1, 0, 4])).toBeFalsy();
    expect(greedyJumpGame([0, 0, 0, 0, 0])).toBeFalsy();
    expect(greedyJumpGame([5, 4, 3, 2, 1, 0, 0])).toBeFalsy();
  });
});
