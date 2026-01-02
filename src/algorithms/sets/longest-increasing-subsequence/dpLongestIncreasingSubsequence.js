/**
 * Dynamic programming approach to find longest increasing subsequence.
 * Complexity: O(n * n)
 *
 * @param {number[]} sequence
 * @return {number}
 */
export default function longestIncreasingSubsequence(sequence) {
  if (sequence.length === 0) return 0;

  const tails = [];

  for (const num of sequence) {
    let left = 0;
    let right = tails.length;

    // Binary search
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    tails[left] = num;
  }

  return tails.length;
}
