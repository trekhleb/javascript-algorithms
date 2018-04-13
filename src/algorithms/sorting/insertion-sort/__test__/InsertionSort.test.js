import InsertionSort from '../InsertionSort';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

describe('InsertionSort', () => {
  it('should sort array', () => {
    SortTester.testSort(InsertionSort);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(InsertionSort);
  });

  it('should do stable sorting', () => {
    SortTester.testSortStability(InsertionSort);
  });

  it('should visit EQUAL array element specified number of times', () => {
    const expectedNumberOfVisits = 20;

    SortTester.testAlgorithmTimeComplexity(
      InsertionSort,
      equalArr,
      expectedNumberOfVisits,
    );
  });

  it('should visit SORTED array element specified number of times', () => {
    const expectedNumberOfVisits = 20;

    SortTester.testAlgorithmTimeComplexity(
      InsertionSort,
      sortedArr,
      expectedNumberOfVisits,
    );
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    const expectedNumberOfVisits = 101;

    SortTester.testAlgorithmTimeComplexity(
      InsertionSort,
      notSortedArr,
      expectedNumberOfVisits,
    );
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    const expectedNumberOfVisits = 210;

    SortTester.testAlgorithmTimeComplexity(
      InsertionSort,
      reverseArr,
      expectedNumberOfVisits,
    );
  });
});
