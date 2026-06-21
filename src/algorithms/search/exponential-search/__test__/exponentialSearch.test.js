import exponentialSearch from '../exponentialSearch';

describe('exponentialSearch', () => {
  it('should search for an element in a sorted array', () => {
    expect(exponentialSearch([], 1)).toBe(-1);
    expect(exponentialSearch([1], 1)).toBe(0);
    expect(exponentialSearch([1], 0)).toBe(-1);
    expect(exponentialSearch([1, 2], 1)).toBe(0);
    expect(exponentialSearch([1, 2], 2)).toBe(1);
    expect(exponentialSearch([1, 5, 10, 12], 1)).toBe(0);
    expect(exponentialSearch([1, 5, 10, 12], 10)).toBe(2);
    expect(exponentialSearch([1, 5, 10, 12], 12)).toBe(3);
    expect(exponentialSearch([1, 5, 10, 12], 0)).toBe(-1);
    expect(exponentialSearch([1, 5, 10, 12], 4)).toBe(-1);
    expect(exponentialSearch([1, 5, 10, 12], 11)).toBe(-1);
    expect(exponentialSearch([1, 5, 10, 12], 20)).toBe(-1);
  });

  it('should search for an element in a larger sorted array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    expect(exponentialSearch(array, 1)).toBe(0);
    expect(exponentialSearch(array, 10)).toBe(9);
    expect(exponentialSearch(array, 20)).toBe(19);
    expect(exponentialSearch(array, 7)).toBe(6);
    expect(exponentialSearch(array, 21)).toBe(-1);
    expect(exponentialSearch(array, 0)).toBe(-1);
  });

  it('should find element near the beginning of the array efficiently', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    // Exponential search is particularly efficient for elements near the start.
    expect(exponentialSearch(array, 1)).toBe(0);
    expect(exponentialSearch(array, 2)).toBe(1);
    expect(exponentialSearch(array, 3)).toBe(2);
  });

  it('should search for an element using a custom comparator', () => {
    const comparatorCallback = (a, b) => {
      if (a === b) return 0;
      return a < b ? -1 : 1;
    };

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(exponentialSearch(array, 5, comparatorCallback)).toBe(4);
    expect(exponentialSearch(array, 11, comparatorCallback)).toBe(-1);
  });

  it('should search for an element in an array of strings', () => {
    const comparatorCallback = (a, b) => {
      if (a === b) return 0;
      return a < b ? -1 : 1;
    };

    const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

    expect(exponentialSearch(array, 'd', comparatorCallback)).toBe(3);
    expect(exponentialSearch(array, 'a', comparatorCallback)).toBe(0);
    expect(exponentialSearch(array, 'g', comparatorCallback)).toBe(6);
    expect(exponentialSearch(array, 'z', comparatorCallback)).toBe(-1);
  });
});
