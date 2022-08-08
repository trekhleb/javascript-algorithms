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
      // reset the swapped flag on entering the loop, because it might be true from a previous iteration.
      swapped = false;

      // loop forward same as the bubble sort
      for (let i = start; i < end - 1; i++) {
        // Call visiting callback.
        this.callbacks.visitingCallback(array[i]);

        if (this.comparator.greaterThan(array[i], array[i + 1])) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
          swapped = true;
        }
      }

      // move the end point backward by one, because the item at the end point is already in its correct position.
      end --;

      // if nothing swapped, then array is sorted.
      if (swapped == false) 
        break;

      // reset the swapped flag so that it can be used in the next stage
      swapped = false;

      // loop backward, doing the same comparison as in the previous stage
      for (let i = end - 1; i >= start; i--) {
        // Call visiting callback.
        this.callbacks.visitingCallback(array[i]);

        if (this.comparator.greaterThan(array[i], array[i + 1])) {
          [array[i], array[i + 1]] = [array[i + 1], array[i]];
          swapped = true;
        }
      }

      // move the start point forward by one, because the item at the start point is already in its correct position.
      start ++;
      
    }
    return array;
  }
}
