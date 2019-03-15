/**
 * Return the number represented in a base which is a power of 2
 * For example given x >= 0, it can be rewritten in base 2 ** k as:
 * x = xn * ((2 ** k) ** n) + ... + x0 * ((2 ** k) ** 0)
 *   where
 *     0 <= xn, ... , x0 <= (2 ** k) - 1
 *     x < (2 ** k) ** (n + 1)
 *
 * @param {number} number
 * @param {number} number
 * @return {number[]}
 */

export default function bitPartition(num, bits) {
  const mask = (1 << bits) - 1;

  // find shift
  // where
  //   shift = n * bits
  //   num < (2 ** bits) ** (n + 1)
  let n = 0;
  while (num >= (2 ** bits) ** (n + 1)) {
    n += 1;
  }

  const xs = [];
  for (let shift = bits * n; shift >= 0; shift -= bits) {
    xs.push((num >>> shift) & mask);
  }

  return xs;
}
