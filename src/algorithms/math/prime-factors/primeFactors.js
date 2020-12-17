/**
 * Finds prime factors of a number.
 *
 * @param {number} n - the number that is going to be split into prime factors.
 * @returns {number[]} - array of prime factors.
 */
export function primeFactors(n) {
  // Clone n to avoid function arguments override.
  let nn = n;

  // Array that stores the all the prime factors.
  const factors = [];

  // Running the loop till sqrt(n) instead of n to optimise time complexity from O(n) to O(sqrt(n)).
  for (let factor = 2; factor <= Math.sqrt(nn); factor += 1) {
    // Check that factor divides n without a reminder.
    while (nn % factor === 0) {
      // Overriding the value of n.
      nn /= factor;
      // Saving the factor.
      factors.push(factor);
    }
  }

  // The ultimate reminder should be a last prime factor,
  // unless it is not 1 (since 1 is not a prime number).
  if (nn !== 1) {
    factors.push(nn);
  }

  return factors;
}

/**
 * Hardy-Ramanujan approximation of prime factors count.
 *
 * @param {number} n
 * @returns {number} - approximate number of prime factors.
 */
export function hardyRamanujan(n) {
  return Math.log(Math.log(n));
}
