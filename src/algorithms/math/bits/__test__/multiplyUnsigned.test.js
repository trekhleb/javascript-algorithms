import multiplyUnsigned from '../multiplyUnsigned';

describe('multiplyUnsigned', () => {
  it.each([
    [0, 0x80000000, 0],
    [1, 0x80000000, 0x80000000],
    [1, 0xffffffff, 0xffffffff],
    [2, 0xffffffff, 8589934590],
    [0xffffffff, 2, 8589934590],
    [65535, 65535, 4294836225],
  ])('should multiply %i by %i without signed overflow', (a, b, product) => {
    expect(multiplyUnsigned(a, b)).toBe(product);
  });

  it('should multiply two unsigned numbers', () => {
    expect(multiplyUnsigned(0, 2)).toBe(0);
    expect(multiplyUnsigned(2, 0)).toBe(0);
    expect(multiplyUnsigned(1, 1)).toBe(1);
    expect(multiplyUnsigned(1, 2)).toBe(2);
    expect(multiplyUnsigned(2, 7)).toBe(14);
    expect(multiplyUnsigned(7, 2)).toBe(14);
    expect(multiplyUnsigned(30, 2)).toBe(60);
    expect(multiplyUnsigned(17, 34)).toBe(578);
    expect(multiplyUnsigned(170, 2340)).toBe(397800);
  });
});
