import Sort from '../Sort';

export default class InsertionSort extends Sort {
  sort(originalArray) {
    const array = [...originalArray];

    // Go through all array elements...
    for (let i = 1; i < array.length; i += 1) {
      let currentIndex = i;

      const temp = array[currentIndex];

      // Call visiting callback.
      this.callbacks.visitingCallback(array[i]);

      // Check if previous element is greater than current element.
      // If so, swap the two elements.
      while (
        currentIndex > 0
        && this.comparator.lessThan(temp, array[currentIndex - 1])
      ) {
        // Call visiting callback.
        this.callbacks.visitingCallback(array[currentIndex - 1]);

        // Swap the elements.
        array[currentIndex] = array[currentIndex - 1];

        // Shift current index left.
        currentIndex -= 1;
      }

      array[currentIndex] = temp;
    }

    return array;
  }
}