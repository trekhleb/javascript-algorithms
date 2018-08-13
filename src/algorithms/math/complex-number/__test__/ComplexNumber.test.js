import ComplexNumber from '../ComplexNumber';

describe('ComplexNumber', () => {
  it('should create complex numbers', () => {
    const complexNumber = new ComplexNumber({ real: 1, imaginary: 2 });

    expect(complexNumber).toBeDefined();
    expect(complexNumber.real).toBe(1);
    expect(complexNumber.imaginary).toBe(2);

    const defaultComplexNumber = new ComplexNumber();
    expect(defaultComplexNumber.real).toBe(0);
    expect(defaultComplexNumber.imaginary).toBe(0);
  });

  it('should add complex numbers', () => {
    const complexNumber1 = new ComplexNumber({ real: 1, imaginary: 2 });
    const complexNumber2 = new ComplexNumber({ real: 3, imaginary: 8 });

    const complexNumber3 = complexNumber1.add(complexNumber2);
    const complexNumber4 = complexNumber2.add(complexNumber1);

    expect(complexNumber3.real).toBe(1 + 3);
    expect(complexNumber3.imaginary).toBe(2 + 8);

    expect(complexNumber4.real).toBe(1 + 3);
    expect(complexNumber4.imaginary).toBe(2 + 8);
  });

  it('should add complex and natural numbers', () => {
    const complexNumber = new ComplexNumber({ real: 1, imaginary: 2 });
    const realNumber = new ComplexNumber({ real: 3 });

    const complexNumber3 = complexNumber.add(realNumber);
    const complexNumber4 = realNumber.add(complexNumber);

    expect(complexNumber3.real).toBe(1 + 3);
    expect(complexNumber3.imaginary).toBe(2);

    expect(complexNumber4.real).toBe(1 + 3);
    expect(complexNumber4.imaginary).toBe(2);
  });

  it('should subtract complex numbers', () => {
    const complexNumber1 = new ComplexNumber({ real: 1, imaginary: 2 });
    const complexNumber2 = new ComplexNumber({ real: 3, imaginary: 8 });

    const complexNumber3 = complexNumber1.subtract(complexNumber2);
    const complexNumber4 = complexNumber2.subtract(complexNumber1);

    expect(complexNumber3.real).toBe(1 - 3);
    expect(complexNumber3.imaginary).toBe(2 - 8);

    expect(complexNumber4.real).toBe(3 - 1);
    expect(complexNumber4.imaginary).toBe(8 - 2);
  });

  it('should subtract complex and natural numbers', () => {
    const complexNumber = new ComplexNumber({ real: 1, imaginary: 2 });
    const realNumber = new ComplexNumber({ real: 3 });

    const complexNumber3 = complexNumber.subtract(realNumber);
    const complexNumber4 = realNumber.subtract(complexNumber);

    expect(complexNumber3.real).toBe(1 - 3);
    expect(complexNumber3.imaginary).toBe(2);

    expect(complexNumber4.real).toBe(3 - 1);
    expect(complexNumber4.imaginary).toBe(-2);
  });

  it('should multiply complex numbers', () => {
    const complexNumber1 = new ComplexNumber({ real: 3, imaginary: 2 });
    const complexNumber2 = new ComplexNumber({ real: 1, imaginary: 7 });

    const complexNumber3 = complexNumber1.multiply(complexNumber2);
    const complexNumber4 = complexNumber2.multiply(complexNumber1);

    expect(complexNumber3.real).toBe(-11);
    expect(complexNumber3.imaginary).toBe(23);

    expect(complexNumber4.real).toBe(-11);
    expect(complexNumber4.imaginary).toBe(23);
  });

  it('should multiply complex numbers by themselves', () => {
    const complexNumber = new ComplexNumber({ real: 1, imaginary: 1 });

    const result = complexNumber.multiply(complexNumber);

    expect(result.real).toBe(0);
    expect(result.imaginary).toBe(2);
  });

  it('should calculate i in power of two', () => {
    const complexNumber = new ComplexNumber({ real: 0, imaginary: 1 });

    const result = complexNumber.multiply(complexNumber);

    expect(result.real).toBe(-1);
    expect(result.imaginary).toBe(0);
  });

  it('should divide complex numbers', () => {
    const complexNumber1 = new ComplexNumber({ real: 2, imaginary: 3 });
    const complexNumber2 = new ComplexNumber({ real: 4, imaginary: -5 });

    const complexNumber3 = complexNumber1.divide(complexNumber2);

    expect(complexNumber3.real).toBe(-7 / 41);
    expect(complexNumber3.imaginary).toBe(22 / 41);
  });
});
