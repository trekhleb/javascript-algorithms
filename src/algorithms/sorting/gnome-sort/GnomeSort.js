import Sort from '../Sort';

export default class GnomeSort extends Sort {
  /**
   * @param {number[]} originalArray
   */
  sort(originalArray) {
    // Variable that will be itering during loop
    let index = 0;

    // Loop for sort the array
    while (index < originalArray.length) {
      // Detects the first iteration
      if (index === 0) {
        index++;
      }

      // Detects if the current position is smaller of previous
      if (originalArray[index] >= originalArray[index - 1]) {
        index++;
      } else {
        // Change the position of current position for before
        const temp = originalArray[index];
        originalArray[index] = originalArray[index - 1];
        originalArray[index - 1] = temp;
        index--;
      }
    }

    const sortedArray = originalArray;
    return sortedArray;
  }
}
