import fastFourierTransform from '../fastFourierTransform';
import ComplexNumber from '../../complex-number/ComplexNumber';

/**
 * @param {ComplexNumber[]} [seq1]
 * @param {ComplexNumber[]} [seq2]
 * @param {Number} [eps]
 * @return {boolean}
 */
function approximatelyEqual(seq1, seq2, eps) {
  if (seq1.length !== seq2.length) { return false; }

  for (let i = 0; i < seq1.length; i += 1) {
    if (Math.abs(seq1[i].real - seq2[i].real) > eps) { return false; }
    if (Math.abs(seq1[i].complex - seq2[i].complex) > eps) { return false; }
  }

  return true;
}

describe('fastFourierTransform', () => {
  it('should calculate the radix-2 discrete fourier transform after zero padding', () => {
    const eps = 1e-6;
    const in1 = [new ComplexNumber({ real: 0, imaginary: 0 })];
    const expOut1 = [new ComplexNumber({ real: 0, imaginary: 0 })];
    const out1 = fastFourierTransform(in1);
    const invOut1 = fastFourierTransform(out1, true);
    expect(approximatelyEqual(expOut1, out1, eps)).toBe(true);
    expect(approximatelyEqual(in1, invOut1, eps)).toBe(true);

    const in2 = [
      new ComplexNumber({ real: 1, imaginary: 2 }),
      new ComplexNumber({ real: 2, imaginary: 3 }),
      new ComplexNumber({ real: 8, imaginary: 4 }),
    ];

    const expOut2 = [
      new ComplexNumber({ real: 11, imaginary: 9 }),
      new ComplexNumber({ real: -10, imaginary: 0 }),
      new ComplexNumber({ real: 7, imaginary: 3 }),
      new ComplexNumber({ real: -4, imaginary: -4 }),
    ];
    const out2 = fastFourierTransform(in2);
    const invOut2 = fastFourierTransform(out2, true);
    expect(approximatelyEqual(expOut2, out2, eps)).toBe(true);
    expect(approximatelyEqual(in2, invOut2, eps)).toBe(true);

    const in3 = [
      new ComplexNumber({ real: -83656.9359385182, imaginary: 98724.08038374918 }),
      new ComplexNumber({ real: -47537.415125808424, imaginary: 88441.58381765135 }),
      new ComplexNumber({ real: -24849.657029355192, imaginary: -72621.79007878687 }),
      new ComplexNumber({ real: 31451.27290052717, imaginary: -21113.301128347346 }),
      new ComplexNumber({ real: 13973.90836288876, imaginary: -73378.36721594246 }),
      new ComplexNumber({ real: 14981.520420492234, imaginary: 63279.524958963884 }),
      new ComplexNumber({ real: -9892.575367044381, imaginary: -81748.44671677813 }),
      new ComplexNumber({ real: -35933.00356823792, imaginary: -46153.47157161784 }),
      new ComplexNumber({ real: -22425.008561855735, imaginary: -86284.24507370662 }),
      new ComplexNumber({ real: -39327.43830818355, imaginary: 30611.949874562706 }),
    ];

    const expOut3 = [
      new ComplexNumber({ real: -203215.3322151, imaginary: -100242.4827503 }),
      new ComplexNumber({ real: 99217.0805705, imaginary: 270646.9331932 }),
      new ComplexNumber({ real: -305990.9040412, imaginary: 68224.8435751 }),
      new ComplexNumber({ real: -14135.7758282, imaginary: 199223.9878095 }),
      new ComplexNumber({ real: -306965.6350922, imaginary: 26030.1025439 }),
      new ComplexNumber({ real: -76477.6755206, imaginary: 40781.9078990 }),
      new ComplexNumber({ real: -48409.3099088, imaginary: 54674.7959662 }),
      new ComplexNumber({ real: -329683.0131713, imaginary: 164287.7995937 }),
      new ComplexNumber({ real: -50485.2048527, imaginary: -330375.0546527 }),
      new ComplexNumber({ real: 122235.7738708, imaginary: 91091.6398019 }),
      new ComplexNumber({ real: 47625.8850387, imaginary: 73497.3981523 }),
      new ComplexNumber({ real: -15619.8231136, imaginary: 80804.8685410 }),
      new ComplexNumber({ real: 192234.0276101, imaginary: 160833.3072355 }),
      new ComplexNumber({ real: -96389.4195635, imaginary: 393408.4543872 }),
      new ComplexNumber({ real: -173449.0825417, imaginary: 146875.7724104 }),
      new ComplexNumber({ real: -179002.5662573, imaginary: 239821.0124341 }),
    ];

    const out3 = fastFourierTransform(in3);
    const invOut3 = fastFourierTransform(out3, true);
    expect(approximatelyEqual(expOut3, out3, eps)).toBe(true);
    expect(approximatelyEqual(in3, invOut3, eps)).toBe(true);
  });
});
