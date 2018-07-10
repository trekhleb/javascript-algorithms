import dpTopDownJumpGame from '../dpTopDownJumpGame';

describe('dpTopDownJumpGame', () => {
  it('should solve Jump Game problem in top-down dynamic programming manner', () => {
    expect(dpTopDownJumpGame([1, 0])).toBeTruthy();
    expect(dpTopDownJumpGame([100, 0])).toBeTruthy();
    expect(dpTopDownJumpGame([2, 3, 1, 1, 4])).toBeTruthy();
    expect(dpTopDownJumpGame([1, 1, 1, 1, 1])).toBeTruthy();
    expect(dpTopDownJumpGame([1, 1, 1, 10, 1])).toBeTruthy();
    expect(dpTopDownJumpGame([1, 5, 2, 1, 0, 2, 0])).toBeTruthy();

    expect(dpTopDownJumpGame([1, 0, 1])).toBeFalsy();
    expect(dpTopDownJumpGame([3, 2, 1, 0, 4])).toBeFalsy();
    expect(dpTopDownJumpGame([0, 0, 0, 0, 0])).toBeFalsy();
    expect(dpTopDownJumpGame([5, 4, 3, 2, 1, 0, 0])).toBeFalsy();
  });
});
