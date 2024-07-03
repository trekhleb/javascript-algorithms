import recursiveStaircaseIT from '../recursiveStaircaseIT';

describe('recursiveStaircaseIT', () => {
  it('should calculate number of variants using Iterative solution', () => {
    expect(recursiveStaircaseIT(-1)).toBe(0);
    expect(recursiveStaircaseIT(0)).toBe(0);
    expect(recursiveStaircaseIT(1)).toBe(1);
    expect(recursiveStaircaseIT(2)).toBe(2);
    expect(recursiveStaircaseIT(3)).toBe(3);
    expect(recursiveStaircaseIT(4)).toBe(5);
    expect(recursiveStaircaseIT(5)).toBe(8);
    expect(recursiveStaircaseIT(6)).toBe(13);
    expect(recursiveStaircaseIT(7)).toBe(21);
    expect(recursiveStaircaseIT(8)).toBe(34);
    expect(recursiveStaircaseIT(9)).toBe(55);
    expect(recursiveStaircaseIT(10)).toBe(89);
  });
});
