import minimumManhattanDistance from '../minimumManhattanDistance';

describe('minimumManhattanDistance', () => {
  it('should return 0 for an empty array or an array with a single point', () => {
    expect(minimumManhattanDistance([])).toBe(0);
    expect(minimumManhattanDistance([[1, 2]])).toBe(0);
  });

  it('should find the minimum distance for 2D points', () => {
    const points = [
      [1, 1],
      [3, 3],
      [1, 4],
    ];
    // d([1,1], [3,3]) = |1-3|+|1-3| = 4
    // d([1,1], [1,4]) = |1-1|+|1-4| = 3
    // d([3,3], [1,4]) = |3-1|+|3-4| = 3
    expect(minimumManhattanDistance(points)).toBe(3);
  });

  it('should find the minimum distance for 3D points', () => {
    const points = [
      [0, 0, 0],
      [2, 2, 2],
      [3, 3, 3],
      [1, 5, 1],
    ];
    // d([2,2,2], [3,3,3]) = |2-3|+|2-3|+|2-3| = 1+1+1 = 3
    expect(minimumManhattanDistance(points)).toBe(3);
  });

  it('should return 0 if there are identical points', () => {
    const points = [
      [10, 20, 5],
      [1, 1, 1],
      [4, 8, 12],
      [10, 20, 5],
    ];
    expect(minimumManhattanDistance(points)).toBe(0);
  });

  it('should work correctly with negative coordinates', () => {
    const points = [
      [-1, -1],
      [2, 2],
      [-3, 3],
      [2, 3],
    ];
    // d([2,2], [2,3]) = |2-2|+|2-3| = 1
    expect(minimumManhattanDistance(points)).toBe(1);
  });

  it('should handle a larger set of points', () => {
    const points = [
      [0, 0],
      [100, 100],
      [10, 10],
      [90, 90],
      [49, 50],
      [50, 50],
    ];
    // d([49,50], [50,50]) = |49-50|+|50-50| = 1
    expect(minimumManhattanDistance(points)).toBe(1);
  });
});