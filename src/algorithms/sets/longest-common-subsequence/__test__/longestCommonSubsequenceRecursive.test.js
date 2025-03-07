import longestCommonSubsequence from '../longestCommonSubsequenceRecursive';

describe('longestCommonSubsequenceRecursive', () => {
  it('should find longest common substring between two strings', () => {
    expect(longestCommonSubsequence('', '')).toBe('');
    expect(longestCommonSubsequence('ABC', '')).toBe('');
    expect(longestCommonSubsequence('', 'ABC')).toBe('');
    expect(longestCommonSubsequence('ABABC', 'BABCA')).toBe('BABC');
    expect(longestCommonSubsequence('BABCA', 'ABCBA')).toBe('ABCA');
    expect(longestCommonSubsequence('sea', 'eat')).toBe('ea');
    expect(longestCommonSubsequence('algorithms', 'rithm')).toBe('rithm');
    expect(longestCommonSubsequence(
      'Algorithms and data structures implemented in JavaScript',
      'Here you may find Algorithms and data structures that are implemented in JavaScript',
    )).toBe('Algorithms and data structures implemented in JavaScript');
  });
});
