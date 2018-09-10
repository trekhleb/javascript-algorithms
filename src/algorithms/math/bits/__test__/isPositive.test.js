import isPositive from '../isPositive';

describe('isPositive', () => {
  it('should detect if a number is positive', () => {
    expect(isPositive(0)).toBe(false);
    expect(isPositive(-0)).toBe(false);
    expect(isPositive(1)).toBe(true);
    expect(isPositive(-1)).toBe(false);
  });
});
