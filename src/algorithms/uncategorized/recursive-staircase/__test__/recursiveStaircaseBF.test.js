import recursiveStaircaseBF from '../recursiveStaircaseBF';

describe('recursiveStaircaseBF', () => {
  it('should calculate number of variants using Brute Force solution', () => {
    expect(recursiveStaircaseBF(-1)).toBe(0);
    expect(recursiveStaircaseBF(0)).toBe(0);
    expect(recursiveStaircaseBF(1)).toBe(1);
    expect(recursiveStaircaseBF(2)).toBe(2);
    expect(recursiveStaircaseBF(3)).toBe(3);
    expect(recursiveStaircaseBF(4)).toBe(5);
    expect(recursiveStaircaseBF(5)).toBe(8);
    expect(recursiveStaircaseBF(6)).toBe(13);
    expect(recursiveStaircaseBF(7)).toBe(21);
    expect(recursiveStaircaseBF(8)).toBe(34);
    expect(recursiveStaircaseBF(9)).toBe(55);
    expect(recursiveStaircaseBF(10)).toBe(89);
  });
});
