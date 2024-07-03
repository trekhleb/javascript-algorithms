import getBit from '../getBit';

describe('getBit', () => {
  it('should get bit at specific position', () => {
    // 1 = 0b0001
    expect(getBit(1, 0)).toBe(1);
    expect(getBit(1, 1)).toBe(0);

    // 2 = 0b0010
    expect(getBit(2, 0)).toBe(0);
    expect(getBit(2, 1)).toBe(1);

    // 3 = 0b0011
    expect(getBit(3, 0)).toBe(1);
    expect(getBit(3, 1)).toBe(1);

    // 10 = 0b1010
    expect(getBit(10, 0)).toBe(0);
    expect(getBit(10, 1)).toBe(1);
    expect(getBit(10, 2)).toBe(0);
    expect(getBit(10, 3)).toBe(1);
  });
});
