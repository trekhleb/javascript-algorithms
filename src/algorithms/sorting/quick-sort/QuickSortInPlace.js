import Sort from '../Sort';

export default class QuickSortInPlace extends Sort {
  /** Sorting in place avoids unnecessary use of additional memory, but modifies input array.
   *
   * This process is difficult to describe, but much clearer with a visualization:
   * @see: http://www.algomation.com/algorithm/quick-sort-visualization
   *
   * @param {*[]} originalArray - Not sorted array.
   * @param {number} inputLowIndex
   * @param {number} inputHighIndex
   * @param {boolean} recursiveCall
   * @return {*[]} - Sorted array.
   */
  sort(
    originalArray,
    inputLowIndex = 0,
    inputHighIndex = originalArray.length - 1,
    recursiveCall = false,
  ) {
    // Copies array on initial call, and then sorts in place.
    const array = recursiveCall ? originalArray : [...originalArray];

    /**
     * The partitionArray() operates on the subarray between lowIndex and highIndex, inclusive.
     * It arbitrarily chooses the last element in the subarray as the pivot.
     * Then, it partially sorts the subarray into elements than are less than the pivot,
     * and elements that are greater than or equal to the pivot.
     * Each time partitionArray() is executed, the pivot element is in its final sorted position.
     *
     * @param {number} lowIndex
     * @param {number} highIndex
     * @return {number}
     */
    const partitionArray = (lowIndex, highIndex) => {
      /**
       * Swaps two elements in array.
       * @param {number} leftIndex
       * @param {number} rightIndex
       */
      const swap = (leftIndex, rightIndex) => {
        const temp = array[leftIndex];
        array[leftIndex] = array[rightIndex];
        array[rightIndex] = temp;
      };

      const pivot = array[highIndex];
      // visitingCallback is used for time-complexity analysis.
      this.callbacks.visitingCallback(pivot);

      let partitionIndex = lowIndex;
      for (let currentIndex = lowIndex; currentIndex < highIndex; currentIndex += 1) {
        if (this.comparator.lessThan(array[currentIndex], pivot)) {
          swap(partitionIndex, currentIndex);
          partitionIndex += 1;
        }
      }

      // The element at the partitionIndex is guaranteed to be greater than or equal to pivot.
      // All elements to the left of partitionIndex are guaranteed to be less than pivot.
      // Swapping the pivot with the partitionIndex therefore places the pivot in its
      // final sorted position.
      swap(partitionIndex, highIndex);

      return partitionIndex;
    };

    // Base case is when low and high converge.
    if (inputLowIndex < inputHighIndex) {
      const partitionIndex = partitionArray(inputLowIndex, inputHighIndex);
      const RECURSIVE_CALL = true;
      this.sort(array, inputLowIndex, partitionIndex - 1, RECURSIVE_CALL);
      this.sort(array, partitionIndex + 1, inputHighIndex, RECURSIVE_CALL);
    }

    return array;
  }
}
