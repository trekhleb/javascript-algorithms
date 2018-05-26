import Sort from '../Sort';

export default class QuickSortInPlace extends Sort {
  /* Sorting in place avoids unnecessary use of additional memory, but modifies input array.
   *
   * This process is difficult to describe, but much clearer with a visualization:
   * http://www.algomation.com/algorithm/quick-sort-visualization
   */
  sort(originalArray, inputLow, inputHigh) {
    // Destructures array on initial passthrough, and then sorts in place.
    const array = inputLow === undefined ? [...originalArray] : originalArray;
    // Partition array segment and return index of last swap
    const partition = (l, h) => {
      const swap = (left, right) => {
        const tempVariable = array[left];
        array[left] = array[right];
        array[right] = tempVariable;
      };

      const pivot = array[h];
      this.callbacks.visitingCallback(array[pivot]);
      let firstRunner = l - 1;

      for (let secondRunner = l; secondRunner < h; secondRunner += 1) {
        if (this.comparator.lessThan(array[secondRunner], pivot)) {
          firstRunner += 1;
          swap(firstRunner, secondRunner);
        }
      }

      if (this.comparator.lessThan(pivot, array[firstRunner + 1])) {
        swap(firstRunner + 1, h);
      }

      return firstRunner + 1;
    };

    /*
     * While we can use a default parameter to set `low` to 0, we would
     * still have to set `high`'s default within the function as we
     * don't have access to `array.length - 1` when declaring paramaters
     */
    const low = inputLow === undefined ? 0 : inputLow;
    const high = inputHigh === undefined ? array.length - 1 : inputHigh;

    // Base case is when low and high converge
    if (low < high) {
      const partitionIndex = partition(low, high);
      /*
       * `partition()` swaps elements of the array based on their comparison to the `hi` parameter,
       * and then returns the index where swapping is no longer necessary, which can be best thought
       * of as the pivot used to split an array in a non-in-place quicksort
       */
      this.sort(array, low, partitionIndex - 1);
      this.sort(array, partitionIndex + 1, high);
    }
    return array;
  }
}
