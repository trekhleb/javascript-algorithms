/**
 * @param {number} decimal number
 * @return {number} binary number
 */
// to check if the entered number is a decimal number
function checkIfDecimal(decimalNumber) {
  return !Number.isNaN(parseInt(decimalNumber, 10));
}

export default function decimalToBinary(decimalNumbers) {
  const binaryNumber = [];
  let decimalNumber = decimalNumbers;
  const checkForDecimal = checkIfDecimal(decimalNumber);
  if (checkForDecimal) {
    while (decimalNumber > -1) {
      if (decimalNumber > 1) {
        binaryNumber.push(decimalNumber % 2);
        decimalNumber = parseInt(decimalNumber / 2, 10);
      } else {
        binaryNumber.push(decimalNumber);
        return parseInt(binaryNumber.reverse().join(''), 10);
      }
    }
  } else {
    return 'Enter a valid decimal number';
  }
  return parseInt(binaryNumber.reverse().join(''), 10);
}
