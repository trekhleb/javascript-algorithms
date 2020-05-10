import {
  addChar,
  buildFence,
  DIRECTIONS,
  getNextDirection,
} from './railFenceCipher';

/**
 * @param {object} params
 * @param {number} params.railCount
 * @param {number} params.currentRail
 * @param {number} params.direction
 * @param {Array} params.string
 *
 * @returns {Array}
 */
const fillEncodeFence = ({
  railCount, fence, currentRail, direction, string,
}) => {
  if (string.length === 0) return fence;

  const [letter, ...nextString] = string;
  const nextDirection = getNextDirection({ railCount, currentRail, direction });

  return fillEncodeFence({
    railCount,
    fence: fence.map(addChar(currentRail, letter)),
    currentRail: currentRail + nextDirection,
    direction: nextDirection,
    string: nextString,
  });
};

/**
 * @param {string} string
 * @param {number} railCount
 *
 * @returns {string}
 */
export default function encodeRailFenceCipher(string, railCount) {
  const fence = buildFence(railCount);

  const filledFence = fillEncodeFence({
    railCount,
    fence,
    currentRail: 0,
    direction: DIRECTIONS.DOWN,
    string: string.split(''),
  });

  return filledFence.flat().join('');
}
