// The string separator that is being used for "word" and "text" concatenation.
const SEPARATOR = '$';

/**
 * @param {string} zString
 * @return {number[]}
 */
function buildZArray(zString) {
  const zArray = new Array(zString.length);

  let left = 0;
  let right = 0;
  let k = 0;

  for (let i = 1; i < zString.length; i += 1) {
    if (i > right) {
      left = i;
      right = i;

      while (right < zString.length && zString[right - left] === zString[right]) {
        right += 1;
      }

      zArray[i] = right - left;
      right -= 1;
    } else {
      k = i - left;
      if (zArray[k] < (right - i) + 1) {
        zArray[i] = zArray[k];
      } else {
        left = i;
        while (right < zString.length && zString[right - left] === zString[right]) {
          right += 1;
        }

        zArray[i] = right - left;
        right -= 1;
      }
    }
  }

  return zArray;
}

/**
 * @param {string} text
 * @param {string} word
 * @return {number[]}
 */
export default function zAlgorithm(text, word) {
  // The list of word's positions in text. Word may be found in the same text
  // in several different positions. Thus it is an array.
  const wordPositions = [];

  // Concatenate word and string. Word will be a prefix to a string.
  const zString = `${word}${SEPARATOR}${text}`;

  // Generate Z-array for concatenated string.
  const zArray = buildZArray(zString);

  // Based on Z-array properties each cell will tell us the length of the match between
  // the string prefix and current sub-text. Thus we're may find all positions in zArray
  // with the number that equals to the length of the word (zString prefix) and based on
  // that positions we'll be able to calculate word positions in text.
  for (let charIndex = 1; charIndex < zArray.length; charIndex += 1) {
    if (zArray[charIndex] === word.length) {
      // Since we did concatenation to form zString we need to subtract prefix
      // and separator lengths.
      const wordPosition = charIndex - word.length - SEPARATOR.length;
      wordPositions.push(wordPosition);
    }
  }

  // Return the list of word positions.
  return wordPositions;
}
