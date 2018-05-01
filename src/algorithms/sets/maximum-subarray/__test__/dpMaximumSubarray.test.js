import dpMaximumSubarray from '../dpMaximumSubarray';

describe('dpMaximumSubarray', () => {
  it('should find maximum subarray using dynamic programming algorithm', () => {
    expect(dpMaximumSubarray([])).toEqual([]);
    expect(dpMaximumSubarray([-1, -2, -3, -4, -5])).toEqual([-1]);
    expect(dpMaximumSubarray([1, 2, 3, 2, 3, 4, 5])).toEqual([1, 2, 3, 2, 3, 4, 5]);
    expect(dpMaximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual([4, -1, 2, 1]);
    expect(dpMaximumSubarray([-2, -3, 4, -1, -2, 1, 5, -3])).toEqual([4, -1, -2, 1, 5]);
    expect(dpMaximumSubarray([1, -3, 2, -5, 7, 6, -1, 4, 11, -23])).toEqual([7, 6, -1, 4, 11]);
  });
});
