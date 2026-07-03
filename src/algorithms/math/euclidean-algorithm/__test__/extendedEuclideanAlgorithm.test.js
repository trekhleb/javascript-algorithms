import extendedEuclideanAlgorithm from '../extendedEuclideanAlgorithm';
import euclideanAlgorithm from '../euclideanAlgorithm';

describe('extendedEuclideanAlgorithm', () => {
  it('should calculate GCD along with Bezout coefficients', () => {
    expect(extendedEuclideanAlgorithm(0, 0).gcd).toBe(0);
    expect(extendedEuclideanAlgorithm(2, 0)).toEqual({ gcd: 2, x: 1, y: 0 });
    expect(extendedEuclideanAlgorithm(0, 2)).toEqual({ gcd: 2, x: 0, y: 1 });
    expect(extendedEuclideanAlgorithm(252, 105).gcd).toBe(21);
    expect(extendedEuclideanAlgorithm(105, 252).gcd).toBe(21);
    expect(extendedEuclideanAlgorithm(17, 5).gcd).toBe(1);
  });

  it('should satisfy the Bezout identity a * x + b * y = gcd', () => {
    const testPairs = [
      [252, 105],
      [105, 252],
      [17, 5],
      [1071, 462],
      [-252, 105],
      [252, -105],
      [-252, -105],
      [0, 5],
      [5, 0],
      [1, 1],
    ];

    testPairs.forEach(([a, b]) => {
      const { gcd, x, y } = extendedEuclideanAlgorithm(a, b);
      expect(a * x + b * y).toBe(gcd);
      expect(gcd).toBe(euclideanAlgorithm(a, b));
      expect(gcd).toBeGreaterThanOrEqual(0);
    });
  });
});
