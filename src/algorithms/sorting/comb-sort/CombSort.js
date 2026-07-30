import Sort from '../Sort';

export default class CombSort extends Sort {
  sort(originalArray) {
    // Clone original array to prevent its modification.
    const array = [...originalArray];

    // Gap sequence shrink factor (empirically found to be ~1.3)
    const shrinkFactor = 1.3;

    // Initialize gap as array length
    let gap = array.length;

    // Initialize swapped as true to enter the loop
    let swapped = true;

    // Keep iterating while gap is greater than 1 or there was a swap
    while (gap > 1 || swapped) {
      // Update gap using shrink factor
      gap = Math.floor(gap / shrinkFactor);

      // Ensure gap is at least 1
      if (gap < 1) {
        gap = 1;
      }

      // Reset swapped flag
      swapped = false;

      // Compare elements with current gap
      for (let i = 0; i + gap < array.length; i += 1) {
        // Call visiting callback.
        this.callbacks.visitingCallback(array[i]);

        // Compare elements at distance of gap
        if (this.comparator.lessThan(array[i + gap], array[i])) {
          // Swap elements
          [array[i], array[i + gap]] = [array[i + gap], array[i]];

          // Mark that a swap occurred
          swapped = true;
        }
      }
    }

    return array;
  }
}
