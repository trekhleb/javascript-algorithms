/**
 * Recursive implementation to compute power.
 *
 * @param {number} number1
 * @param {number} number2
 * @return {number}
 */
export default function fastPowering(number1, number2) {
  let val = 0;
  let res = 0;
  if (number2 === 0) { // if number2 is 0
    val = 1;
  } else if (number2 === 1) { // if number2 is 1 return number 1 as it is
    val = number1;
  } else if (number2 % 2 === 0) { // if number2 is even
    res = fastPowering(number1, number2 / 2);
    val = res * res;
  } else { // if number2 is odd
    res = fastPowering(number1, Math.floor(number2 / 2));
    val = res * res * number1;
  }
  return val;
}
