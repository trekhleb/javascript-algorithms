/**
 * @param {number} number
 * @return {number}
 */
export default function factorial(number) {
  if (number < 0) throw new Error(`Factorial of a negative number (${number}) does not exist!`);
  let result = 1;

  for (let i = 2; i <= number; i += 1) {
    result *= i;
  }

  return result;
}
