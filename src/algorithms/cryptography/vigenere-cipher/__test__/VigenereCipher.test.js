import vigenereCipher from '../VigenereCipher';

describe('Vigenere cipher tests', () => {
  it('should generate LXFOPVEFRNHR for the word ATTACKATDAWN when using the key LEMON', () => {
    const word = 'ATTACKATDAWN';
    const keyword = 'LEMON';
    const expectedResult = 'LXFOPVEFRNHR';

    const result = vigenereCipher.encrypt(word, keyword);

    expect(result).toBe(expectedResult);
  });

  it('should decrypt to ATTACKATDAWN when using hash LXFOPVEFRNHR with key LEMON', () => {
    const hash = 'LXFOPVEFRNHR';
    const keyword = 'LEMON';
    const expectedResult = 'ATTACKATDAWN';

    const result = vigenereCipher.decrypt(hash, keyword);

    expect(result).toBe(expectedResult);
  });

  it('should adapt key when it is longer than the word when encrypting', () => {
    const word = 'ATTACKATDAWN';
    const keywordWithinBounds = 'LEMON';
    const keywordOutOfBounds = 'LEMONLEMONLEMON';

    const resultUsingKeywordWithinBounds = vigenereCipher.encrypt(word, keywordWithinBounds);
    const resultUsingKeywordOutOfBounds = vigenereCipher.encrypt(word, keywordOutOfBounds);

    expect(resultUsingKeywordWithinBounds).toBe(resultUsingKeywordOutOfBounds);
  });

  it('should adapt key when it is longer than the word when decrypting', () => {
    const hash = 'LXFOPVEFRNHR';
    const keywordWithinBounds = 'LEMON';
    const keywordOutOfBounds = 'LEMONLEMONLEMON';

    const resultUsingKeywordWithinBounds = vigenereCipher.decrypt(hash, keywordWithinBounds);
    const resultUsingKeywordOutOfBounds = vigenereCipher.decrypt(hash, keywordOutOfBounds);

    expect(resultUsingKeywordWithinBounds).toBe(resultUsingKeywordOutOfBounds);
  });
});
