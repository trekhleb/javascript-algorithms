export default class ComplexNumber {
  /**
  * @param{number} [real]
  * @param{number} [imaginary]
  */
  constructor(real, imaginary) {
    this.real = real;
    this.imaginary = imaginary;
  }

  /**
  * @param{ComplexNumber} [addend]
  */
  add(addend) {
    return new ComplexNumber(this.real + addend.real, this.imaginary + addend.imaginary);
  }

  /**
  * @param{ComplexNumber} [subtrahend]
  */
  subtract(subtrahend) {
    return new ComplexNumber(this.real - subtrahend.real, this.imaginary - subtrahend.imaginary);
  }

  /**
  * @param{ComplexNumber} [multiplicand]
  */
  multiply(multiplicand) {
    const real = this.real * multiplicand.real - this.imaginary * multiplicand.imaginary;
    const imaginary = this.real * multiplicand.imaginary + this.imaginary * multiplicand.real;
    return new ComplexNumber(real, imaginary);
  }
}
