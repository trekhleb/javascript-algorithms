import euclideanDistance from '../euclideanDistance';

describe('euclideanDistance', () => {
  it('should calculate euclidean distance between vectors', () => {
    expect(euclideanDistance([[1]], [[2]])).toEqual(1);
    expect(euclideanDistance([[2]], [[1]])).toEqual(1);
    expect(euclideanDistance([[5, 8]], [[7, 3]])).toEqual(5.39);
    expect(euclideanDistance([[5], [8]], [[7], [3]])).toEqual(5.39);
    expect(euclideanDistance([[8, 2, 6]], [[3, 5, 7]])).toEqual(5.92);
    expect(euclideanDistance([[8], [2], [6]], [[3], [5], [7]])).toEqual(5.92);
    expect(euclideanDistance([[[8]], [[2]], [[6]]], [[[3]], [[5]], [[7]]])).toEqual(5.92);
  });

  it('should throw an error in case if two matrices are of different shapes', () => {
    expect(() => euclideanDistance([[1]], [[[2]]])).toThrowError(
      'Matrices have different dimensions',
    );

    expect(() => euclideanDistance([[1]], [[2, 3]])).toThrowError(
      'Matrices have different shapes',
    );
  });
});
