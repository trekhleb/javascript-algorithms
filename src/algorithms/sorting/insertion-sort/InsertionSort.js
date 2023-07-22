import Sort from '../Sort';

export default class InsertionSort extends Sort {
  sort(originalArray) {
    const array = [...originalArray];

    // Go through all array elements...
    for (let i = 1; i < array.length; i += 1) {
      let j = i;

      // Call visiting callback.
      this.callbacks.visitingCallback(array[i]);

      // Check if previous element is greater than current element.
      // If so, swap the two elements.
      while (
        array[j - 1] !== undefined
        && this.comparator.lessThan(array[j], array[j - 1])
      ) {
        // Call visiting callback.
        this.callbacks.visitingCallback(array[j - 1]);

        // Swap the elements.
        [array[j - 1], array[j]] = [array[j], array[j - 1]];

        // Shift current index left.
        j -= 1;
      }
    }

    return array;
  }
}
