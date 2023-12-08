import isPythagoreanTriangle from '../pythagoreanTheorem';

describe('isPythagoreanTriangle', () => {
  it('should return true if hyperparameters satisfied the pythagorean theorem, otherwise return false', () => {
    expect(isPythagoreanTriangle(0, 0, 0)).toEqual(false);
    expect(isPythagoreanTriangle(-1, 2, 5)).toEqual(false);
    expect(isPythagoreanTriangle(3, 4, 5)).toEqual(true);
    expect(isPythagoreanTriangle(3, 4, -5)).toEqual(false);
    expect(isPythagoreanTriangle(-1, -1, 1)).toEqual(false);
    expect(isPythagoreanTriangle(3, 4, 25)).toEqual(false);
  });
});
