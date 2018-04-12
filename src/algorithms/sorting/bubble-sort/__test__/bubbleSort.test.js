import BubbleSort from '../BubbleSort';
import { equalArray, notSortedArray, sortedArray, SortTester } from '../../SortTester';

describe('bubbleSort', () => {
  it('should sort array', () => {
    SortTester.testSort(BubbleSort);
  });

  it('should sort array with custom comparator', () => {
    SortTester.testSortWithCustomComparator(BubbleSort);
  });

  it('should visit sorted array element specified number of times', () => {
    const visitingCallback = jest.fn();

    const callbacks = { visitingCallback };
    const sorter = new BubbleSort(callbacks);

    sorter.sort(sortedArray);

    expect(visitingCallback).toHaveBeenCalledTimes(90);
  });

  it('should visit not-sorted array element specified number of times', () => {
    const visitingCallback = jest.fn();

    const callbacks = { visitingCallback };
    const sorter = new BubbleSort(callbacks);

    sorter.sort(notSortedArray);

    expect(visitingCallback).toHaveBeenCalledTimes(90);
  });

  it('should visit equal array element specified number of times', () => {
    const visitingCallback = jest.fn();

    const callbacks = { visitingCallback };
    const sorter = new BubbleSort(callbacks);

    sorter.sort(equalArray);

    expect(visitingCallback).toHaveBeenCalledTimes(90);
  });
});
