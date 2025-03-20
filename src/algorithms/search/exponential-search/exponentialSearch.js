import Comparator from '../../../utils/comparator/Comparator';

/**
 * Binary search implementation.
 *
 * @param {*[]} sortedArray
 * @param {*} startIndex
 * @param {*} endIndex
 * @param {*} seekElement
 * @param {function(a, b)} [comparatorCallback]
 * @return {number}
 */

function binarySearch(sortedArray, startIndex, endIndex, seekElement, comparatorCallback) {
  const comparator = new Comparator(comparatorCallback);
  if (endIndex >= startIndex) {
    const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);
    // If the element is present at the middle itself
    if (comparator.equal(sortedArray[middleIndex], seekElement)) {
      return middleIndex;
    }
    // If element is smaller than middleIndex, then it can only be  present n left subarray
    if (comparator.greaterThan(sortedArray[middleIndex], seekElement)) {
      return binarySearch(sortedArray, startIndex, middleIndex - 1, seekElement, comparatorCallback);
    }
    // Else the element can only be present in right subarray
    return binarySearch(sortedArray, middleIndex + 1, endIndex, seekElement, comparatorCallback);
  }
  // We reach here when element is not present in array
  return -1;
}
/**
 * Exponential search implementation.
 *
 * @param {*[]} sortedArray
 * @param {*} seekElement
 * @param {function(a, b)} [comparatorCallback]
 * @return {number}
 */
export default function exponentialSearch(sortedArray, seekElement, comparatorCallback) {
  const comparator = new Comparator(comparatorCallback);
  const length = sortedArray.length;  
  // If element is present at first location itself
  if (sortedArray.length !== 0) {
    if (comparator.equal(sortedArray[0], seekElement)){
      return 0;
  }
  }
  // Find range for binary search by repeated doubling
    let range = 1;
    while (range < length && comparator.lessThanOrEqual(sortedArray[range], seekElement)) {
      range *= 2;
    }
  // Call binary search for the found range.
  return binarySearch(sortedArray, range/2, Math.min(range, length - 1), seekElement, comparatorCallback);
}
