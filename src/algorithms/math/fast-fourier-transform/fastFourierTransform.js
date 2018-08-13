import ComplexNumber from '../complex-number/ComplexNumber';

/**
 * Return the no of bits used in the binary representation of input.
 *
 * @param {Number} [input]
 * @return {Number}
 */
function bitLength(input) {
  let bitlen = 0;
  while ((1 << bitlen) <= input) {
    bitlen += 1;
  }
  return bitlen;
}

/**
 * Returns the number which is the flipped binary representation of input.
 *
 * @param {Number} [input]
 * @param {Number} [bitlen]
 * @return {Number}
 */
function reverseBits(input, bitlen) {
  let reversedBits = 0;
  for (let i = 0; i < bitlen; i += 1) {
    reversedBits *= 2;
    if (Math.floor(input / (1 << i)) % 2 === 1) { reversedBits += 1; }
  }
  return reversedBits;
}

/**
 * Returns the radix-2 fast fourier transform of the given array.
 * Optionally computes the radix-2 inverse fast fourier transform.
 *
 * @param {ComplexNumber[]} [inputData]
 * @param {Boolean} [inverse]
 * @return {ComplexNumber[]}
 */
export default function fastFourierTransform(inputData, inverse = false) {
  const bitlen = bitLength(inputData.length - 1);
  const N = 1 << bitlen;

  while (inputData.length < N) {
    inputData.push(new ComplexNumber({
      real: 0,
      imaginary: 0,
    }));
  }

  const output = [];
  for (let i = 0; i < N; i += 1) { output[i] = inputData[reverseBits(i, bitlen)]; }

  for (let blockLength = 2; blockLength <= N; blockLength *= 2) {
    let phaseStep;
    if (inverse) {
      phaseStep = new ComplexNumber({
        real: Math.cos(2 * Math.PI / blockLength),
        imaginary: -1 * Math.sin(2 * Math.PI / blockLength),
      });
    } else {
      phaseStep = new ComplexNumber({
        real: Math.cos(2 * Math.PI / blockLength),
        imaginary: Math.sin(2 * Math.PI / blockLength),
      });
    }

    for (let blockStart = 0; blockStart < N; blockStart += blockLength) {
      let phase = new ComplexNumber({
        real: 1,
        imaginary: 0,
      });

      for (let idx = blockStart; idx < blockStart + blockLength / 2; idx += 1) {
        const upd1 = output[idx].add(output[idx + blockLength / 2].multiply(phase));
        const upd2 = output[idx].subtract(output[idx + blockLength / 2].multiply(phase));
        output[idx] = upd1;
        output[idx + blockLength / 2] = upd2;
        phase = phase.multiply(phaseStep);
      }
    }
  }
  if (inverse) {
    for (let idx = 0; idx < N; idx += 1) {
      output[idx] /= N;
    }
  }
  return output;
}
