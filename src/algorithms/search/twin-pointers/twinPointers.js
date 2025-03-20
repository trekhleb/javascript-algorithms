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
    if (comparator.lessThan(sortedArray[left] + sortedArray[right], seekElement)) {
        left++;

    // Same concept as before, only now we decrease our sum because it's greater than the target.    
    } else if (comparator.greaterThan(sortedArray[left] + sortedArray[right], seekElement)) {
        right--;
    
    // Assuming we have found our target, return left and right since they represent the indices that our correct sum is located at.
    } else {
        return [left, right]
    }
  }

  // Return -1 if we haven't found any combination of numbers that works.
  return -1;
}

/* An example of a twin pointer method on an unsorted array. In this problem, we aim to get the heighest possible area from two numbers by using the
    small of the two heights, assuming that each number n is a rectangle of 1 width and n height. (Problem and solution taken from Leetcode #11)
*/

/**
 *
 * @param {*[]} unsortedArray
 * @param {function(a, b)} [comparatorCallback]
 * @return {number}
 */

export function twinPointerUnsorted(unsortedArray, comparatorCallback) {
    const comparator = new Comparator(comparatorCallback);
  
    // Edge cases; not relevant to the pointer method.
    if (unsortedArray.length === 0) {
        return 0
    } else if (unsortedArray.length === 1) {
        return unsortedArray[0]
    }
    
    // Again, we set our two pointers to the left and rightmost elements of the array.
    let left = 0;
    let right = unsortedArray.length - 1;

    // We initialize two area variables; one for our current area between our two pointers and one for the highest that we'll return.
    let area = 0;
    let mostArea = 0;

    // Functionally equivalent to the while conditional we set in the first example.
    while (left !== right) {

        // In this situation, since we don't have a specific "target" in mind we instead compare the two values at our two pointers to each other.
        if (comparator.lessThan(unsortedArray[left], unsortedArray[right])) {
            
            // Here we simply calculate our current area and whether we need to change our highest area by comparing it with the current.
            area = (Math.min(unsortedArray[left], unsortedArray[right]) * (right - left));
            mostArea = Math.max(area, mostArea);
            
            /**
             * Again, we move the left pointer forward or the right pointer backwards. You may be thinking that this is basically the same as with the 
             * sorted array; while that is correct from a pure code standpoint, conceptually the reasoning is different. In the first example, because the array
             * is sorted we can move the left pointer forward with the knowledge that this will DEFINITELY either keep the value the same or increase it. 
             * In this situation however, our array isn't sorted and thus moving the left pointer forward isn't guaranteed to increase the value; all we know
             * is that it will change. However, because we are calculating area with the smallest height and our value (heght) at the left pointer is smaller than the right pointer,
             * we know that the ONLY way to get a higher area is if there is a potentially higher value for the left pointer.
             */
            left++;
        } else {
            area = (Math.min(unsortedArray[left], unsortedArray[right]) * (right - left));
            mostArea = Math.max(area, mostArea);
            right--;
        }
    }

    // Our greatest area should be correct since we re-state if the current area is greater.
    return mostArea
  }
