/**
 * @param {number} number
 * @param {number} power
 * @return {number}
 */

function difference(num, mid, p) {
  return Math.abs(num - (mid ** p));
}

export default function nthRoot(number, p) {
  let start = 0.0;
  let end = number;
  const e = 0.000000001;
  while (true) {
    const mid = (start + end) / 2;
    const error = difference(number, mid, p);
    if (error <= e) return mid;
    if (mid ** p > number) end = mid;
    else start = mid;
  }
}
