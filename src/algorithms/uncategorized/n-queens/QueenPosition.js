/**
 * Class that represents queen position on the chessboard.
 */
export default class QueenPosition {
  /**
   * @param {number} rowIndex
   * @param {number} columnIndex
   */
  constructor(rowIndex, columnIndex) {
    this.rowIndex = rowIndex;
    this.columnIndex = columnIndex;
  }

  /**
   * @return {number}
   */
  get leftDiagonal() {
    // Each position on the same left (\) diagonal has the same difference of
    // rowIndex and columnIndex. This fact may be used to quickly check if two
    // positions (queens) are on the same left diagonal.
    // @see https://youtu.be/xouin83ebxE?t=1m59s
    return this.rowIndex - this.columnIndex;
  }

  /**
   * @return {number}
   */
  get rightDiagonal() {
    // Each position on the same right diagonal (/) has the same
    // sum of rowIndex and columnIndex. This fact may be used to quickly
    // check if two positions (queens) are on the same right diagonal.
    // @see https://youtu.be/xouin83ebxE?t=1m59s
    return this.rowIndex + this.columnIndex;
  }

  toString() {
    return `${this.rowIndex},${this.columnIndex}`;
  }
}
