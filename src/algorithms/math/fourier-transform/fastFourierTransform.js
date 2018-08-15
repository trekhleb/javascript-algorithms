import ComplexNumber from '../complex-number/ComplexNumber';
import bitLength from '../bits/bitLength';

/**
 * Returns the number which is the flipped binary representation of input.
 *
 * @param {Number} [input]
 * @param {Number} [bitsCount]
 * @return {Number}
 */
function reverseBits(input, bitsCount) {
  let reversedBits = 0;

  for (let i = 0; i < bitsCount; i += 1) {
    reversedBits *= 2;

    if (Math.floor(input / (1 << i)) % 2 === 1) {
      reversedBits += 1;
    }
  }

  return reversedBits;
}

/**
 * Returns the radix-2 fast fourier transform of the given array.
 * Optionally computes the radix-2 inverse fast fourier transform.
 *
 * @param {ComplexNumber[]} inputData
 * @param {boolean} [inverse]
 * @return {ComplexNumber[]}
 */
export default function fastFourierTransform(inputData, inverse = false) {
  const bitsCount = bitLength(inputData.length - 1);
  const N = 1 << bitsCount;

  while (inputData.length < N) {
    inputData.push(new ComplexNumber());
  }

  const output = [];
  for (let i = 0; i < N; i += 1) {
    output[i] = inputData[reverseBits(i, bitsCount)];
  }

  for (let blockLength = 2; blockLength <= N; blockLength *= 2) {
    const imaginarySign = inverse ? -1 : 1;
    const phaseStep = new ComplexNumber({
      re: Math.cos(2 * Math.PI / blockLength),
      im: imaginarySign * Math.sin(2 * Math.PI / blockLength),
    });

    for (let blockStart = 0; blockStart < N; blockStart += blockLength) {
      let phase = new ComplexNumber({ re: 1, im: 0 });

      for (let idx = blockStart; idx < blockStart + blockLength / 2; idx += 1) {
        const component = output[idx + blockLength / 2].multiply(phase);

        const upd1 = output[idx].add(component);
        const upd2 = output[idx].subtract(component);

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
