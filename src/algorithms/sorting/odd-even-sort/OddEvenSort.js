import Sort from '../Sort';

export default class OddEvenSort extends Sort {
  swap(array, i, j){
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  sort(originalArray) {
    // Clone original array to prevent its modification.
    const array = [...originalArray];
    const sorted = false;

    // Go through all array elements...
    while (!sorted) {
      sorted = true;
      for(let i = 1; i < array.length; i+2){
        // Call visiting callback.
        this.callbacks.visitingCallback(array[i]);
        if(array[i] > array[i+1]){
          swap(array, i, i+1);
          sorted = false;
        }
      }
      for(let i = 0; i < array.length - 1; i+2){
        // Call visiting callback.
        this.callbacks.visitingCallback(array[i]);
        if(array[i] > array[i+1]){
          swap(array, i, i+1);
          sorted = false;
        }
      }
    }
    return array;
  }
}
