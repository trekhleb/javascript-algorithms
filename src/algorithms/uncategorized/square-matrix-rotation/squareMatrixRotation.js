/**
 * @param {*[][]} originalMatrix
 * @return {*[][]}
 */
export default function squareMatrixRotation(originalMatrix) {
  const matrix = originalMatrix.slice();

  // Do top-right/bottom-left diagonal reflection of the matrix.
  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex += 1) {
    for (let columnIndex = rowIndex + 1; columnIndex < matrix.length; columnIndex += 1) {
      const tmp = matrix[columnIndex][rowIndex];
      matrix[columnIndex][rowIndex] = matrix[rowIndex][columnIndex];
      matrix[rowIndex][columnIndex] = tmp;
    }
  }

  // Do horizontal reflection of the matrix.
  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex += 1) {
    for (let columnIndex = 0; columnIndex < matrix.length / 2; columnIndex += 1) {
      const mirrorColumnIndex = matrix.length - columnIndex - 1;
      const tmp = matrix[rowIndex][mirrorColumnIndex];
      matrix[rowIndex][mirrorColumnIndex] = matrix[rowIndex][columnIndex];
      matrix[rowIndex][columnIndex] = tmp;
    }
  }

  return matrix;
}
