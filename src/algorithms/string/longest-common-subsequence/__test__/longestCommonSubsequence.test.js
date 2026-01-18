import longestCommonSubsequence from '../longestCommonSubsequence';

describe('longestCommonSubsequence', () => {
  it('should find LCS of two strings', () => {
    expect(longestCommonSubsequence('', '')).toBe('');
    expect(longestCommonSubsequence('ABC', '')).toBe('');
    expect(longestCommonSubsequence('', 'ABC')).toBe('');
    expect(longestCommonSubsequence('A', 'A')).toBe('A');
    expect(longestCommonSubsequence('ABC', 'ABC')).toBe('ABC');
    expect(longestCommonSubsequence('ABCDGH', 'AEDFHR')).toBe('ADH');
    expect(longestCommonSubsequence('AGGTAB', 'GXTXAYB')).toBe('GTAB');
    expect(longestCommonSubsequence('sea', 'eat')).toBe('ea');
    expect(longestCommonSubsequence('algorithms', 'logarithm')).toBe('lorithm');
  });

  it('should handle strings with no common subsequence', () => {
    expect(longestCommonSubsequence('ABC', 'DEF')).toBe('');
    expect(longestCommonSubsequence('XYZ', 'PQR')).toBe('');
  });

  it('should handle strings where one is subsequence of another', () => {
    expect(longestCommonSubsequence('ABCDEF', 'ACE')).toBe('ACE');
    expect(longestCommonSubsequence('ACE', 'ABCDEF')).toBe('ACE');
  });

  it('should handle repeated characters', () => {
    expect(longestCommonSubsequence('AAA', 'AA')).toBe('AA');
    expect(longestCommonSubsequence('AAAA', 'AA')).toBe('AA');
    expect(longestCommonSubsequence('ABABA', 'BABA')).toBe('BABA');
  });

  it('should handle case sensitivity', () => {
    expect(longestCommonSubsequence('ABC', 'abc')).toBe('');
    expect(longestCommonSubsequence('Hello', 'hello')).toBe('ello');
  });

  it('should handle longer strings', () => {
    expect(longestCommonSubsequence('ABCBDAB', 'BDCABA')).toBe('BDAB');
    expect(longestCommonSubsequence('programming', 'gaming')).toBe('gaming');
    expect(longestCommonSubsequence('dynamic', 'programming')).toBe('ami');
  });
});
