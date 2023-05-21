const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

class VigenereCipher {
  constructor() {
    this.tabulaRecta = this.getTabulaRecta();
  }

  /**
   * Function to encrypt message.
   *
   * @param {string} message - Message to be encrypted.
   * @param {string} keyword - Key to be used in the tabula recta for the encryption.
   * @return {string}
   */
  encrypt(message, keyword) {
    let hash = '';
    const treatedKeyword = this.getTreatedKeyword(keyword, message.length);

    message.split('').forEach((letter, index) => {
      hash += this.tabulaRecta[treatedKeyword[index]][letter];
    });

    return hash;
  }

  /**
   * Function to decrypt message.
   *
   * @param {string} hash - Hash to be decrypted.
   * @param {string} keyword - Key to be used in the tabula recta for the decryption.
   * @return {string}
   */
  decrypt(hash, keyword) {
    let message = '';
    const treatedKeyword = this.getTreatedKeyword(keyword, hash.length);

    hash.split('').forEach((letter, index) => {
      message += this.getOriginalAlphabetLetter(this.tabulaRecta[treatedKeyword[index]], letter);
    });

    return message;
  }

  /**
   * Function to get a tabula recta.
   *
   * @return {object}
   */
  getTabulaRecta() {
    const tabulaRecta = this.getTabulaRectaSchema();

    alphabet.forEach((rowLetter, rowIndex) => {
      const shiftedAlphabet = this.shiftArray(alphabet, rowIndex);

      alphabet.forEach((columnLetter, columnIndex) => {
        tabulaRecta[rowLetter][columnLetter] = shiftedAlphabet[columnIndex];
      });
    });

    return tabulaRecta;
  }

  /**
   * Function to get a schema for a tabula recta.
   *
   * @return {object}
   */
  getTabulaRectaSchema() {
    const column = {};

    alphabet.forEach((letter) => {
      const row = {};

      alphabet.forEach((innerLetter) => {
        row[innerLetter] = '';
      });

      column[letter] = row;
    });

    return column;
  }

  /**
   * Function to shift an array, moving elements in its head to its tail n times.
   *
   * @param {array} array - Array to be used as a model for the shifting.
   * @param {number} times - How many shifts will happen in the array.
   * @return {array}
   */
  shiftArray(array, times) {
    const arrayCopy = [...array];

    for (let i = 0; i < times; i += 1) {
      arrayCopy.push(arrayCopy.shift());
    }

    return arrayCopy;
  }

  /**
   * Function to get a keyword within the given limit.
   *
   * @param {string} keyword - Keyword to be verified and treated.
   * @param {string} limit - Maximum length the keyword is allowed to have.
   * @return {string}
   */
  getTreatedKeyword(keyword, limit) {
    let treatedKeyword = keyword;

    while (treatedKeyword.length < limit) {
      treatedKeyword += treatedKeyword;
    }

    if (treatedKeyword.length > limit) {
      treatedKeyword = treatedKeyword.substring(0, limit);
    }

    return treatedKeyword;
  }

  /**
   * Function to get a tabula recta column index (always a letter) given its row and
   * a value within that row.
   *
   * @param {string} tabulaRectaRow - One row from the tabula recta.
   * @param {string} hashLetter - One letter within the given row.
   * @return {string}
   */
  getOriginalAlphabetLetter(tabulaRectaRow, hashLetter) {
    return Object.keys(tabulaRectaRow).find(key => tabulaRectaRow[key] === hashLetter);
  }
}

export default new VigenereCipher();
