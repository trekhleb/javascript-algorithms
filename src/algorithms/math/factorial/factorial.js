/**
 * @param {number} number
 * @return {number}
 */
export default function factorial(number) {
  // Factorial is not defined for negative numbers.
  if (number < 0) {
    throw new Error('Factorial is not defined for negative numbers');
  }

  let result = 1;

  for (let i = 2; i <= number; i += 1) {
    result *= i;
  }

  return result;
}
