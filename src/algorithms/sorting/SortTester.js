export const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
export const notSortedArray = [10, 5, 30, -1, 0, 0, 1, 2, -3, 2];
export const equalArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

export class SortTester {
  static testSort(SortingClass) {
    const sorter = new SortingClass();

    expect(sorter.sort([])).toEqual([]);
    expect(sorter.sort([1])).toEqual([1]);
    expect(sorter.sort([1, 2])).toEqual([1, 2]);
    expect(sorter.sort([2, 1])).toEqual([1, 2]);
    expect(sorter.sort([1, 1, 1])).toEqual([1, 1, 1]);
    expect(sorter.sort(sortedArray)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(sorter.sort(notSortedArray)).toEqual([-3, -1, 0, 0, 1, 2, 2, 5, 10, 30]);
    expect(sorter.sort(equalArray)).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
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
    expect(sorter.sort(['bb', 'aa', 'c'])).toEqual(['c', 'bb', 'aa']);
  }
}
