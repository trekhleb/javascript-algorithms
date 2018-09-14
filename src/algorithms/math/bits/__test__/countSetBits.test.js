import countSetBits from '../countSetBits';

describe('countSetBits', () => {
  it('should return number of set bits', () => {
    expect(countSetBits(0)).toBe(0);
    expect(countSetBits(1)).toBe(1);
    expect(countSetBits(2)).toBe(1);
    expect(countSetBits(3)).toBe(2);
    expect(countSetBits(4)).toBe(1);
    expect(countSetBits(5)).toBe(2);
    expect(countSetBits(21)).toBe(3);
    expect(countSetBits(255)).toBe(8);
    expect(countSetBits(1023)).toBe(10);
  });
});
