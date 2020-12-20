/**
 * @constant DIRECTIONS
 * @type {object}
 * @property {number} UP
 * @property {number} DOWN
 */
export const DIRECTIONS = { UP: -1, DOWN: 1 };

/**
 * @param {number} rows
 *
 * @returns {Array}
 */
export const buildFence = (rows) => Array(rows)
  .fill()
  .map(() => []);

/**
 * @param {object} params
 * @param {number} params.railCount
 * @param {number} params.currentRail
 * @param {number} params.direction
 *
 * @returns {number}
 */
export const getNextDirection = ({ railCount, currentRail, direction }) => {
  switch (currentRail) {
    case 0: return DIRECTIONS.DOWN;
    case railCount - 1: return DIRECTIONS.UP;
    default: return direction;
  }
};

/**
 * Given a rail, adds a char to it
 * if it matches a targetIndex.
 * @callback charAdder
 * @param {number} rail
 * @param {currentRail} number
 */

/**
 * @param {number} targetIndex
 * @param {string} letter
 *
 * @returns {charAdder}
 */
export const addChar = (targetIndex, letter) => (rail, currentRail) => {
  return (currentRail === targetIndex ? [...rail, letter] : rail);
};
