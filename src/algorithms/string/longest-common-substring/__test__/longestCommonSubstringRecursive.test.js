import longestCommonSubstring from '../longestCommonSubstringRecursive';

describe('longestCommonSubstringRecursive', () => {
  it('should find longest common substring between two strings', () => {
    expect(longestCommonSubstring('', '')).toBe('');
    expect(longestCommonSubstring('ABC', '')).toBe('');
    expect(longestCommonSubstring('', 'ABC')).toBe('');
    expect(longestCommonSubstring('ABABC', 'BABCA')).toBe('BABC');
    expect(longestCommonSubstring('BABCA', 'ABCBA')).toBe('ABCA');
    expect(longestCommonSubstring('sea', 'eat')).toBe('ea');
    expect(longestCommonSubstring('algorithms', 'rithm')).toBe('rithm');
    expect(longestCommonSubstring(
      'Algorithms and data structures implemented in JavaScript',
      'Here you may find Algorithms and data structures that are implemented in JavaScript',
    )).toBe('Algorithms and data structures implemented in JavaScript');
  });
});
