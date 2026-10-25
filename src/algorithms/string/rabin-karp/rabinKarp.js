import PolynomialHash from '../../cryptography/polynomial-hash/PolynomialHash';

/**
 * @param {string} text - Text that may contain the searchable word.
 * @param {string} word - Word that is being searched in text.
 * @return {number} - Position of the word in text.
 */
export default function rabinKarp(text, word) {
  const hasher = new PolynomialHash();

  // Work with code points (and not with UTF-16 code units) so that
  // surrogate pairs (astral symbols) are hashed as single characters.
  const textChars = Array.from(text);
  const wordChars = Array.from(word);

  // Calculate word hash that we will use for comparison with other substring hashes.
  const wordHash = hasher.hash(word);

  let currentFrameHash = null;

  // The position of the current frame in terms of UTF-16 code units. It is being
  // tracked separately because astral symbols occupy two code units at once and
  // the returned position must stay compatible with String.prototype.indexOf().
  let utf16Position = 0;

  // Go through all substring of the text that may match.
  for (let charIndex = 0; charIndex <= (textChars.length - wordChars.length); charIndex += 1) {
    // Calculate the hash of current substring. Only the first frame is hashed
    // completely. All other frames are hashed in O(1) time by rolling the previous
    // hash: the char that leaves the frame is removed and the new one is added.
    if (currentFrameHash === null) {
      currentFrameHash = hasher.hash(textChars.slice(0, wordChars.length).join(''));
    } else {
      currentFrameHash = hasher.rollChar(
        currentFrameHash,
        textChars[charIndex - 1],
        textChars[charIndex + wordChars.length - 1],
        wordChars.length,
      );
    }

    // Compare the hash of current substring and seeking string.
    // In case if hashes match let's make sure that substrings are equal.
    // In case of hash collision the strings may not be equal.
    if (
      wordHash === currentFrameHash
      && textChars.slice(charIndex, charIndex + wordChars.length).join('') === word
    ) {
      return utf16Position;
    }

    utf16Position += textChars[charIndex].length;
  }

  return -1;
}
