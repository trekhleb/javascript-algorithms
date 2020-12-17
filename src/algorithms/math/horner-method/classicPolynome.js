/**
 * Returns the evaluation of a polynomial function at a certain point.
 * Uses straightforward approach with powers.
 *
 * @param {number[]} coefficients - i.e. [4, 3, 2] for (4 * x^2 + 3 * x + 2)
 * @param {number} xVal
 * @return {number}
 */
export default function classicPolynome(coefficients, xVal) {
  return coefficients.reverse().reduce(
    (accumulator, currentCoefficient, index) => {
      return accumulator + currentCoefficient * (xVal ** index);
    },
    0,
  );
}
