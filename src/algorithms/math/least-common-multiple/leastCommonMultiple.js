import euclideanAlgorithm from '../euclidean-algorithm/euclideanAlgorithm';

/**
 * Finds the LCM of an array of numbers.
 * @param {number[]} arr - Array of numbers
 * @return {number} - LCM of the entire array
 */
export default function leastCommonMultipleArray(arr) {
  if (arr.length === 0) return 0;

  return arr.reduce((lcm, num) => leastCommonMultiple(lcm, num), 1);
}
