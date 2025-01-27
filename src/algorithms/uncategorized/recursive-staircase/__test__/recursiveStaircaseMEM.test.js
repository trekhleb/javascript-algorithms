import recursiveStaircaseMEM from '../recursiveStaircaseMEM';

describe('recursiveStaircaseMEM', () => {
  it('should calculate number of variants using Brute Force with Memoization', () => {
    expect(recursiveStaircaseMEM(-1)).toBe(0);
    expect(recursiveStaircaseMEM(0)).toBe(0);
    expect(recursiveStaircaseMEM(1)).toBe(1);
    expect(recursiveStaircaseMEM(2)).toBe(2);
    expect(recursiveStaircaseMEM(3)).toBe(3);
    expect(recursiveStaircaseMEM(4)).toBe(5);
    expect(recursiveStaircaseMEM(5)).toBe(8);
    expect(recursiveStaircaseMEM(6)).toBe(13);
    expect(recursiveStaircaseMEM(7)).toBe(21);
    expect(recursiveStaircaseMEM(8)).toBe(34);
    expect(recursiveStaircaseMEM(9)).toBe(55);
    expect(recursiveStaircaseMEM(10)).toBe(89);
  });
});
