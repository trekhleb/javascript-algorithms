import miniMaxSum from '../miniMaxSum';

describe('miniMaxSum', () => {
  it('should calculate miniMaxSum', () => {
    expect(miniMaxSum([1, 3, 5, 7, 9])).toStrictEqual([16, 24]);
    expect(miniMaxSum([1, 2, 3, 4, 5])).toStrictEqual([10, 14]);
    expect(miniMaxSum([-1, -2, 3, 4, 5])).toStrictEqual([4, 11]);
    expect(miniMaxSum([0, 1, 2, 3, 4, 5])).toStrictEqual([10, 15]);
    expect(miniMaxSum([])).toStrictEqual([null, null]);
    expect(miniMaxSum(12)).toStrictEqual([null, null]);
    expect(miniMaxSum(null)).toStrictEqual([null, null]);
  });
});