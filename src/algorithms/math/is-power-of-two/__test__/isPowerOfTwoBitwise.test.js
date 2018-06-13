import isPowerOfTwoBitwise from '../isPowerOfTwoBitwise';

describe('isPowerOfTwoBitwise', () => {
  it('should throw an exception when trying to apply function to negative number', () => {
    const isNegativePowerOfTwo = () => {
      isPowerOfTwoBitwise(-1);
    };

    expect(isNegativePowerOfTwo).toThrowError();
  });

  it('should check if the number is made by multiplying twos', () => {
    expect(isPowerOfTwoBitwise(0)).toBeFalsy();
    expect(isPowerOfTwoBitwise(1)).toBeFalsy();
    expect(isPowerOfTwoBitwise(2)).toBeTruthy();
    expect(isPowerOfTwoBitwise(3)).toBeFalsy();
    expect(isPowerOfTwoBitwise(4)).toBeTruthy();
    expect(isPowerOfTwoBitwise(5)).toBeFalsy();
    expect(isPowerOfTwoBitwise(6)).toBeFalsy();
    expect(isPowerOfTwoBitwise(7)).toBeFalsy();
    expect(isPowerOfTwoBitwise(8)).toBeTruthy();
    expect(isPowerOfTwoBitwise(10)).toBeFalsy();
    expect(isPowerOfTwoBitwise(12)).toBeFalsy();
    expect(isPowerOfTwoBitwise(16)).toBeTruthy();
    expect(isPowerOfTwoBitwise(31)).toBeFalsy();
    expect(isPowerOfTwoBitwise(64)).toBeTruthy();
    expect(isPowerOfTwoBitwise(1024)).toBeTruthy();
    expect(isPowerOfTwoBitwise(1023)).toBeFalsy();
  });
});
