/**
 * BACKTRACKING approach of solving Jump Game.
 *
 * This is the inefficient solution where we try every single jump
 * pattern that takes us from the first position to the last.
 * We start from the first position and jump to every index that
 * is reachable. We repeat the process until last index is reached.
 * When stuck, backtrack.
 *
 * @param {number[]} numbers - array of possible jump length.
 * @param {number} startIndex - index from where we start jumping.
 * @param {number[]} currentJumps - current jumps path.
 * @return {boolean}
 */
export default function backtrackingJumpGame(numbers, startIndex = 0, currentJumps = []) {
  if (startIndex === numbers.length - 1) {
    // We've jumped directly to last cell. This situation is a solution.
    return true;
  }

  // Check what the longest jump we could make from current position.
  // We don't need to jump beyond the array.
  const maxJumpLength = Math.min(
    numbers[startIndex], // Jump is within array.
    numbers.length - 1 - startIndex, // Jump goes beyond array.
  );

  // Let's start jumping from startIndex and see whether any
  // jump is successful and has reached the end of the array.
  for (let jumpLength = maxJumpLength; jumpLength > 0; jumpLength -= 1) {
    // Try next jump.
    const nextIndex = startIndex + jumpLength;
    currentJumps.push(nextIndex);

    const isJumpSuccessful = backtrackingJumpGame(numbers, nextIndex, currentJumps);

    // Check if current jump was successful.
    if (isJumpSuccessful) {
      return true;
    }

    // BACKTRACKING.
    // If previous jump wasn't successful then retreat and try the next one.
    currentJumps.pop();
  }

  return false;
}
