/**
 * Sequence of 0s and 1s.
 * @typedef {number[]} Bits
 */

/**
 * @typedef {{
 *   signBitsCount: number,
 *   exponentBitsCount: number,
 *   fractionBitsCount: number,
 * }} PrecisionConfig
 */

/**
 * @typedef {{
 *   half: PrecisionConfig,
 *   single: PrecisionConfig,
 *   double: PrecisionConfig
 * }} PrecisionConfigs
 */

/**
 * ┌───────────────── sign bit
 * │   ┌───────────── exponent bits
 * │   │       ┌───── fraction bits
 * │   │       │
 * X XXXXX XXXXXXXXXX
 *
 * @type {PrecisionConfigs}
 */
const precisionConfigs = {
  // @see: https://en.wikipedia.org/wiki/Half-precision_floating-point_format
  half: {
    signBitsCount: 1,
    exponentBitsCount: 5,
    fractionBitsCount: 10,
  },
  // @see: https://en.wikipedia.org/wiki/Single-precision_floating-point_format
  single: {
    signBitsCount: 1,
    exponentBitsCount: 8,
    fractionBitsCount: 23,
  },
  // @see: https://en.wikipedia.org/wiki/Double-precision_floating-point_format
  double: {
    signBitsCount: 1,
    exponentBitsCount: 11,
    fractionBitsCount: 52,
  },
};

/**
 * Converts the binary representation of the floating point number to decimal float number.
 *
 * @param {Bits} bits - sequence of bits that represents the floating point number.
 * @param {PrecisionConfig} precisionConfig - half/single/double precision config.
 * @return {number} - floating point number decoded from its binary representation.
 */
function bitsToFloat(bits, precisionConfig) {
  const { signBitsCount, exponentBitsCount } = precisionConfig;

  // Figuring out the sign.
  const sign = (-1) ** bits[0]; // -1^1 = -1, -1^0 = 1

  // Calculating the exponent value.
  const exponentBias = 2 ** (exponentBitsCount - 1) - 1;
  const exponentBits = bits.slice(signBitsCount, signBitsCount + exponentBitsCount);
  const exponentUnbiased = exponentBits.reduce(
    (exponentSoFar, currentBit, bitIndex) => {
      const bitPowerOfTwo = 2 ** (exponentBitsCount - bitIndex - 1);
      return exponentSoFar + currentBit * bitPowerOfTwo;
    },
    0,
  );
  const exponent = exponentUnbiased - exponentBias;

  // Calculating the fraction value.
  const fractionBits = bits.slice(signBitsCount + exponentBitsCount);
  const fraction = fractionBits.reduce(
    (fractionSoFar, currentBit, bitIndex) => {
      const bitPowerOfTwo = 2 ** -(bitIndex + 1);
      return fractionSoFar + currentBit * bitPowerOfTwo;
    },
    0,
  );

  // All-zeros exponent means that the number is zero (if the fraction is zero
  // as well) or a subnormal number. Subnormal numbers use the exponent
  // of (1 - bias) and don't have the implicit leading 1 in the fraction.
  if (exponentUnbiased === 0) {
    return sign * (2 ** (1 - exponentBias)) * fraction;
  }

  // All-ones exponent encodes the special values:
  // Infinity (if the fraction is zero) and NaN (otherwise).
  if (exponentUnbiased === (2 ** exponentBitsCount) - 1) {
    return fraction === 0 ? sign * Infinity : NaN;
  }

  // Putting all parts together to calculate the final normalized number
  // (with the implicit leading 1 in the fraction).
  return sign * (2 ** exponent) * (1 + fraction);
}

/**
 *  Converts the 16-bit binary representation of the floating point number to decimal float number.
 *
 * @param {Bits} bits - sequence of bits that represents the floating point number.
 * @return {number} - floating point number decoded from its binary representation.
 */
export function bitsToFloat16(bits) {
  return bitsToFloat(bits, precisionConfigs.half);
}

/**
 * Converts the 32-bit binary representation of the floating point number to decimal float number.
 *
 * @param {Bits} bits - sequence of bits that represents the floating point number.
 * @return {number} - floating point number decoded from its binary representation.
 */
export function bitsToFloat32(bits) {
  return bitsToFloat(bits, precisionConfigs.single);
}

/**
 * Converts the 64-bit binary representation of the floating point number to decimal float number.
 *
 * @param {Bits} bits - sequence of bits that represents the floating point number.
 * @return {number} - floating point number decoded from its binary representation.
 */
export function bitsToFloat64(bits) {
  return bitsToFloat(bits, precisionConfigs.double);
}
