import palindrome from '../palindrome';

describe('palindrome', () => {
  it('should return true if word is a palindrome', () => {
    expect(palindrome('racecar')).toBe(true);
    expect(palindrome('car')).toBe(false);
  });
});
