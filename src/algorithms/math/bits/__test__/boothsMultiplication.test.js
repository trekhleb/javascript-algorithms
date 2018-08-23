import boothsMultiplication from '../boothsMultiplication';

describe('boothsMultiplication', () => {
  it('should calculate multiplication using booths multiplication', () => {
    const A = 5678;
    const B = 9101;
    expect(boothsMultiplication(A, B)).toBe(51675478);
  });
});
