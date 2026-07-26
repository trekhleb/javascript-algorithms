
// Create alphabet array: ['a', 'b', 'c', ..., 'z'].
const englishAlphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

/**
 * @param {character} c
 * @param {string[]} alphabet
 * @return {number}
 */
const indexInLetters = (c, alphabet=englishAlphabet) => {
    c = c.toLowerCase();
    for (let i = 0; i < alphabet.length; i++) {
        if (alphabet[i] === c) return i;
    }
    return -1;
}


/**
 * @param {string} message
 * @param {string} key
 * @param {string[]} alphabet
 * @return {string}
 */

export const vingenereCipherEncrypt = (message, key, alphabet=englishAlphabet) => {
    message = message.toLowerCase();
    key = key.toLowerCase();
    const str = message.split('');
    let keyIndex = 0;
    const keyArr = new Array(str.length);
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (keyIndex >= key.length) keyIndex %= key.length;
        keyArr[i] = key[keyIndex];
        keyIndex++;
    }
    for (let i = 0; i < str.length; i++) {
        const index = indexInLetters(str[i]);
        if (index === -1) newStr += ' ';
        else newStr += alphabet[(indexInLetters(keyArr[i]) + index) % 26];
    }
    return newStr;
}

/**
 * @param {string} message
 * @param {string} key
 * @param {string[]} alphabet
 * @return {string}
 */

export const vingenereCipherDencrypt = (message, key, alphabet=englishAlphabet) => {
    message = message.toLowerCase();
    key = key.toLowerCase();
    const str = message.split('');
    let keyIndex = 0;
    const keyArr = new Array(str.length);
    let newStr = '';
    for (let i = 0; i < str.length; i++) {
        if (keyIndex >= key.length) keyIndex %= key.length;
        keyArr[i] = key[keyIndex];
        keyIndex++;
    }
    for (let i = 0; i < str.length; i++) {
        const index = indexInLetters(str[i]);
        if (index === -1) newStr += ' ';
        else {
            let newIndex = index - indexInLetters(keyArr[i]);
            if (newIndex < 0) newIndex += 26;
            newStr += alphabet[newIndex];
        }
    }
    return newStr;
}