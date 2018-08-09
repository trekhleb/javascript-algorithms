import PolynomialHash from '../PolynomialHash';

describe('PolynomialHash', () => {
  it('should calculate new hash based on previous one', () => {
    // const primes = [3, 79, 101, 3251, 13229, 122743, 3583213];
    // const frameSizes = [5, 20];

    const primes = [3];
    const frameSizes = [20];

    const text = 'Lorem Ipsum is simply dummy text of the printing and '
      + 'typesetting industry. Lorem Ipsum has been the industry\'s standard '
      + 'galley of type and \u{ffff} scrambled it to make a type specimen book. It '
      + 'electronic 耀 typesetting, remaining essentially unchanged. It was '
      + 'popularised in the \u{20005} \u{20000}1960s with the release of Letraset sheets '
      + 'publishing software like Aldus PageMaker 耀 including versions of Lorem.';

    // Check hashing for different prime base.
    primes.forEach((prime) => {
      const polynomialHash = new PolynomialHash(prime);

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

  // it('should calculate new hash based on previous one', () => {
  //   const polynomialHash = new PolynomialHash();
  //
  //   const wordLength = 3;
  //   const string = 'Hello World!';
  //
  //   const word1 = string.substr(0, wordLength);
  //   const word2 = string.substr(1, wordLength);
  //   const word3 = string.substr(2, wordLength);
  //   const word4 = string.substr(3, wordLength);
  //
  //   const directHash1 = polynomialHash.hash(word1);
  //   const directHash2 = polynomialHash.hash(word2);
  //   const directHash3 = polynomialHash.hash(word3);
  //   const directHash4 = polynomialHash.hash(word4);
  //
  //   const rollingHash2 = polynomialHash.roll(directHash1, word1, word2);
  //   const rollingHash3 = polynomialHash.roll(directHash2, word2, word3);
  //   const rollingHash4 = polynomialHash.roll(directHash3, word3, word4);
  //
  //   expect(directHash1).toBe(151661);
  //   expect(directHash2).toBe(151949);
  //   expect(directHash3).toBe(156063);
  //   expect(directHash4).toBe(48023);
  //
  //   expect(rollingHash2).toBe(directHash2);
  //   expect(rollingHash3).toBe(directHash3);
  //   expect(rollingHash4).toBe(directHash4);
  // });
  //
  // it('should calculate new hash based on previous one with 3 as a primeModulus', () => {
  //   const PRIME = 3;
  //   const polynomialHash = new PolynomialHash(PRIME);
  //
  //   const wordLength = 3;
  //   const string = 'Hello World!';
  //
  //   const word1 = string.substr(0, wordLength);
  //   const word2 = string.substr(1, wordLength);
  //   const word3 = string.substr(2, wordLength);
  //   const word4 = string.substr(3, wordLength);
  //
  //   const directHash1 = polynomialHash.hash(word1);
  //   const directHash2 = polynomialHash.hash(word2);
  //   const directHash3 = polynomialHash.hash(word3);
  //   const directHash4 = polynomialHash.hash(word4);
  //
  //   const rollingHash2 = polynomialHash.roll(directHash1, word1, word2);
  //   const rollingHash3 = polynomialHash.roll(directHash2, word2, word3);
  //   const rollingHash4 = polynomialHash.roll(directHash3, word3, word4);
  //
  //   expect(directHash1).toBe(1347);
  //   expect(directHash2).toBe(1397);
  //   expect(directHash3).toBe(1431);
  //   expect(directHash4).toBe(729);
  //
  //   expect(rollingHash2).toBe(directHash2);
  //   expect(rollingHash3).toBe(directHash3);
  //   expect(rollingHash4).toBe(directHash4);
  // });
});
