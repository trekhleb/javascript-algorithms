import Comparator from '../../../utils/comparator/Comparator';

/**
 * Ternary search implementation.
 *
 * Ternary search divides the array into three parts and determines which
 * part the element is likely to be in, then recursively searches that part.
 *
 * Time Complexity: O(log3(n))
 *
 * @param {*[]} sortedArray - A sorted array to search within.
 * @param {*} seekElement - The element we are searching for.
 * @param {function(a, b)} [comparatorCallback] - Optional custom comparator.
 * @return {number} - Index of the element, or -1 if not found.
 */
export default function ternarySearch(sortedArray, seekElement, comparatorCallback) {
  const comparator = new Comparator(comparatorCallback);

  let startIndex = 0;
  let endIndex = sortedArray.length - 1;

  while (startIndex <= endIndex) {
    // Divide the range into three equal parts.
    const partSize = Math.floor((endIndex - startIndex) / 3);
    const midLeftIndex = startIndex + partSize;
    const midRightIndex = endIndex - partSize;

    // Check if the element is at the left midpoint.
    if (comparator.equal(sortedArray[midLeftIndex], seekElement)) {
      return midLeftIndex;
    }

    // Check if the element is at the right midpoint.
    if (comparator.equal(sortedArray[midRightIndex], seekElement)) {
      return midRightIndex;
    }

    if (comparator.lessThan(seekElement, sortedArray[midLeftIndex])) {
      // The element is in the first third of the array.
      endIndex = midLeftIndex - 1;
    } else if (comparator.greaterThan(seekElement, sortedArray[midRightIndex])) {
      // The element is in the last third of the array.
      startIndex = midRightIndex + 1;
    } else {
      // The element is in the middle third of the array.
      startIndex = midLeftIndex + 1;
      endIndex = midRightIndex - 1;
    }
  }

  // Return -1 if we have not found anything.
  return -1;
}
