import catalanNumber from '../catalanNumber';

describe('catalanNumber', () => {
  it('should calculate Catalan numbers correctly', () => {
    expect(catalanNumber(0)).toBe(1);
    expect(catalanNumber(1)).toBe(1);
    expect(catalanNumber(2)).toBe(2);
    expect(catalanNumber(3)).toBe(5);
    expect(catalanNumber(4)).toBe(14);
    expect(catalanNumber(5)).toBe(42);
    expect(catalanNumber(6)).toBe(132);
    expect(catalanNumber(7)).toBe(429);
    expect(catalanNumber(8)).toBe(1430);
    expect(catalanNumber(9)).toBe(4862);
    expect(catalanNumber(10)).toBe(16796);
  });

  it('should throw error for negative numbers', () => {
    expect(() => catalanNumber(-1)).toThrow('Catalan number is not defined for negative numbers');
    expect(() => catalanNumber(-10)).toThrow('Catalan number is not defined for negative numbers');
  });

  it('should handle larger numbers', () => {
    expect(catalanNumber(15)).toBe(9694845);
    expect(catalanNumber(20)).toBe(6564120420);
  });
});
