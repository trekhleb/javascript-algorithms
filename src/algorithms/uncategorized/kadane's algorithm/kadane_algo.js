/**
 * Simplest Kadane's algorithm implementation.
 *
 * @param {*[]} array
 * @return {number[]}
 */



export default function Kadane(array) {


  // This algorithm works for both positive and negative values of the array

  let current_sum = array[0];
  let maximum_subarray_sum = array[0];

  for (let i = 1; i < array.length; i++) {
    
    /*
     * Continue the subarray sum or start a new
     * subarray sum beginning at the current element.
    */

    current_sum = Math.max(current_sum + array[i], array[i]);

    // Stores the maximum subarray sum at each iteration.

    maximum_subarray_sum = Math.max(maximum_subarray_sum, current_sum);
  }

  return maximum_subarray_sum;
}
