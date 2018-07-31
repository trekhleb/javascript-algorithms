import regularExpressionMatching from '../regularExpressionMatching';

describe('regularExpressionMatching', () => {
  it('should match regular expressions in a string', () => {
    expect(regularExpressionMatching('', '')).toBe(true);
    expect(regularExpressionMatching('a', 'a')).toBe(true);
    expect(regularExpressionMatching('aa', 'aa')).toBe(true);
    expect(regularExpressionMatching('aab', 'aab')).toBe(true);
    expect(regularExpressionMatching('aab', 'aa.')).toBe(true);
    expect(regularExpressionMatching('aab', '.a.')).toBe(true);
    expect(regularExpressionMatching('aab', '...')).toBe(true);
    expect(regularExpressionMatching('a', 'a*')).toBe(true);
    expect(regularExpressionMatching('aaa', 'a*')).toBe(true);
    expect(regularExpressionMatching('aaab', 'a*b')).toBe(true);
    expect(regularExpressionMatching('aaabb', 'a*b*')).toBe(true);
    expect(regularExpressionMatching('aaabb', 'a*b*c*')).toBe(true);
    expect(regularExpressionMatching('', 'a*')).toBe(true);
    expect(regularExpressionMatching('xaabyc', 'xa*b.c')).toBe(true);
    expect(regularExpressionMatching('aab', 'c*a*b*')).toBe(true);
    expect(regularExpressionMatching('mississippi', 'mis*is*.p*.')).toBe(true);
    expect(regularExpressionMatching('ab', '.*')).toBe(true);

    expect(regularExpressionMatching('', 'a')).toBe(false);
    expect(regularExpressionMatching('a', '')).toBe(false);
    expect(regularExpressionMatching('aab', 'aa')).toBe(false);
    expect(regularExpressionMatching('aab', 'baa')).toBe(false);
    expect(regularExpressionMatching('aabc', '...')).toBe(false);
    expect(regularExpressionMatching('aaabbdd', 'a*b*c*')).toBe(false);
    expect(regularExpressionMatching('mississippi', 'mis*is*p*.')).toBe(false);
    expect(regularExpressionMatching('ab', 'a*')).toBe(false);
    expect(regularExpressionMatching('abba', 'a*b*.c')).toBe(false);
    expect(regularExpressionMatching('abba', '.*c')).toBe(false);
  });
});
