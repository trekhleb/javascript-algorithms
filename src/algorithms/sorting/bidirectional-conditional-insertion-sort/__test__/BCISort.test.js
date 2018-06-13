import BCIS from '../BCIS';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 0;
const NOT_SORTED_ARRAY_VISITING_COUNT = 0;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 0;
const EQUAL_ARRAY_VISITING_COUNT = 0;

describe('BCIS', () => {
  it('should sort array', () => {
    SortTester.testSort(BCIS);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(BCIS);
  });
  it('should visit EQUAL array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      BCIS,
      equalArr,
      EQUAL_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      BCIS,
      sortedArr,
      SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      BCIS,
      notSortedArr,
      NOT_SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      BCIS,
      reverseArr,
      REVERSE_SORTED_ARRAY_VISITING_COUNT,
    );
  });
});
