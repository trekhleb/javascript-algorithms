import rabinKarp from '../rabinKarp';

describe('rabinKarp', () => {
  it('should find substring in a string', () => {
    expect(rabinKarp('', '')).toBe(0);
    expect(rabinKarp('a', '')).toBe(0);
    expect(rabinKarp('a', 'a')).toBe(0);
    expect(rabinKarp('ab', 'b')).toBe(1);
    expect(rabinKarp('abcbcglx', 'abca')).toBe(-1);
    expect(rabinKarp('abcbcglx', 'bcgl')).toBe(3);
    expect(rabinKarp('abcxabcdabxabcdabcdabcy', 'abcdabcy')).toBe(15);
    expect(rabinKarp('abcxabcdabxabcdabcdabcy', 'abcdabca')).toBe(-1);
    expect(rabinKarp('abcxabcdabxaabcdabcabcdabcdabcy', 'abcdabca')).toBe(12);
    expect(rabinKarp('abcxabcdabxaabaabaaaabcdabcdabcy', 'aabaabaaa')).toBe(11);
    expect(rabinKarp('^ !/\'#\'pp', ' !/\'#\'pp')).toBe(1);
    expect(rabinKarp('a\u{ffff}', '\u{ffff}')).toBe(1);
    expect(rabinKarp('a\u{10000}', '\u{10000}')).toBe(1);
    expect(rabinKarp('\u0000耀\u0000', '耀\u0000')).toBe(1);
  });
});
