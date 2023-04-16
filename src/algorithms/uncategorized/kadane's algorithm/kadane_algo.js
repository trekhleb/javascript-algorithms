/**
 * Simplest Kadane's algorithm implementation.
 *
 * @param {*[]} array
 * @return {number[]}
 */

export default function kadane() {
  let current_sum = array[0];
  let maximum_subarray_sum = array[0];

  for (let i = 0; i < array.length; i++) {
    current_sum = max(current_sum + array[i], array[i]);
    maximum_subarray_sum = max(maximum_subarray_sum, current_sum);
  }

  return maximum_subarray_sum;
}
