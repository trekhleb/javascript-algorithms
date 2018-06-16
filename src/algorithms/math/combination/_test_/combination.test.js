import combinations from '../combination';

describe('combinations', () => {
  it('should calculate combinations', () => {
    expect(combinations(0, 0)).toBe(1);
    expect(combinations(1, 0)).toBe(1);
    expect(combinations(1, 1)).toBe(1);
    expect(combinations(5, 0)).toBe(1);
    expect(combinations(5, 1)).toBe(5);
    expect(combinations(5, 2)).toBe(10);
    expect(combinations(5, 3)).toBe(10);
    expect(combinations(5, 4)).toBe(5);
    expect(combinations(5, 5)).toBe(1);
    expect(combinations(8, 0)).toBe(1);
    expect(combinations(8, 1)).toBe(8);
    expect(combinations(8, 2)).toBe(28);
    expect(combinations(8, 3)).toBe(56);
    expect(combinations(8, 4)).toBe(70);
    expect(combinations(8, 5)).toBe(56);
    expect(combinations(8, 6)).toBe(28);
    expect(combinations(8, 7)).toBe(8);
    expect(combinations(8, 8)).toBe(1);
    expect(combinations(10, 0)).toBe(1);
    expect(combinations(10, 1)).toBe(10);
    expect(combinations(10, 2)).toBe(45);
    expect(combinations(10, 3)).toBe(120);
    expect(combinations(10, 4)).toBe(210);
    expect(combinations(10, 5)).toBe(252);
    expect(combinations(10, 6)).toBe(210);
    expect(combinations(10, 7)).toBe(120);
    expect(combinations(10, 8)).toBe(45);
    expect(combinations(10, 9)).toBe(10);
    expect(combinations(10, 10)).toBe(1);
    expect(combinations(100, 8)).toBe(186087894300);
  });
});

