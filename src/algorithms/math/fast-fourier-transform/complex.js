export default class ComplexNumber {
  /**
  * @param {Number} [real]
  * @param {Number} [imaginary]
  */
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  /**
  * @param {ComplexNumber} [addend]
  * @return {ComplexNumber}
  */
  add(addend) {
    return new ComplexNumber(this.real + addend.real, this.imaginary + addend.imaginary);
  }

  /**
  * @param {ComplexNumber} [subtrahend]
  * @return {ComplexNumber}
  */
  subtract(subtrahend) {
    return new ComplexNumber(this.real - subtrahend.real, this.imaginary - subtrahend.imaginary);
  }

  /**
  * @param {ComplexNumber} [multiplicand]
  * @return {ComplexNumber}
  */
  multiply(multiplicand) {
    const real = this.real * multiplicand.real - this.imaginary * multiplicand.imaginary;
    const imaginary = this.real * multiplicand.imaginary + this.imaginary * multiplicand.real;
    return new ComplexNumber(real, imaginary);
  }
}
