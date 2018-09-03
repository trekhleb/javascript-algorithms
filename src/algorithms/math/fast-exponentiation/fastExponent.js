/**
 * @param {number} base
 * @param {number} exponent
 * @return {number}
 */

export default function fastExponent(base, exponent) {
  let x = base;
  let y = exponent;
  let res = 1;


  while (y > 0) {
    if (y & 1) res *= x;
    y >>= 1;
    x *= x;
  }

  return res;
}
