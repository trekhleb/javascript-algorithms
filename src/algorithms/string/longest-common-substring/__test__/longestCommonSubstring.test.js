import longestCommonSubstring from '../longestCommonSubstring';

describe('longestCommonSubstring', () => {
  it('should find longest common substring between two strings', () => {
    expect(longestCommonSubstring('', '')).toBe('');
    expect(longestCommonSubstring('ABC', '')).toBe('');
    expect(longestCommonSubstring('', 'ABC')).toBe('');
    expect(longestCommonSubstring('ABABC', 'BABCA')).toBe('BABC');
    expect(longestCommonSubstring('BABCA', 'ABCBA')).toBe('ABC');
  });
});
