import knuthMorrisPratt from '../knuthMorrisPratt';

describe('knuthMorrisPratt', () => {
  it('should find word position in given text', () => {
    expect(knuthMorrisPratt('abcbcglx', 'abca')).toBe(-1);
    expect(knuthMorrisPratt('abcbcglx', 'bcgl')).toBe(3);
    expect(knuthMorrisPratt('abcxabcdabxabcdabcdabcy', 'abcdabcy')).toBe(15);
    expect(knuthMorrisPratt('abcxabcdabxabcdabcdabcy', 'abcdabca')).toBe(-1);
    expect(knuthMorrisPratt('abcxabcdabxaabcdabcabcdabcdabcy', 'abcdabca')).toBe(12);
    expect(knuthMorrisPratt('abcxabcdabxaabaabaaaabcdabcdabcy', 'aabaabaaa')).toBe(11);
  });
});
