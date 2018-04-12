import BubbleSort from '../BubbleSort';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

describe('BubbleSort', () => {
  it('should sort array', () => {
    SortTester.testSort(BubbleSort);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(BubbleSort);
  });

  it('should visit EQUAL array element specified number of times', () => {
    const expectedNumberOfVisits = 19;

    SortTester.testAlgorithmTimeComplexity(
      BubbleSort,
      equalArr,
      expectedNumberOfVisits,
    );
  });

  it('should visit SORTED array element specified number of times', () => {
    const expectedNumberOfVisits = 19;

    SortTester.testAlgorithmTimeComplexity(
      BubbleSort,
      sortedArr,
      expectedNumberOfVisits,
    );
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    const expectedNumberOfVisits = 266;

    SortTester.testAlgorithmTimeComplexity(
      BubbleSort,
      notSortedArr,
      expectedNumberOfVisits,
    );
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    const expectedNumberOfVisits = 380;

    SortTester.testAlgorithmTimeComplexity(
      BubbleSort,
      reverseArr,
      expectedNumberOfVisits,
    );
  });
});
