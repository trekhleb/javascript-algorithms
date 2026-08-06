/**
 * Efficient approach to find longest increasing subsequence.
 * Complexity: O(n * log(n))
 *
 * @param {number[]} sequence
 * @return {number}
 */
export default function LongestIncreasingSubsequence(sequence) {
  // Retrieves the smallest number greater or equal to val in sorted arr.
  function upperBound(arr, val) {
    let lo = 0;
    let hi = arr.length;

    while (lo < hi) {
      const mid = lo + Math.floor((hi - lo) / 2);
      if (arr[mid] < val) {
        lo = mid + 1;
      } else {
        hi = mid;
      }
    }
    return hi;
  }

  const lis = [];
  sequence.forEach((val) => { lis[upperBound(lis, val)] = val; });
  return lis.length;
}
