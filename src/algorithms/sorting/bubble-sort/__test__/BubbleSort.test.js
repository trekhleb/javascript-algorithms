import BubbleSort from '../BubbleSort';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

describe('BubbleSort', () => {
  it('should sort array', () => {
    SortTester.testSort(BubbleSort);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(BubbleSort);
  });

  it('should visit sorted array element specified number of times', () => {
    const visitingCallback = jest.fn();

    const callbacks = { visitingCallback };
    const sorter = new BubbleSort(callbacks);

    const arrayAfterSorting = sorter.sort(sortedArr);

    expect(arrayAfterSorting).toEqual(sortedArr);
    expect(visitingCallback).toHaveBeenCalledTimes(19);
  });

  it('should visit not-sorted array element specified number of times', () => {
    const visitingCallback = jest.fn();

    const callbacks = { visitingCallback };
    const sorter = new BubbleSort(callbacks);

    const arrayAfterSorting = sorter.sort(notSortedArr);

    expect(arrayAfterSorting).toEqual(sortedArr);
    expect(visitingCallback).toHaveBeenCalledTimes(19);
  });

  it('should visit equal array element specified number of times', () => {
    const visitingCallback = jest.fn();

    const callbacks = { visitingCallback };
    const sorter = new BubbleSort(callbacks);

    const arrayAfterSorting = sorter.sort(equalArr);

    expect(arrayAfterSorting).toEqual(equalArr);
    expect(visitingCallback).toHaveBeenCalledTimes(19);
  });

  it('should visit reverse sorted array element specified number of times', () => {
    const visitingCallback = jest.fn();

    const callbacks = { visitingCallback };
    const sorter = new BubbleSort(callbacks);

    const arrayAfterSorting = sorter.sort(reverseArr);

    expect(arrayAfterSorting).toEqual(sortedArr);
    expect(visitingCallback).toHaveBeenCalledTimes(19);
  });
});
