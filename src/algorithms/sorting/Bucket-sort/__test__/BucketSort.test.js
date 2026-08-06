import BucketSort from '../BucketSort';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

// Complexity constants.
// const SORTED_ARRAY_VISITING_COUNT = 20;
// const NOT_SORTED_ARRAY_VISITING_COUNT = 189;
// const REVERSE_SORTED_ARRAY_VISITING_COUNT = 209;
// const EQUAL_ARRAY_VISITING_COUNT = 20;

describe('BucketSort', () => {
  it('should sort array', () => {
    SortTester.testSort(BucketSort);
  });

  // it('should sort array with custom comparator', () => {
  //   SortTester.testSortWithCustomComparator(BucketSort);
  // });

  // it('should do stable sorting', () => {
  //   SortTester.testSortStability(BucketSort);
  // });

  // it('should sort negative numbers', () => {
  //   SortTester.testNegativeNumbersSort(BucketSort);
  // });

  // it('should visit EQUAL array element specified number of times', () => {
  //   SortTester.testAlgorithmTimeComplexity(
  //     BucketSort,
  //     equalArr,
  //     EQUAL_ARRAY_VISITING_COUNT,
  //   );
  // });

  // it('should visit SORTED array element specified number of times', () => {
  //   SortTester.testAlgorithmTimeComplexity(
  //     BucketSort,
  //     sortedArr,
  //     SORTED_ARRAY_VISITING_COUNT,
  //   );
  // });

  // it('should visit NOT SORTED array element specified number of times', () => {
  //   SortTester.testAlgorithmTimeComplexity(
  //     BucketSort,
  //     notSortedArr,
  //     NOT_SORTED_ARRAY_VISITING_COUNT,
  //   );
  // });

  // it('should visit REVERSE SORTED array element specified number of times', () => {
  //   SortTester.testAlgorithmTimeComplexity(
  //     BucketSort,
  //     reverseArr,
  //     REVERSE_SORTED_ARRAY_VISITING_COUNT,
  //   );
  // });
});
