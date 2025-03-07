/**
 * @typedef {import('../matrix/Matrix.js').Matrix} Matrix
 */

import * as mtrx from '../matrix/Matrix';

/**
 * Calculates the euclidean distance between 2 matrices.
 *
 * @param {Matrix} a
 * @param {Matrix} b
 * @returns {number}
 * @trows {Error}
 */
const euclideanDistance = (a, b) => {
  mtrx.validateSameShape(a, b);

  let squaresTotal = 0;

  mtrx.walk(a, (indices, aCellValue) => {
    const bCellValue = mtrx.getCellAtIndex(b, indices);
    squaresTotal += (aCellValue - bCellValue) ** 2;
  });

  return Number(Math.sqrt(squaresTotal).toFixed(2));
};

export default euclideanDistance;
