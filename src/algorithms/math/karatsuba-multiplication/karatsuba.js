/**
 *
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
export default function karatsuba(x, y) {
  // BASE CASE:
  // if numbers are sufficiently small,
  // multiply them together in the traditional way
  if (x < 10 || y < 10) {
    return x * y;
  }

  const minDigits = Math.min(
    String(x).length,
    String(y).length,
  );

  // scaleFactor is used to split the numbers
  // into smaller numbers for recursion.
  // when combining the subcomputations back
  // together, the scaleFactor is used to
  // recreate the components of the original number
  const scaleFactor = 10 ** Math.floor(minDigits / 2);

  // a b are the two components of x
  // c d are the two components of y
  //
  // e.g.
  // x = 1234 -> a = 12, b = 34
  // y = 5678 -> c = 56, d = 78
  //
  // example of component computations:
  // x = 1234, y = 5678
  // scaleFactor = 100
  // a = floor(1234 / 100) = floor(12.34) = 12
  const a = Math.floor(x / scaleFactor);

  // b = 1234 - (12 * 100) = 1234 - 1200 = 34
  const b = x - (a * scaleFactor);

  // c = floor(5678 / 100) = floor(56.78) = 56
  const c = Math.floor(y / scaleFactor);

  // d = 5678 - (56 * 100) = 5678 - 5600 = 78
  const d = y - (c * scaleFactor);

  // compute sub-expressions:
  // since a + b is less than x, and c + d is less than y
  // the recursion is guaranteed to reach the base case
  const ac = karatsuba(a, c);
  const bd = karatsuba(b, d);
  const abcd = karatsuba(a + b, c + d);

  // combine sub-expressions:
  // since the scaleFactor was used to
  // artificially reduce the size of the components,
  // the scaleFactor must be applied in reverse
  // to reconstruct the original components
  const A = ac * (scaleFactor ** 2);
  const B = (abcd - ac - bd) * scaleFactor;
  const C = bd;

  return A + B + C;
}
