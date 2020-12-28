import Sort from '../Sort';

export default class InsertionSort extends Sort {
  sort(originalArray) {
    const array = [...originalArray];

    // Go through all array elements...
    for (let i = 0; i < array.length; i += 1) {
      let currentIndex = i;
      const valueAtIndex = array[i];

      // Call visiting callback.
      this.callbacks.visitingCallback(array[i]);

      // Go and check if previous elements and greater then current one.
      // If this is the case then swap that elements.
      while (currentIndex > 0
        && this.comparator.lessThan(valueAtIndex, array[currentIndex - 1])
      ) {
        // Call visiting callback.
        this.callbacks.visitingCallback(array[currentIndex - 1]);

        array[currentIndex] = array[currentIndex - 1];

        // Shift current index left.
        currentIndex -= 1;
      }

      array[currentIndex] = valueAtIndex;
    }

    return array;
  }
}
