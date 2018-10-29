import OddEvenSort from '../OddEvenSort';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

// Complexity constants.
const EQUAL_ARRAY_VISITING_COUNT = 19;
const SORTED_ARRAY_VISITING_COUNT = 19;
const NOT_SORTED_ARRAY_VISITING_COUNT = 171;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 209;

describe('OddEvenSort', () => {
  it('should sort array', () => {
    SortTester.testSort(OddEvenSort);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(OddEvenSort);
  });

  it('should do stable sorting', () => {
    SortTester.testSortStability(OddEvenSort);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(OddEvenSort);
  });

  it('should visit EQUAL array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      OddEvenSort,
      equalArr,
      EQUAL_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      OddEvenSort,
      sortedArr,
      SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      OddEvenSort,
      notSortedArr,
      NOT_SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      OddEvenSort,
      reverseArr,
      REVERSE_SORTED_ARRAY_VISITING_COUNT,
    );
  });
});
