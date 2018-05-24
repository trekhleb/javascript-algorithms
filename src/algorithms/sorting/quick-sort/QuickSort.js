import Sort from '../Sort';

export default class QuickSort extends Sort {
  sort(originalArray) {
    // Clone original array to prevent it from modification.
    const array = [...originalArray];

    // If array has less then or equal to one elements then it is already sorted.
    if (array.length <= 1) {
      return array;
    }

    // Init left and right arrays.
    const leftArray = [];
    const rightArray = [];

    // Take the first element of array as a pivot.
    const pivotElement = array.shift();
    const centerArray = [pivotElement];

    // Split all array elements between left, center and right arrays.
    while (array.length) {
      const currentElement = array.shift();

      // Call visiting callback.
      this.callbacks.visitingCallback(currentElement);

      if (this.comparator.equal(currentElement, pivotElement)) {
        centerArray.push(currentElement);
      } else if (this.comparator.lessThan(currentElement, pivotElement)) {
        leftArray.push(currentElement);
      } else {
        rightArray.push(currentElement);
      }
    }

    // Sort left and right arrays.
    const leftArraySorted = this.sort(leftArray);
    const rightArraySorted = this.sort(rightArray);

    // Let's now join sorted left array with center array and with sorted right array.
    return leftArraySorted.concat(centerArray, rightArraySorted);
  }
  
  /*
    While not always appropriate for the job at hand, if you don't mind modifying the input array, 
    sorting in place offers space benefits, and while it doesn't change the time comlexity, it is 
    usually more performant
  */
  sortInPlace(array, low, high) {
    
    // Helper function
    const partition = (arr, l, h) => {
      
      // Helper function
      const swap = (a, left, right) => {
        const tempVariable = a[left];
        a[left] = a[right];
        a[right] = tempVariable;
      }
      
      const pivot = arr[h];
      let firstRunner = l - 1;
      
      for (let secondRunner = l; secondRunner < h; secondRunner += 1) {
        /*
          If `secondRunner` - `firstRunner` is 1, then element at index `secondRunner` swaps with itself. Regardless, swapping
          elements increments firstRunner
        */
        if (arr[secondRunner] < pivot) {
          firstRunner += 1;
          swap(arr, firstRunner, secondRunner);
        }
      }
      
      /*
        This process is difficult to describe, but much clearer with a visualization:
        http://www.algomation.com/algorithm/quick-sort-visualization
      */
      if (arr[firstRunner + 1] > pivot) {
        swap(arr, firstRunner + 1, h);
      }
      
      return firstRunner + 1;
    };
    
    /*
      While we can use a default parameter to set `low` to 0, we would still have to set `high`'s default within the function 
      as we don't have access to `array.length - 1` when declaring paramaters
    */
    low = low === undefined ? 0 : low;
    high = high === undefined ? array.length - 1 : high;
    
    // Base case is when low and high converge
    if (low < high) {
      const partitionIndex = partition(array, low, high);
      /*
        `partition()` swaps elements of the array based on their comparison to the `hi` parameter, and then returns the index
        where swapping is no longer necessary, which can be best thought of as the pivot used to split an array in a
        non-in-place quicksort
      */
      this.sortInPlace(array, low, partitionIndex - 1);
      this.sortInPlace(array, partitionIndex + 1, high);
    }
  }
}
