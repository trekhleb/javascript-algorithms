/**
 * @typedef {import('../matrix/Matrix.js').Matrix} Matrix
 */

import * as mtrx from '../matrix/Matrix';

/**
 * Calculates the manhattan distance between 2 matrices.
 *
 * @param {Matrix} a
 * @param {Matrix} b
 * @returns {number}
 * @trows {Error}
 */
export const manhattanDistance = (a, b) => {
  mtrx.validateSameShape(a, b);

  let distanceTotal = 0;

  mtrx.walk(a, (indices, aCellValue) => {
    const bCellValue = mtrx.getCellAtIndex(b, indices);
    distanceTotal += Math.abs(aCellValue - bCellValue);
  });

  return distanceTotal;
};