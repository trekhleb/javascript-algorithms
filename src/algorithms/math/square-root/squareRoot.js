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

  // We will start approximation from value 1. After the first Newton step the
  // approximation is never below the real root (AM-GM inequality), and every
  // next step moves it down towards the root. So we iterate while it keeps
  // decreasing, which gives the root with full floating point precision.
  //
  // Stopping when |number - root^2| <= delta is not enough: that bounds the error
  // of the square, not of the root, and gives e.g. squareRoot(6) = 3.
  let root = (1 + number) / 2;

  // Newton's method reduces in this case to the so-called Babylonian method.
  let nextRoot = (root + (number / root)) / 2;
  while (nextRoot < root) {
    root = nextRoot;
    nextRoot = (root + (number / root)) / 2;
  }

  // Cut off undesired floating digits and return the root value.
  return Math.round(root * (10 ** tolerance)) / (10 ** tolerance);
}
