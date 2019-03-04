/**
 * @param {number} base
 * @param {number} exponent
 * @param {number} m
 * @return {number}
 */

export default function modularExponent(base, exponent, m) {
  let x = base;
  let y = exponent;
  let res = 1;
  const p = m;

  x %= p;

  while (y > 0) {
    if (y & 1) res = (res * x) % p;
    y >>= 1;
    x = (x * x) % p;
  }

  return res;
}
