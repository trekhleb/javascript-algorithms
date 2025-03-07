import updateBit from '../updateBit';

describe('updateBit', () => {
  it('should update bit at specific position', () => {
    // 1 = 0b0001
    expect(updateBit(1, 0, 1)).toBe(1);
    expect(updateBit(1, 0, 0)).toBe(0);
    expect(updateBit(1, 1, 1)).toBe(3);
    expect(updateBit(1, 2, 1)).toBe(5);

    // 10 = 0b1010
    expect(updateBit(10, 0, 1)).toBe(11);
    expect(updateBit(10, 0, 0)).toBe(10);
    expect(updateBit(10, 1, 1)).toBe(10);
    expect(updateBit(10, 1, 0)).toBe(8);
    expect(updateBit(10, 2, 1)).toBe(14);
    expect(updateBit(10, 2, 0)).toBe(10);
  });
});
