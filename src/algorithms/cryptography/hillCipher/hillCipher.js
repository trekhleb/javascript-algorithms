
/**
 * generate key matrix from given keyString
 *
 * @param {integer} length
 * @param {string} keyString
 * @return {Array[][]} keyMatrix
 */
const generateKeyMatrix = (length, keyString) => {
  const keyMatrix = [];
  let keyStringIndex = 0;
  for (let i = 0; i < length; i += 1) {
    const keyMatrixRow = [];
    for (let j = 0; j < length; j += 1) {
      keyMatrixRow.push((keyString.codePointAt(keyStringIndex)) % 65);
      keyStringIndex += 1;
    }
    keyMatrix.push(keyMatrixRow);
  }
  return keyMatrix;
};

/**
 * generate message vector from given message
 *
 * @param {*} message
 * @return {Array} messageVector
 */
const generateMessageVector = (message) => {
  const messageVector = [];
  for (let i = 0; i < message.length; i += 1) {
    messageVector.push(message.codePointAt(i) % 65);
  }
  return messageVector;
};

/**
 * validate data and encrypt message from given message and keyString
 *
 * @param {string} message plaintext
 * @param {string} keyString
 * @return {string} cipherString
 *
 */

export default function hillCipherEncrypt(message, keyString) {
  const length = keyString.length ** (0.5);
  // keyString.length must equal to square of message.length
  if (!Number.isInteger(length) && length !== message.length) {
    throw new Error('invalid key string length');
  }
  // keyString and messange can only contain letters
  if (!(/^[a-zA-Z]+$/.test(message)) || !(/^[A-Za-z]+$/.test(keyString))) {
    throw new Error('messange and key string can only contain letters');
  }

  const keyMatrix = generateKeyMatrix(length, keyString);
  const messageVector = generateMessageVector(message);
  let ciperString = '';
  for (let row = 0; row < length; row += 1) {
    let item = 0;
    for (let column = 0; column < length; column += 1) {
      item += keyMatrix[row][column] * messageVector[column];
    }
    ciperString += String.fromCharCode((item % 26) + 65);
  }
  return ciperString;
}
