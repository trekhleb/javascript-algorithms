export const sortedArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
export const reverseArr = [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
export const notSortedArr = [15, 8, 5, 12, 10, 1, 16, 9, 11, 7, 20, 3, 2, 6, 17, 18, 4, 13, 14, 19];
export const equalArr = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];
export const largeArr = [5, 53, 38, 93, 200, 140, 210, 73, 178, 231, 145, 91, 240,
  250, 108, 121, 238, 55, 233, 46, 136, 74, 40, 202, 86, 43, 42, 218, 193, 141,
  232, 95, 236, 75, 128, 209, 180, 80, 88, 104, 111, 216, 13, 179, 191, 157, 126,
  14, 150, 90, 134, 27, 142, 11, 33, 123, 51, 139, 20, 49, 198, 138, 65, 82, 22,
  243, 241, 21, 135, 132, 79, 107, 154, 12, 189, 100, 203, 59, 89, 4, 130, 133,
  223, 6, 190, 162, 156, 118, 148, 67, 163, 181, 225, 153, 244, 47, 129, 57, 92,
  177, 185, 68, 81, 64, 17, 246, 39, 201, 161, 2, 30, 26, 41, 45, 101, 114, 222,
  35, 164, 195, 78, 146, 155, 173, 98, 23, 215, 213, 37, 187, 60, 247, 149, 212,
  15, 63, 70, 32, 171, 248, 62, 221, 94, 109, 224, 28, 226, 9, 61, 184, 152, 217,
  34, 115, 31, 56, 158, 36, 228, 208, 245, 183, 77, 72, 160, 25, 205, 169, 96, 113,
  102, 10, 122, 199, 69, 220, 76, 125, 175, 24, 188, 159, 168, 7, 182, 234, 50, 174,
  112, 229, 151, 99, 197, 85, 186, 230, 127, 227, 1, 167, 124, 48, 206, 18, 116, 166,
  131, 137, 117, 110, 66, 192, 165, 83, 219, 19, 84, 176, 144, 172, 211, 119, 214, 103,
  235, 196, 204, 97, 8, 87, 44, 249, 170, 194, 120, 237, 105, 147, 16, 242, 71, 58, 106,
  3, 239, 207, 52, 29, 54, 143];
export const mostlySortedlargeArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
  37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57,
  58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78,
  79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99,
  100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116,
  117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 127, 128, 129, 130, 131, 132, 133,
  134, 135, 136, 137, 138, 139, 140, 237, 105, 147, 16, 242, 71, 58, 106, 3, 239, 207,
  52, 29, 54, 143];

export class SortTester {
  static testSort(SortingClass) {
    const sorter = new SortingClass();

    expect(sorter.sort([])).toEqual([]);
    expect(sorter.sort([1])).toEqual([1]);
    expect(sorter.sort([1, 2])).toEqual([1, 2]);
    expect(sorter.sort([2, 1])).toEqual([1, 2]);
    expect(sorter.sort([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);
    expect(sorter.sort(sortedArr)).toEqual(sortedArr);
    expect(sorter.sort(reverseArr)).toEqual(sortedArr);
    expect(sorter.sort(notSortedArr)).toEqual(sortedArr);
    expect(sorter.sort(equalArr)).toEqual(equalArr);
  }

  static testSortWithCustomComparator(SortingClass) {
    const callbacks = {
      compareCallback: (a, b) => {
        if (a.length === b.length) {
          return 0;
        }
        return a.length < b.length ? -1 : 1;
      },
    };

    const sorter = new SortingClass(callbacks);

    expect(sorter.sort([''])).toEqual(['']);
    expect(sorter.sort(['a'])).toEqual(['a']);
    expect(sorter.sort(['aa', 'a'])).toEqual(['a', 'aa']);
    expect(sorter.sort(['aa', 'q', 'bbbb', 'ccc'])).toEqual(['q', 'aa', 'ccc', 'bbbb']);
    expect(sorter.sort(['aa', 'aa'])).toEqual(['aa', 'aa']);
  }

  static testSortStability(SortingClass) {
    const callbacks = {
      compareCallback: (a, b) => {
        if (a.length === b.length) {
          return 0;
        }
        return a.length < b.length ? -1 : 1;
      },
    };

    const sorter = new SortingClass(callbacks);

    expect(sorter.sort(['bb', 'aa', 'c'])).toEqual(['c', 'bb', 'aa']);
    expect(sorter.sort(['aa', 'q', 'a', 'bbbb', 'ccc'])).toEqual(['q', 'a', 'aa', 'ccc', 'bbbb']);
  }

  static testAlgorithmTimeComplexity(SortingClass, arrayToBeSorted, numberOfVisits) {
    const visitingCallback = jest.fn();
    const callbacks = { visitingCallback };
    const sorter = new SortingClass(callbacks);

    sorter.sort(arrayToBeSorted);

    expect(visitingCallback).toHaveBeenCalledTimes(numberOfVisits);
  }
  static testAlgorithmTimeWithoutArray(SortingClass, arrayToBeSorted) {
    const visitingCallback = jest.fn();
    const callbacks = { visitingCallback };
    const sorter = new SortingClass(callbacks);
    expect(() => sorter.sort(arrayToBeSorted)).toThrow();
  }
}
