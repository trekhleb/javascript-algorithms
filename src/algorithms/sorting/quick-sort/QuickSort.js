import Sort from '../Sort';

export default class QuickSort extends Sort {
  /**
   * @param {*[]} originalArray
   * @return {*[]}
   */
  sort(originalArray) {
    // Clone original array to prevent it from modification.
    const array = [...originalArray];

    // If array has less than or equal to one elements then it is already sorted.
    if (array.length <= 1) {
      return array;
    }

    // Init left, center, and right arrays.
    const leftArray = [];
    const rightArray = [];
    const centerArray = [];

    // Take the median element of first, mid, and last elements.
    let pivotElement = array[0];
    const mid = Math.floor(array.length / 2);
    if ((this.comparator.lessThan(array[mid], array[array.length - 1])
        && this.comparator.greaterThan(array[mid], array[0]))
      || (this.comparator.greaterThan(array[mid], array[array.length - 1])
        && this.comparator.lessThan(array[mid], array[0]))) {
      pivotElement = array[mid];
    } else if ((this.comparator.lessThan(array[array.length - 1], array[mid])
        && this.comparator.greaterThan(array[array.length - 1], array[0]))
      || (this.comparator.greaterThan(array[array.length - 1], array[mid])
        && this.comparator.lessThan(array[array.length - 1], array[0]))) {
      pivotElement = array[array.length - 1];
    }

    // Split all array elements between left, center and right arrays.
    while (array.length) {
      const currentElement = array.shift();

      // Call visiting callback.
      this.callbacks.visitingCallback(currentElement);

      if (this.comparator.equal(currentElement, pivotElement)) {
        centerArray.push(currentElement);
      } else if (this.comparator.lessThan(currentElement, pivotElement)) {
        leftArray.push(currentElement);
      } else {
        rightArray.push(currentElement);
      }
    }

    // Sort left and right arrays.
    const leftArraySorted = this.sort(leftArray);
    const rightArraySorted = this.sort(rightArray);

    // Let's now join sorted left array with center array and with sorted right array.
    return leftArraySorted.concat(centerArray, rightArraySorted);
  }
}
