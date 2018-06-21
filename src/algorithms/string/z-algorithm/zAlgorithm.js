/**
 * @param {string} word
 * @param {string} text
 * @return {number[]}
 */

function buildZArray(word, text) {
  let zString = word+"$+"text;
  let zArray = new Array(zString.length);
  let left = 0, right = 0, k = 0;

  for (let i = 1; i < zString.length; i++) {
    if (i > right) {
      left = right = 0;
      while ( right<zString.length && zString[right-left] == zString[right]) {
        right++;
      }
      zArray[i] = right-left;
      right--;
    } else {
      k = i-left;
      if (zString[k] < right-i+1) {
        zString[i] = zString[k];
      } else {
        left = i;
        while (right<zString.length && zString[right-left] == zString[right]) {
          right++;
        }
        zString[i] = right-left;
        right--;
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
export default function knuthMorrisPratt(text, word) {
  const zArray = buildZArray(word, text);

  for (let i=0; i<zArray.length; i++) {
    if (zArray[i] == word.length) {
      return (i-word.length-1);
    }
    return -1;
  }
}