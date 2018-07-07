import pascalTriangleRecursive from '../pascalTriangleRecursive';

describe('pascalTriangleRecursive', () => {
  it('should calculate Pascal Triangle coefficients for specific line number', () => {
    expect(pascalTriangleRecursive(0)).toEqual([1]);
    expect(pascalTriangleRecursive(1)).toEqual([1, 1]);
    expect(pascalTriangleRecursive(2)).toEqual([1, 2, 1]);
    expect(pascalTriangleRecursive(3)).toEqual([1, 3, 3, 1]);
    expect(pascalTriangleRecursive(4)).toEqual([1, 4, 6, 4, 1]);
    expect(pascalTriangleRecursive(5)).toEqual([1, 5, 10, 10, 5, 1]);
    expect(pascalTriangleRecursive(6)).toEqual([1, 6, 15, 20, 15, 6, 1]);
    expect(pascalTriangleRecursive(7)).toEqual([1, 7, 21, 35, 35, 21, 7, 1]);
  });
});
