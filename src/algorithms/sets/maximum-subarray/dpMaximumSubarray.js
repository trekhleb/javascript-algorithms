/**
 * Dynamic Programming solution.
 * Complexity: O(n)
 *
 * @param {Number[]} inputArray
 * @return {Number[]}
 */
export default function dpMaximumSubarray(inputArray) {
  // Check if all elements of inputArray are negative ones and return the highest
  // one in this case.
  let allNegative = true;
  let highestElementValue = null;
  for (let i = 0; i < inputArray.length; i += 1) {
    if (inputArray[i] >= 0) {
      allNegative = false;
    }

    if (highestElementValue === null || highestElementValue < inputArray[i]) {
      highestElementValue = inputArray[i];
    }
  }

  if (allNegative && highestElementValue !== null) {
    return [highestElementValue];
  }

  // Let's assume that there is at list one positive integer exists in array.
  // And thus the maximum sum will for sure be grater then 0. Thus we're able
  // to always reset max sum to zero.
  let maxSum = 0;

  // This array will keep a combination that gave the highest sum.
  let maxSubArray = [];

  // Current sum and subarray that will memoize all previous computations.
  let currentSum = 0;
  let currentSubArray = [];

  for (let i = 0; i < inputArray.length; i += 1) {
    // Let's add current element value to the current sum.
    currentSum += inputArray[i];

    if (currentSum < 0) {
      // If the sum went below zero then reset it and don't add current element to max subarray.
      currentSum = 0;
      // Reset current subarray.
      currentSubArray = [];
    } else {
      // If current sum stays positive then add current element to current sub array.
      currentSubArray.push(inputArray[i]);

      if (currentSum > maxSum) {
        // If current sum became greater then max registered sum then update
        // max sum and max subarray.
        maxSum = currentSum;
        maxSubArray = currentSubArray.slice();
      }
    }
  }

  return maxSubArray;
}
