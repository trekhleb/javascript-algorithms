import backtrackingJumpGame from '../backtrackingJumpGame';

describe('backtrackingJumpGame', () => {
  it('should solve Jump Game problem in backtracking manner', () => {
    expect(backtrackingJumpGame([1, 0])).toBeTruthy();
    expect(backtrackingJumpGame([100, 0])).toBeTruthy();
    expect(backtrackingJumpGame([2, 3, 1, 1, 4])).toBeTruthy();
    expect(backtrackingJumpGame([1, 1, 1, 1, 1])).toBeTruthy();
    expect(backtrackingJumpGame([1, 1, 1, 10, 1])).toBeTruthy();
    expect(backtrackingJumpGame([1, 5, 2, 1, 0, 2, 0])).toBeTruthy();

    expect(backtrackingJumpGame([1, 0, 1])).toBeFalsy();
    expect(backtrackingJumpGame([3, 2, 1, 0, 4])).toBeFalsy();
    expect(backtrackingJumpGame([0, 0, 0, 0, 0])).toBeFalsy();
    expect(backtrackingJumpGame([5, 4, 3, 2, 1, 0, 0])).toBeFalsy();
  });
});
