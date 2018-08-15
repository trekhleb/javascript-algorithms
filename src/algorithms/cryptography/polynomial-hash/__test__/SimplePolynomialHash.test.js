import SimplePolynomialHash from '../SimplePolynomialHash';

describe('PolynomialHash', () => {
  it('should calculate new hash based on previous one', () => {
    const bases = [3, 5];
    const frameSizes = [5, 10];

    const text = 'Lorem Ipsum is simply dummy text of the printing and '
      + 'typesetting industry. Lorem Ipsum has been the industry\'s standard '
      + 'galley of type and \u{ffff} scrambled it to make a type specimen book. It '
      + 'electronic 耀 typesetting, remaining essentially unchanged. It was '
      + 'popularised in the 1960s with the release of Letraset sheets '
      + 'publishing software like Aldus 耀 PageMaker including versions of Lorem.';

    // Check hashing for different prime base.
    bases.forEach((base) => {
      const polynomialHash = new SimplePolynomialHash(base);

      // Check hashing for different word lengths.
      frameSizes.forEach((frameSize) => {
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
      });
    });
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
