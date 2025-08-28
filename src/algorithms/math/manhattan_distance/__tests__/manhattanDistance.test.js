import { manhattanDistance } from '../manhattanDistance';

describe('manhattanDistance', () => {
  it('should calculate Manhattan distance between vectors', () => {
    expect(manhattanDistance([[1]], [[2]])).toEqual(1);
    expect(manhattanDistance([[2]], [[1]])).toEqual(1);
    expect(manhattanDistance([[5, 8]], [[7, 3]])).toEqual(7);
    expect(manhattanDistance([[5], [8]], [[7], [3]])).toEqual(7);
    expect(manhattanDistance([[8, 2, 6]], [[3, 5, 7]])).toEqual(9);
    expect(manhattanDistance([[8], [2], [6]], [[3], [5], [7]])).toEqual(9);
    expect(manhattanDistance([[[8]], [[2]], [[6]]], [[[3]], [[5]], [[7]]])).toEqual(9);
  });

  it('should throw an error in case if two matrices are of different shapes', () => {
    expect(() => manhattanDistance([[1]], [[[2]]])).toThrowError(
      'Matrices have different dimensions',
    );

    expect(() => manhattanDistance([[1]], [[2, 3]])).toThrowError(
      'Matrices have different shapes',
    );
  });
});