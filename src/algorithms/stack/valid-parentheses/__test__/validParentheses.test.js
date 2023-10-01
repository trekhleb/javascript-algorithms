import isValid from '../validParentheses';

describe('validParentheses', () => {
  it('should return false when string is empty', () => {
    expect(isValid('')).toBe(false);
  });

  it('should return true when string contains valid parentheses in correct order', () => {
    expect(isValid('()')).toBe(true);
    expect(isValid('()[]{}')).toBe(true);
    expect(isValid('((({[]})))')).toBe(true);
  });

  it('should return false when string contains invalid parentheses', () => {
    expect(isValid('(]')).toBe(false);
    expect(isValid('()[]{} }')).toBe(false);
    expect(isValid('((({[(]})))')).toBe(false);
  });

  it('should return false when string contains valid parentheses in wrong order', () => {
    expect(isValid('({)}')).toBe(false);
  });
});
