import Sort from '../Sort';

// The minimum size of a run (sub-array) to be sorted by insertion sort.
// Tim Sort uses runs of at least 32 elements, similar to Python's implementation.
const MIN_MERGE = 32;

/**
 * @param {number} n
 * @return {number}
 */
function calcMinRun(n) {
  // Determines the minimum run length. This ensures we get a balanced merge tree.
  // r becomes 1 if any 1 bits are shifted off (meaning n is not a power of 2).
  let r = 0;
  let num = n;
  while (num >= MIN_MERGE) {
    r |= num & 1; // eslint-disable-line no-bitwise
    num >>= 1; // eslint-disable-line no-bitwise
  }
  return num + r;
}

export default class TimSort extends Sort {
  sort(originalArray) {
    let array = [...originalArray];
    const n = array.length;

    if (n <= 1) {
      return array;
    }

    // Calculate the minimum run length for this array.
    const minRun = calcMinRun(n);

    // Phase 1: Sort individual runs using insertion sort.
    for (let start = 0; start < n; start += minRun) {
      const end = Math.min(start + minRun - 1, n - 1);
      array = this.insertionSort(array, start, end);
    }

    // Phase 2: Merge sorted runs together, doubling the merge size each time.
    for (let size = minRun; size < n; size *= 2) {
      for (let left = 0; left < n; left += 2 * size) {
        // Calculate the midpoint and right boundary, clamped to array bounds.
        const mid = Math.min(left + size - 1, n - 1);
        const right = Math.min(left + (2 * size) - 1, n - 1);

        // Only merge if there are elements in the right run.
        if (mid < right) {
          array = this.merge(array, left, mid, right);
        }
      }
    }

    return array;
  }

  /**
   * Sort a sub-array using insertion sort and return a copy of the full array.
   * This is efficient for small arrays and already-sorted runs.
   *
   * @param {*[]} array
   * @param {number} left - Start index (inclusive).
   * @param {number} right - End index (inclusive).
   * @return {*[]}
   */
  insertionSort(array, left, right) {
    const arr = [...array];

    for (let i = left + 1; i <= right; i += 1) {
      const currentElement = arr[i];
      let j = i - 1;

      // Call visiting callback.
      this.callbacks.visitingCallback(currentElement);

      // Shift elements that are greater than currentElement one position to the right.
      while (j >= left && this.comparator.lessThan(currentElement, arr[j])) {
        // Call visiting callback.
        this.callbacks.visitingCallback(arr[j]);

        arr[j + 1] = arr[j];
        j -= 1;
      }

      // Place currentElement in its correct position.
      arr[j + 1] = currentElement;
    }

    return arr;
  }

  /**
   * Merge two sorted sub-arrays and return a copy of the full array with the
   * merged section in place.
   *
   * @param {*[]} array
   * @param {number} left - Start index of the left sub-array.
   * @param {number} mid - End index of the left sub-array (midpoint).
   * @param {number} right - End index of the right sub-array.
   * @return {*[]}
   */
  merge(array, left, mid, right) {
    const arr = [...array];

    // Create copies of both sub-arrays.
    const leftArray = arr.slice(left, mid + 1);
    const rightArray = arr.slice(mid + 1, right + 1);

    let leftIndex = 0;
    let rightIndex = 0;
    let mergeIndex = left;

    // Merge the two sub-arrays back into the main array.
    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      // Call visiting callback.
      this.callbacks.visitingCallback(leftArray[leftIndex]);

      if (this.comparator.lessThanOrEqual(leftArray[leftIndex], rightArray[rightIndex])) {
        arr[mergeIndex] = leftArray[leftIndex];
        leftIndex += 1;
      } else {
        arr[mergeIndex] = rightArray[rightIndex];
        rightIndex += 1;
      }
      mergeIndex += 1;
    }

    // Copy remaining elements from leftArray, if any.
    while (leftIndex < leftArray.length) {
      arr[mergeIndex] = leftArray[leftIndex];
      leftIndex += 1;
      mergeIndex += 1;
    }

    // Copy remaining elements from rightArray, if any.
    while (rightIndex < rightArray.length) {
      arr[mergeIndex] = rightArray[rightIndex];
      rightIndex += 1;
      mergeIndex += 1;
    }

    return arr;
  }
}
