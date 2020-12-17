// The code of an 'A' character (equals to 65).
const alphabetCodeShift = 'A'.codePointAt(0);
const englishAlphabetSize = 26;

/**
 * Generates key matrix from given keyString.
 *
 * @param {string} keyString - a string to build a key matrix (must be of matrixSize^2 length).
 * @return {number[][]} keyMatrix
 */
const generateKeyMatrix = (keyString) => {
  const matrixSize = Math.sqrt(keyString.length);
  if (!Number.isInteger(matrixSize)) {
    throw new Error(
      'Invalid key string length. The square root of the key string must be an integer',
    );
  }
  const keyMatrix = [];
  let keyStringIndex = 0;
  for (let i = 0; i < matrixSize; i += 1) {
    const keyMatrixRow = [];
    for (let j = 0; j < matrixSize; j += 1) {
      // A → 0, B → 1, ..., a → 32, b → 33, ...
      const charCodeShifted = (keyString.codePointAt(keyStringIndex)) % alphabetCodeShift;
      keyMatrixRow.push(charCodeShifted);
      keyStringIndex += 1;
    }
    keyMatrix.push(keyMatrixRow);
  }
  return keyMatrix;
};

/**
 * Generates a message vector from a given message.
 *
 * @param {string} message - the message to encrypt.
 * @return {number[]} messageVector
 */
const generateMessageVector = (message) => {
  const messageVector = [];
  for (let i = 0; i < message.length; i += 1) {
    messageVector.push(message.codePointAt(i) % alphabetCodeShift);
  }
  return messageVector;
};

/**
 * Encrypts the given message using Hill Cipher.
 *
 * @param {string} message plaintext
 * @param {string} keyString
 * @return {string} cipherString
 */
export function hillCipherEncrypt(message, keyString) {
  // The keyString and message can only contain letters.
  const onlyLettersRegExp = /^[a-zA-Z]+$/;
  if (!onlyLettersRegExp.test(message) || !onlyLettersRegExp.test(keyString)) {
    throw new Error('The message and key string can only contain letters');
  }

  const keyMatrix = generateKeyMatrix(keyString);

  // keyString.length must equal to square of message.length
  if (keyMatrix.length !== message.length) {
    throw new Error('Invalid key string length. The key length must be a square of message length');
  }

  const messageVector = generateMessageVector(message);
  let cipherString = '';
  for (let row = 0; row < keyMatrix.length; row += 1) {
    let item = 0;
    for (let column = 0; column < keyMatrix.length; column += 1) {
      item += keyMatrix[row][column] * messageVector[column];
    }
    cipherString += String.fromCharCode((item % englishAlphabetSize) + alphabetCodeShift);
  }

  return cipherString;
}

// @TODO: Implement this method.
export const hillCipherDecrypt = () => {
  throw new Error('This method is not implemented yet');
};
