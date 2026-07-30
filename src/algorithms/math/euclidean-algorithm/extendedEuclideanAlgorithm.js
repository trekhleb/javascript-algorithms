/**
 * Extended Euclidean Algorithm.
 *
 * Besides the greatest common divisor (GCD) of the numbers `a` and `b` it also
 * finds the coefficients `x` and `y` of Bézout's identity:
 *
 * a * x + b * y = gcd(a, b)
 *
 * These coefficients are useful, for example, for computing modular
 * multiplicative inverses.
 *
 * @param {number} a
 * @param {number} b
 * @return {{gcd: number, x: number, y: number}}
 */
export default function extendedEuclideanAlgorithm(a, b) {
  if (b === 0) {
    // gcd(a, 0) = a, and a * 1 + 0 * 0 = a.
    // Normalize the sign so that the returned GCD is always non-negative.
    return a < 0 ? { gcd: -a, x: -1, y: 0 } : { gcd: a, x: 1, y: 0 };
  }

  // Since gcd(a, b) = gcd(b, a % b), find the coefficients (x, y)
  // for the smaller pair first: b * x + (a % b) * y = gcd.
  const { gcd, x, y } = extendedEuclideanAlgorithm(b, a % b);

  // In JavaScript `a % b === a - Math.trunc(a / b) * b`. Substituting this
  // into the identity above and regrouping the terms gives the coefficients
  // for the original pair: a * y + b * (x - Math.trunc(a / b) * y) = gcd.
  return {
    gcd,
    x: y,
    y: x - Math.trunc(a / b) * y,
  };
}
