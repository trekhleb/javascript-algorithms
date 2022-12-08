import Sort from '../Sort';
// import InsertionSort from '../insertion-sort/InsertionSort';

export default class TimSort extends Sort {
  /**
  * @name sort
  * @description performs sorting using TimSort algorithm
  * @param {*[]} originalArray
  * @return {*[]}
  */

  sort(originalArray) {
    const RUN = 32;
    // clone the array so that original is intact
    // eslint-disable-next-line prefer-const
    let array = [...originalArray];

    // const lengthOfArray = array.length;

    // if array has only one or zero element it is already sorted
    if (array.length <= 1) {
      return array;
    }

    // perform insertion sort on the array first
    for (let index = 0; index < array.length; index += RUN) {
      // this.array=new this.insertionSort().
      this.array = this.insertionSort(
        array,
        index,
        this.minValue(index + RUN - 1, array.length - 1),
      );
    }

    // now merge the sorted chunks
    for (let size = RUN; size < array.length; size *= 2) {
      for (let left = 0; left < array.length; left += 2 * size) {
        const mid = left + size - 1;
        const right = this.minValue(left + 2 * size - 1, array.length - 1);

        if (this.comparator.lessThan(mid, right)) {
          this.merge(this.array, left, mid, right);
        }
      }
    }

    return this.array;
  }

  /**
   * @description returns a minimum value
   * @param {*} a
   * @param {*} b
   * @returns {*} minimum value of the two
   */
  minValue(a, b) {
    return this.comparator.lessThan(a, b) ? a : b;
  }

  /**
   * @description merge the sorted array (chunks of array)
   * @param {*[]} array
   * @param {*} left
   * @param {*} mid
   * @param {*} right
   */
  merge(array, left, mid, right) {
    const localArray = [...array];
    const leftLength = mid - left + 1;
    const rightLength = right - mid;
    const leftArray = [];
    const rightArray = [];
    for (let index = 0; index < leftLength; index += 1) {
      leftArray[index] = array[left + index];
    }

    for (let index = 0; index < rightLength; index += 1) {
      rightArray[index] = array[mid + 1 + index];
    }

    let i = 0;
    let j = 0;
    let k = left;

    while (this.comparator.lessThan(i, leftLength) && this.comparator.lessThan(j, rightLength)) {
      if (this.comparator.lessThanOrEqual(leftArray[i], rightArray[j])) {
        localArray[k] = leftArray[i];
        i += 1;
      } else {
        localArray[k] = rightArray[j];
      }
    }
    while (this.comparator.lessThan(i, leftLength)) {
      localArray[k] = rightArray[i];
      k += 1;
      i += 1;
    }
    while (this.comparator.lessThan(j, rightLength)) {
      localArray[k] = rightArray[j];
      k += 1;
      j += 1;
    }
    // eslint-disable-next-line no-param-reassign
    array = Array.from(localArray);
  }

  /**
   * @description perform the insertion sort on the array chunks
   * @param {*[]} array
   * @param {*} left
   * @param {*} right
   * @returns {*[]}
   */
  insertionSort(array, left, right) {
    const localArray = [...array];

    for (let index = left + 1; index <= right; index += 1) {
      const element = localArray[index];
      this.callbacks.visitingCallback(element);
      let j = index - 1;
      while (this.comparator.greaterThanOrEqual(j, left)
        && this.comparator.greaterThan(localArray[j], element)) {
        localArray[j + 1] = localArray[j];
        j -= 1;
        if (j < 0) break;
      }
      localArray[j + 1] = element;
    }
    // eslint-disable-next-line no-param-reassign
    array = localArray;
    return array;
  }
}
