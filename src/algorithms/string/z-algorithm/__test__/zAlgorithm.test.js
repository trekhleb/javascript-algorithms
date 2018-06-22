import zAlgorithm from '../zAlgorithm';

describe('zAlgorithm', () => {
  it('should find word positions in given text', () => {
    expect(zAlgorithm('abcbcglx', 'abca')).toEqual([]);
    expect(zAlgorithm('abca', 'abca')).toEqual([0]);
    expect(zAlgorithm('abca', 'abcadfd')).toEqual([]);
    expect(zAlgorithm('abcbcglabcx', 'abc')).toEqual([0, 7]);
    expect(zAlgorithm('abcbcglx', 'bcgl')).toEqual([3]);
    expect(zAlgorithm('abcbcglx', 'cglx')).toEqual([4]);
    expect(zAlgorithm('abcxabcdabxabcdabcdabcy', 'abcdabcy')).toEqual([15]);
    expect(zAlgorithm('abcxabcdabxabcdabcdabcy', 'abcdabca')).toEqual([]);
    expect(zAlgorithm('abcxabcdabxaabcdabcabcdabcdabcy', 'abcdabca')).toEqual([12]);
    expect(zAlgorithm('abcxabcdabxaabaabaaaabcdabcdabcy', 'aabaabaaa')).toEqual([11]);
  });
});
