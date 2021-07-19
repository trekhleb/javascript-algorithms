import BogoSort from '../BogoSort';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

const SORTED_ARRAY_VISITING_COUNT = 40;
const NOT_SORTED_ARRAY_VISITING_COUNT = 40;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 40;
const EQUAL_ARRAY_VISITING_COUNT = 40;

describe('BogoSort', () => {
  it('should sort array', () => {
    SortTester.testSort(BogoSort);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(BogoSort);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(BogoSort);
  });

  it('should visit EQUAL array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      BogoSort,
      equalArr,
      EQUAL_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      BogoSort,
      sortedArr,
      SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      BogoSort,
      notSortedArr,
      NOT_SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      BogoSort,
      reverseArr,
      REVERSE_SORTED_ARRAY_VISITING_COUNT,
    );
  });
});
