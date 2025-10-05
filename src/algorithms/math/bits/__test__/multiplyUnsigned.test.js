import multiplyUnsigned from '../multiplyUnsigned';

describe('multiplyUnsigned', () => {
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
