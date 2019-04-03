import fullAdder from '../fullAdder';

describe('fullAdder', () => {
  it('should add up two numbers', () => {
    expect(fullAdder(0, 0)).toBe(0);
    expect(fullAdder(2, 0)).toBe(2);
    expect(fullAdder(0, 2)).toBe(2);
    expect(fullAdder(1, 2)).toBe(3);
    expect(fullAdder(2, 1)).toBe(3);
    expect(fullAdder(6, 6)).toBe(12);
    expect(fullAdder(-2, 4)).toBe(2);
    expect(fullAdder(4, -2)).toBe(2);
    expect(fullAdder(-4, -4)).toBe(-8);
    expect(fullAdder(4, -5)).toBe(-1);
    expect(fullAdder(2, 121)).toBe(123);
    expect(fullAdder(121, 2)).toBe(123);
  });
});
