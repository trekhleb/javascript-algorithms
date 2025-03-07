import InsertionSort from '../InsertionSort';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 19;
const NOT_SORTED_ARRAY_VISITING_COUNT = 100;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 209;
const EQUAL_ARRAY_VISITING_COUNT = 19;

describe('InsertionSort', () => {
  it('should sort array', () => {
    SortTester.testSort(InsertionSort);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(InsertionSort);
  });

  it('should do stable sorting', () => {
    SortTester.testSortStability(InsertionSort);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(InsertionSort);
  });

  it('should visit EQUAL array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      InsertionSort,
      equalArr,
      EQUAL_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      InsertionSort,
      sortedArr,
      SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      InsertionSort,
      notSortedArr,
      NOT_SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      InsertionSort,
      reverseArr,
      REVERSE_SORTED_ARRAY_VISITING_COUNT,
    );
  });
});
