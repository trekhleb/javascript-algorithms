import isPowerOfTwo from '../isPowerOfTwo';

describe('isPowerOfTwo', () => {
  it('should detect if the number is power of two', () => {
    expect(isPowerOfTwo(1)).toBe(true);
    expect(isPowerOfTwo(2)).toBe(true);
    expect(isPowerOfTwo(3)).toBe(false);
    expect(isPowerOfTwo(4)).toBe(true);
    expect(isPowerOfTwo(5)).toBe(false);
    expect(isPowerOfTwo(6)).toBe(false);
    expect(isPowerOfTwo(7)).toBe(false);
    expect(isPowerOfTwo(8)).toBe(true);
    expect(isPowerOfTwo(9)).toBe(false);
    expect(isPowerOfTwo(16)).toBe(true);
    expect(isPowerOfTwo(23)).toBe(false);
    expect(isPowerOfTwo(32)).toBe(true);
    expect(isPowerOfTwo(127)).toBe(false);
    expect(isPowerOfTwo(128)).toBe(true);
  });
});
