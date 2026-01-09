import Sort from '../Sort';

export default class CocktailShakerSort extends Sort {
  sort(originalArray) {
    // Flag that holds info about whether the swap has occur or not.
    let swapped = true;
    // Clone original array to prevent its modification.
    const array = [...originalArray];

    let start = 0;
    let end = array.length;

    while (swapped) {
      // Reset the swapped flag on entering the loop,
      // because it might be true from a previous iteration.
      swapped = false;

      // Loop forward same as the bubble sort
      for (let i = start; i < end - 1; i += 1) {
        // Call visiting callback.
        this.callbacks.visitingCallback(array[i]);

        if (this.comparator.greaterThan(array[i], array[i + 1])) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
          swapped = true;
        }
      }

      // Move the end point backward by one,
      // because the item at the end point is already in its correct position.
      end -= 1;

      // If nothing swapped, then array is sorted.
      if (swapped === false) {
        break;
      }
      
      // Reset the swapped flag so that it can be used in the next stage
      swapped = false;

      // Loop backward, doing the same comparison as in the previous stage
      for (let i = end - 1; i >= start; i -= 1) {
        // Call visiting callback.
        this.callbacks.visitingCallback(array[i]);

        if (this.comparator.greaterThan(array[i], array[i + 1])) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
          swapped = true;
        }
      }
      // Move the start point forward by one,
      // because the item at the start point is already in its correct position.
      start += 1;
  
    }
    return array;
  }
}
