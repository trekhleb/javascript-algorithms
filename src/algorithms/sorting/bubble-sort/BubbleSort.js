import Sort from '../Sort';

export default class BubbleSort extends Sort {
  sort(initialArray) {
    const array = initialArray;

    for (let i = 0; i < array.length; i += 1) {
      for (let j = 0; j < array.length - 1; j += 1) {
        // Call visiting callback.
        this.callbacks.visitingCallback(array[j]);

        // Swap elements if they are in wrong order.
        if (this.comparator.lessThen(array[j + 1], array[j])) {
          const tmp = array[j + 1];
          array[j + 1] = array[j];
          array[j] = tmp;
        }
      }
    }

    return array;
  }
}
