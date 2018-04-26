import longestCommonSubsequnce from '../longestCommonSubsequnce';

describe('longestCommonSubsequnce', () => {
  it('should find longest common subsequence for two strings', () => {
    expect(longestCommonSubsequnce([''], [''])).toEqual(['']);

    expect(longestCommonSubsequnce([''], ['A', 'B', 'C'])).toEqual(['']);

    expect(longestCommonSubsequnce(['A', 'B', 'C'], [''])).toEqual(['']);

    expect(longestCommonSubsequnce(
      ['A', 'B', 'C'],
      ['D', 'E', 'F', 'G'],
    )).toEqual(['']);

    expect(longestCommonSubsequnce(
      ['A', 'B', 'C', 'D', 'G', 'H'],
      ['A', 'E', 'D', 'F', 'H', 'R'],
    )).toEqual(['A', 'D', 'H']);

    expect(longestCommonSubsequnce(
      ['A', 'G', 'G', 'T', 'A', 'B'],
      ['G', 'X', 'T', 'X', 'A', 'Y', 'B'],
    )).toEqual(['G', 'T', 'A', 'B']);

    expect(longestCommonSubsequnce(
      ['A', 'B', 'C', 'D', 'A', 'F'],
      ['A', 'C', 'B', 'C', 'F'],
    )).toEqual(['A', 'B', 'C', 'F']);
  });
});
