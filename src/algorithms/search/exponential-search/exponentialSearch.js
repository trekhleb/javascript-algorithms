import Comparator from '../../../utils/comparator/Comparator';
import binarySearch from '../binary-search/binarySearch';

/**
 * Exponential search implementation.
 *
 * Exponential search works in two phases:
 *  1. Find the range where the element may be present by repeatedly doubling
 *     an index until the element at that index is greater than the target.
 *  2. Apply binary search within that range.
 *
 * It is particularly useful for unbounded/infinite sorted arrays, and
 * also performs better than binary search when the element is near the beginning.
 *
 * Time Complexity: O(log(n))
 *
 * @param {*[]} sortedArray - A sorted array to search within.
 * @param {*} seekElement - The element we are searching for.
 * @param {function(a, b)} [comparatorCallback] - Optional custom comparator.
 * @return {number} - Index of the element, or -1 if not found.
 */
export default function exponentialSearch(sortedArray, seekElement, comparatorCallback) {
  const comparator = new Comparator(comparatorCallback);

  // Edge case: empty array.
  if (sortedArray.length === 0) {
    return -1;
  }

  // Check if the element is at position 0.
  if (comparator.equal(sortedArray[0], seekElement)) {
    return 0;
  }

  // Find the range for binary search by doubling the index.
  // We start at index 1 and double until we go out of bounds or
  // find an element greater than seekElement.
  let rangeEnd = 1;
  while (
    rangeEnd < sortedArray.length
    && comparator.lessThanOrEqual(sortedArray[rangeEnd], seekElement)
  ) {
    rangeEnd *= 2;
  }

  // Clamp the end of the range to the array boundary.
  const binarySearchEnd = Math.min(rangeEnd, sortedArray.length - 1);

  // Run binary search within the identified range.
  // We extract the sub-array and offset the result back to the original indices.
  const rangeStart = Math.floor(rangeEnd / 2);
  const subArray = sortedArray.slice(rangeStart, binarySearchEnd + 1);
  const subArrayIndex = binarySearch(subArray, seekElement, comparatorCallback);

  if (subArrayIndex === -1) {
    return -1;
  }

  // Offset the sub-array index back to the original array index.
  return rangeStart + subArrayIndex;
}
