import {
  addChar,
  buildFence,
  DIRECTIONS,
  getNextDirection,
} from './railFenceCipher';

/**
 * @param {object} params
 * @param {number} params.railCount
 * @param {number} params.strLen
 * @param {Array} params.string
 * @param {Array} params.fence
 * @param {number} params.targetRail
 * @param {number} params.direction
 * @param {Array} params.coords
 *
 * @returns {Array}
 */
const fillDecodeFence = ({
  railCount, strLen, string, fence, targetRail, direction, coords,
}) => {
  if (string.length === 0) return fence;

  const [currentRail, currentColumn] = coords;
  const shouldGoNextRail = currentColumn === strLen - 1;
  const nextDirection = shouldGoNextRail
    ? DIRECTIONS.DOWN
    : getNextDirection({ railCount, currentRail, direction });
  const nextRail = shouldGoNextRail ? targetRail + 1 : targetRail;
  const nextCoords = [
    shouldGoNextRail ? 0 : currentRail + nextDirection,
    shouldGoNextRail ? 0 : currentColumn + 1,
  ];

  const shouldAddChar = currentRail === targetRail;
  const [currentChar, ...remainderString] = string;
  const nextString = shouldAddChar ? remainderString : string;
  const nextFence = shouldAddChar ? fence.map(addChar(currentRail, currentChar)) : fence;

  return fillDecodeFence({
    railCount,
    strLen,
    string: nextString,
    fence: nextFence,
    targetRail: nextRail,
    direction: nextDirection,
    coords: nextCoords,
  });
};

/**
 * @param {object} params
 * @param {number} params.railCount
 * @param {number} params.strLen
 * @param {Array} params.fence
 * @param {number} params.currentRail
 * @param {number} params.direction
 * @param {Array} params.code
 *
 * @returns {string}
 */
const decodeFence = ({
  railCount, strLen, fence, currentRail, direction, code,
}) => {
  if (code.length === strLen) return code.join('');

  const [currentChar, ...nextRail] = fence[currentRail];
  const nextDirection = getNextDirection({ railCount, currentRail, direction });

  return decodeFence({
    railCount,
    strLen,
    currentRail: currentRail + nextDirection,
    direction: nextDirection,
    code: [...code, currentChar],
    fence: fence.map((rail, idx) => (idx === currentRail ? nextRail : rail)),
  });
};

/**
 * @param {string} string
 * @param {number} railCount
 *
 * @returns {string}
 */
export default function decodeRailFenceCipher(string, railCount) {
  const strLen = string.length;
  const emptyFence = buildFence(railCount);
  const filledFence = fillDecodeFence({
    railCount,
    strLen,
    string: string.split(''),
    fence: emptyFence,
    targetRail: 0,
    direction: DIRECTIONS.DOWN,
    coords: [0, 0],
  });

  return decodeFence({
    railCount,
    strLen,
    fence: filledFence,
    currentRail: 0,
    direction: DIRECTIONS.DOWN,
    code: [],
  });
}
