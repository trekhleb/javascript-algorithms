import returnOnInvestment from '../ReturnOnInvestment';

describe('returnOnInvestment', () => {
  it('should calculate positive ROI', () => {
    expect(returnOnInvestment(1000, 500)).toBe(100);
  });

  it('should return zero ROI when gain equals cost', () => {
    expect(returnOnInvestment(500, 500)).toBe(0);
  });

  it('should calculate negative ROI', () => {
    expect(returnOnInvestment(200, 500)).toBe(-60);
  });

  it('should return -100 for total loss', () => {
    expect(returnOnInvestment(0, 500)).toBe(-100);
  });

  it('should throw on zero cost', () => {
    expect(() => returnOnInvestment(1000, 0)).toThrow();
  });

  it('should throw on negative cost', () => {
    expect(() => returnOnInvestment(1000, -100)).toThrow();
  });
});
