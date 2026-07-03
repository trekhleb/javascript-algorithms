/**
 * Recursive (pick / don't pick) solution.
 * This approach is often referred to as "Divide and Conquer" in the maximum
 * subarray literature, although strictly speaking it is a linear recursion
 * that for each element decides whether to pick it or not.
 * Complexity: O(n^2) in case if no memoization applied
 *
 * @param {Number[]} inputArray
 * @return {Number} - maximum subarray sum
 */
export default function dcMaximumSubarraySum(inputArray) {
  /**
   * We are going through the inputArray array and for each element we have two options:
   * - to pick
   * - not to pick
   *
   * Also keep in mind, that the maximum sub-array must be contiguous. It means if we picked
   * the element, we need to continue picking the next elements or stop counting the max sum.
   *
   * @param {number} elementIndex - the index of the element we're deciding to pick or not
   * @param {boolean} mustPick - to pick or not to pick the element
   * @returns {number} - maximum subarray sum that we'll get
   */
  function solveRecursively(elementIndex, mustPick) {
    if (elementIndex >= inputArray.length) {
      return mustPick ? 0 : -Infinity;
    }
    return Math.max(
      // Option #1: Pick the current element, and continue picking next one.
      inputArray[elementIndex] + solveRecursively(elementIndex + 1, true),
      // Option #2: Don't pick the current element.
      mustPick ? 0 : solveRecursively(elementIndex + 1, false),
    );
  }
  return solveRecursively(0, false);
}
