import isEven from '../isEven';

describe('isEven', () => {
  it('should detect if a number is even', () => {
    expect(isEven(0)).toBe(true);
    expect(isEven(2)).toBe(true);
    expect(isEven(-2)).toBe(true);
    expect(isEven(1)).toBe(false);
    expect(isEven(-1)).toBe(false);
  });
});
