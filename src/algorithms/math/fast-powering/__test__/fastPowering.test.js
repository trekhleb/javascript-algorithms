import fastPowering from '../fastPowering';

describe('fastPowering', () => {
  it('should compute power in log(n) time', () => {
    expect(fastPowering(1, 1)).toBe(1);
    expect(fastPowering(2, 0)).toBe(1);
    expect(fastPowering(2, 2)).toBe(4);
    expect(fastPowering(2, 3)).toBe(8);
    expect(fastPowering(2, 4)).toBe(16);
    expect(fastPowering(2, 5)).toBe(32);
    expect(fastPowering(2, 6)).toBe(64);
    expect(fastPowering(2, 7)).toBe(128);
    expect(fastPowering(2, 8)).toBe(256);
    expect(fastPowering(3, 4)).toBe(81);
    expect(fastPowering(190, 2)).toBe(36100);
    expect(fastPowering(11, 5)).toBe(161051);
    expect(fastPowering(13, 11)).toBe(1792160394037);
    expect(fastPowering(9, 16)).toBe(1853020188851841);
    expect(fastPowering(16, 16)).toBe(18446744073709552000);
    expect(fastPowering(7, 21)).toBe(558545864083284000);
    expect(fastPowering(100, 9)).toBe(1000000000000000000);
  });
});
