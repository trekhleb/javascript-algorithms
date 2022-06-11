import f from '../isPowerOfTwo';

describe('isPowerOfTwo', () => {
  it('should check if the number is made by multiplying twos', () => {
    // test all pows until it gets as close as possible to `Number.MAX_VALUE`
    for (let i = 0; i <= 0x3ff; i++) {
      expect( f(2 ** i) && f(1n << BigInt(i)) ).toBe(true)
    }
    expect(f(-8.5)).toBe(false);
    expect(f(-1) || f(-1n)).toBe(false);
    expect(f(0) || f(0n)).toBe(false);
    expect(f(0.5)).toBe(false);
    expect(f(Math.E)).toBe(false);
    expect(f(3) || f(3n)).toBe(false);
    expect(f(Math.PI)).toBe(false);
    expect(f(5) || f(5n)).toBe(false);
    expect(f(6) || f(6n)).toBe(false);
    expect(f(7) || f(7n)).toBe(false);
    expect(f(10) || f(10n)).toBe(false);
    expect(f(12) || f(12n)).toBe(false);
    expect(f(31) || f(31n)).toBe(false);
    expect(f(1023) || f(1023n)).toBe(false);
    expect( f(2 ** 32 - 1) || f(~(-1n << 32n)) ).toBe(false);
    expect(f(Infinity) || f(-Infinity)).toBe(false);
    expect(f(NaN)).toBe(false);
  });
});
