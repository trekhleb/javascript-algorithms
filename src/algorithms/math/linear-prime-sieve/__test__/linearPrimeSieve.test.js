import linearPrimeSieve from '../linearPrimeSieve';

describe('linearPrimeSieve', () => {
  it('should find all primes less than or equal to n', () => {
    expect(linearPrimeSieve(5)).toEqual([2, 3, 5]);
    expect(linearPrimeSieve(10)).toEqual([2, 3, 5, 7]);
    expect(linearPrimeSieve(100)).toEqual([
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41,
      43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97,
    ]);
  });
});
