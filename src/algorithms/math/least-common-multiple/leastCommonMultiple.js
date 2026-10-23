import euclideanAlgorithm from '../euclidean-algorithm/euclideanAlgorithm';

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

export default function leastCommonMultiple(a, b) {
  // Divide first so a safe integer result does not require an unsafe intermediate product.
  return ((a === 0) || (b === 0)) ? 0 : Math.abs((a / euclideanAlgorithm(a, b)) * b);
}
