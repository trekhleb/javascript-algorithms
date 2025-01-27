import fastFourierTransform from '../fastFourierTransform';
import ComplexNumber from '../../complex-number/ComplexNumber';

/**
 * @param {ComplexNumber[]} sequence1
 * @param {ComplexNumber[]} sequence2
 * @param {Number} delta
 * @return {boolean}
 */
function sequencesApproximatelyEqual(sequence1, sequence2, delta) {
  if (sequence1.length !== sequence2.length) {
    return false;
  }

  for (let numberIndex = 0; numberIndex < sequence1.length; numberIndex += 1) {
    if (Math.abs(sequence1[numberIndex].re - sequence2[numberIndex].re) > delta) {
      return false;
    }

    if (Math.abs(sequence1[numberIndex].im - sequence2[numberIndex].im) > delta) {
      return false;
    }
  }

  return true;
}

const delta = 1e-6;

describe('fastFourierTransform', () => {
  it('should calculate the radix-2 discrete fourier transform #1', () => {
    const input = [new ComplexNumber({ re: 0, im: 0 })];
    const expectedOutput = [new ComplexNumber({ re: 0, im: 0 })];
    const output = fastFourierTransform(input);
    const invertedOutput = fastFourierTransform(output, true);

    expect(sequencesApproximatelyEqual(expectedOutput, output, delta)).toBe(true);
    expect(sequencesApproximatelyEqual(input, invertedOutput, delta)).toBe(true);
  });

  it('should calculate the radix-2 discrete fourier transform #2', () => {
    const input = [
      new ComplexNumber({ re: 1, im: 2 }),
      new ComplexNumber({ re: 2, im: 3 }),
      new ComplexNumber({ re: 8, im: 4 }),
    ];

    const expectedOutput = [
      new ComplexNumber({ re: 11, im: 9 }),
      new ComplexNumber({ re: -10, im: 0 }),
      new ComplexNumber({ re: 7, im: 3 }),
      new ComplexNumber({ re: -4, im: -4 }),
    ];

    const output = fastFourierTransform(input);
    const invertedOutput = fastFourierTransform(output, true);

    expect(sequencesApproximatelyEqual(expectedOutput, output, delta)).toBe(true);
    expect(sequencesApproximatelyEqual(input, invertedOutput, delta)).toBe(true);
  });

  it('should calculate the radix-2 discrete fourier transform #3', () => {
    const input = [
      new ComplexNumber({ re: -83656.9359385182, im: 98724.08038374918 }),
      new ComplexNumber({ re: -47537.415125808424, im: 88441.58381765135 }),
      new ComplexNumber({ re: -24849.657029355192, im: -72621.79007878687 }),
      new ComplexNumber({ re: 31451.27290052717, im: -21113.301128347346 }),
      new ComplexNumber({ re: 13973.90836288876, im: -73378.36721594246 }),
      new ComplexNumber({ re: 14981.520420492234, im: 63279.524958963884 }),
      new ComplexNumber({ re: -9892.575367044381, im: -81748.44671677813 }),
      new ComplexNumber({ re: -35933.00356823792, im: -46153.47157161784 }),
      new ComplexNumber({ re: -22425.008561855735, im: -86284.24507370662 }),
      new ComplexNumber({ re: -39327.43830818355, im: 30611.949874562706 }),
    ];

    const expectedOutput = [
      new ComplexNumber({ re: -203215.3322151, im: -100242.4827503 }),
      new ComplexNumber({ re: 99217.0805705, im: 270646.9331932 }),
      new ComplexNumber({ re: -305990.9040412, im: 68224.8435751 }),
      new ComplexNumber({ re: -14135.7758282, im: 199223.9878095 }),
      new ComplexNumber({ re: -306965.6350922, im: 26030.1025439 }),
      new ComplexNumber({ re: -76477.6755206, im: 40781.9078990 }),
      new ComplexNumber({ re: -48409.3099088, im: 54674.7959662 }),
      new ComplexNumber({ re: -329683.0131713, im: 164287.7995937 }),
      new ComplexNumber({ re: -50485.2048527, im: -330375.0546527 }),
      new ComplexNumber({ re: 122235.7738708, im: 91091.6398019 }),
      new ComplexNumber({ re: 47625.8850387, im: 73497.3981523 }),
      new ComplexNumber({ re: -15619.8231136, im: 80804.8685410 }),
      new ComplexNumber({ re: 192234.0276101, im: 160833.3072355 }),
      new ComplexNumber({ re: -96389.4195635, im: 393408.4543872 }),
      new ComplexNumber({ re: -173449.0825417, im: 146875.7724104 }),
      new ComplexNumber({ re: -179002.5662573, im: 239821.0124341 }),
    ];

    const output = fastFourierTransform(input);
    const invertedOutput = fastFourierTransform(output, true);

    expect(sequencesApproximatelyEqual(expectedOutput, output, delta)).toBe(true);
    expect(sequencesApproximatelyEqual(input, invertedOutput, delta)).toBe(true);
  });
});
