import exponentialSearch from '../exponentialSearch';

describe('exponentialSearch', () => {
  it('should search number in sorted array', () => {
    expect(exponentialSearch([], 1)).toBe(-1);
    expect(exponentialSearch([1], 1)).toBe(0);
    expect(exponentialSearch([1, 2], 1)).toBe(0);
    expect(exponentialSearch([1, 2], 2)).toBe(1);
    expect(exponentialSearch([1, 5, 10, 12], 1)).toBe(0);
    expect(exponentialSearch([1, 5, 10, 12, 14, 17, 22, 100], 17)).toBe(5);
    expect(exponentialSearch([1, 5, 10, 12, 14, 17, 22, 100], 1)).toBe(0);
    expect(exponentialSearch([1, 5, 10, 12, 14, 17, 22, 100], 100)).toBe(7);
    expect(exponentialSearch([1, 5, 10, 12, 14, 17, 22, 100], 0)).toBe(-1);
  });

  it('should search object in sorted array', () => {
    const sortedArrayOfObjects = [
      { key: 1, value: 'value1' },
      { key: 2, value: 'value2' },
      { key: 3, value: 'value3' },
      { key: 4, value: 'value4' },
    ];

    const comparator = (a, b) => {
      if (a.key === b.key) return 0;
      return a.key < b.key ? -1 : 1;
    };

    expect(exponentialSearch([], { key: 1 }, comparator)).toBe(-1);
    expect(exponentialSearch(sortedArrayOfObjects, { key: 4 }, comparator)).toBe(3);
    expect(exponentialSearch(sortedArrayOfObjects, { key: 1 }, comparator)).toBe(0);
    expect(exponentialSearch(sortedArrayOfObjects, { key: 2 }, comparator)).toBe(1);
    expect(exponentialSearch(sortedArrayOfObjects, { key: 3 }, comparator)).toBe(2);
  });
});
