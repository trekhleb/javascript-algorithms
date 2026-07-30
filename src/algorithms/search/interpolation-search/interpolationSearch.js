/**
 * Interpolation search implementation.
 *
 * @param {*[]} sortedArray - sorted array with uniformly distributed values
 * @param {*} seekElement
 * @return {number}
 */
export default function interpolationSearch(sortedArray, seekElement) {
  let leftIndex = 0;
  let rightIndex = sortedArray.length - 1;

  while (leftIndex <= rightIndex) {
    // If the seek element is outside of the current range boundaries then
    // there is no such element in the array since the array is sorted and
    // all its remaining values lie in [sortedArray[leftIndex], sortedArray[rightIndex]].
    // This check also guarantees that the interpolated middle index (see below)
    // always lands inside the [leftIndex, rightIndex] range.
    if (seekElement < sortedArray[leftIndex] || seekElement > sortedArray[rightIndex]) {
      return -1;
    }

    const rangeDelta = sortedArray[rightIndex] - sortedArray[leftIndex];
    const indexDelta = rightIndex - leftIndex;
    const valueDelta = seekElement - sortedArray[leftIndex];

    // If range delta is zero then subarray contains all the same numbers
    // and thus there is nothing to search for unless this range is all
    // consists of seek number.
    if (!rangeDelta) {
      // By doing this we're also avoiding division by zero while
      // calculating the middleIndex later.
      return sortedArray[leftIndex] === seekElement ? leftIndex : -1;
    }

    // Do interpolation of the middle index. Clamp it into the current
    // [leftIndex, rightIndex] range to protect against any rounding issues.
    const interpolatedIndex = leftIndex + Math.floor((valueDelta * indexDelta) / rangeDelta);
    const middleIndex = Math.max(leftIndex, Math.min(rightIndex, interpolatedIndex));

    // If we've found the element just return its position.
    if (sortedArray[middleIndex] === seekElement) {
      return middleIndex;
    }

    // Decide which half to choose for seeking next: left or right one.
    // Since the middle element gets excluded from the range, the search
    // range strictly shrinks on every iteration and the loop is guaranteed
    // to terminate.
    if (sortedArray[middleIndex] < seekElement) {
      // Go to the right half of the array.
      leftIndex = middleIndex + 1;
    } else {
      // Go to the left half of the array.
      rightIndex = middleIndex - 1;
    }
  }

  return -1;
}
