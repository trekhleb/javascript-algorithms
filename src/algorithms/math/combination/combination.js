/**
 * nCr = n!/(r!*(n-r)!).
 * Number of combinations when ‘r’ elements are selected out of a total of ‘n’ elements is nCr.
 * @param {number}   n - total number of elements
 * @param {number}   r - selected elements
 * @returns {number} Number of ways selecting r elements from n elements
 */

export default function combinations(n, r) {
  let k = r;
  if (k > n) return 0;
  if (k * 2 > n) {
    k = (n - k);
  }
  if (k === 0) return 1;

  let ans = n;

  for (let i = 2; i <= k; i += 1) {
    ans *= ((n - i) + 1);
    ans /= i;
  }

  return ans;
}
