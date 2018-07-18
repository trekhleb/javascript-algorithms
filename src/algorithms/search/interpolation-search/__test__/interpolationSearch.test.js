import interpolationSearch from '../interpolationSearch';

describe('interpolationSearch', () => {
  it('should search elements in sorted array of numbers', () => {
    expect(interpolationSearch([], 1)).toBe(-1);
    expect(interpolationSearch([1], 1)).toBe(0);
    expect(interpolationSearch([1], 0)).toBe(-1);
    expect(interpolationSearch([1, 1], 1)).toBe(0);
    expect(interpolationSearch([1, 2], 1)).toBe(0);
    expect(interpolationSearch([1, 2], 2)).toBe(1);
    expect(interpolationSearch([10, 20, 30, 40, 50], 40)).toBe(3);
    expect(interpolationSearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 14)).toBe(13);
    expect(interpolationSearch([1, 6, 7, 8, 12, 13, 14, 19, 21, 23, 24, 24, 24, 300], 24)).toBe(10);
    expect(interpolationSearch([1, 2, 3, 700, 800, 1200, 1300, 1400, 1900], 600)).toBe(-1);
    expect(interpolationSearch([1, 2, 3, 700, 800, 1200, 1300, 1400, 1900], 1)).toBe(0);
    expect(interpolationSearch([1, 2, 3, 700, 800, 1200, 1300, 1400, 1900], 2)).toBe(1);
    expect(interpolationSearch([1, 2, 3, 700, 800, 1200, 1300, 1400, 1900], 3)).toBe(2);
    expect(interpolationSearch([1, 2, 3, 700, 800, 1200, 1300, 1400, 1900], 700)).toBe(3);
    expect(interpolationSearch([1, 2, 3, 700, 800, 1200, 1300, 1400, 1900], 800)).toBe(4);
    expect(interpolationSearch([0, 2, 3, 700, 800, 1200, 1300, 1400, 1900], 1200)).toBe(5);
    expect(interpolationSearch([1, 2, 3, 700, 800, 1200, 1300, 1400, 19000], 800)).toBe(4);
    expect(interpolationSearch([0, 10, 11, 12, 13, 14, 15], 10)).toBe(1);
  });
});
