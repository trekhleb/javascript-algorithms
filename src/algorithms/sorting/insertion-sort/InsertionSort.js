import Sort from '../Sort';

export default class InsertionSort extends Sort {
  sort(originalArray) {
    const array = [...originalArray];

    // Go through all array elements...
    for (let i = 0; i < array.length; i += 1) {
      let currentIndex = i;

      const temp = array[currentIndex];

      // Call visiting callback.
      this.callbacks.visitingCallback(array[i]);

      // Go and check if previous elements and greater then current one.
      // If this is the case then swap that elements.
      while (
        currentIndex > 0 &&
        this.comparator.lessThan(temp, array[currentIndex - 1])
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
