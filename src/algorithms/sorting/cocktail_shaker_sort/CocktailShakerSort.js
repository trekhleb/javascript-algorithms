import Sort from '../Sort';

export default class SelectionSort extends Sort {
  sort(originalArray) {
    // Clone original array to prevent modification.
    const array = [...originalArray];

    for (let i = 0; i < array.length - 1; i += 1) {
      let minIndex = i;

      // Perform visiting callback for the current element being processed.
      this.callbacks.visitingCallback(array[i]);

      // Find the index of the minimum element in the remaining unsorted part of the array.
      for (let j = i + 1; j < array.length; j += 1) {
        // Perform visiting callback for the element being compared.
        this.callbacks.visitingCallback(array[j]);

        if (this.comparator.lessThan(array[j], array[minIndex])) {
          minIndex = j;
        }
      }

      // Swap the current element with the minimum element found, if necessary.
      if (minIndex !== i) {
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
      }
    }

    return array;
  }
}
