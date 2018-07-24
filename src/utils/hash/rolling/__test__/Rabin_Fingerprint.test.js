import RabinFingerprint from '../Rabin_Fingerprint';

describe('Rabin fingerprint Hash Family', () => {
  it('should hash deterministically', () => {
    const primeVals = [3, 5, 19, 53, 97, 401, 7039, 193939];
    for (let primeIdx = 0; primeIdx < primeVals.length; primeIdx += 1) {
      const primeVal = primeVals[primeIdx];
      const hasher = new RabinFingerprint(() => primeVal);

      // Test basic values
      expect(hasher.init([])).toEqual(0);
      expect(hasher.init([1])).toEqual(1);

      // Test overflow
      const largeVal = Number.MAX_SAFE_INTEGER;
      expect(hasher.init([primeVal])).toEqual(0);
      expect(hasher.init([largeVal])).toEqual(largeVal % primeVal);

      const numLargeVal = 2; // 2 ^ numLargeVal fits in javascript number
      const largeValues = new Array(numLargeVal).fill(largeVal);

      const expVal = ((largeVal % primeVal) * ((2 ** numLargeVal) - 1)) % primeVal;
      expect(hasher.init(largeValues)).toEqual(expVal);

      // Test using Fermat's little theorem
      const fermatValues = new Array(primeVal).fill(primeVal);
      const numFermatTests = 100;
      for (let i = 0; i < numFermatTests; i += 1) {
        const randomValue = Math.floor(Math.random() * largeVal);
        fermatValues[0] = randomValue;
        expect(hasher.init(fermatValues)).toEqual(randomValue % primeVal);
      }
    }
  });

  it('should roll appropriately', () => {
    const primeVals = [3, 5, 19, 53, 97, 401, 7039, 193939];

    for (let primeIdx = 0; primeIdx < primeVals.length; primeIdx += 1) {
      const primeVal = primeVals[primeIdx];
      const hasher = new RabinFingerprint(() => primeVal);

      // Test basic values
      const largeVal = Number.MAX_SAFE_INTEGER;
      expect(hasher.init([0])).toEqual(0);
      expect(hasher.roll(0, 1)).toEqual(1);
      expect(hasher.roll(1, primeVal)).toEqual(0);
      expect(hasher.roll(primeVal, largeVal)).toEqual(largeVal % primeVal);

      const numRollTest = 100;
      let previousValue = largeVal;
      for (let i = 0; i < numRollTest; i += 1) {
        const randomVal = Math.floor(Math.random() * largeVal);
        expect(hasher.roll(previousValue, randomVal)).toEqual(randomVal % primeVal);
        previousValue = randomVal;
      }
    }
  });
});
