import longestCommonSubsequence from '../longestCommonSubsequenceRecursive';

describe('longestCommonSubsequenceRecursive', () => {
  it('should distinguish memoized suffixes containing colons', () => {
    expect(longestCommonSubsequence('::a:a', 'aa:::')).toBe(':::');
    expect(longestCommonSubsequence('aa:::', '::a:a')).toBe(':::');
  });

  it('should reuse empty subsequences instead of expanding them repeatedly', () => {
    const substring = jest.spyOn(String.prototype, 'substring');
    let result;
    let calls;
    try {
      result = longestCommonSubsequence('a'.repeat(8), 'b'.repeat(8));
      calls = substring.mock.calls.length;
    } finally {
      substring.mockRestore();
    }

    expect(result).toBe('');
    // There are 8 * 8 non-empty suffix pairs, with two branches per pair.
    expect(calls).toBeLessThanOrEqual(2 * 8 * 8);
  });

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
