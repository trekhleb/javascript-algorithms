import computePower from '../power';

describe('computePower', () => {
  it('should compute Power', () => {
    expect(computePower(1, 1)).toBe(1);
    expect(computePower(2, 0)).toBe(1);
    expect(computePower(3, 4)).toBe(81);
    expect(computePower(190, 2)).toBe(36100);
    expect(computePower(16, 16)).toBe(18446744073709552000);
    expect(computePower(9, 16)).toBe(1853020188851841);
  });
});
