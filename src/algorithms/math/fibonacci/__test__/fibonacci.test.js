import fibonacci from '../fibonacci';

describe('fibonacci', () => {
  it('should calculate fibonacci correctly', () => {
    expect(fibonacci(1)).toEqual([1]);
    expect(fibonacci(2)).toEqual([1, 1]);
    expect(fibonacci(3)).toEqual([1, 1, 2]);
    expect(fibonacci(4)).toEqual([1, 1, 2, 3]);
    expect(fibonacci(5)).toEqual([1, 1, 2, 3, 5]);
    expect(fibonacci(6)).toEqual([1, 1, 2, 3, 5, 8]);
    expect(fibonacci(7)).toEqual([1, 1, 2, 3, 5, 8, 13]);
    expect(fibonacci(8)).toEqual([1, 1, 2, 3, 5, 8, 13, 21]);
    expect(fibonacci(9)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34]);
    expect(fibonacci(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55]);
  });
});
