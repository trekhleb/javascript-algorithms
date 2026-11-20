import euclideanAlgorithm from '../euclidean-algorithm/euclideanAlgorithm';

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

export default function leastCommonMultiple(a, b) {
  // Divide first to avoid rounding an unnecessarily large intermediate product.
  return ((a === 0) || (b === 0)) ? 0 : Math.abs((a / euclideanAlgorithm(a, b)) * b);
}
