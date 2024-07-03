import shortestCommonSupersequence from '../shortestCommonSupersequence';

describe('shortestCommonSupersequence', () => {
  it('should find shortest common supersequence of two sequences', () => {
    // LCS (longest common subsequence) is empty
    expect(shortestCommonSupersequence(
      ['A', 'B', 'C'],
      ['D', 'E', 'F'],
    )).toEqual(['A', 'B', 'C', 'D', 'E', 'F']);

    // LCS (longest common subsequence) is "EE"
    expect(shortestCommonSupersequence(
      ['G', 'E', 'E', 'K'],
      ['E', 'K', 'E'],
    )).toEqual(['G', 'E', 'K', 'E', 'K']);

    // LCS (longest common subsequence) is "GTAB"
    expect(shortestCommonSupersequence(
      ['A', 'G', 'G', 'T', 'A', 'B'],
      ['G', 'X', 'T', 'X', 'A', 'Y', 'B'],
    )).toEqual(['A', 'G', 'G', 'X', 'T', 'X', 'A', 'Y', 'B']);

    // LCS (longest common subsequence) is "BCBA".
    expect(shortestCommonSupersequence(
      ['A', 'B', 'C', 'B', 'D', 'A', 'B'],
      ['B', 'D', 'C', 'A', 'B', 'A'],
    )).toEqual(['A', 'B', 'D', 'C', 'A', 'B', 'D', 'A', 'B']);

    // LCS (longest common subsequence) is "BDABA".
    expect(shortestCommonSupersequence(
      ['B', 'D', 'C', 'A', 'B', 'A'],
      ['A', 'B', 'C', 'B', 'D', 'A', 'B', 'A', 'C'],
    )).toEqual(['A', 'B', 'C', 'B', 'D', 'C', 'A', 'B', 'A', 'C']);
  });
});
