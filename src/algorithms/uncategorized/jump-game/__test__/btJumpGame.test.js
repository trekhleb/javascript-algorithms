import btJumpGame from '../btJumpGame';

describe('btJumpGame', () => {
  it('should solve Jump Game problem in backtracking manner', () => {
    expect(btJumpGame([1, 0])).toBeTruthy();
    expect(btJumpGame([100, 0])).toBeTruthy();
    expect(btJumpGame([2, 3, 1, 1, 4])).toBeTruthy();
    expect(btJumpGame([1, 1, 1, 1, 1])).toBeTruthy();
    expect(btJumpGame([1, 1, 1, 10, 1])).toBeTruthy();
    expect(btJumpGame([1, 5, 2, 1, 0, 2, 0])).toBeTruthy();

    expect(btJumpGame([1, 0, 1])).toBeFalsy();
    expect(btJumpGame([3, 2, 1, 0, 4])).toBeFalsy();
    expect(btJumpGame([0, 0, 0, 0, 0])).toBeFalsy();
    expect(btJumpGame([5, 4, 3, 2, 1, 0, 0])).toBeFalsy();
  });
});
