/**
 * Find the longest common subsequence (LCS) of two strings.
 *
 * A subsequence is a sequence that can be derived from another sequence
 * by deleting some or no elements without changing the order of the
 * remaining elements.
 *
 * For example:
 * - LCS of "ABCDGH" and "AEDFHR" is "ADH" (length 3)
 * - LCS of "AGGTAB" and "GXTXAYB" is "GTAB" (length 4)
 *
 * This implementation uses dynamic programming with O(m*n) time complexity
 * and O(m*n) space complexity, where m and n are the lengths of the two strings.
 *
 * Applications:
 * - Diff utilities (comparing file versions)
 * - DNA sequence analysis
 * - Version control systems
 * - Plagiarism detection
 * - Data comparison tools
 *
 * @param {string} str1 - First string
 * @param {string} str2 - Second string
 * @return {string} - The longest common subsequence
 */
export default function longestCommonSubsequence(str1, str2) {
  // Handle edge cases
  if (!str1 || !str2) {
    return '';
  }

  const m = str1.length;
  const n = str2.length;

  // Create a 2D array to store lengths of LCS
  // dp[i][j] contains length of LCS of str1[0..i-1] and str2[0..j-1]
  const dp = Array(m + 1)
    .fill(null)
    .map(() => Array(n + 1).fill(0));

  // Build the dp table in bottom-up fashion
  for (let i = 1; i <= m; i += 1) {
    for (let j = 1; j <= n; j += 1) {
      if (str1[i - 1] === str2[j - 1]) {
        // If characters match, add 1 to the result of smaller strings
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        // If characters don't match, take the maximum of two possibilities
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  // Backtrack to find the actual LCS string
  let i = m;
  let j = n;
  const lcs = [];

  while (i > 0 && j > 0) {
    if (str1[i - 1] === str2[j - 1]) {
      // If characters match, it's part of LCS
      lcs.unshift(str1[i - 1]);
      i -= 1;
      j -= 1;
    } else if (dp[i - 1][j] > dp[i][j - 1]) {
      // Move in the direction of larger value
      i -= 1;
    } else {
      j -= 1;
    }
  }

  return lcs.join('');
}
