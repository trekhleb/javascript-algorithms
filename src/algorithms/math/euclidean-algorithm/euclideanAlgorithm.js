/**
 * @param {number} originalA
 * @param {number} originalB
 * @return {number|null}
 */
export default function euclideanAlgorithm(originalA, originalB) {
  const a = Math.abs(originalA);
  const b = Math.abs(originalB);

  if (a === 0 && b === 0) {
    return null;
  }

  if (a === 0 && b !== 0) {
    return b;
  }

  if (a !== 0 && b === 0) {
    return a;
  }

  // Normally we need to do subtraction (a - b) but to prevent
  // recursion occurs to often we may shorten subtraction to (a % b).
  // Since (a % b) is normally means that we've subtracted b from a
  // many times until the difference became less then a.

  if (a > b) {
    return euclideanAlgorithm(a % b, b);
  }

  return euclideanAlgorithm(b % a, a);
}
