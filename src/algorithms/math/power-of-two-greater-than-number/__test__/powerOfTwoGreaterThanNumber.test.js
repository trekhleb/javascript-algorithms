import powerOfTwoGreaterThanNumber from '../powerOfTwoGreaterThanNumber';

describe('powerOfTwoGreaterThanNumber', () => {
  it('should calculate the power of two greater than the given number', () => {
    expect(powerOfTwoGreaterThanNumber(-1)).toBe(-1);
    expect(powerOfTwoGreaterThanNumber(0)).toBe(-1);
    expect(powerOfTwoGreaterThanNumber(1)).toBe(2);
    expect(powerOfTwoGreaterThanNumber(2)).toBe(4);
    expect(powerOfTwoGreaterThanNumber(3)).toBe(4);
    expect(powerOfTwoGreaterThanNumber(14)).toBe(16);
    expect(powerOfTwoGreaterThanNumber(27)).toBe(32);
    expect(powerOfTwoGreaterThanNumber(63)).toBe(64);
    expect(powerOfTwoGreaterThanNumber(500)).toBe(512);
    expect(powerOfTwoGreaterThanNumber(1000)).toBe(1024);
    expect(powerOfTwoGreaterThanNumber(2000)).toBe(2048);
    expect(powerOfTwoGreaterThanNumber(4097)).toBe(8192);
  });
});
