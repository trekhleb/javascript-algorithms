import TimSort from '../TimSort';
import {
  SortTester,
  sortedArr,
  reverseArr,
  notSortedArr,
  equalArr,
  negativeArr,
  negativeArrSorted,
} from '../../SortTester';

describe('TimSort', () => {
  it('should sort array', () => {
    SortTester.testSort(TimSort);
  });

  it('should sort array with negative numbers', () => {
    SortTester.testNegativeNumbersSort(TimSort);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(TimSort);
  });

  it('should sort stability', () => {
    SortTester.testSortStability(TimSort);
  });

  it('should sort correctly when array is already sorted', () => {
    const sorter = new TimSort();
    expect(sorter.sort(sortedArr)).toEqual(sortedArr);
  });

  it('should sort correctly when array is reverse sorted', () => {
    const sorter = new TimSort();
    expect(sorter.sort(reverseArr)).toEqual(sortedArr);
  });

  it('should sort correctly when array is not sorted', () => {
    const sorter = new TimSort();
    expect(sorter.sort(notSortedArr)).toEqual(sortedArr);
  });

  it('should sort correctly when all elements are equal', () => {
    const sorter = new TimSort();
    expect(sorter.sort(equalArr)).toEqual(equalArr);
  });

  it('should sort array with negative numbers', () => {
    const sorter = new TimSort();
    expect(sorter.sort(negativeArr)).toEqual(negativeArrSorted);
  });

  it('should sort an empty array', () => {
    const sorter = new TimSort();
    expect(sorter.sort([])).toEqual([]);
  });

  it('should sort an array of one element', () => {
    const sorter = new TimSort();
    expect(sorter.sort([1])).toEqual([1]);
  });

  it('should sort a large array correctly', () => {
    // Create a large array to trigger both the run and merge phases.
    const largeArray = Array.from({ length: 200 }, (_, i) => 200 - i);
    const sortedLargeArray = Array.from({ length: 200 }, (_, i) => i + 1);
    const sorter = new TimSort();
    expect(sorter.sort(largeArray)).toEqual(sortedLargeArray);
  });
});
