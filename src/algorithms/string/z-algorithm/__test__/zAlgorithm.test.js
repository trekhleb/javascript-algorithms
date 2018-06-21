import zAlgorithm from '../zAlgorithm';

describe('zAlgorithm', () => {
  it('should find word position in given text', () => {
    expect(zAlgorithm('abcbcglx', 'abca')).toBe(-1);
    expect(zAlgorithm('abcbcglx', 'bcgl')).toBe(3);
    expect(zAlgorithm('abcxabcdabxabcdabcdabcy', 'abcdabcy')).toBe(15);
    expect(zAlgorithm('abcxabcdabxabcdabcdabcy', 'abcdabca')).toBe(-1);
    expect(zAlgorithm('abcxabcdabxaabcdabcabcdabcdabcy', 'abcdabca')).toBe(12);
    expect(zAlgorithm('abcxabcdabxaabaabaaaabcdabcdabcy', 'aabaabaaa')).toBe(11);
  });
});
