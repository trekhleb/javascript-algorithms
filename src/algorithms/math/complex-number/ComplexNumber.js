import radianToDegree from '../radian/radianToDegree';

export default class ComplexNumber {
  /**
   * z = re + im * i
   * z = radius * e^(i * phase)
   *
   * @param {number} [re]
   * @param {number} [im]
   */
  constructor({ re = 0, im = 0 } = {}) {
    this.re = re;
    this.im = im;
  }

  /**
   * @param {ComplexNumber} addend
   * @return {ComplexNumber}
   */
  add(addend) {
    return new ComplexNumber({
      re: this.re + addend.re,
      im: this.im + addend.im,
    });
  }

  /**
   * @param {ComplexNumber} subtrahend
   * @return {ComplexNumber}
   */
  subtract(subtrahend) {
    return new ComplexNumber({
      re: this.re - subtrahend.re,
      im: this.im - subtrahend.im,
    });
  }

  /**
   * @param {ComplexNumber} multiplicand
   * @return {ComplexNumber}
   */
  multiply(multiplicand) {
    return new ComplexNumber({
      re: this.re * multiplicand.re - this.im * multiplicand.im,
      im: this.re * multiplicand.im + this.im * multiplicand.re,
    });
  }

  /**
   * @param {ComplexNumber} divider
   * @return {ComplexNumber}
   */
  divide(divider) {
    // Get divider conjugate.
    const dividerConjugate = this.conjugate(divider);

    // Multiply dividend by divider's conjugate.
    const finalDivident = this.multiply(dividerConjugate);

    // Calculating final divider using formula (a + bi)(a − bi) = a^2 + b^2
    const finalDivider = (divider.re ** 2) + (divider.im ** 2);

    return new ComplexNumber({
      re: finalDivident.re / finalDivider,
      im: finalDivident.im / finalDivider,
    });
  }

  /**
   * @param {ComplexNumber} complexNumber
   */
  conjugate(complexNumber) {
    return new ComplexNumber({
      re: complexNumber.re,
      im: -1 * complexNumber.im,
    });
  }

  /**
   * @return {number}
   */
  getRadius() {
    return Math.sqrt((this.re ** 2) + (this.im ** 2));
  }

  /**
   * @param {boolean} [inRadians]
   * @return {number}
   */
  getPhase(inRadians = true) {
    let phase = Math.atan(Math.abs(this.im) / Math.abs(this.re));

    if (this.re < 0 && this.im > 0) {
      phase = Math.PI - phase;
    } else if (this.re < 0 && this.im < 0) {
      phase = -(Math.PI - phase);
    } else if (this.re > 0 && this.im < 0) {
      phase = -phase;
    }

    if (!inRadians) {
      phase = radianToDegree(phase);
    }

    return phase;
  }

  /**
   * @param {boolean} [inRadians]
   * @return {{radius: number, phase: number}}
   */
  getPolarForm(inRadians = true) {
    return {
      radius: this.getRadius(),
      phase: this.getPhase(inRadians),
    };
  }
}
