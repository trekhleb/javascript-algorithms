/**
 * Optimized approach to find longest increasing subsequence.
 * Complexity: O(n * log n)
 *
 * @param {number[]} sequence
 * @return {number}
 */
export default function dpLongestIncreasingSubsequence(sequence) {
  if (sequence.length === 0) {
    return 0;
  }

  // This will store the smallest tail value for all increasing subsequences
  // with length i+1 in tail[i].
  const tails = [];

  sequence.forEach((num) => {
    let left = 0;
    let right = tails.length;

    // Binary search for the insertion point of the current element.
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (tails[mid] < num) {
        left = mid + 1;
      } else {
        right = mid;
      }
    }

    // If left is equal to the length of tails, it means we are adding a new subsequence.
    if (left === tails.length) {
      tails.push(num);
    } else {
      // Otherwise, we are updating an existing subsequence with a new tail value.
      tails[left] = num;
    }
  });

  return tails.length;
}
