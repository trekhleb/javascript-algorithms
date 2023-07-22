import arrayRotation from '../ArrayRotation';

describe('arrayRotation', () => {
  it('should move to left all numbers according to the number of positions provided', () => {
    const array =[1,2,3,4,5,6,7,8];

    expect(arrayRotation(array,4)).toEqual([5,6,7,8,1,2,3,4]);
    expect(arrayRotation(array,2)).toEqual([3,4,5,6,7,8,1,2]);
    expect(arrayRotation(array,3)).toEqual([,4,5,6,7,8,1,2,3]);
  });

  it('should return false if the number of positions to move greater than the size of the array', () => {
    const array =[1,2,3,4,5,6,7,8];
    expect(arrayRotation(array,10)).toEqual(false);
  });
});
