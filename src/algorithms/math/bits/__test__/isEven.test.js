import isEven from '../isEven';

describe('isEven', () => {
  it('should get if number is even or not', () => {
    // 2 = true
    // 3 = false
    expect(isEven(2)).toBe(true);
    expect(isEven(3)).toBe(false);

    // 5 = odd
    // 6 = even
    expect(isEven(5)).toBe(false);
    expect(isEven(6)).toBe(true);

    // 7 = odd
    // 8 = even
    expect(isEven(7)).toBe(false);
    expect(isEven(8)).toBe(true);

    // 9 = odd
    // 10 = even
    expect(isEven(9)).toBe(false);
    expect(isEven(10)).toBe(true);

    // 11 = odd
    // 12 = even
    expect(isEven(11)).toBe(false);
    expect(isEven(12)).toBe(true);
  });
});
