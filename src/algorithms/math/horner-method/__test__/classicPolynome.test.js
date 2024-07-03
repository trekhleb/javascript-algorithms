import classicPolynome from '../classicPolynome';

describe('classicPolynome', () => {
  it('should evaluate the polynomial for the specified value of x correctly', () => {
    expect(classicPolynome([8], 0.1)).toBe(8);
    expect(classicPolynome([2, 4, 2, 5], 0.555)).toBe(7.68400775);
    expect(classicPolynome([2, 4, 2, 5], 0.75)).toBe(9.59375);
    expect(classicPolynome([1, 1, 1, 1, 1], 1.75)).toBe(20.55078125);
    expect(classicPolynome([15, 3.5, 0, 2, 1.42, 0.41], 0.315)).toBe(1.1367300651406251);
    expect(classicPolynome([0, 0, 2.77, 1.42, 0.41], 1.35)).toBe(7.375325000000001);
    expect(classicPolynome([0, 0, 2.77, 1.42, 2.3311], 1.35)).toBe(9.296425000000001);
    expect(classicPolynome([2, 0, 0, 5.757, 5.31412, 12.3213], 3.141)).toBe(697.2731167035034);
  });
});
