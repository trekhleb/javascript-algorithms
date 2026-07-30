// Generate a 5x5 Playfair cipher key matrix based on a given keyword.
// Combine 'I' and 'J' into a single letter, as per the standard Playfair rules.

const generateKeyMatrix = (key) => {
  const alphabet = 'abcdefghiklmnopqrstuvwxyz'; // 'j' is merged with 'i'
  const filteredKey = Array.from(new Set(
    key.toLowerCase().replace(/[^a-z]/g, '').replace(/j/g, 'i'),
  ));
  const matrixSet = new Set(filteredKey);
  alphabet.split('').forEach((ch) => matrixSet.add(ch));

  const matrixArr = Array.from(matrixSet);
  const matrix = [];
  while (matrixArr.length) {
    matrix.push(matrixArr.splice(0, 5));
  }
  return matrix;
};

// Find letter position in 5x5 matrix
const findPosition = (matrix, char) => {
  for (let row = 0; row < 5; row += 1) {
    const col = matrix[row].indexOf(char);
    if (col !== -1) return [row, col];
  }
  return [-1, -1];
};

// Prepare text into digraphs
const prepareText = (text, forDecryption = false) => {
  const cleanText = text.toLowerCase().replace(/[^a-z]/g, '').replace(/j/g, 'i');
  const pairs = [];
  let i = 0;

  while (i < cleanText.length) {
    const first = cleanText[i];
    let second = cleanText[i + 1];

    if (!forDecryption) {
      if (first === second) {
        second = 'x'; // insert x for duplicate
        i += 1;
      } else {
        i += 2;
      }
    } else {
      i += 2;
    }

    if (!second) second = 'x'; // pad last char
    pairs.push(first + second);
  }

  return pairs;
};

const playfairEncrypt = (plaintext, key) => {
  const matrix = generateKeyMatrix(key);
  const pairs = prepareText(plaintext);
  let ciphertext = '';

  pairs.forEach((pair) => {
    const [a, b] = pair.split('');
    let [rowA, colA] = findPosition(matrix, a);
    let [rowB, colB] = findPosition(matrix, b);

    if (rowA === rowB) {
      colA = (colA + 1) % 5;
      colB = (colB + 1) % 5;
    } else if (colA === colB) {
      rowA = (rowA + 1) % 5;
      rowB = (rowB + 1) % 5;
    } else {
      [colA, colB] = [colB, colA];
    }

    ciphertext += matrix[rowA][colA] + matrix[rowB][colB];
  });

  return ciphertext;
};

const playfairDecrypt = (ciphertext, key) => {
  const matrix = generateKeyMatrix(key);
  const pairs = prepareText(ciphertext, true);
  let plaintext = '';

  pairs.forEach((pair) => {
    const [a, b] = pair.split('');
    let [rowA, colA] = findPosition(matrix, a);
    let [rowB, colB] = findPosition(matrix, b);

    if (rowA === rowB) {
      colA = (colA + 4) % 5; // move left
      colB = (colB + 4) % 5;
    } else if (colA === colB) {
      rowA = (rowA + 4) % 5; // move up
      rowB = (rowB + 4) % 5;
    } else {
      [colA, colB] = [colB, colA];
    }

    plaintext += matrix[rowA][colA] + matrix[rowB][colB];
  });

  return plaintext;
};

export { playfairEncrypt, playfairDecrypt, generateKeyMatrix };
