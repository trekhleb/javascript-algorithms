import palindromeCheck from '../palindromeCheck';

describe('palindromeCheck', () => {
  it('should return whether or not the string is a palindrome', () => {
    expect(palindromeCheck('a')).toBe(true);
    expect(palindromeCheck('pop')).toBe(true);
    expect(palindromeCheck('deed')).toBe(true);
    expect(palindromeCheck('kayak')).toBe(true);
    expect(palindromeCheck('racecar')).toBe(true);
    expect(palindromeCheck('rad')).toBe(false);
    expect(palindromeCheck('dodo')).toBe(false);
    expect(palindromeCheck('polo')).toBe(false);
  });
});
