import PolynomialHash from '../../cryptography/polynomial-hash/PolynomialHash';

/**
 * @param {string} text - Text that may contain the searchable word.
 * @param {string} word - Word that is being searched in text.
 * @return {number} - Position of the word in text.
 */
export default function rabinKarp(text, word) {
  const hasher = new PolynomialHash();

  // Calculate word hash that we will use for comparison with other substring hashes.
  const wordHash = hasher.hash(word);

  let prevFrame = null;
  let currentFrameHash = null;

  // Go through all substring of the text that may match.
  for (let charIndex = 0; charIndex <= (text.length - word.length); charIndex += 1) {
    const currentFrame = text.substring(charIndex, charIndex + word.length);

    // Calculate the hash of current substring.
    if (currentFrameHash === null) {
      currentFrameHash = hasher.hash(currentFrame);
    } else {
      currentFrameHash = hasher.roll(currentFrameHash, prevFrame, currentFrame);
    }

    prevFrame = currentFrame;

    // Compare the hash of current substring and seeking string.
    // In case if hashes match let's make sure that substrings are equal.
    // In case of hash collision the strings may not be equal.
    if (
      wordHash === currentFrameHash
      && text.substr(charIndex, word.length) === word
    ) {
      return charIndex;
    }
  }

  return -1;
}
