/**
 * Multiply two matrices 2x2
 *
 * @param {number} matrizA - Matriz calculate.
 * @param {number} matrizB - Matriz calculate.
 * @return {number}
 */
function multMatriz(matrizA, matrizB) {
  return [[matrizA[0][0] * matrizB[0][0] + matrizA[0][1] * matrizB[1][0],
    matrizA[0][0] * matrizB[0][1] + matrizA[0][1] * matrizB[1][1]],
  [matrizA[1][0] * matrizB[0][0] + matrizA[1][1] * matrizB[1][0],
    matrizA[1][0] * matrizB[0][1] + matrizA[1][1] * matrizB[1][1]]];
}

/**
 * Pow matriz O(lg n)
 *
 * @param {number} matriz - Matriz calculate.
 * @param {number} exp - Number exponent.
 * @return {number}
 */
function powMatriz(matriz, exp) {
  if (exp === 0) return [[1, 0], [0, 1]];

  if (exp % 2 === 0) {
    const temp = powMatriz(matriz, Math.floor(exp / 2));
    return multMatriz(temp, temp);
  }

  let temp = powMatriz(matriz, Math.floor(exp / 2));
  temp = multMatriz(temp, temp);
  return multMatriz(matriz, temp);
}

/**
 * Calculate fibonacci number at specific position using matriz exponation.
 *
 * @param {number} position - Position number of fibonacci sequence.
 * @return {number}
 */
export default function fibonacciMatriz(position) {
  if (position < 2) return position;
  const matriz = [[0, 1], [1, 1]];
  const result = powMatriz(matriz, position);
  return result[0][1];
}
