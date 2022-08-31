import { factors } from '../factors';

describe('factors', () => {
  it('should find factors', () => {
    expect(factors(1)).toEqual([1]);
    expect(factors(2)).toEqual([1, 2]);
    expect(factors(3)).toEqual([1, 3]);
    expect(factors(4)).toEqual([1, 2, 4]);
    expect(factors(5)).toEqual([1, 5]);
    expect(factors(14)).toEqual([1, 2, 7, 14]);
    expect(factors(40)).toEqual([1, 2, 4, 5, 8, 10, 20, 40]);
    expect(factors(54)).toEqual([1, 2, 3, 6, 9, 18, 27, 54]);
    expect(factors(100)).toEqual([1, 2, 4, 5, 10, 20, 25, 50, 100]);
  });
});
