import isPowerOfTwo from '../isPowerOfTwo';

describe('isPowerOfTwo', () => {
  it('should throw an exception when trying to apply function to negative number', () => {
    const isNegativePowerOfTwo = () => {
      isPowerOfTwo(-1);
    };

    expect(isNegativePowerOfTwo).toThrowError();
  });

  it('should check if the number is made by multiplying twos', () => {
    expect(isPowerOfTwo(0)).toBeFalsy();
    expect(isPowerOfTwo(1)).toBeFalsy();
    expect(isPowerOfTwo(2)).toBeTruthy();
    expect(isPowerOfTwo(3)).toBeFalsy();
    expect(isPowerOfTwo(4)).toBeTruthy();
    expect(isPowerOfTwo(5)).toBeFalsy();
    expect(isPowerOfTwo(6)).toBeFalsy();
    expect(isPowerOfTwo(7)).toBeFalsy();
    expect(isPowerOfTwo(8)).toBeTruthy();
    expect(isPowerOfTwo(10)).toBeFalsy();
    expect(isPowerOfTwo(12)).toBeFalsy();
    expect(isPowerOfTwo(16)).toBeTruthy();
    expect(isPowerOfTwo(31)).toBeFalsy();
    expect(isPowerOfTwo(64)).toBeTruthy();
    expect(isPowerOfTwo(1024)).toBeTruthy();
    expect(isPowerOfTwo(1023)).toBeFalsy();
  });
});
