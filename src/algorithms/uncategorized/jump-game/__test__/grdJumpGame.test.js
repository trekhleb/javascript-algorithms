import grdJumpGame from '../grdJumpGame';

describe('grdJumpGame', () => {
  it('should solve Jump Game problem in greedy manner', () => {
    expect(grdJumpGame([1, 0])).toBeTruthy();
    expect(grdJumpGame([100, 0])).toBeTruthy();
    expect(grdJumpGame([2, 3, 1, 1, 4])).toBeTruthy();
    expect(grdJumpGame([1, 1, 1, 1, 1])).toBeTruthy();
    expect(grdJumpGame([1, 5, 2, 1, 0, 2, 0])).toBeTruthy();

    expect(grdJumpGame([1, 0, 1])).toBeFalsy();
    expect(grdJumpGame([3, 2, 1, 0, 4])).toBeFalsy();
    expect(grdJumpGame([0, 0, 0, 0, 0])).toBeFalsy();
    expect(grdJumpGame([5, 4, 3, 2, 1, 0, 0])).toBeFalsy();
  });
});
