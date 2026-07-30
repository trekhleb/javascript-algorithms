import euclideanDistance from '../euclideanDistance';

describe('euclideanDistance', () => {
  it('should calculate euclidean distance between vectors', () => {
    expect(euclideanDistance([[1]], [[2]])).toEqual(1);
    expect(euclideanDistance([[2]], [[1]])).toEqual(1);
    expect(euclideanDistance([[5, 8]], [[7, 3]])).toBeCloseTo(5.39, 2);
    expect(euclideanDistance([[5], [8]], [[7], [3]])).toBeCloseTo(5.39, 2);
    expect(euclideanDistance([[8, 2, 6]], [[3, 5, 7]])).toBeCloseTo(5.92, 2);
    expect(euclideanDistance([[8], [2], [6]], [[3], [5], [7]])).toBeCloseTo(5.92, 2);
    expect(euclideanDistance([[[8]], [[2]], [[6]]], [[[3]], [[5]], [[7]]])).toBeCloseTo(5.92, 2);
  });

  it('should not round the distance', () => {
    expect(euclideanDistance([[0]], [[0.004]])).toBe(0.004);
    expect(euclideanDistance([[1, 1]], [[2, 2]])).toBe(Math.sqrt(2));
  });

  it('should throw an error in case if two matrices are of different shapes', () => {
    expect(() => euclideanDistance([[1]], [[[2]]])).toThrow(
      'Matrices have different dimensions',
    );

    expect(() => euclideanDistance([[1]], [[2, 3]])).toThrow(
      'Matrices have different shapes',
    );
  });
});
