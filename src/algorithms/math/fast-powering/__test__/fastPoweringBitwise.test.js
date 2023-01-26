import fastPoweringBitwise from '../fastPoweringBitwise';

describe('fastPoweringBitwise', () => {
  it('should compute power in log(n) time', () => {
    expect(fastPoweringBitwise(1, 1)).toBe(1);
    expect(fastPoweringBitwise(2, 0)).toBe(1);
    expect(fastPoweringBitwise(2, 2)).toBe(4);
    expect(fastPoweringBitwise(2, 3)).toBe(8);
    expect(fastPoweringBitwise(2, 4)).toBe(16);
    expect(fastPoweringBitwise(2, 5)).toBe(32);
    expect(fastPoweringBitwise(2, 6)).toBe(64);
    expect(fastPoweringBitwise(2, 7)).toBe(128);
    expect(fastPoweringBitwise(2, 8)).toBe(256);
    expect(fastPoweringBitwise(3, 4)).toBe(81);
    expect(fastPoweringBitwise(190, 2)).toBe(36100);
    expect(fastPoweringBitwise(11, 5)).toBe(161051);
    expect(fastPoweringBitwise(13, 11)).toBe(1792160394037);
    expect(fastPoweringBitwise(9, 16)).toBe(1853020188851841);
    expect(fastPoweringBitwise(16, 16)).toBe(18446744073709552000);
    expect(fastPoweringBitwise(7, 21)).toBe(558545864083284000);
    expect(fastPoweringBitwise(100, 9)).toBe(1000000000000000000);
  });
});
