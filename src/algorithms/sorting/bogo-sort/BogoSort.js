import Sort from '../Sort';

export default class BogoSort extends Sort {
  sort(originalArray) {
    // Clone original array to prevent its modification.
    let array = [...originalArray];
    // Flag that holds info about whether the array is sorted or not.
    let sorted = false;
    // Do while until the array is sorted.
    while(sorted == false){
      array = shuffle(array);
      sorted = isSorted(array);
    }  
    return array;
  }
  // Shuffle the array randomly.
  shuffle(array) {
    for(let j, x, i = array.length; i; j = Math.floor(Math.random() * i), x = array[--i], array[i] = array[j], array[j] = x);
    return array;
  }
  // Check whether the array is sorted or not.
  isSorted(array) {
    for(let i = 1; i < array.length; i++){
    if (array[i-1] > array[i]) { return false; }
  }
    return true;
  }
}