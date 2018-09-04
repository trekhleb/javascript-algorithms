/**
 * @param {number1} number
 * @param {number2} number
 * @return {number1^number2}
 */

// recursive implementation to compute power
export default function computePower(number1, number2) {
  let val = 0;
  let res = 0;
  if (number2 === 0) { // if number2 is 0
    val = 1;
  } else if (number2 === 1) { // if number2 is 1 return number 1 as it is
    val = number1;
  } else if (number2 % 2 === 0) { // if number2 is even
    res = computePower(number1, number2 / 2);
    val = res * res;
  } else { // if number2 is odd
    res = computePower(number1, Math.floor(number2 / 2));
    val = res * res * number1;
  }
  return val;
}
