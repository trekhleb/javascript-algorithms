/**
 * @param {number} a
 * @param {number} b
 * @return {number|null}
 */
export default function euclideanAlgorithm(a, b) {
  if (a === 0 && b === 0) {
    return null;
  }

  if (a === 0 && b !== 0) {
    return b;
  }

  if (a !== 0 && b === 0) {
    return a;
  }

  if (a > b) {
    return euclideanAlgorithm(a - b, b);
  }

  return euclideanAlgorithm(b - a, a);
}
