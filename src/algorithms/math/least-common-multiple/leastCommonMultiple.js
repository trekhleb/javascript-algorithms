import euclideanAlgorithm from '../euclidean-algorithm/euclideanAlgorithm';

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */

export default function leastCommonMultiple(a, b) {
  if (a === 0 && b === 0) {
    return 0;
  }

  return Math.abs(a * b) / euclideanAlgorithm(a, b);
}
