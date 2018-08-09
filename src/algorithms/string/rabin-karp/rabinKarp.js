import PolynomialHash from '../../cryptography/polynomial-hash/PolynomialHash';

/**
 * Checks if two strings are equal.
 *
 * We may simply compare (string1 === string2) but for the
 * purpose of analyzing algorithm time complexity let's do
 * it character by character.
 *
 * @param {string} string1
 * @param {string} string2
 */
function stringsAreEqual(string1, string2) {
  if (string1.length !== string2.length) {
    return false;
  }

  for (let charIndex = 0; charIndex < string1.length; charIndex += 1) {
    if (string1[charIndex] !== string2[charIndex]) {
      return false;
    }
  }

  return true;
}

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
    // In case if hashes match let's check substring char by char.
    if (
      wordHash === currentFrameHash
      && stringsAreEqual(text.substr(charIndex, word.length), word)
    ) {
      return charIndex;
    }
  }

  return -1;
}
