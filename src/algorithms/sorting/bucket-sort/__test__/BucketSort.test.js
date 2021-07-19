import BucketSort from '../BucketSort';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

// Complexity constants.
const EQUAL_ARRAY_VISITING_COUNT = 0;
const SORTED_ARRAY_VISITING_COUNT = 20;
const NOT_SORTED_ARRAY_VISITING_COUNT = 20;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 20;

describe('BucketSort', () => {
  it('should sort array', () => {
    SortTester.testSort(BucketSort);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(BucketSort);
  });

  it('should allow to use specify max/min integer value in array', () => {
    const sorter = new BucketSort();

    // Detect biggest number in array in prior.
    const biggestElement = Math.max(...notSortedArr);

    // Detect smallest number in array in prior.
    const smallestElement = Math.min(...notSortedArr);

    const sortedArray = sorter.sort(notSortedArr, smallestElement, biggestElement);

    expect(sortedArray).toEqual(sortedArr);
  });

  it('should visit EQUAL array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      BucketSort,
      equalArr,
      EQUAL_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      BucketSort,
      sortedArr,
      SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      BucketSort,
      notSortedArr,
      NOT_SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      BucketSort,
      reverseArr,
      REVERSE_SORTED_ARRAY_VISITING_COUNT,
    );
  });
});
