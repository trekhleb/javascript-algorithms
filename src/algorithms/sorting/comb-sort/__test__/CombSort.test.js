import CombSort from '../CombSort';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

describe('CombSort', () => {
  it('should sort array', () => {
    SortTester.testSort(CombSort);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(CombSort);
  });

  it('should sort negative numbers', () => {
    SortTester.testNegativeNumbersSort(CombSort);
  });

  it('should visit SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      CombSort,
      sortedArr,
      10,
    );
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    SortTester.testAlgorithmTimeComplexity(
      CombSort,
      notSortedArr,
      30,
    );
  });
});
