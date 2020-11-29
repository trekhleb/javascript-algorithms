/**
 * @param {number} x - The decimal to find the parity of
 * @return {boolean}
 */
export default function findDecimalParity(x) {
  if (!Number.isInteger(x)) {
    var lastDigit = x.toString().slice(-1);
    if (Number(lastDigit) % 2 === 0) {
      return true; // The parity of the decimal is even
    } else {
      return false; // The parity of the decimal is odd
    }
  } else {
    console.error('This method only supports decimals.');
  }
}
