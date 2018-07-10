import dpBottomUpJumpGame from '../dpBottomUpJumpGame';

describe('dpBottomUpJumpGame', () => {
  it('should solve Jump Game problem in bottom-up dynamic programming manner', () => {
    expect(dpBottomUpJumpGame([1, 0])).toBeTruthy();
    expect(dpBottomUpJumpGame([100, 0])).toBeTruthy();
    expect(dpBottomUpJumpGame([2, 3, 1, 1, 4])).toBeTruthy();
    expect(dpBottomUpJumpGame([1, 1, 1, 1, 1])).toBeTruthy();
    expect(dpBottomUpJumpGame([1, 1, 1, 10, 1])).toBeTruthy();
    expect(dpBottomUpJumpGame([1, 5, 2, 1, 0, 2, 0])).toBeTruthy();

    expect(dpBottomUpJumpGame([1, 0, 1])).toBeFalsy();
    expect(dpBottomUpJumpGame([3, 2, 1, 0, 4])).toBeFalsy();
    expect(dpBottomUpJumpGame([0, 0, 0, 0, 0])).toBeFalsy();
    expect(dpBottomUpJumpGame([5, 4, 3, 2, 1, 0, 0])).toBeFalsy();
  });
});
