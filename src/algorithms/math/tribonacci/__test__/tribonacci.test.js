import tribonacci from '../tribonacci';

describe('tribonacci', () => {
  it('should calculate tribonacci correctly', () => {
    expect(tribonacci(1)).toEqual([0]);
    expect(tribonacci(2)).toEqual([0, 0]);
    expect(tribonacci(3)).toEqual([0, 0, 1]);
    expect(tribonacci(4)).toEqual([0, 0, 1, 1]);
    expect(tribonacci(5)).toEqual([0, 0, 1, 1, 2]);
    expect(tribonacci(6)).toEqual([0, 0, 1, 1, 2, 4]);
    expect(tribonacci(7)).toEqual([0, 0, 1, 1, 2, 4, 7]);
    expect(tribonacci(8)).toEqual([0, 0, 1, 1, 2, 4, 7, 13]);
    expect(tribonacci(9)).toEqual([0, 0, 1, 1, 2, 4, 7, 13, 24]);
    expect(tribonacci(10)).toEqual([0, 0, 1, 1, 2, 4, 7, 13, 24, 44]);
  });
});
