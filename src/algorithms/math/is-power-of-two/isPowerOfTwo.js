/**
 * @param {number} number
 * @return {boolean}
 */
export default function isPowerOfTwo(number) {
  // Don't work with negative numbers.
  if (number < 0) {
    throw new Error('Please provide positive number');
  }

  // 0 and 1 are not powers of two.
  if (number <= 1) {
    return false;
  }

  // Let's find out if we can divide the number by two
  // many times without remainder.
  let dividedNumber = number;
  while (dividedNumber !== 1) {
    if (dividedNumber % 2 !== 0) {
      // For every case when remainder isn't zero we can say that this number
      // couldn't be a result of power of two.
      return false;
    }

    dividedNumber /= 2;
  }

  return true;
}
