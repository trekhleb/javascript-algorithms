import extendedEuclid from '../extendedEuclid';

describe('extendedEuclideanAlgorithm', () => {
  it('should calculate coefficients', () => {
    expect(extendedEuclid(30, 20)).toEqual({
      gcd: 10,
      x: 1,
      y: -1,
    });

    expect(extendedEuclid(30, 50)).toEqual({
      gcd: 10,
      x: 2,
      y: -1,
    });

    expect(extendedEuclid(65, 40)).toEqual({
      gcd: 5,
      x: -3,
      y: 5,
    });
  });
});
