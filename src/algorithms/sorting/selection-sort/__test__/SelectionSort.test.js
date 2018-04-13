import SelectionSort from '../SelectionSort';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

describe('SelectionSort', () => {
  it('should sort array', () => {
    SortTester.testSort(SelectionSort);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(SelectionSort);
  });

  it('should visit EQUAL array element specified number of times', () => {
    const expectedNumberOfVisits = 190;

    SortTester.testAlgorithmTimeComplexity(
      SelectionSort,
      equalArr,
      expectedNumberOfVisits,
    );
  });

  it('should visit SORTED array element specified number of times', () => {
    const expectedNumberOfVisits = 190;

    SortTester.testAlgorithmTimeComplexity(
      SelectionSort,
      sortedArr,
      expectedNumberOfVisits,
    );
  });

  it('should visit NOT SORTED array element specified number of times', () => {
    const expectedNumberOfVisits = 190;

    SortTester.testAlgorithmTimeComplexity(
      SelectionSort,
      notSortedArr,
      expectedNumberOfVisits,
    );
  });

  it('should visit REVERSE SORTED array element specified number of times', () => {
    const expectedNumberOfVisits = 190;

    SortTester.testAlgorithmTimeComplexity(
      SelectionSort,
      reverseArr,
      expectedNumberOfVisits,
    );
  });
});
