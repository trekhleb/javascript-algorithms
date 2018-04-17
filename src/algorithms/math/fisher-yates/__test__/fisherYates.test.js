import fisherYates from '../fisherYates';
import { sortedArr } from '../../../sorting/SortTester';
import QuickSort from '../../../sorting/quick-sort/QuickSort';

describe('fisherYates', () => {
  it('should shuffle small arrays', () => {
    expect(fisherYates([])).toEqual([]);
    expect(fisherYates([1])).toEqual([1]);
  });

  it('should shuffle array randomly', () => {
    const shuffledArray = fisherYates(sortedArr);
    const sorter = new QuickSort();

    expect(shuffledArray.length).toBe(sortedArr.length);
    expect(shuffledArray).not.toEqual(sortedArr);
    expect(sorter.sort(shuffledArray)).toEqual(sortedArr);
  });
});
