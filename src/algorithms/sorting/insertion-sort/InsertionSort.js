/* eslint-disable linebreak-style */
import Sort from '../Sort';

export default class InsertionSort extends Sort {
  sort(originalArray) {
    const array = [...originalArray];
    const n = array.length;
    // Go through all array elements...
    for (let i = 1; i < n; i += 1) {
      let currentIndex = i - 1;
      const selected = array[i];
      this.callbacks.visitingCallback(array[i]);
      // Get selected item location.
      const location = this.binarySearch(array, selected, 0, currentIndex);
      while (location <= currentIndex) {
        // Swap the elements.
        this.callbacks.visitingCallback(array[currentIndex]);
        array[currentIndex + 1] = array[currentIndex];
        // Shift current index left.
        currentIndex -= 1;
      }

      array[currentIndex + 1] = selected;
    }
    return array;
  }

  binarySearch(array, item, low, high) {
    if (high <= low) return (this.comparator.lessThanOrEqual(array[low], item)) ? (low + 1) : low;

    const mid = Math.floor((low + high) / 2);

    if (this.comparator.equal(item, array[mid])) return mid + 1;

    if (this.comparator.lessThan(array[mid], item)) {
      return this.binarySearch(array, item, mid + 1, high);
    }
    return this.binarySearch(array, item, low, mid - 1);
  }
}
