import Complex from '../complex';

const complex = new Complex(2, 3);

test('Getting the variables', () => {
  expect(complex.getComplexVar).toEqual({
    a: 2,
    b: 3,
  });
});

test('Setting the variables', () => {
  complex.setComplexVar = {
    a: 13,
    b: 13,
  };
  expect(complex.getComplexVar).toEqual({
    a: 13,
    b: 13,
  });
});

test('Getting the conjugate of complex', () => {
  const conj = complex.conjugate().getComplexVar;
  expect(conj).toEqual({
    a: 13,
    b: -13,
  });
});

test('Getting the mod of complex', () => {
  complex.setComplexVar = {
    a: 3,
    b: 4,
  };
  let conj = complex.mod();
  expect(conj).toBe(5);

  complex.setComplexVar = {
    a: 6,
    b: 8,
  };
  conj = complex.mod();
  expect(conj).toBe(10);

  complex.setComplexVar = {
    a: 5,
    b: 7,
  };
  conj = complex.mod();
  expect(conj).toBeCloseTo(8.602325267042627);
});

test('Multipication of two complex number', () => {
  const mulComp = new Complex(-21, 89);
  complex.mul(new Complex(7, 8));

  expect(complex).toEqual(mulComp);
});

test('Divison of two complex number', () => {
  const divComp = new Complex(5, 7);
  complex.div(new Complex(7, 8));
  expect(complex).toEqual(divComp);
});

test('Addition of two complex number', () => {
  const addComp = new Complex(12, 15);
  complex.add(new Complex(7, 8));
  expect(complex).toEqual(addComp);
});

test('Subtraction of two complex number', () => {
  const subComp = new Complex(5, 7);
  complex.sub(new Complex(7, 8));
  expect(complex).toEqual(subComp);
});

test('Angle of complex number', () => {
  let theta = complex.getAngle();
  expect(theta).toBeCloseTo(54.46232220802561);

  complex.setComplexVar = {
    a: 5,
    b: -7,
  };
  theta = complex.getAngle();
  expect(theta).toBeCloseTo(-54.46232220802561);

  complex.setComplexVar = {
    a: -5,
    b: -7,
  };
  theta = complex.getAngle();
  expect(theta).toBeCloseTo(-125.5376777919744);

  complex.setComplexVar = {
    a: -5,
    b: 7,
  };
  theta = complex.getAngle();
  expect(theta).toBeCloseTo(125.5376777919744);
});

test('Euler Form of complex number', () => {
  const euler = {
    angle: 125.5376777919744,
    r: 8.602325267042627,
  };
  expect(complex.euler().angle).toBeCloseTo(euler.angle);
  expect(complex.euler().r).toBeCloseTo(euler.r);
});

test('Real and Imaginary part of complex number', () => {
  const Re = complex.Re();
  const Im = complex.Im();

  expect(Re).toBe(-5);
  expect(Im).toBe(7);
});

test('Checking if it is purely Real or Imaginary', () => {
  complex.setComplexVar = {
    a: 5,
    b: 0,
  };

  expect(complex.purelyRe()).toBeTruthy();
  expect(complex.purelyIm()).toBeFalsy();
});

test('Inverse of Complex number', () => {
  complex.setComplexVar = {
    a: 5,
    b: 7,
  };
  const inv = complex.inverse();

  expect(inv.Re()).toBeCloseTo(0.067567567);
  expect(inv.Im()).toBeCloseTo(-0.09459459459);
});

test('Sqrt of Complex number', () => {
  complex.setComplexVar = {
    a: 5,
    b: 7,
  };
  let inv = complex.sqrt();
  let root1 = new Complex(2.60790387735463, 1.3420740044875743);
  expect(inv[0]).toEqual(root1);
  let root2 = new Complex(-2.60790387735463, -1.3420740044875743);
  expect(inv[1]).toEqual(root2);

  complex.setComplexVar = {
    a: 5,
    b: -7,
  };
  inv = complex.sqrt();
  root1 = new Complex(2.60790387735463, -1.3420740044875743);
  expect(inv[0]).toEqual(root1);
  root2 = new Complex(-2.60790387735463, 1.3420740044875743);
  expect(inv[1]).toEqual(root2);
});

test('itoa to n power', () => {
  let temp = Complex.iPower(56);
  expect(temp).toBe('1');
  temp = Complex.iPower(569);
  expect(temp).toBe('i');
  temp = Complex.iPower(339);
  expect(temp).toBe('-i');
});
