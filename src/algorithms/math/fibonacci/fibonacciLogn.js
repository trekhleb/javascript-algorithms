/*
 * Calculate the Nth fibonacci number in LogN steps
 *
 * Found in exercise 1.19 of SICP
 * https://mitpress.mit.edu/sites/default/files/sicp/full-text/book/book-Z-H-11.html#%_thm_1.19
 *
 * @param {number} n
 * @return {number}
 */
export default function fibonacciLogn(n) {
  let a = 1;
  let b = 0;
  let p = 0;
  let q = 1;

  let count = n;

  while (count > 0) {
    if (count & 1) {
      const nA = (b * q) + (a * q) + (a * p);
      const nB = (b * p) + (a * q);
      a = nA;
      b = nB;
      count -= 1;
    } else {
      const nP = (q * q) + (p * p);
      const nQ = (q * q) + (q * p * 2);
      p = nP;
      q = nQ;
      count >>= 1;
    }
  }

  return b;
}
