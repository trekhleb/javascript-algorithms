/**
 * @param {string} word
 * @param {string} text
 * @return {number[]}
 */

function buildZArray(word, text) {
  const zString = `${word}$${text}`;
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
 * @return {number}
 */
export default function zAlgorithm(text, word) {
  const zArray = buildZArray(word, text);
  for (let i = 1; i < zArray.length; i += 1) {
    if (zArray[i] === word.length) {
      return (i - word.length - 1);
    }
  }
  return -1;
}
