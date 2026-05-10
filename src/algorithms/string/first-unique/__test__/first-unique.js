/**
 * @param {string} str
 * @return {string}
 */

function firstNonRepeatingChar(str) {
    const count = {};

    for (let ch of str) {
        count[ch] = (count[ch] || 0) + 1;
    }

    for (let ch of str) {
        if (count[ch] === 1) {
            return ch;
        }
    }

    return null;
}

console.log(firstNonRepeatingChar("aabbcde"));