import karatsubaMultiplication from '../karatsubaMultiplication';

describe('karatsubaMultiplication', () => {
  it('should multiply two numbers using karatsuba multiplication', () => {
    const A = 1234;
    const B = 5678;
    expect(karatsubaMultiplication(A, B)).toBe(12225730);
  });
});
