/**
 * @param {number|bigint} numeric value to check
 * @return {boolean}
 */
export default function isPowerOfTwo(x) {
  // 1 (2^0) is the smallest power of two.
  if (x <= 1) {
    return x == 1;
  }

  // guard clause to dispatch BigInts ASAP
  if (typeof x == "bigint") {
    // the bitwise alt works for any BigInt
    // because bit operators are arbitrary-precision for them
    return (x & (x - 1n)) === 0n;
  }

  // Let's find out if we can divide the number by two
  // many times without remainder.
  let dividedNum = x / 2;
  while (dividedNum !== 1) {
    if ( !Number.isInteger(dividedNum) ) {
      /*
      For every case when quotient is non-int we can say that this number
      couldn't be a result of power of two (with integer exponent),
      because checking the fractional part of a quotient is equivalent to checking if the remainder is 0,
      and the remainder is the value of the least significant bit (with fractional part included).
      All powers of 2 (but `1`) must have consecutive trailing zeros.
      this also immediately dispatches non-int values of `x`, because neither rem nor quotient is an int
      */
      return false;
    }

    dividedNum /= 2;
  }

  return true;
}
