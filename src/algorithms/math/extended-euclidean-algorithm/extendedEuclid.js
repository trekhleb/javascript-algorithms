/**
 * @param {number} Coefficient A
 * @param {number} Coefficient B
 * @return {Object} {gcd, x, y}
 */

export default function extendedEuclid(coeffA, coeffB) {
  if (coeffA === 0) {
    return {
      gcd: coeffB,
      x: 0,
      y: 1,
    };
  }
  const variables = extendedEuclid(coeffB % coeffA, coeffA);
  return {
    gcd: variables.gcd,
    x: (variables.y - Math.floor(coeffB / coeffA) * variables.x),
    y: variables.x,
  };
}
