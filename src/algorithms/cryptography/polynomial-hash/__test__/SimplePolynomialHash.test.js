import fc from 'fast-check';
import SimplePolynomialHash from '../SimplePolynomialHash';

describe('SimplePolynomialHash', () => {
  it('should calculate new hash based on previous one', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(3, 79, 101, 3251, 13229, 122743, 3583213),
        fc.integer(1, 10),
        fc.unicodeString(0, 100), // no surrogate pairs
        (base, frameSize, text) => {
          fc.pre(0xffff * (base ** (frameSize - 1)) < 0x7fffffff); // avoid overflows
          const polynomialHash = new SimplePolynomialHash(base);

          let previousWord = text.substr(0, frameSize);
          let previousHash = polynomialHash.hash(previousWord);

          // Shift frame through the whole text.
          for (let frameShift = 1; frameShift < (text.length - frameSize); frameShift += 1) {
            const currentWord = text.substr(frameShift, frameSize);
            const currentHash = polynomialHash.hash(currentWord);
            const currentRollingHash = polynomialHash.roll(previousHash, previousWord, currentWord);

            // Check that rolling hash is the same as directly calculated hash.
            expect(currentRollingHash).toBe(currentHash);

            previousWord = currentWord;
            previousHash = currentHash;
          }
        },
      ),
    );
  });

  it('should generate numeric hashed', () => {
    const polynomialHash = new SimplePolynomialHash();

    expect(polynomialHash.hash('Test')).toBe(604944);
    expect(polynomialHash.hash('a')).toBe(97);
    expect(polynomialHash.hash('b')).toBe(98);
    expect(polynomialHash.hash('c')).toBe(99);
    expect(polynomialHash.hash('d')).toBe(100);
    expect(polynomialHash.hash('e')).toBe(101);
    expect(polynomialHash.hash('ab')).toBe(1763);
    expect(polynomialHash.hash('abc')).toBe(30374);
  });
});
