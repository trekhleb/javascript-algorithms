import euclideanAlgorithmIterative from '../euclideanAlgorithmIterative';

describe('euclideanAlgorithmIterative', () => {
  it('should calculate GCD iteratively', () => {
    expect(euclideanAlgorithmIterative(0, 0)).toBe(0);
    expect(euclideanAlgorithmIterative(2, 0)).toBe(2);
    expect(euclideanAlgorithmIterative(0, 2)).toBe(2);
    expect(euclideanAlgorithmIterative(1, 2)).toBe(1);
    expect(euclideanAlgorithmIterative(2, 1)).toBe(1);
    expect(euclideanAlgorithmIterative(6, 6)).toBe(6);
    expect(euclideanAlgorithmIterative(2, 4)).toBe(2);
    expect(euclideanAlgorithmIterative(4, 2)).toBe(2);
    expect(euclideanAlgorithmIterative(12, 4)).toBe(4);
    expect(euclideanAlgorithmIterative(4, 12)).toBe(4);
    expect(euclideanAlgorithmIterative(5, 13)).toBe(1);
    expect(euclideanAlgorithmIterative(27, 13)).toBe(1);
    expect(euclideanAlgorithmIterative(24, 60)).toBe(12);
    expect(euclideanAlgorithmIterative(60, 24)).toBe(12);
    expect(euclideanAlgorithmIterative(252, 105)).toBe(21);
    expect(euclideanAlgorithmIterative(105, 252)).toBe(21);
    expect(euclideanAlgorithmIterative(1071, 462)).toBe(21);
    expect(euclideanAlgorithmIterative(462, 1071)).toBe(21);
    expect(euclideanAlgorithmIterative(462, -1071)).toBe(21);
    expect(euclideanAlgorithmIterative(-462, -1071)).toBe(21);
  });
});
