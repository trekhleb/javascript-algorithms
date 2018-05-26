import QuickSortInPlace from '../QuickSortInPlace';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 190;
const NOT_SORTED_ARRAY_VISITING_COUNT = 80;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 190;
const EQUAL_ARRAY_VISITING_COUNT = 190;

describe('QuickSortInPlace', () => {
  it('should sort array', () => {
    SortTester.testSort(QuickSortInPlace);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(QuickSortInPlace);
  });

  it('should visit EQUAL array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      QuickSortInPlace,
      equalArr,
      EQUAL_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      QuickSortInPlace,
      sortedArr,
      SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      QuickSortInPlace,
      notSortedArr,
      NOT_SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      QuickSortInPlace,
      reverseArr,
      REVERSE_SORTED_ARRAY_VISITING_COUNT,
    );
  });
});
