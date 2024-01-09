import Comparator from '../../../utils/comparator/Comparator';

/**
 * Some twin pointer implementations.
 *
 * @param {*[]} sortedArray
 * @param {*} seekElement
 * @param {function(a, b)} [comparatorCallback]
 * @return {[number, number]}
 */

// Example of a twin pointer application in a sorted array where we are seeking the indices of two elements that sum to equal the target.
export function twinPointerSorted(sortedArray, seekElement, comparatorCallback) {
  const comparator = new Comparator(comparatorCallback);

  // These variables will be our pointers; since the array is sorted, we can set them to the left and rightmost elements.
  let left = 0;
  let right = sortedArray.length - 1

  // If our left and right pointers have met then we have iterated through the entire array.
  while (left < right) {
    
    /** 
     * If our sum is less than the target then we can increase said sum but by increasing the left value; 
     * since the array is sorted, this will always result in array[left] becoming a larger number.
    */
    if (comparator.lessThan(sortedArray[left] + sortedarray[right], seekElement)) {
        left++;

    // Same concept as before, only now we decrease our sum because it's greater than the target.    
    } else if (comparator.greaterThan(sortedArray[left] + sortedarray[right], seekElement)) {
        right--;
    
    // Assuming we have found our target, return left and right since they represent the indices that our correct sum is located at.
    } else {
        return [left, right]
    }
  }

  // Return [0, 0] (an impossible answer due to our while loop) if we haven't found any combination of numbers that works.
  return [0, 0];
}

// An example of a twin pointer method on an unsorted array.
export function twinPointerUnsorted(sortedArray, seekElement, comparatorCallback) {
    const comparator = new Comparator(comparatorCallback);
  
    // These variables will be our pointers; since the array is sorted, we can set them to the left and rightmost elements.
    let left = 0;
    let right = sortedArray.length - 1
  
    // If our left and right pointers have met then we have iterated through the entire array.
    while (left < right) {
      
      /** 
       * If our sum is less than the target then we can increase said sum but by increasing the left value; 
       * since the array is sorted, this will always result in array[left] becoming a larger number.
      */
      if (comparator.lessThan(sortedArray[left] + sortedarray[right], seekElement)) {
          left++;
  
      // Same concept as before, only now we decrease our sum because it's greater than the target.    
      } else if (comparator.greaterThan(sortedArray[left] + sortedarray[right], seekElement)) {
          right--;
      
      // Assuming we have found our target, return left and right since they represent the indices that our correct sum is located at.
      } else {
          return [left, right]
      }
    }
  
    // Return [0, 0] (an impossible answer due to our while loop) if we haven't found any combination of numbers that works.
    return [0, 0];
  }
