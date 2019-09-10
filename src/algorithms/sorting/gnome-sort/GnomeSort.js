import Sort from '../Sort';

export default class GnomeSort extends Sort {
  /**
   * @param {number[]} originalArray
   */
  sort(originalArray) {
    const sortedArray = originalArray;

    // Variable that will be itering during loop
    let index = 0;

    // Loop for sort the array
    while (index < originalArray.length) {
      // Detects the first iteration
      if (index === 0) {
        index += 1;
      }

      // Detects if the current position is smaller of previous
      if (originalArray[index] >= originalArray[index - 1]) {
        index += 1;
      } else {
        // Change the position of current position for before
        sortedArray[index] = originalArray[index - 1];
        sortedArray[index - 1] = originalArray[index];
        index -= 1;
      }
    }

    return sortedArray;
  }
}
