import combinationSum from '../combinationSum';

describe('combinationSum', () => {
  it('should find all combinations with specific sum', () => {
    expect(combinationSum([1], 100000)).toHaveLength(1);

    expect(
      combinationSum([1], 100000)[0]
        .every(el => el === 1),
    )
      .toBe(true);

    expect(combinationSum([0, 2], 6)).toEqual([[2, 2, 2]]);

    expect(combinationSum([1], 4)).toEqual([
      [1, 1, 1, 1],
    ]);

    expect(combinationSum([2, 3, 6, 7], 7)).toEqual([
      [2, 2, 3],
      [7],
    ]);

    expect(combinationSum([2, 3, 5], 8)).toEqual([
      [2, 2, 2, 2],
      [2, 3, 3],
      [3, 5],
    ]);

    expect(combinationSum([2, 5], 3)).toEqual([]);

    expect(combinationSum([], 3)).toEqual([]);
  });
});
