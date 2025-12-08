import euclideanAlgorithm from '../euclidean-algorithm/euclideanAlgorithm';

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export default function leastCommonMultiple(a, b) {
  return ((a === 0) || (b === 0)) ? 0 : Math.abs(a * b) / euclideanAlgorithm(a, b);
}

/**
 * @param {number[]} numbers
 * @return {number}
 */
export function leastCommonMultipleArray(numbers) {
  return numbers.reduce((acc, val) => leastCommonMultiple(acc, val), 1);
}
