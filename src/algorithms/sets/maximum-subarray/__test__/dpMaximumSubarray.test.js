import dpMaximumSubarray from '../dpMaximumSubarray';

describe('dpMaximumSubarray', () => {
  it('should find maximum subarray using dynamic programming algorithm', () => {
    expect(dpMaximumSubarray([])).toEqual([]);
    expect(dpMaximumSubarray([0, 0])).toEqual([0]);
    expect(dpMaximumSubarray([0, 0, 1])).toEqual([0, 0, 1]);
    expect(dpMaximumSubarray([0, 0, 1, 2])).toEqual([0, 0, 1, 2]);
    expect(dpMaximumSubarray([0, 0, -1, 2])).toEqual([2]);
    expect(dpMaximumSubarray([-1, -2, -3, -4, -5])).toEqual([-1]);
    expect(dpMaximumSubarray([1, 2, 3, 2, 3, 4, 5])).toEqual([1, 2, 3, 2, 3, 4, 5]);
    expect(dpMaximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual([4, -1, 2, 1]);
    expect(dpMaximumSubarray([-2, -3, 4, -1, -2, 1, 5, -3])).toEqual([4, -1, -2, 1, 5]);
    expect(dpMaximumSubarray([1, -3, 2, -5, 7, 6, -1, 4, 11, -23])).toEqual([7, 6, -1, 4, 11]);
  });
});
