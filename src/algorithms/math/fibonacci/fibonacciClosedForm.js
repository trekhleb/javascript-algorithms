/**
 * Calculate fibonacci number at specific position using closed form function.
 *
 * @param n n-th number of fibonacci sequence (must be number from 1(inclusive) to 75(inclusive))
 * @return {number}
 */
export default function fibonacciClosedForm(n) {
  const sqrt5 = Math.sqrt(5);
  const phi = (1 + sqrt5) / 2;
  return Math.floor((phi ** n) / sqrt5 + 0.5);
}
