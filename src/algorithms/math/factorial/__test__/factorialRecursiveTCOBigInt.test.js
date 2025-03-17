import factorialRecursiveTCOBigInt from '../factorialRecursiveTCOBigInt';

describe('factorialRecursiveTCOBigInt', () => {
  it('should calculate factorial', () => {
    expect(factorialRecursiveTCOBigInt(0n)).toBe(1n);
    expect(factorialRecursiveTCOBigInt(1n)).toBe(1n);
    expect(factorialRecursiveTCOBigInt(5n)).toBe(120n);
    expect(factorialRecursiveTCOBigInt(8n)).toBe(40320n);
    expect(factorialRecursiveTCOBigInt(10n)).toBe(3628800n);
    expect(factorialRecursiveTCOBigInt(100n)).toBe(93326215443944152681699238856266700490715968264381621468592963895217599993229915608941463976156518286253697920827223758251185210916864000000000000000000000000n);
  });
});
