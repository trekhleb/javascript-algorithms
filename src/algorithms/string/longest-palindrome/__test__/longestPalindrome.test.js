import longestPalindrome from '../longestPalindrome';

describe('longestPalindrome', () => {
  it('should find longest palindrome in a string', () => {
    expect(longestPalindrome('', '')).toBe('');
    expect('ABC'.split('')).toContain(longestPalindrome('ABC'));
    expect(longestPalindrome('BANANA')).toBe('ANANA');
    expect(['BAB', 'ABA']).toContain(longestPalindrome('BABCABA'));
    expect(longestPalindrome('racecar')).toEqual('racecar');
  });

  it('should handle unicode correctly', () => {
    expect(longestPalindrome('𐌵𐌵𐌵**ABC')).toBe('𐌵𐌵𐌵');
    expect(longestPalindrome('𐌵𐌵***A')).toBe('***');
  });
});
