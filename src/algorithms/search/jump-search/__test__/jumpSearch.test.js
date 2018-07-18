import jumpSearch from '../jumpSearch';

describe('jumpSearch', () => {
  it('should search for an element in sorted array', () => {
    expect(jumpSearch([], 1)).toBe(-1);
    expect(jumpSearch([1], 2)).toBe(-1);
    expect(jumpSearch([1], 1)).toBe(0);
    expect(jumpSearch([1, 2], 1)).toBe(0);
    expect(jumpSearch([1, 2], 1)).toBe(0);
    expect(jumpSearch([1, 1, 1], 1)).toBe(0);
    expect(jumpSearch([1, 2, 5, 10, 20, 21, 24, 30, 48], 2)).toBe(1);
    expect(jumpSearch([1, 2, 5, 10, 20, 21, 24, 30, 48], 0)).toBe(-1);
    expect(jumpSearch([1, 2, 5, 10, 20, 21, 24, 30, 48], 0)).toBe(-1);
    expect(jumpSearch([1, 2, 5, 10, 20, 21, 24, 30, 48], 7)).toBe(-1);
    expect(jumpSearch([1, 2, 5, 10, 20, 21, 24, 30, 48], 5)).toBe(2);
    expect(jumpSearch([1, 2, 5, 10, 20, 21, 24, 30, 48], 20)).toBe(4);
    expect(jumpSearch([1, 2, 5, 10, 20, 21, 24, 30, 48], 30)).toBe(7);
    expect(jumpSearch([1, 2, 5, 10, 20, 21, 24, 30, 48], 48)).toBe(8);
  });
});
