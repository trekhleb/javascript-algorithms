/**
 * @param {number} x - The integer to find the parity of
 * @return {boolean}
 */
export default function findIntegerParity(x) {
  if (Number.isInteger(x)) {
    if (x % 2 === 0) {
      return true; // The parity of the integer is even
    } else {
      return false; // The parity of the integer is odd
    }
  } else {
    console.error('This method only supports integers.');
  }
}
