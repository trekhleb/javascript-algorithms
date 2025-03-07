// @see: https://en.wikipedia.org/wiki/Single-precision_floating-point_format
const singlePrecisionBytesLength = 4; // 32 bits

// @see: https://en.wikipedia.org/wiki/Double-precision_floating-point_format
const doublePrecisionBytesLength = 8; // 64 bits

const bitsInByte = 8;

/**
 * Converts the float number into its IEEE 754 binary representation.
 * @see: https://en.wikipedia.org/wiki/IEEE_754
 *
 * @param {number} floatNumber - float number in decimal format.
 * @param {number} byteLength - number of bytes to use to store the float number.
 * @return {string} - binary string representation of the float number.
 */
function floatAsBinaryString(floatNumber, byteLength) {
  let numberAsBinaryString = '';

  const arrayBuffer = new ArrayBuffer(byteLength);
  const dataView = new DataView(arrayBuffer);

  const byteOffset = 0;
  const littleEndian = false;

  if (byteLength === singlePrecisionBytesLength) {
    dataView.setFloat32(byteOffset, floatNumber, littleEndian);
  } else {
    dataView.setFloat64(byteOffset, floatNumber, littleEndian);
  }

  for (let byteIndex = 0; byteIndex < byteLength; byteIndex += 1) {
    let bits = dataView.getUint8(byteIndex).toString(2);
    if (bits.length < bitsInByte) {
      bits = new Array(bitsInByte - bits.length).fill('0').join('') + bits;
    }
    numberAsBinaryString += bits;
  }

  return numberAsBinaryString;
}

/**
 * Converts the float number into its IEEE 754 64-bits binary representation.
 *
 * @param {number} floatNumber - float number in decimal format.
 * @return {string} - 64 bits binary string representation of the float number.
 */
export function floatAs64BinaryString(floatNumber) {
  return floatAsBinaryString(floatNumber, doublePrecisionBytesLength);
}

/**
 * Converts the float number into its IEEE 754 32-bits binary representation.
 *
 * @param {number} floatNumber - float number in decimal format.
 * @return {string} - 32 bits binary string representation of the float number.
 */
export function floatAs32BinaryString(floatNumber) {
  return floatAsBinaryString(floatNumber, singlePrecisionBytesLength);
}
