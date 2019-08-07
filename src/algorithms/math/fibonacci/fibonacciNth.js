/**
 * Calculate fibonacci number at specific position using Dynamic Programming approach.
 *
 * @param n
 * @return {number}
 */
export default function fibonacciNth(n) {
  let currentValue = 1;
  let previousValue = 0;

  // Throw error if index is not correct
  if (n < 1) {
    throw new Error('Cannot have values less than 1');
  }

  let iterationsCounter = n - 1;

  while (iterationsCounter) {
    currentValue += previousValue;
    previousValue = currentValue - previousValue;

    iterationsCounter -= 1;
  }

  return currentValue;
}
