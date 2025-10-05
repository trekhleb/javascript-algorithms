import HeapSort from '../HeapSort';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

// Complexity constants.
// These numbers don't take into account up/dow heapifying of the heap.
// Thus these numbers are higher in reality.
const SORTED_ARRAY_VISITING_COUNT = 40;
const NOT_SORTED_ARRAY_VISITING_COUNT = 40;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 40;
const EQUAL_ARRAY_VISITING_COUNT = 40;

describe('HeapSort', () => {
  it('should sort array', () => {
    SortTester.testSort(HeapSort);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(HeapSort);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(HeapSort);
  });

  it('should visit EQUAL array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      HeapSort,
      equalArr,
      EQUAL_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      HeapSort,
      sortedArr,
      SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      HeapSort,
      notSortedArr,
      NOT_SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      HeapSort,
      reverseArr,
      REVERSE_SORTED_ARRAY_VISITING_COUNT,
    );
  });
});
