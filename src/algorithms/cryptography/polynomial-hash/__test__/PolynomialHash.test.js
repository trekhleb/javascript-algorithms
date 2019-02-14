import fc from 'fast-check';
import PolynomialHash from '../PolynomialHash';

describe('PolynomialHash', () => {
  it('should calculate new hash based on previous one', () => {
    fc.assert(
      fc.property(
        fc.constantFrom(3, 79, 101, 3251, 13229, 122743, 3583213),
        fc.integer(2, 0x7fffffff),
        fc.fullUnicodeString(0, 50),
        fc.fullUnicode(),
        fc.fullUnicode(),
        (base, modulus, commonWord, previousChar, newChar) => {
          fc.pre(base * modulus + 0x10ffff < 0x7fffffff); // avoid overflows

          const polynomialHash = new PolynomialHash({ base, modulus });
          const previousWord = previousChar + commonWord;
          const currentWord = commonWord + newChar;
          const previousHash = polynomialHash.hash(previousWord);

          const currentHash = polynomialHash.hash(currentWord);
          const currentRollingHash = polynomialHash.roll(previousHash, previousWord, currentWord);

          // Check that rolling hash is the same as directly calculated hash.
          expect(currentRollingHash).toBe(currentHash);
        },
      ),
    );
  });

  it('should generate numeric hashed less than 100', () => {
    const polynomialHash = new PolynomialHash({ modulus: 100 });

    expect(polynomialHash.hash('Some long text that is used as a key')).toBe(41);
    expect(polynomialHash.hash('Test')).toBe(92);
    expect(polynomialHash.hash('a')).toBe(97);
    expect(polynomialHash.hash('b')).toBe(98);
    expect(polynomialHash.hash('c')).toBe(99);
    expect(polynomialHash.hash('d')).toBe(0);
    expect(polynomialHash.hash('e')).toBe(1);
    expect(polynomialHash.hash('ab')).toBe(87);

    // @TODO: Provide Unicode support.
    expect(polynomialHash.hash('\u{20000}')).toBe(72);
  });
});
