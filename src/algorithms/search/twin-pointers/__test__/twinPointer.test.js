import { twinPointerSorted, twinPointerUnsorted } from '../twinPointers';

describe('twinPointerSorted', () => {
    it('should search for a specific combination sum', () => {
      expect(twinPointerSorted([], 1)).toBe([0, 0]);
      expect(twinPointerSorted([0, 1, 2], 3)).toBe([1, 2]);
      expect(twinPointerSorted([0, 1, 2], 1)).toBe([0, 1]);
      expect(twinPointerSorted([1, 2, 5, 7, 9], 4)).toBe([0, 0]);
      expect(twinPointerSorted([1, 2, 5, 7, 9], 14)).toBe([2, 4]);
      expect(twinPointerSorted([3, 5, 7, 9], 1)).toBe([0, 0]);
      expect(twinPointerSorted([4, 6, 10, 15, 16, 18, 20], 10)).toBe([0, 1]);
      expect(twinPointerSorted([4, 6, 10, 15, 16, 18, 20], 38)).toBe([5, 6]);
      expect(twinPointerSorted([0, 100, 300, 500, 700, 1000, 2000, 5000], 50)).toBe([0, 0]);
      expect(twinPointerSorted([0, 100, 300, 500, 700, 1000, 2000, 5000], 100)).toBe([0, 1]);
      expect(twinPointerSorted([0, 100, 300, 500, 700, 1000, 2000, 5000], 1000)).toBe([0, 5]);
      expect(twinPointerSorted([0, 100, 300, 500, 700, 1000, 2000, 5000], 5000)).toBe([0, 7]);
    });
  });