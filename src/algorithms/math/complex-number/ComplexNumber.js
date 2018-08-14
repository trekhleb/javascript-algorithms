export default class ComplexNumber {
  /**
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
}
