import ComplexNumber from '../complex';
import fastFourierTransform from '../fastFourierTransform';
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
    const in1 = [new ComplexNumber(0, 0)];
    const expOut1 = [new ComplexNumber(0, 0)];
    const out1 = fastFourierTransform(in1);
    const invOut1 = fastFourierTransform(out1, true);
    expect(approximatelyEqual(expOut1, out1, eps)).toBe(true);
    expect(approximatelyEqual(in1, invOut1, eps)).toBe(true);

    const in2 = [new ComplexNumber(1, 2), new ComplexNumber(2, 3),
      new ComplexNumber(8, 4)];
    const expOut2 = [new ComplexNumber(11, 9), new ComplexNumber(-10, 0),
      new ComplexNumber(7, 3), new ComplexNumber(-4, -4)];
    const out2 = fastFourierTransform(in2);
    const invOut2 = fastFourierTransform(out2, true);
    expect(approximatelyEqual(expOut2, out2, eps)).toBe(true);
    expect(approximatelyEqual(in2, invOut2, eps)).toBe(true);

    const in3 = [new ComplexNumber(-83656.9359385182, 98724.08038374918),
      new ComplexNumber(-47537.415125808424, 88441.58381765135),
      new ComplexNumber(-24849.657029355192, -72621.79007878687),
      new ComplexNumber(31451.27290052717, -21113.301128347346),
      new ComplexNumber(13973.90836288876, -73378.36721594246),
      new ComplexNumber(14981.520420492234, 63279.524958963884),
      new ComplexNumber(-9892.575367044381, -81748.44671677813),
      new ComplexNumber(-35933.00356823792, -46153.47157161784),
      new ComplexNumber(-22425.008561855735, -86284.24507370662),
      new ComplexNumber(-39327.43830818355, 30611.949874562706)];
    const expOut3 = [new ComplexNumber(-203215.3322151, -100242.4827503),
      new ComplexNumber(99217.0805705, 270646.9331932),
      new ComplexNumber(-305990.9040412, 68224.8435751),
      new ComplexNumber(-14135.7758282, 199223.9878095),
      new ComplexNumber(-306965.6350922, 26030.1025439),
      new ComplexNumber(-76477.6755206, 40781.9078990),
      new ComplexNumber(-48409.3099088, 54674.7959662),
      new ComplexNumber(-329683.0131713, 164287.7995937),
      new ComplexNumber(-50485.2048527, -330375.0546527),
      new ComplexNumber(122235.7738708, 91091.6398019),
      new ComplexNumber(47625.8850387, 73497.3981523),
      new ComplexNumber(-15619.8231136, 80804.8685410),
      new ComplexNumber(192234.0276101, 160833.3072355),
      new ComplexNumber(-96389.4195635, 393408.4543872),
      new ComplexNumber(-173449.0825417, 146875.7724104),
      new ComplexNumber(-179002.5662573, 239821.0124341)];
    const out3 = fastFourierTransform(in3);
    const invOut3 = fastFourierTransform(out3, true);
    expect(approximatelyEqual(expOut3, out3, eps)).toBe(true);
    expect(approximatelyEqual(in3, invOut3, eps)).toBe(true);
  });
});
