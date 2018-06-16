import permutation from '../permutation';

describe('permutation', () => {
  it('should calculate permutation', () => {
    expect(permutation(0, 0)).toBe(1);
    expect(permutation(1, 0)).toBe(1);
    expect(permutation(1, 1)).toBe(1);
    expect(permutation(5, 0)).toBe(1);
    expect(permutation(5, 1)).toBe(5);
    expect(permutation(5, 2)).toBe(20);
    expect(permutation(5, 3)).toBe(60);
    expect(permutation(5, 4)).toBe(120);
    expect(permutation(8, 0)).toBe(1);
    expect(permutation(8, 1)).toBe(8);
    expect(permutation(8, 2)).toBe(56);
    expect(permutation(8, 3)).toBe(336);
    expect(permutation(8, 4)).toBe(1680);
    expect(permutation(8, 5)).toBe(6720);
    expect(permutation(8, 6)).toBe(20160);
    expect(permutation(8, 7)).toBe(40320);
    expect(permutation(10, 0)).toBe(1);
    expect(permutation(10, 1)).toBe(10);
    expect(permutation(10, 2)).toBe(90);
    expect(permutation(10, 3)).toBe(720);
    expect(permutation(10, 4)).toBe(5040);
    expect(permutation(10, 5)).toBe(30240);
    expect(permutation(10, 6)).toBe(151200);
    expect(permutation(10, 7)).toBe(604800);
    expect(permutation(10, 8)).toBe(1814400);
    expect(permutation(10, 9)).toBe(3628800);
    expect(permutation(100, 8)).toBe(7503063898176000);
  });
});

