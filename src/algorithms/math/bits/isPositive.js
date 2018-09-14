/**
 * @param {number} number - 32-bit integer.
 * @return {boolean}
 */
export default function isPositive(number) {
  // Zero is neither a positive nor a negative number.
  if (number === 0) {
    return false;
  }

  // The most significant 32nd bit can be used to determine whether the number is positive.
  return ((number >> 31) & 1) === 0;
}
