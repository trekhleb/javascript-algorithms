import ternarySearch from '../ternarySearch';

describe('ternarySearch', () => {
  it('should search for an element in a sorted array', () => {
    expect(ternarySearch([], 1)).toBe(-1);
    expect(ternarySearch([1], 1)).toBe(0);
    expect(ternarySearch([1], 0)).toBe(-1);
    expect(ternarySearch([1, 2], 1)).toBe(0);
    expect(ternarySearch([1, 2], 2)).toBe(1);
    expect(ternarySearch([1, 5, 10, 12], 1)).toBe(0);
    expect(ternarySearch([1, 5, 10, 12], 10)).toBe(2);
    expect(ternarySearch([1, 5, 10, 12], 12)).toBe(3);
    expect(ternarySearch([1, 5, 10, 12], 0)).toBe(-1);
    expect(ternarySearch([1, 5, 10, 12], 4)).toBe(-1);
    expect(ternarySearch([1, 5, 10, 12], 11)).toBe(-1);
    expect(ternarySearch([1, 5, 10, 12], 20)).toBe(-1);
  });

  it('should search for an element in a larger sorted array', () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

    expect(ternarySearch(array, 1)).toBe(0);
    expect(ternarySearch(array, 10)).toBe(9);
    expect(ternarySearch(array, 20)).toBe(19);
    expect(ternarySearch(array, 7)).toBe(6);
    expect(ternarySearch(array, 21)).toBe(-1);
    expect(ternarySearch(array, 0)).toBe(-1);
  });

  it('should search for an element using a custom comparator', () => {
    const comparatorCallback = (a, b) => {
      if (a === b) return 0;
      return a < b ? -1 : 1;
    };

    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    expect(ternarySearch(array, 5, comparatorCallback)).toBe(4);
    expect(ternarySearch(array, 11, comparatorCallback)).toBe(-1);
  });

  it('should search for an element in an array of strings', () => {
    const comparatorCallback = (a, b) => {
      if (a === b) return 0;
      return a < b ? -1 : 1;
    };

    const array = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

    expect(ternarySearch(array, 'd', comparatorCallback)).toBe(3);
    expect(ternarySearch(array, 'a', comparatorCallback)).toBe(0);
    expect(ternarySearch(array, 'g', comparatorCallback)).toBe(6);
    expect(ternarySearch(array, 'z', comparatorCallback)).toBe(-1);
  });
});
