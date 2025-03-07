import ComplexNumber from '../ComplexNumber';

describe('ComplexNumber', () => {
  it('should create complex numbers', () => {
    const complexNumber = new ComplexNumber({ re: 1, im: 2 });

    expect(complexNumber).toBeDefined();
    expect(complexNumber.re).toBe(1);
    expect(complexNumber.im).toBe(2);

    const defaultComplexNumber = new ComplexNumber();
    expect(defaultComplexNumber.re).toBe(0);
    expect(defaultComplexNumber.im).toBe(0);
  });

  it('should add complex numbers', () => {
    const complexNumber1 = new ComplexNumber({ re: 1, im: 2 });
    const complexNumber2 = new ComplexNumber({ re: 3, im: 8 });

    const complexNumber3 = complexNumber1.add(complexNumber2);
    const complexNumber4 = complexNumber2.add(complexNumber1);

    expect(complexNumber3.re).toBe(1 + 3);
    expect(complexNumber3.im).toBe(2 + 8);

    expect(complexNumber4.re).toBe(1 + 3);
    expect(complexNumber4.im).toBe(2 + 8);
  });

  it('should add complex and natural numbers', () => {
    const complexNumber = new ComplexNumber({ re: 1, im: 2 });
    const realNumber = new ComplexNumber({ re: 3 });

    const complexNumber3 = complexNumber.add(realNumber);
    const complexNumber4 = realNumber.add(complexNumber);
    const complexNumber5 = complexNumber.add(3);

    expect(complexNumber3.re).toBe(1 + 3);
    expect(complexNumber3.im).toBe(2);

    expect(complexNumber4.re).toBe(1 + 3);
    expect(complexNumber4.im).toBe(2);

    expect(complexNumber5.re).toBe(1 + 3);
    expect(complexNumber5.im).toBe(2);
  });

  it('should subtract complex numbers', () => {
    const complexNumber1 = new ComplexNumber({ re: 1, im: 2 });
    const complexNumber2 = new ComplexNumber({ re: 3, im: 8 });

    const complexNumber3 = complexNumber1.subtract(complexNumber2);
    const complexNumber4 = complexNumber2.subtract(complexNumber1);

    expect(complexNumber3.re).toBe(1 - 3);
    expect(complexNumber3.im).toBe(2 - 8);

    expect(complexNumber4.re).toBe(3 - 1);
    expect(complexNumber4.im).toBe(8 - 2);
  });

  it('should subtract complex and natural numbers', () => {
    const complexNumber = new ComplexNumber({ re: 1, im: 2 });
    const realNumber = new ComplexNumber({ re: 3 });

    const complexNumber3 = complexNumber.subtract(realNumber);
    const complexNumber4 = realNumber.subtract(complexNumber);
    const complexNumber5 = complexNumber.subtract(3);

    expect(complexNumber3.re).toBe(1 - 3);
    expect(complexNumber3.im).toBe(2);

    expect(complexNumber4.re).toBe(3 - 1);
    expect(complexNumber4.im).toBe(-2);

    expect(complexNumber5.re).toBe(1 - 3);
    expect(complexNumber5.im).toBe(2);
  });

  it('should multiply complex numbers', () => {
    const complexNumber1 = new ComplexNumber({ re: 3, im: 2 });
    const complexNumber2 = new ComplexNumber({ re: 1, im: 7 });

    const complexNumber3 = complexNumber1.multiply(complexNumber2);
    const complexNumber4 = complexNumber2.multiply(complexNumber1);
    const complexNumber5 = complexNumber1.multiply(5);

    expect(complexNumber3.re).toBe(-11);
    expect(complexNumber3.im).toBe(23);

    expect(complexNumber4.re).toBe(-11);
    expect(complexNumber4.im).toBe(23);

    expect(complexNumber5.re).toBe(15);
    expect(complexNumber5.im).toBe(10);
  });

  it('should multiply complex numbers by themselves', () => {
    const complexNumber = new ComplexNumber({ re: 1, im: 1 });

    const result = complexNumber.multiply(complexNumber);

    expect(result.re).toBe(0);
    expect(result.im).toBe(2);
  });

  it('should calculate i in power of two', () => {
    const complexNumber = new ComplexNumber({ re: 0, im: 1 });

    const result = complexNumber.multiply(complexNumber);

    expect(result.re).toBe(-1);
    expect(result.im).toBe(0);
  });

  it('should divide complex numbers', () => {
    const complexNumber1 = new ComplexNumber({ re: 2, im: 3 });
    const complexNumber2 = new ComplexNumber({ re: 4, im: -5 });

    const complexNumber3 = complexNumber1.divide(complexNumber2);
    const complexNumber4 = complexNumber1.divide(2);

    expect(complexNumber3.re).toBe(-7 / 41);
    expect(complexNumber3.im).toBe(22 / 41);

    expect(complexNumber4.re).toBe(1);
    expect(complexNumber4.im).toBe(1.5);
  });

  it('should return complex number in polar form', () => {
    const complexNumber1 = new ComplexNumber({ re: 3, im: 3 });
    expect(complexNumber1.getPolarForm().radius).toBe(Math.sqrt((3 ** 2) + (3 ** 2)));
    expect(complexNumber1.getPolarForm().phase).toBe(Math.PI / 4);
    expect(complexNumber1.getPolarForm(false).phase).toBe(45);

    const complexNumber2 = new ComplexNumber({ re: -3, im: 3 });
    expect(complexNumber2.getPolarForm().radius).toBe(Math.sqrt((3 ** 2) + (3 ** 2)));
    expect(complexNumber2.getPolarForm().phase).toBe(3 * (Math.PI / 4));
    expect(complexNumber2.getPolarForm(false).phase).toBe(135);

    const complexNumber3 = new ComplexNumber({ re: -3, im: -3 });
    expect(complexNumber3.getPolarForm().radius).toBe(Math.sqrt((3 ** 2) + (3 ** 2)));
    expect(complexNumber3.getPolarForm().phase).toBe(-3 * (Math.PI / 4));
    expect(complexNumber3.getPolarForm(false).phase).toBe(-135);

    const complexNumber4 = new ComplexNumber({ re: 3, im: -3 });
    expect(complexNumber4.getPolarForm().radius).toBe(Math.sqrt((3 ** 2) + (3 ** 2)));
    expect(complexNumber4.getPolarForm().phase).toBe(-1 * (Math.PI / 4));
    expect(complexNumber4.getPolarForm(false).phase).toBe(-45);

    const complexNumber5 = new ComplexNumber({ re: 5, im: 7 });
    expect(complexNumber5.getPolarForm().radius).toBeCloseTo(8.60);
    expect(complexNumber5.getPolarForm().phase).toBeCloseTo(0.95);
    expect(complexNumber5.getPolarForm(false).phase).toBeCloseTo(54.46);

    const complexNumber6 = new ComplexNumber({ re: 0, im: 0.25 });
    expect(complexNumber6.getPolarForm().radius).toBeCloseTo(0.25);
    expect(complexNumber6.getPolarForm().phase).toBeCloseTo(1.57);
    expect(complexNumber6.getPolarForm(false).phase).toBeCloseTo(90);

    const complexNumber7 = new ComplexNumber({ re: 0, im: -0.25 });
    expect(complexNumber7.getPolarForm().radius).toBeCloseTo(0.25);
    expect(complexNumber7.getPolarForm().phase).toBeCloseTo(-1.57);
    expect(complexNumber7.getPolarForm(false).phase).toBeCloseTo(-90);

    const complexNumber8 = new ComplexNumber();
    expect(complexNumber8.getPolarForm().radius).toBeCloseTo(0);
    expect(complexNumber8.getPolarForm().phase).toBeCloseTo(0);
    expect(complexNumber8.getPolarForm(false).phase).toBeCloseTo(0);

    const complexNumber9 = new ComplexNumber({ re: -0.25, im: 0 });
    expect(complexNumber9.getPolarForm().radius).toBeCloseTo(0.25);
    expect(complexNumber9.getPolarForm().phase).toBeCloseTo(Math.PI);
    expect(complexNumber9.getPolarForm(false).phase).toBeCloseTo(180);

    const complexNumber10 = new ComplexNumber({ re: 0.25, im: 0 });
    expect(complexNumber10.getPolarForm().radius).toBeCloseTo(0.25);
    expect(complexNumber10.getPolarForm().phase).toBeCloseTo(0);
    expect(complexNumber10.getPolarForm(false).phase).toBeCloseTo(0);
  });
});
