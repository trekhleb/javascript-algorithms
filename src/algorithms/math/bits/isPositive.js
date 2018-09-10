/**
 * @param {number} number
 * @return {boolean}
 */
export default function isPositive(number) {
  // Zero is neither a positive nor a negative number
  if (number === 0) {
    return false;
  }

  // The most signification bit can be used to determine whether .
  return ((number >> 31) & 1) === 0;
}
