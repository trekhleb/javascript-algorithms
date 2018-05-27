import Sort from '../Sort';

export default class QuickSortInPlace extends Sort {
  /** Sorting in place avoids unnecessary use of additional memory, but modifies input array.
   *
   * This process is difficult to describe, but much clearer with a visualization:
   * @see: http://www.algomation.com/algorithm/quick-sort-visualization
   *
   * @param {*[]} originalArray
   * @param {number} inputLowIndex
   * @param {number} inputHighIndex
   * @return {*[]}
   */
  sort(originalArray, inputLowIndex, inputHighIndex) {
    // Destructures array on initial passthrough, and then sorts in place.
    const array = inputLowIndex === undefined ? [...originalArray] : originalArray;

    /**
     * Partition array segment and return index of last swap
     *
     * @param {number} lowIndex
     * @param {number} highIndex
     * @return {number}
     */
    const partition = (lowIndex, highIndex) => {
      /**
       * @param {number} leftIndex
       * @param {number} rightIndex
       */
      const swap = (leftIndex, rightIndex) => {
        const tempVariable = array[leftIndex];
        array[leftIndex] = array[rightIndex];
        array[rightIndex] = tempVariable;
      };

      const pivot = array[highIndex];
      this.callbacks.visitingCallback(array[pivot]);

      let firstRunner = lowIndex - 1;
      for (let secondRunner = lowIndex; secondRunner < highIndex; secondRunner += 1) {
        if (this.comparator.lessThan(array[secondRunner], pivot)) {
          firstRunner += 1;
          swap(firstRunner, secondRunner);
        }
      }

      if (this.comparator.lessThan(pivot, array[firstRunner + 1])) {
        swap(firstRunner + 1, highIndex);
      }

      return firstRunner + 1;
    };

    /*
     * While we can use a default parameter to set `low` to 0, we would
     * still have to set `high`'s default within the function as we
     * don't have access to `array.length - 1` when declaring paramaters
     */
    const lowIndex = inputLowIndex === undefined ? 0 : inputLowIndex;
    const highIndex = inputHighIndex === undefined ? array.length - 1 : inputHighIndex;

    // Base case is when low and high converge
    if (lowIndex < highIndex) {
      const partitionIndex = partition(lowIndex, highIndex);
      /*
       * `partition()` swaps elements of the array based on their comparison to the `hi` parameter,
       * and then returns the index where swapping is no longer necessary, which can be best thought
       * of as the pivot used to split an array in a non-in-place quicksort
       */
      this.sort(array, lowIndex, partitionIndex - 1);
      this.sort(array, partitionIndex + 1, highIndex);
    }

    return array;
  }
}
