const DEFAULT_BASE = 17;

export default class SimplePolynomialHash {
  /**
   * @param {number} [base] - Base number that is used to create the polynomial.
   */
  constructor(base = DEFAULT_BASE) {
    this.base = base;
  }

  /**
   * Function that creates hash representation of the word.
   *
   * Time complexity: O(word.length).
   *
   * @assumption: This version of the function  doesn't use modulo operator.
   * Thus it may produce number overflows by generating numbers that are
   * bigger than Number.MAX_SAFE_INTEGER. This function is mentioned here
   * for simplicity and LEARNING reasons.
   *
   * @param {string} word - String that needs to be hashed.
   * @return {number}
   */
  hash(word) {
    let hash = 0;
    for (let charIndex = 0; charIndex < word.length; charIndex += 1) {
      hash += word.charCodeAt(charIndex) * (this.base ** charIndex);
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
   * Time complexity: O(1).
   *
   * @assumption: This function doesn't use modulo operator and thus is not safe since
   * it may deal with numbers that are bigger than Number.MAX_SAFE_INTEGER. This
   * function is mentioned here for simplicity and LEARNING reasons.
   *
   * @param {number} prevHash
   * @param {string} prevWord
   * @param {string} newWord
   * @return {number}
   */
  roll(prevHash, prevWord, newWord) {
    let hash = prevHash;

    const prevValue = prevWord.charCodeAt(0);
    const newValue = newWord.charCodeAt(newWord.length - 1);

    hash -= prevValue;
    hash /= this.base;
    hash += newValue * (this.base ** (newWord.length - 1));

    return hash;
  }
}
