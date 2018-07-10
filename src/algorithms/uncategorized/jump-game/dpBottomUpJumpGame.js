/**
 * DYNAMIC PROGRAMMING BOTTOM-UP approach of solving Jump Game.
 *
 * This comes out as an optimisation of DYNAMIC PROGRAMMING TOP-DOWN approach.
 *
 * The observation to make here is that we only ever jump to the right.
 * This means that if we start from the right of the array, every time we
 * will query a position to our right, that position has already be
 * determined as being GOOD or BAD. This means we don't need to recurse
 * anymore, as we will always hit the memo table.
 *
 * We call a position in the array a "good" one if starting at that
 * position, we can reach the last index. Otherwise, that index
 * is called a "bad" one.
 *
 * @param {number[]} numbers - array of possible jump length.
 * @return {boolean}
 */
export default function dpBottomUpJumpGame(numbers) {
  // Init cells goodness table.
  const cellsGoodness = Array(numbers.length).fill(undefined);
  // Mark the last cell as "good" one since it is where we ultimately want to get.
  cellsGoodness[cellsGoodness.length - 1] = true;

  // Go throw all cells starting from the one before the last
  // one (since the last one is "good" already) and fill cellsGoodness table.
  for (let cellIndex = numbers.length - 2; cellIndex >= 0; cellIndex -= 1) {
    const maxJumpLength = Math.min(
      numbers[cellIndex],
      numbers.length - 1 - cellIndex,
    );

    for (let jumpLength = maxJumpLength; jumpLength > 0; jumpLength -= 1) {
      const nextIndex = cellIndex + jumpLength;
      if (cellsGoodness[nextIndex] === true) {
        cellsGoodness[cellIndex] = true;
        // Once we detected that current cell is good one we don't need to
        // do further cells checking.
        break;
      }
    }
  }

  // Now, if the zero's cell is good one then we can jump from it to the end of the array.
  return cellsGoodness[0] === true;
}
