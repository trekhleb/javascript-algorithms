import BucketSort from '../BucketSort';
import {
  equalArr,
  notSortedArr,
  reverseArr,
  sortedArr,
} from '../../SortTester';

describe('BucketSort', () => {
  it('should sort the array of numbers with different buckets amounts', () => {
    expect(BucketSort(notSortedArr, 4)).toEqual(sortedArr);
    expect(BucketSort(equalArr, 4)).toEqual(equalArr);
    expect(BucketSort(reverseArr, 4)).toEqual(sortedArr);
    expect(BucketSort(sortedArr, 4)).toEqual(sortedArr);

    expect(BucketSort(notSortedArr, 10)).toEqual(sortedArr);
    expect(BucketSort(equalArr, 10)).toEqual(equalArr);
    expect(BucketSort(reverseArr, 10)).toEqual(sortedArr);
    expect(BucketSort(sortedArr, 10)).toEqual(sortedArr);

    expect(BucketSort(notSortedArr, 50)).toEqual(sortedArr);
    expect(BucketSort(equalArr, 50)).toEqual(equalArr);
    expect(BucketSort(reverseArr, 50)).toEqual(sortedArr);
    expect(BucketSort(sortedArr, 50)).toEqual(sortedArr);
  });

  it('should sort the array of numbers with the default buckets of 1', () => {
    expect(BucketSort(notSortedArr)).toEqual(sortedArr);
    expect(BucketSort(equalArr)).toEqual(equalArr);
    expect(BucketSort(reverseArr)).toEqual(sortedArr);
    expect(BucketSort(sortedArr)).toEqual(sortedArr);
  });

  it('should sort the array of floats', () => {
    expect(BucketSort([0.42, 0.31], 1)).toEqual([0.31, 0.42]);
    expect(BucketSort([0.9, 0.2, 0.5, 0.1], 2)).toEqual([0.1, 0.2, 0.5, 0.9]);
  });

  it('should sort the array with negative numbers', () => {
    expect(BucketSort([3, -2, 5, -8, 0], 1)).toEqual([-8, -2, 0, 3, 5]);
    expect(BucketSort([3, -2, 5, -8, 0], 3)).toEqual([-8, -2, 0, 3, 5]);
    expect(BucketSort([-5, -10], 1)).toEqual([-10, -5]);
    expect(BucketSort([-5, -10], 2)).toEqual([-10, -5]);
  });
});
