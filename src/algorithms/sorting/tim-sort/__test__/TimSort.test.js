/* eslint-disable linebreak-style */
import TimSort from '../TimSort';

import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 20;
const NOT_SORTED_ARRAY_VISITING_COUNT = 101;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 210;
const EQUAL_ARRAY_VISITING_COUNT = 20;

describe('TimSort', () => {
  it('should sort array', () => {
    SortTester.testSort(TimSort);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(TimSort);
  });

  it('should do stable sorting', () => {
    SortTester.testSortStability(TimSort);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(TimSort);
  });

  it('should visit EQUAL array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      TimSort,
      equalArr,
      EQUAL_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      TimSort,
      sortedArr,
      SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      TimSort,
      notSortedArr,
      NOT_SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      TimSort,
      reverseArr,
      REVERSE_SORTED_ARRAY_VISITING_COUNT,
    );
  });
});
