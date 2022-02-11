import bfMaximumSubarray from '../bfMaximumSubarray';

describe('bfMaximumSubarray', () => {
  it('should find maximum subarray using the brute force algorithm', () => {
    expect(bfMaximumSubarray([])).toEqual([]);
    expect(bfMaximumSubarray([0, 0])).toEqual([0]);
    expect(bfMaximumSubarray([0, 0, 1])).toEqual([0, 0, 1]);
    expect(bfMaximumSubarray([0, 0, 1, 2])).toEqual([0, 0, 1, 2]);
    expect(bfMaximumSubarray([0, 0, -1, 2])).toEqual([2]);
    expect(bfMaximumSubarray([-1, -2, -3, -4, -5])).toEqual([-1]);
    expect(bfMaximumSubarray([1, 2, 3, 2, 3, 4, 5])).toEqual([1, 2, 3, 2, 3, 4, 5]);
    expect(bfMaximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual([4, -1, 2, 1]);
    expect(bfMaximumSubarray([-2, -3, 4, -1, -2, 1, 5, -3])).toEqual([4, -1, -2, 1, 5]);
    expect(bfMaximumSubarray([1, -3, 2, -5, 7, 6, -1, 4, 11, -23])).toEqual([7, 6, -1, 4, 11]);
  });
});
