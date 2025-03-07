/**
 * Brute Force solution.
 * Complexity: O(n^2)
 *
 * @param {Number[]} inputArray
 * @return {Number[]}
 */
export default function bfMaximumSubarray(inputArray) {
  let maxSubarrayStartIndex = 0;
  let maxSubarrayLength = 0;
  let maxSubarraySum = null;

  for (let startIndex = 0; startIndex < inputArray.length; startIndex += 1) {
    let subarraySum = 0;
    for (let arrLength = 1; arrLength <= (inputArray.length - startIndex); arrLength += 1) {
      subarraySum += inputArray[startIndex + (arrLength - 1)];
      if (maxSubarraySum === null || subarraySum > maxSubarraySum) {
        maxSubarraySum = subarraySum;
        maxSubarrayStartIndex = startIndex;
        maxSubarrayLength = arrLength;
      }
    }
  }

  return inputArray.slice(maxSubarrayStartIndex, maxSubarrayStartIndex + maxSubarrayLength);
}
