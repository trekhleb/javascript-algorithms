import Sort from '../Sort';

export default class BogoSort extends Sort {
  sort(originalArray) {
    // Clone original array to prevent its modification.
    let array = [...originalArray];

    while (!this.isSorted(array)) { // Verification if is sorted
      array = [...this.shuffle(array)]; // Execute shuffle
    }

    return array;
  }

  isSorted(array) {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i - 1] > array[i]) {
        return false;
      }
    }
    return true;
  }

  shuffle(array) {
    const newArray = [...array];
    let count = array.length;
    let index;
    let aux;

    while (count > 0) {
      index = Math.floor(Math.random() * count);
      count -= 1;

      aux = newArray[count];
      newArray[count] = newArray[index];
      newArray[index] = aux;
    }

    return newArray;
  }
}
