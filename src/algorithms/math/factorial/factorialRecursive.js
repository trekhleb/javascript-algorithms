/**
 * @param {number} number
 * @return {number}
 * @throws {Error} if number is negative
 */
export default function factorialRecursive(number) {
  if (number < 0) {
    throw new Error('Factorial is not defined for negative numbers.');
  }
  return number > 1 ? number * factorialRecursive(number - 1) : 1;
}
