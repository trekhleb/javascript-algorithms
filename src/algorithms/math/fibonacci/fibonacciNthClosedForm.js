/**
 * Calculate fibonacci number at specific position using closed form function (Binet's formula).
 * @see: https://en.wikipedia.org/wiki/Fibonacci_number#Closed-form_expression
 *
 * @param {number} position - Position number of fibonacci sequence (must be number from 1 to 75).
 * @return {number}
 */
export default function fibonacciClosedForm(position) {
  const topMaxValidPosition = 70;

  // Check that position is valid.
  if (position < 1 || position > topMaxValidPosition) {
    throw new Error(`Can't handle position smaller than 1 or greater than ${topMaxValidPosition}`);
  }

  // Calculate √5 to re-use it in further formulas.
  const sqrt5 = Math.sqrt(5);
  // Calculate φ constant (≈ 1.61803).
  const phi = (1 + sqrt5) / 2;

  // Calculate fibonacci number using Binet's formula.
  return Math.floor((phi ** position) / sqrt5 + 0.5);
}
