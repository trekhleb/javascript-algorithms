import Sort from '../Sort';

export default class GnomeSort extends Sort {
  /**
   * @param {number[]} originalArray
   */
  sort(originalArray) {
    const sortedArray = originalArray.map(element => element);

    // Variable that will be itering during loop
    let index = 0;

    if (sortedArray.length <= 1) {
      return sortedArray;
    }

    // Loop for sort the array
    while (index < sortedArray.length) {
      // Detects the first iteration
      if (index === 0) {
        index += 1;
      }

      // Detects if the current position is smaller of previous
      if (sortedArray[index] >= sortedArray[index - 1]) {
        index += 1;
      } else {
        // Change the position of current position for before
        const temp = sortedArray[index];
        sortedArray[index] = sortedArray[index - 1];
        sortedArray[index - 1] = temp;
        index -= 1;
      }
    }

    return sortedArray;
  }
}
