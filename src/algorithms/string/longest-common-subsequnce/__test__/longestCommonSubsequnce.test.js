import longestCommonSubsequnce from '../longestCommonSubsequnce';

describe('longestCommonSubsequnce', () => {
  it('should find longest common subsequence for two strings', () => {
    expect(longestCommonSubsequnce('', '')).toBe('');
    expect(longestCommonSubsequnce('', 'ABC')).toBe('');
    expect(longestCommonSubsequnce('ABC', '')).toBe('');
    expect(longestCommonSubsequnce('ABC', 'DEFG')).toBe('');
    expect(longestCommonSubsequnce('ABCDGH', 'AEDFHR')).toBe('ADH');
    expect(longestCommonSubsequnce('AGGTAB', 'GXTXAYB')).toBe('GTAB');
    expect(longestCommonSubsequnce('ABCDAF', 'ACBCF')).toBe('ABCF');
  });
});
