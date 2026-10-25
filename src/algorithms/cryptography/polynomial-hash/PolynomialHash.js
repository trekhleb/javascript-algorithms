const DEFAULT_BASE = 37;
const DEFAULT_MODULUS = 101;

export default class PolynomialHash {
  /**
   * @param {number} [base] - Base number that is used to create the polynomial.
   * @param {number} [modulus] - Modulus number that keeps the hash from overflowing.
   */
  constructor({ base = DEFAULT_BASE, modulus = DEFAULT_MODULUS } = {}) {
    this.base = base;
    this.modulus = modulus;
  }

  /**
   * Function that creates hash representation of the word.
   *
   * Time complexity: O(word.length).
   *
   * @param {string} word - String that needs to be hashed.
   * @return {number}
   */
  hash(word) {
    const charCodes = Array.from(word).map((char) => this.charToNumber(char));

    let hash = 0;
    for (let charIndex = 0; charIndex < charCodes.length; charIndex += 1) {
      hash *= this.base;
      hash += charCodes[charIndex];
      hash %= this.modulus;
    }

    return hash;
  }

  /**
   * Function that creates hash representation of the word
   * based on previous word (shifted by one character left) hash value.
   *
   * Recalculates the hash representation of a word so that it isn't
   * necessary to traverse the whole word again.
   *
   * Time complexity: O(word.length) because the words have to be split into
   * code points to find their first/last characters and length. Use rollChar()
   * to get O(1) time when these values are already known.
   *
   * @param {number} prevHash
   * @param {string} prevWord
   * @param {string} newWord
   * @return {number}
   */
  roll(prevHash, prevWord, newWord) {
    // Use code points (and not UTF-16 code units) to be consistent with
    // the hash() method and to support surrogate pairs (astral symbols).
    const prevWordChars = Array.from(prevWord);
    const newWordChars = Array.from(newWord);

    return this.rollChar(
      prevHash,
      prevWordChars[0],
      newWordChars[newWordChars.length - 1],
      prevWordChars.length,
    );
  }

  /**
   * Function that creates hash representation of the word based on previous
   * word hash value, the character that leaves the frame and the character
   * that enters the frame.
   *
   * Time complexity: O(1) (amortized, since the base^(wordLength - 1) multiplier
   * is calculated only once per word length).
   *
   * @param {number} prevHash
   * @param {string} removedChar - The first character of the previous word.
   * @param {string} addedChar - The last character of the new word.
   * @param {number} wordLength - Length of the word in code points.
   * @return {number}
   */
  rollChar(prevHash, removedChar, addedChar, wordLength) {
    let hash = prevHash;

    const prevValue = this.charToNumber(removedChar);
    const newValue = this.charToNumber(addedChar);
    const prevValueMultiplier = this.getHighestPowerMultiplier(wordLength);

    hash += this.modulus;
    hash -= (prevValue * prevValueMultiplier) % this.modulus;

    hash *= this.base;
    hash += newValue;
    hash %= this.modulus;

    return hash;
  }

  /**
   * Calculates (base ^ (wordLength - 1)) % modulus and caches the result,
   * since the multiplier stays the same while the frame is being rolled.
   *
   * @param {number} wordLength
   * @return {number}
   */
  getHighestPowerMultiplier(wordLength) {
    if (this.multiplierWordLength !== wordLength) {
      let multiplier = 1;
      for (let i = 1; i < wordLength; i += 1) {
        multiplier *= this.base;
        multiplier %= this.modulus;
      }

      this.multiplierWordLength = wordLength;
      this.multiplier = multiplier;
    }

    return this.multiplier;
  }

  /**
   * Converts char to number.
   *
   * @param {string} char
   * @return {number}
   */
  charToNumber(char) {
    let charCode = char.codePointAt(0);

    // Check if character has surrogate pair.
    const surrogate = char.codePointAt(1);
    if (surrogate !== undefined) {
      const surrogateShift = 2 ** 16;
      charCode += surrogate * surrogateShift;
    }

    return charCode;
  }
}
