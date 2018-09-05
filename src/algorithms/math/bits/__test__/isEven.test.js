import isEven from '../isEven';

describe('isEven', () => {
  it('should get if number is even', () => {
    expect(isEven(2)).toBe(true);
    expect(isEven(6)).toBe(true);
    expect(isEven(8)).toBe(true);
    expect(isEven(10)).toBe(true);
    expect(isEven(12)).toBe(true);
  });

  it('should get if number is odd', () => {
    expect(isEven(3)).toBe(false);
    expect(isEven(5)).toBe(false);
    expect(isEven(7)).toBe(false);
    expect(isEven(9)).toBe(false);
    expect(isEven(11)).toBe(false);
  });
});
