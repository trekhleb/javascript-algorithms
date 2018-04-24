/**
 * A prime number used to create
 * the hash representation of a word
 *
 * Bigger the prime number,
 * bigger the hash value
 */
const PRIME = 97;

/**
 * Function that creates hash representation of the word.
 *
 * @param {string} word
 * @return {number}
 */
export function hashWord(word) {
  let hash = 0;

  for (let charIndex = 0; charIndex < word.length; charIndex += 1) {
    hash += word[charIndex].charCodeAt(0) * (PRIME ** charIndex);
  }

  return hash;
}

/**
 * Function that creates hash representation of the word
 * based on previous word (shifted by one character left) hash value.
 *
 * Recalculates the hash representation of a word so that it isn't
 * necessary to traverse the whole word again
 *
 * @param {number} prevHash
 * @param {string} prevWord
 * @param {string} newWord
 * @return {number}
 */
export function reHashWord(prevHash, prevWord, newWord) {
  const newWordLastIndex = newWord.length - 1;
  let newHash = prevHash - prevWord[0].charCodeAt(0);
  newHash /= PRIME;
  newHash += newWord[newWordLastIndex].charCodeAt(0) * (PRIME ** newWordLastIndex);

  return newHash;
}

/**
 * @param {string} text
 * @param {string} word
 * @return {number}
 */
export function rabinKarp(text, word) {
  // Calculate word hash that we will use for comparison with other substring hashes.
  const wordHash = hashWord(word);

  let prevSegment = null;
  let currentSegmentHash = null;

  // Go through all substring of the text that may match
  for (let charIndex = 0; charIndex <= text.length - word.length; charIndex += 1) {
    const currentSegment = text.substring(charIndex, charIndex + word.length);

    // Calculate the hash of current substring.
    if (currentSegmentHash === null) {
      currentSegmentHash = hashWord(currentSegment);
    } else {
      currentSegmentHash = reHashWord(currentSegmentHash, prevSegment, currentSegment);
    }

    prevSegment = currentSegment;

    // Compare the hash of current substring and seeking string.
    if (wordHash === currentSegmentHash) {
      // In case if hashes match let's check substring char by char.
      let numberOfMatches = 0;

      for (let deepCharIndex = 0; deepCharIndex < word.length; deepCharIndex += 1) {
        if (word[deepCharIndex] === text[charIndex + deepCharIndex]) {
          numberOfMatches += 1;
        }
      }

      if (numberOfMatches === word.length) {
        return charIndex;
      }
    }
  }

  return -1;
}
