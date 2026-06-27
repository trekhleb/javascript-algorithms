/* eslint-disable no-param-reassign */
import Sort from '../Sort';

export default class PancakeSort extends Sort {
  /**
   * Flip the array from index 0 to index i
   * @param {*[]} array
   * @param {number} endIndex
   */
  flip(array, endIndex) {
    let start = 0;
    let end = endIndex;
    while (start < end) {
      // Swap elements
      [array[start], array[end]] = [array[end], array[start]];
      start += 1;
      end -= 1;
    }
  }

  /**
   * Find the index of the maximum element in array[0...n]
   * @param {*[]} array
   * @param {number} n
   * @return {number}
   */
  findMaxIndex(array, n) {
    let maxIndex = 0;
    for (let i = 1; i <= n; i += 1) {
      // Call visiting callback.
      this.callbacks.visitingCallback(array[i]);

      if (this.comparator.greaterThan(array[i], array[maxIndex])) {
        maxIndex = i;
      }
    }
    return maxIndex;
  }

  sort(originalArray) {
    // Clone original array to prevent its modification.
    const array = [...originalArray];

    // Start from the complete array and one by one reduce current size by one
    for (let currentSize = array.length - 1; currentSize > 0; currentSize -= 1) {
      // Find index of the maximum element in array[0...currentSize]
      const maxIndex = this.findMaxIndex(array, currentSize);

      // Move the maximum element to end of current array if it's not already at the end
      if (maxIndex !== currentSize) {
        // First move maximum number to beginning if it's not already
        if (maxIndex !== 0) {
          this.flip(array, maxIndex);
        }

        // Now move the maximum number to end by reversing current array
        this.flip(array, currentSize);
      }
    }

    return array;
  }
}
