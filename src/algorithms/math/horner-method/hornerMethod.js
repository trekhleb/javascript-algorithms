/**
 * Returns the evaluation of a polynomial function at a certain point.
 * Uses Horner's rule.
 * @param {number[]} numbers
 * @return {number}
 */
export default function hornerMethod(numbers, point) {
  // polynomial function is just a constant.
  if (numbers.length === 1) {
    return numbers[0];
  }
  return numbers.reduce((accumulator, currentValue, index) => {
    return index === 1
      ? numbers[0] * point + currentValue
      : accumulator * point + currentValue;
  });
}
