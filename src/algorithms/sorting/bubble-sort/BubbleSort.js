import Sort from '../Sort';

export default class BubbleSort extends Sort {
  sort(initialArray) {
    // Flag that holds info about whether the swap has occur or not.
    let swapped = false;
    // Clone original array to prevent its modification.
    const array = initialArray.slice(0);

    for (let i = 0; i < array.length; i += 1) {
      swapped = false;

      for (let j = 0; j < array.length - 1; j += 1) {
        // Call visiting callback.
        this.callbacks.visitingCallback(array[j]);

        // Swap elements if they are in wrong order.
        if (this.comparator.lessThen(array[j + 1], array[j])) {
          const tmp = array[j + 1];
          array[j + 1] = array[j];
          array[j] = tmp;

          // Register the swap.
          swapped = true;
        }
      }

      // If there were no swaps then array is already sorted and there is
      // no need to proceed.
      if (!swapped) {
        return array;
      }
    }

    return array;
  }
}
