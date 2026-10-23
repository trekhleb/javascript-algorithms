import ShellSort from '../ShellSort';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

// Complexity constants.
const SORTED_ARRAY_VISITING_COUNT = 62;
const NOT_SORTED_ARRAY_VISITING_COUNT = 87;
const REVERSE_SORTED_ARRAY_VISITING_COUNT = 80;
const EQUAL_ARRAY_VISITING_COUNT = 62;

describe('ShellSort', () => {
  it('should stop traversing an ordered gap subsequence', () => {
    const input = Array.from({ length: 4000 }, (_, index) => index);
    const visitingCallback = jest.fn();
    const sorter = new ShellSort({ visitingCallback });

    expect(sorter.sort(input)).toEqual(input);
    expect(visitingCallback.mock.calls.length).toBeLessThanOrEqual(
      input.length * Math.ceil(Math.log2(input.length)),
    );
  });

  it('should sort array', () => {
    SortTester.testSort(ShellSort);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(ShellSort);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(ShellSort);
  });

  it('should visit EQUAL array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      ShellSort,
      equalArr,
      EQUAL_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      ShellSort,
      sortedArr,
      SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      ShellSort,
      notSortedArr,
      NOT_SORTED_ARRAY_VISITING_COUNT,
    );
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      ShellSort,
      reverseArr,
      REVERSE_SORTED_ARRAY_VISITING_COUNT,
    );
  });
});
