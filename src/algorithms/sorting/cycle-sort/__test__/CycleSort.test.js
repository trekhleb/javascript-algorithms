import CycleSort from '../CycleSort';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
  SortTester,
} from '../../SortTester';

describe('CycleSort', () => {
  it('should sort array', () => {
    SortTester.testSort(CycleSort);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(CycleSort);
  });

  it('should do stable sorting', () => {
    SortTester.testSortStability(CycleSort);
  });
});
