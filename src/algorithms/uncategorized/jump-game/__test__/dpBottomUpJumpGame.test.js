import dpBottomUpJumpGame from '../dpBottomUpJumpGame';

describe('dpBottomUpJumpGame', () => {
  it('should solve Jump Game problem in bottom-up dynamic programming manner', () => {
    expect(dpBottomUpJumpGame([1, 0])).toBe(true);
    expect(dpBottomUpJumpGame([100, 0])).toBe(true);
    expect(dpBottomUpJumpGame([2, 3, 1, 1, 4])).toBe(true);
    expect(dpBottomUpJumpGame([1, 1, 1, 1, 1])).toBe(true);
    expect(dpBottomUpJumpGame([1, 1, 1, 10, 1])).toBe(true);
    expect(dpBottomUpJumpGame([1, 5, 2, 1, 0, 2, 0])).toBe(true);

    expect(dpBottomUpJumpGame([1, 0, 1])).toBe(false);
    expect(dpBottomUpJumpGame([3, 2, 1, 0, 4])).toBe(false);
    expect(dpBottomUpJumpGame([0, 0, 0, 0, 0])).toBe(false);
    expect(dpBottomUpJumpGame([5, 4, 3, 2, 1, 0, 0])).toBe(false);
  });
});
