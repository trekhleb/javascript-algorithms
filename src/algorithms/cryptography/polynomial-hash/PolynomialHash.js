const DEFAULT_PRIME = 37;

export default class PolynomialHash {
  /**
   * @param {number} [prime] - A prime number used to create the hash representation of a word.
   */
  constructor(prime = DEFAULT_PRIME) {
    this.prime = prime;
    this.primeModulus = 101;
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
    let hash = 0;

    for (let charIndex = 0; charIndex < word.length; charIndex += 1) {
      hash += word.charCodeAt(charIndex) * (this.prime ** charIndex);
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
   * @param {number} prevHash
   * @param {string} prevWord
   * @param {string} newWord
   * @return {number}
   */
  roll(prevHash, prevWord, newWord) {
    const newWordLastIndex = newWord.length - 1;

    let hash = prevHash - prevWord.charCodeAt(0);
    hash /= this.prime;
    hash += newWord.charCodeAt(newWordLastIndex) * (this.prime ** newWordLastIndex);

    return hash;
  }
}
