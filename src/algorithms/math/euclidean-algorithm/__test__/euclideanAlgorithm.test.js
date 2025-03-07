import euclideanAlgorithm from '../euclideanAlgorithm';

describe('euclideanAlgorithm', () => {
  it('should calculate GCD recursively', () => {
    expect(euclideanAlgorithm(0, 0)).toBe(0);
    expect(euclideanAlgorithm(2, 0)).toBe(2);
    expect(euclideanAlgorithm(0, 2)).toBe(2);
    expect(euclideanAlgorithm(1, 2)).toBe(1);
    expect(euclideanAlgorithm(2, 1)).toBe(1);
    expect(euclideanAlgorithm(6, 6)).toBe(6);
    expect(euclideanAlgorithm(2, 4)).toBe(2);
    expect(euclideanAlgorithm(4, 2)).toBe(2);
    expect(euclideanAlgorithm(12, 4)).toBe(4);
    expect(euclideanAlgorithm(4, 12)).toBe(4);
    expect(euclideanAlgorithm(5, 13)).toBe(1);
    expect(euclideanAlgorithm(27, 13)).toBe(1);
    expect(euclideanAlgorithm(24, 60)).toBe(12);
    expect(euclideanAlgorithm(60, 24)).toBe(12);
    expect(euclideanAlgorithm(252, 105)).toBe(21);
    expect(euclideanAlgorithm(105, 252)).toBe(21);
    expect(euclideanAlgorithm(1071, 462)).toBe(21);
    expect(euclideanAlgorithm(462, 1071)).toBe(21);
    expect(euclideanAlgorithm(462, -1071)).toBe(21);
    expect(euclideanAlgorithm(-462, -1071)).toBe(21);
  });
});
