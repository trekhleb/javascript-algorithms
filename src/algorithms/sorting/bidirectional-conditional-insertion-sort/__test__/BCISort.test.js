import BCIS from '../BCIS';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  largeArr,
  mostlySortedlargeArr,
  SortTester,
} from '../../SortTester';

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 26;
const NOT_SORTED_ARRAY_VISITING_COUNT = 20;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 26;
const EQUAL_ARRAY_VISITING_COUNT = 90;
const LARGE_ARRAY_VISITING_COUNT = 705;
const MOSTLY_LARGE_ARRAY_VISITING_COUNT = 293;

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
  it('should visit NOT SORTED LARGE array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      BCIS,
      largeArr,
      LARGE_ARRAY_VISITING_COUNT,
    );
  });
  it('should visit MOSTLY SORTED LARGE array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      BCIS,
      mostlySortedlargeArr,
      MOSTLY_LARGE_ARRAY_VISITING_COUNT,
    );
  });
  it('An Array object is required', () => {
    SortTester.testAlgorithmTimeWithoutArray(
      BCIS,
      null,
      0,
    );
  });
});
