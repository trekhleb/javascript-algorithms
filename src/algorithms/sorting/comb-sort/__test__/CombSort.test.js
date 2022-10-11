import CombSort from '../CombSort'

describe('CombSort', () => {
  it('should sort array', () => {
    const instance = new CombSort()
    expect(instance.sort([3, 4, 2, 1, 0, 0, 4, 3, 4, 2])).toEqual([0, 0, 1, 2, 2, 3, 3, 4, 4, 4]);
  });

  it('should sort array2', () => {
    const instance = new CombSort()
    expect(instance.sort([5, 3, 1, 7, 4, 9])).toEqual([1, 3, 4, 5, 7, 9]);
  });

  it('should sort negative numbers', () => {
    const instance = new CombSort()
    expect(instance.sort([-5, -3, -1, -7, -4, -9])).toEqual([-9, -7, -5, -4 ,-3, -1]);
  });

});
