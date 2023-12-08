/**
 * @param {number} a 
 * @param {number} b 
 * @param {number} c
 * @return {boolean}
 */
export default function isPythagoreanTriangle(a, b, c) {
  return (a <= 0 || b <= 0 || c <= 0) ? false : ((a * a) + (b * b) === (c * c));
}
