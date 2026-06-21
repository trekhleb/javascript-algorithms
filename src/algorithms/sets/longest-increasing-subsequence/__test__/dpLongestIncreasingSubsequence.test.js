import dpLongestIncreasingSubsequence from '../dpLongestIncreasingSubsequence';

describe('dpLongestIncreasingSubsequence', () => {
  it('should find longest increasing subsequence', () => {
    expect(dpLongestIncreasingSubsequence([
      9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
    ])).toStrictEqual([9]);

    expect(dpLongestIncreasingSubsequence([
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    ])).toStrictEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

    expect(dpLongestIncreasingSubsequence([
      3, 4, -1, 0, 6, 2, 3,
    ])).toStrictEqual([-1, 0, 2, 3]);

    expect(dpLongestIncreasingSubsequence([
      0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 13, 3, 11, 7, 15,
    ])).toStrictEqual([0, 2, 6, 9, 11, 15]);
  });
});
