import QuickSortIterative from '../QuickSortIterative';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 19;
const NOT_SORTED_ARRAY_VISITING_COUNT = 19;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 19;
const EQUAL_ARRAY_VISITING_COUNT = 19;

describe('QuickSortIterative', () => {
  it('should sort array', () => {
    SortTester.testSort(QuickSortIterative);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(QuickSortIterative);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(QuickSortIterative);
  });

  it('should visit EQUAL array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      QuickSortIterative,
      equalArr,
      EQUAL_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      QuickSortIterative,
      sortedArr,
      SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      QuickSortIterative,
      notSortedArr,
      NOT_SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      QuickSortIterative,
      reverseArr,
      REVERSE_SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should sort in place', () => {
    const sorter = new QuickSortIterative();
    const originalArray = [7, 5, 1, 42, 30, 24, 14];
    const sortedArray = sorter.sort(originalArray);
    expect(originalArray).toEqual(sortedArray);
  });

  it('should not modify original array', () => {
    const sorter = new QuickSortIterative();
    const originalArray = [7, 5, 1, 42, 30, 24, 14];
    const sortedArray = sorter.sort(originalArray, 0, originalArray.length - 1, false);
    expect(originalArray).not.toEqual(sortedArray);
  });
});
