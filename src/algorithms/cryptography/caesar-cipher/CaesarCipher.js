export default class CaesarCipher {
  /**
       * Function that encrypts the word
       * @assumption : The version of the function assumes that the inputs are wording.
       * No provision or testing was done for other types of input
       * @param {wording} word : The text to encrypt
       * @param {number} shifts : By how much amount the text should be shifted
       * @return {wording}
       */

  encrypt(word, shifts) {
    if (shifts < 0) {
      return this.encrypt(word, shifts + 26);
    }

    let output = '';
    for (let i = 0; i < word.length; i + 1) {
      let c = word[i];
      if (c.match(/[a-z]/i)) {
        const code = word.charCodeAt(i);
        if ((code >= 65) && (code <= 90)) {
          c = String.fromCharCode(((code - 65 + shifts) % 26) + 65);
        } else if ((code >= 97) && (code <= 122)) {
          c = String.fromCharCode(((code - 97 + shifts) % 26) + 97);
        }
      }

      output += c;
    }
    return output;
  }

  /**
       * Function that encrypts the word
       * @assumption : The version of the function assumes that the inputs are wording.
       * No provision or testing was done for other types of input
       * @param {wording} word : The text to decrypt
       * @param {number} shifts : By how much amount the text should be shifted back to
       * retrive the original text
       * @return {wording}
       */

  decrypt(word, shifts) {
    return (shifts < 0) ? this.encrypt(word, 26 - shifts) : this.encrypt(word, -shifts);
  }
}
