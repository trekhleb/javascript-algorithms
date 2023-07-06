/**
 * Binary search-based approach to find longest increasing subsequence.
 * Complexity: O(n log n)
 *
 * @param {number[]} sequence
 * @return {number}
 */
export default function binarySearchLongestIncreasingSubsequence(sequence) {
  const tails = []; // Array to store the smallest tail elements of increasing subsequences

  // Iterate over the input sequence
  for (let i = 0; i < sequence.length; i++) {
    let left = 0;
    let right = tails.length - 1;

    // Perform binary search to find the largest index `j` where tails[j] <= sequence[i]
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] <= sequence[i]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    // Update tails[j + 1] to sequence[i]
    if (left === tails.length) {
      tails.push(sequence[i]);
    } else {
      tails[left] = sequence[i];
    }
  }

  // The length of the longest increasing subsequence is the index of the rightmost non-zero element in tails
  return tails.length;
}

