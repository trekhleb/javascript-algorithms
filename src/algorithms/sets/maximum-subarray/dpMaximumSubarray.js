/**
 * Dynamic Programming solution using Kadane's algorithm.
 * Complexity: O(n)
 *
 * @param {Number[]} inputArray
 * @return {Number[]}
 */
export default function dpMaximumSubarray(inputArray) {
  // Use Kadane's algorithm to generate list of maximum sums ending/beginning at index.
  const endMax = inputArray.reduce((a, x, i) => a.concat([x + Math.max(0, a[i - 1] || 0)]), []);
  const begMax = inputArray.reduceRight((a, x) => [x + Math.max(0, a[0] || 0)].concat(a), []);

  // Obtain the maximum value for the sum of subarrays.
  const maxVal = begMax.reduce((acc, val) => Math.max(acc, val), -Infinity);

  // Extract indices of maximum value from array & use them to slice input.
  const maxCmp = val => (val === maxVal);
  return inputArray.slice(begMax.findIndex(maxCmp), endMax.findIndex(maxCmp) + 1);
}
