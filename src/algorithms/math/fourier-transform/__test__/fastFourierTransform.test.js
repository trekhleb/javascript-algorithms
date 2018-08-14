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
    const in1 = [new ComplexNumber({ re: 0, im: 0 })];
    const expOut1 = [new ComplexNumber({ re: 0, im: 0 })];
    const out1 = fastFourierTransform(in1);
    const invOut1 = fastFourierTransform(out1, true);
    expect(approximatelyEqual(expOut1, out1, eps)).toBe(true);
    expect(approximatelyEqual(in1, invOut1, eps)).toBe(true);

    const in2 = [
      new ComplexNumber({ re: 1, im: 2 }),
      new ComplexNumber({ re: 2, im: 3 }),
      new ComplexNumber({ re: 8, im: 4 }),
    ];

    const expOut2 = [
      new ComplexNumber({ re: 11, im: 9 }),
      new ComplexNumber({ re: -10, im: 0 }),
      new ComplexNumber({ re: 7, im: 3 }),
      new ComplexNumber({ re: -4, im: -4 }),
    ];
    const out2 = fastFourierTransform(in2);
    const invOut2 = fastFourierTransform(out2, true);
    expect(approximatelyEqual(expOut2, out2, eps)).toBe(true);
    expect(approximatelyEqual(in2, invOut2, eps)).toBe(true);

    const in3 = [
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

    const expOut3 = [
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

    const out3 = fastFourierTransform(in3);
    const invOut3 = fastFourierTransform(out3, true);
    expect(approximatelyEqual(expOut3, out3, eps)).toBe(true);
    expect(approximatelyEqual(in3, invOut3, eps)).toBe(true);
  });
});
