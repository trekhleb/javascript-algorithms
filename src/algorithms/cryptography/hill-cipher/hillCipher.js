import * as mtrx from '../../math/matrix/Matrix';

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
  let keyStringIndex = 0;
  return mtrx.generate(
    [matrixSize, matrixSize],
    // Callback to get a value of each matrix cell.
    // The order the matrix is being filled in is from left to right, from top to bottom.
    () => {
      // A → 0, B → 1, ..., Z → 25
      const charCodeShifted = (keyString.codePointAt(keyStringIndex)) % alphabetCodeShift;
      keyStringIndex += 1;
      return charCodeShifted;
    },
  );
};

/**
 * Generates a message vector from a given message.
 *
 * @param {string} message - the message to encrypt.
 * @return {number[][]} messageVector
 */
const generateMessageVector = (message) => {
  return mtrx.generate(
    [message.length, 1],
    // Callback to get a value of each matrix cell.
    // The order the matrix is being filled in is from left to right, from top to bottom.
    (cellIndices) => {
      const rowIndex = cellIndices[0];
      return message.codePointAt(rowIndex) % alphabetCodeShift;
    },
  );
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

  // The cipher works with the 26-letter alphabet where A → 0, ..., Z → 25.
  // Normalize the case so that lowercase letters map to the same numbers
  // as their uppercase counterparts.
  const keyMatrix = generateKeyMatrix(keyString.toUpperCase());
  const messageVector = generateMessageVector(message.toUpperCase());

  // keyString.length must equal to square of message.length
  if (keyMatrix.length !== message.length) {
    throw new Error('Invalid key string length. The key length must be a square of message length');
  }

  const cipherVector = mtrx.dot(keyMatrix, messageVector);
  let cipherString = '';
  for (let row = 0; row < cipherVector.length; row += 1) {
    const item = cipherVector[row];
    cipherString += String.fromCharCode((item % englishAlphabetSize) + alphabetCodeShift);
  }

  return cipherString;
}

// @TODO: Implement this method.
export const hillCipherDecrypt = () => {
  throw new Error('This method is not implemented yet');
};
