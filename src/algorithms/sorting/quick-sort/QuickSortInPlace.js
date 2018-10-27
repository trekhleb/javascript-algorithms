import Sort from '../Sort';

export default class QuickSortInPlace extends Sort {
  /** Sorting in place avoids unnecessary use of additional memory, but modifies input array.
   *
   * This process is difficult to describe, but much clearer with a visualization:
   * @see: http://www.algomation.com/algorithm/quick-sort-visualization
   *
   * @param {*[]} array - Not sorted array.
   * @param {number} inputLowIndex
   * @param {number} inputHighIndex
   * @return {*[]} array - Sorted array.
   */
  sort(array, inputLowIndex = 0, inputHighIndex = array.length - 1) {
    // Base case is when low and high converge.
    if (inputLowIndex < inputHighIndex) {
      const partitionIndex = this.partitionArray(array, inputLowIndex, inputHighIndex);
      this.sort(array, inputLowIndex, partitionIndex - 1);
      this.sort(array, partitionIndex + 1, inputHighIndex);
    }

    return array;
  }

  /**
   * The partitionArray() operates on the subarray between lowIndex and highIndex, inclusive.
   * It arbitrarily chooses the last element in the subarray as the pivot.
   * Then, it partially sorts the subarray into elements than are less than the pivot,
   * and elements that are greater than or equal to the pivot.
   * Each time partitionArray() is executed, the pivot element is in its final sorted position.
   *
   * @param {*[]} array - Array for partitioning
   * @param {number} lowIndex
   * @param {number} highIndex
   * @return {number} - Partition index
   */
  partitionArray(array, lowIndex, highIndex) {
    const pivot = array[highIndex];

    // visitingCallback is used for time-complexity analysis.
    this.callbacks.visitingCallback(pivot);

    let partitionIndex = lowIndex;
    for (let currentIndex = lowIndex; currentIndex < highIndex; currentIndex += 1) {
      if (this.comparator.lessThan(array[currentIndex], pivot)) {
        /* eslint no-param-reassign: ["error", { "props": false }] */
        [array[partitionIndex], array[currentIndex]] = [array[currentIndex], array[partitionIndex]];
        partitionIndex += 1;
      }
    }

    // The element at the partitionIndex is guaranteed to be greater than or equal to pivot.
    // All elements to the left of partitionIndex are guaranteed to be less than pivot.
    // Swapping the pivot with the partitionIndex therefore places the pivot in its
    // final sorted position.
    [array[partitionIndex], array[highIndex]] = [array[highIndex], array[partitionIndex]];

    return partitionIndex;
  }
}
