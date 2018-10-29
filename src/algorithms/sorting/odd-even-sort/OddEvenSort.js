import Sort from '../Sort';

export default class OddEvenSort extends Sort {
  sort(originalArray) {
    // Clone original array to prevent its modification.
    const array = [...originalArray];
    let sorted = false;

    // Go through all array elements...
    while (!sorted) {
      sorted = true;

      // Sort all the odd indexes
      for (let i = 1; i < array.length - 1; i += 2) {
        // Call visiting callback.
        this.callbacks.visitingCallback(array[i + 1]);

        // Swap elements if they are in wrong order.
        if (this.comparator.lessThan(array[i + 1], array[i])) {
          // Swap the values
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
          sorted = false;
        }
      }

      // Sort all the even indexes
      for (let i = 0; i < array.length - 1; i += 2) {
        // Call visiting callback.
        this.callbacks.visitingCallback(array[i + 1]);

        // Swap elements if they are in wrong order.
        if (this.comparator.lessThan(array[i + 1], array[i])) {
          // Swap the values
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
          sorted = false;
        }
      }
    }
    return array;
  }
}
