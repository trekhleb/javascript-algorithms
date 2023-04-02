/**
 * @param {number} number
 * @return {number}
 */
export default function factorialRecursive(number) {
  if (number < 0) throw new Error(`Factorial of a negative number (${number}) does not exist!`);
  return number > 1 ? number * factorialRecursive(number - 1) : 1;
}
