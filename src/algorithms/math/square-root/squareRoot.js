/**
 * Calculates the square root of the number with given tolerance (precision)
 * by using Newton's method.
 *
 * @param number - the number we want to find a square root for.
 * @param [tolerance] - how many precise numbers after the floating point we want to get.
 * @return {number}
 */
export default function squareRoot(number, tolerance = 0) {
  // For now we won't support operations that involves manipulation with complex numbers.
  if (number < 0) {
    throw new Error('The method supports only positive integers');
  }

  // Handle edge case with finding the square root of zero.
  if (number === 0) {
    return 0;
  }

  // We will start approximation from value 1.
  let root = 1;

  // Delta is a desired distance between the number and the square of the root.
  // - if tolerance=0 then delta=1
  // - if tolerance=1 then delta=0.1
  // - if tolerance=2 then delta=0.01
  // - and so on...
  const requiredDelta = 1 / (10 ** tolerance);

  // Approximating the root value to the point when we get a desired precision.
  while (Math.abs(number - (root ** 2)) > requiredDelta) {
    // Newton's method reduces in this case to the so-called Babylonian method.
    // These methods generally yield approximate results, but can be made arbitrarily
    // precise by increasing the number of calculation steps.
    root -= ((root ** 2) - number) / (2 * root);
  }

  // Cut off undesired floating digits and return the root value.
  return Math.round(root * (10 ** tolerance)) / (10 ** tolerance);
}
