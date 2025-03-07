import dcMaximumSubarray from '../dcMaximumSubarraySum';

describe('dcMaximumSubarraySum', () => {
  it('should find maximum subarray sum using the divide and conquer algorithm', () => {
    expect(dcMaximumSubarray([])).toEqual(-Infinity);
    expect(dcMaximumSubarray([0, 0])).toEqual(0);
    expect(dcMaximumSubarray([0, 0, 1])).toEqual(1);
    expect(dcMaximumSubarray([0, 0, 1, 2])).toEqual(3);
    expect(dcMaximumSubarray([0, 0, -1, 2])).toEqual(2);
    expect(dcMaximumSubarray([-1, -2, -3, -4, -5])).toEqual(-1);
    expect(dcMaximumSubarray([1, 2, 3, 2, 3, 4, 5])).toEqual(20);
    expect(dcMaximumSubarray([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toEqual(6);
    expect(dcMaximumSubarray([-2, -3, 4, -1, -2, 1, 5, -3])).toEqual(7);
    expect(dcMaximumSubarray([1, -3, 2, -5, 7, 6, -1, 4, 11, -23])).toEqual(27);
  });
});
