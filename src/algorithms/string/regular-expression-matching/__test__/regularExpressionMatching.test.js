import regularExpressionMatching from '../regularExpressionMatching';

describe('regularExpressionMatching', () => {
  it('should match regular expressions in a string', () => {
    expect(regularExpressionMatching('', '')).toBeTruthy();
    expect(regularExpressionMatching('a', 'a')).toBeTruthy();
    expect(regularExpressionMatching('aa', 'aa')).toBeTruthy();
    expect(regularExpressionMatching('aab', 'aab')).toBeTruthy();
    expect(regularExpressionMatching('aab', 'aa.')).toBeTruthy();
    expect(regularExpressionMatching('aab', '.a.')).toBeTruthy();
    expect(regularExpressionMatching('aab', '...')).toBeTruthy();
    expect(regularExpressionMatching('a', 'a*')).toBeTruthy();
    expect(regularExpressionMatching('aaa', 'a*')).toBeTruthy();
    expect(regularExpressionMatching('aaab', 'a*b')).toBeTruthy();
    expect(regularExpressionMatching('aaabb', 'a*b*')).toBeTruthy();
    expect(regularExpressionMatching('aaabb', 'a*b*c*')).toBeTruthy();
    expect(regularExpressionMatching('', 'a*')).toBeTruthy();
    expect(regularExpressionMatching('xaabyc', 'xa*b.c')).toBeTruthy();
    expect(regularExpressionMatching('aab', 'c*a*b*')).toBeTruthy();
    expect(regularExpressionMatching('mississippi', 'mis*is*.p*.')).toBeTruthy();
    expect(regularExpressionMatching('ab', '.*')).toBeTruthy();

    expect(regularExpressionMatching('', 'a')).toBeFalsy();
    expect(regularExpressionMatching('a', '')).toBeFalsy();
    expect(regularExpressionMatching('aab', 'aa')).toBeFalsy();
    expect(regularExpressionMatching('aab', 'baa')).toBeFalsy();
    expect(regularExpressionMatching('aabc', '...')).toBeFalsy();
    expect(regularExpressionMatching('aaabbdd', 'a*b*c*')).toBeFalsy();
    expect(regularExpressionMatching('mississippi', 'mis*is*p*.')).toBeFalsy();
    expect(regularExpressionMatching('ab', 'a*')).toBeFalsy();
    expect(regularExpressionMatching('abba', 'a*b*.c')).toBeFalsy();
    expect(regularExpressionMatching('abba', '.*c')).toBeFalsy();
  });
});
