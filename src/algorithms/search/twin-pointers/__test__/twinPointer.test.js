import { twinPointerSorted, twinPointerUnsorted } from '../twinPointers';

describe('twinPointerSorted', () => {
  it('should search for a specific combination sum', () => {
    expect(twinPointerSorted([], 1)).toBe(-1);
    expect(twinPointerSorted([0, 1, 2], 3)).toStrictEqual([1, 2]);
    expect(twinPointerSorted([0, 1, 2], 1)).toStrictEqual([0, 1]);
    expect(twinPointerSorted([1, 2, 5, 7, 9], 4)).toBe(-1);
    expect(twinPointerSorted([1, 2, 5, 7, 9], 14)).toStrictEqual([2, 4]);
    expect(twinPointerSorted([3, 5, 7, 9], 1)).toBe(-1);
    expect(twinPointerSorted([4, 6, 10, 15, 16, 18, 20], 10)).toStrictEqual([0, 1]);
    expect(twinPointerSorted([4, 6, 10, 15, 16, 18, 20], 38)).toStrictEqual([5, 6]);
    expect(twinPointerSorted([0, 100, 300, 500, 700, 1000, 2000, 5000], 50)).toBe(-1);
    expect(twinPointerSorted([0, 100, 300, 500, 700, 1000, 2000, 5000], 100)).toStrictEqual([0, 1]);
    expect(twinPointerSorted([0, 100, 300, 500, 700, 1000, 2000, 5000], 1000)).toStrictEqual([0, 5]);
    expect(twinPointerSorted([0, 100, 300, 500, 700, 1000, 2000, 5000], 5000)).toStrictEqual([0, 7]);
  });
});

describe('twinPointerUnsorted', () => {
  it('should search for the highest possible area', () => {
    expect(twinPointerUnsorted([])).toBe(0);
    expect(twinPointerUnsorted([2])).toBe(2);
    expect(twinPointerUnsorted([0, 1, 2])).toBe(1);
    expect(twinPointerUnsorted([1, 2, 5, 7, 9])).toBe(10);
    expect(twinPointerUnsorted([3, 5, 7, 9])).toBe(10);
    expect(twinPointerUnsorted([4, 6, 10, 15, 16, 18, 20])).toBe(45);
    expect(twinPointerUnsorted([0, 100, 300, 500, 700, 1000, 2000, 5000])).toBe(2100);
  });
});