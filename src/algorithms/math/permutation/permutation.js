import combinations from '../combination/combination';
import factorial from '../factorial/factorial';

/**
 * nPr = nCr * n!
 * @param {number} n - total number of elements
 * @param {number} r - number elements to be arranged
 */

export default function permutation(n, r) {
  return combinations(n, r) * factorial(r);
}
