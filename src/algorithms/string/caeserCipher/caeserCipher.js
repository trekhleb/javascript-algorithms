/**
 * @param {string} string
 * @param {number} shift
 * @return {string}  result
 */

export default function caeserCipher(string, shift) {
    // convert all alphabets in english language to an array
    const alphabetArr = "abcdefghijklmnopqrstuvwxyz".split("")
    // converting all the alphabets in  string to lowercase
    string = string.toLowerCase()

    let result = ""
    for (let i = 0; i < string.length; i++) {
        const currentChar = string[i]
        // checking index of character in the english alphabets
        const idx = alphabetArr.indexOf(currentChar)
        // skip character if the character is not an alphabet
        if (idx === -1) {
            result += currentChar
            continue;
        }
        //wrap up index, incase the next shift is beyond the 26th character
        const encodedIdx = (idx + shift) % 26
        result += alphabetArr[encodedIdx]

    }
    // return the result  of the shifted string
    return result
}
