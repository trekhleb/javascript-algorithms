// The string separator that is being used for "word" and "text" concatenation.
const SEPARATOR = '$';

/**
 * @param {string} zString
 * @return {number[]}
 */
function buildZArray(zString) {
  // Initiate zArray and fill it with zeros.
  const zArray = new Array(zString.length).fill(null).map(() => 0);

  // Z box boundaries.
  let zBoxLeftIndex = 0;
  let zBoxRightIndex = 0;

  // Position of current zBox character that is also a position of
  // the same character in prefix.
  // For example:
  // Z string: ab$xxabxx
  // Indices:  012345678
  // Prefix:   ab.......
  // Z box:    .....ab..
  // Z box shift for 'a' would be 0 (0-position in prefix and 0-position in Z box)
  // Z box shift for 'b' would be 1 (1-position in prefix and 1-position in Z box)
  let zBoxShift = 0;

  // Go through all characters of the zString.
  for (let charIndex = 1; charIndex < zString.length; charIndex += 1) {
    if (charIndex > zBoxRightIndex) {
      // We're OUTSIDE of Z box. In other words this is a case when we're
      // starting from Z box of size 1.

      // In this case let's make current character to be a Z box of length 1.
      zBoxLeftIndex = charIndex;
      zBoxRightIndex = charIndex;

      // Now let's go and check current and the following characters to see if
      // they are the same as a prefix. By doing this we will also expand our
      // Z box. For example if starting from current position we will find 3
      // more characters that are equal to the ones in the prefix we will expand
      // right Z box boundary by 3.
      while (
        zBoxRightIndex < zString.length
        && zString[zBoxRightIndex - zBoxLeftIndex] === zString[zBoxRightIndex]
      ) {
        // Expanding Z box right boundary.
        zBoxRightIndex += 1;
      }

      // Now we may calculate how many characters starting from current position
      // are are the same as the prefix. We may calculate it by difference between
      // right and left Z box boundaries.
      zArray[charIndex] = zBoxRightIndex - zBoxLeftIndex;

      // Move right Z box boundary left by one position just because we've used
      // [zBoxRightIndex - zBoxLeftIndex] index calculation above.
      zBoxRightIndex -= 1;
    } else {
      // We're INSIDE of Z box.

      // Calculate corresponding Z box shift. Because we want to copy the values
      // from zArray that have been calculated before.
      zBoxShift = charIndex - zBoxLeftIndex;

      // Check if the value that has been already calculated before
      // leaves us inside of Z box or it goes beyond the checkbox
      // right boundary.
      if (zArray[zBoxShift] < (zBoxRightIndex - charIndex) + 1) {
        // If calculated value don't force us to go outside Z box
        // then we're safe and we may simply use previously calculated value.
        zArray[charIndex] = zArray[zBoxShift];
      } else {
        // In case if previously calculated values forces us to go outside of Z box
        // we can't safely copy previously calculated zArray value. It is because
        // we are sure that there is no further prefix matches outside of Z box.
        // Thus such values must be re-calculated and reduced to certain point.

        // To do so we need to shift left boundary of Z box to current position.
        zBoxLeftIndex = charIndex;

        // And start comparing characters one by one as we normally do for the case
        // when we are outside of checkbox.
        while (
          zBoxRightIndex < zString.length
          && zString[zBoxRightIndex - zBoxLeftIndex] === zString[zBoxRightIndex]
        ) {
          zBoxRightIndex += 1;
        }

        zArray[charIndex] = zBoxRightIndex - zBoxLeftIndex;

        zBoxRightIndex -= 1;
      }
    }
  }

  // Return generated zArray.
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
