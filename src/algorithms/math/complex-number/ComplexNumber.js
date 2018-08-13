export default class ComplexNumber {
  /**
   * @param {number} [real]
   * @param {number} [imaginary]
   */
  constructor({ real = 0, imaginary = 0 } = {}) {
    this.real = real;
    this.imaginary = imaginary;
  }

  /**
   * @param {ComplexNumber} addend
   * @return {ComplexNumber}
   */
  add(addend) {
    return new ComplexNumber({
      real: this.real + addend.real,
      imaginary: this.imaginary + addend.imaginary,
    });
  }

  /**
   * @param {ComplexNumber} subtrahend
   * @return {ComplexNumber}
   */
  subtract(subtrahend) {
    return new ComplexNumber({
      real: this.real - subtrahend.real,
      imaginary: this.imaginary - subtrahend.imaginary,
    });
  }

  /**
   * @param {ComplexNumber} multiplicand
   * @return {ComplexNumber}
   */
  multiply(multiplicand) {
    return new ComplexNumber({
      real: this.real * multiplicand.real - this.imaginary * multiplicand.imaginary,
      imaginary: this.real * multiplicand.imaginary + this.imaginary * multiplicand.real,
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
    const finalDivider = (divider.real ** 2) + (divider.imaginary ** 2);

    return new ComplexNumber({
      real: finalDivident.real / finalDivider,
      imaginary: finalDivident.imaginary / finalDivider,
    });
  }

  /**
   * @param {ComplexNumber} complexNumber
   */
  conjugate(complexNumber) {
    return new ComplexNumber({
      real: complexNumber.real,
      imaginary: -1 * complexNumber.imaginary,
    });
  }
}
