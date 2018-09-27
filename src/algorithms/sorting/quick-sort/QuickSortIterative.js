import Sort from '../Sort';
import Stack from '../../../data-structures/stack/Stack';

export default class QuickSortIterative extends Sort {
  /**
   * Iterative Quick Sort
   *
   * @param {*[]} originalArray - Not sorted array.
   * @param {number} inputLowIndex
   * @param {number} inputHighIndex
   * @return {*[]} - Sorted array.
   */
  sort(
    originalArray,
    inputLowIndex = 0,
    inputHighIndex = originalArray.length - 1,
    sortInPlace = true,
  ) {
    // Copies array on in case we don't want to sort in place
    const array = sortInPlace ? originalArray : [...originalArray];

    // If array has less than or equal to one elements then it is already sorted.
    if (array.length <= 1) {
      return array;
    }

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
      this.callbacks.visitingCallback(array[pivot]);

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

    /**
     * Replace recursion with auxiliary stack
     */
    const stack = new Stack();
    stack.push(inputLowIndex);
    stack.push(inputHighIndex);

    while (!stack.isEmpty()) {
      const highIndex = stack.pop();
      const lowIndex = stack.pop();
      const partitionIndex = partitionArray(lowIndex, highIndex);

      if (partitionIndex - 1 > lowIndex) {
        stack.push(lowIndex);
        stack.push(partitionIndex - 1);
      }

      if (partitionIndex + 1 < highIndex) {
        stack.push(partitionIndex + 1);
        stack.push(highIndex);
      }
    }

    return array;
  }
}
