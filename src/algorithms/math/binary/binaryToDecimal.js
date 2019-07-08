/**
 * @param {number} binary number
 * @return {number} decimal number
 */
// function to check if the number entered is binary
function checkIfBinary(binaryString) {
  for (let i = 0; i < binaryString.length; i += 1) {
    if (binaryString[i] > 1) {
      return false;
    }
  }
  return true;
}

export default function binaryToDecimal(binaryNumber) {
  const binaryString = binaryNumber.toString();
  let decimalNumber = 0;
  // checks if the number entered is binary
  const checkForBinary = checkIfBinary(binaryString);
  if (binaryString.length !== 0 && checkForBinary === true) {
    for (let i = 0; i < binaryString.length; i += 1) {
      decimalNumber += binaryString[binaryString.length - 1 - i] * (2 ** i);
    }
  } else {
    return 'Enter the valid number';
  }
  return decimalNumber;
}
