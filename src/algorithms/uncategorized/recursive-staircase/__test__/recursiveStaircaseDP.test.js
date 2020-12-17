import recursiveStaircaseDP from '../recursiveStaircaseDP';

describe('recursiveStaircaseDP', () => {
  it('should calculate number of variants using Dynamic Programming solution', () => {
    expect(recursiveStaircaseDP(-1)).toBe(0);
    expect(recursiveStaircaseDP(0)).toBe(0);
    expect(recursiveStaircaseDP(1)).toBe(1);
    expect(recursiveStaircaseDP(2)).toBe(2);
    expect(recursiveStaircaseDP(3)).toBe(3);
    expect(recursiveStaircaseDP(4)).toBe(5);
    expect(recursiveStaircaseDP(5)).toBe(8);
    expect(recursiveStaircaseDP(6)).toBe(13);
    expect(recursiveStaircaseDP(7)).toBe(21);
    expect(recursiveStaircaseDP(8)).toBe(34);
    expect(recursiveStaircaseDP(9)).toBe(55);
    expect(recursiveStaircaseDP(10)).toBe(89);
  });
});
