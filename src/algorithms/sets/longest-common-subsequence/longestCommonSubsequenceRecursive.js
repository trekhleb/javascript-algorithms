/* eslint-disable no-param-reassign */
/**
 * Longest Common Subsequence (LCS) (Recursive Approach).
 *
 * @param {string} string1
 * @param {string} string2
 * @return {number}
 */
export default function longestCommonSubsequenceRecursive(string1, string2) {
  /**
   *
   * @param {string} s1
   * @param {string} s2
   * @return {string} - returns the LCS (Longest Common Subsequence)
   */
  const lcs = (s1, s2, memo = {}) => {
    if (!s1 || !s2) return '';

    if (memo[`${s1}:${s2}`]) return memo[`${s1}:${s2}`];

    if (s1[0] === s2[0]) {
      return s1[0] + lcs(s1.substring(1), s2.substring(1), memo);
    }

    const nextLcs1 = lcs(s1.substring(1), s2, memo);
    const nextLcs2 = lcs(s1, s2.substring(1), memo);

    const nextLongest = nextLcs1.length >= nextLcs2.length ? nextLcs1 : nextLcs2;

    memo[`${s1}:${s2}`] = nextLongest;

    return nextLongest;
  };

  return lcs(string1, string2);
}
