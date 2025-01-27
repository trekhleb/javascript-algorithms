/**
 * Checks all possible board configurations.
 *
 * @param {number} boardSize - Size of the squared chess board.
 * @param {number} leftDiagonal - Sequence of N bits that show whether the corresponding location
 * on the current row is "available" (no other queens are threatening from left diagonal).
 * @param {number} column - Sequence of N bits that show whether the corresponding location
 * on the current row is "available" (no other queens are threatening from columns).
 * @param {number} rightDiagonal - Sequence of N bits that show whether the corresponding location
 * on the current row is "available" (no other queens are threatening from right diagonal).
 * @param {number} solutionsCount - Keeps track of the number of valid solutions.
 * @return {number} - Number of possible solutions.
 */
function nQueensBitwiseRecursive(
  boardSize,
  leftDiagonal = 0,
  column = 0,
  rightDiagonal = 0,
  solutionsCount = 0,
) {
  // Keeps track of the number of valid solutions.
  let currentSolutionsCount = solutionsCount;

  // Helps to identify valid solutions.
  // isDone simply has a bit sequence with 1 for every entry up to the Nth. For example,
  // when N=5, done will equal 11111. The "isDone" variable simply allows us to not worry about any
  // bits beyond the Nth.
  const isDone = (2 ** boardSize) - 1;

  // All columns are occupied (i.e. 0b1111 for boardSize = 4), so the solution must be complete.
  // Since the algorithm never places a queen illegally (ie. when it can attack or be attacked),
  // we know that if all the columns have been filled, we must have a valid solution.
  if (column === isDone) {
    return currentSolutionsCount + 1;
  }

  // Gets a bit sequence with "1"s wherever there is an open "slot".
  // All that's happening here is we're taking col, ld, and rd, and if any of the columns are
  // "under attack", we mark that column as 0 in poss, basically meaning "we can't put a queen in
  // this column". Thus all bits position in poss that are '1's are available for placing
  // queen there.
  let availablePositions = ~(leftDiagonal | rightDiagonal | column);

  // Loops as long as there is a valid place to put another queen.
  // For N=4 the isDone=0b1111. Then if availablePositions=0b0000 (which would mean that all places
  // are under threatening) we must stop trying to place a queen.
  while (availablePositions & isDone) {
    // firstAvailablePosition just stores the first non-zero bit (ie. the first available location).
    // So if firstAvailablePosition was 0010, it would mean the 3rd column of the current row.
    // And that would be the position will be placing our next queen.
    //
    // For example:
    // availablePositions = 0b01100
    // firstAvailablePosition = 100
    const firstAvailablePosition = availablePositions & -availablePositions;

    // This line just marks that position in the current row as being "taken" by flipping that
    // column in availablePositions to zero. This way, when the while loop continues, we'll know
    // not to try that location again.
    //
    // For example:
    // availablePositions = 0b0100
    // firstAvailablePosition = 0b10
    // 0b0110 - 0b10 = 0b0100
    availablePositions -= firstAvailablePosition;

    /*
     * The operators >> 1 and 1 << simply move all the bits in a bit sequence one digit to the
     * right or left, respectively. So calling (rd|bit)<<1 simply says: combine rd and bit with
     * an OR operation, then move everything in the result to the left by one digit.
     *
     * More specifically, if rd is 0001 (meaning that the top-right-to-bottom-left diagonal through
     * column 4 of the current row is occupied), and bit is 0100 (meaning that we are planning to
     * place a queen in column 2 of the current row), (rd|bit) results in 0101 (meaning that after
     * we place a queen in column 2 of the current row, the second and the fourth
     * top-right-to-bottom-left diagonals will be occupied).
     *
     * Now, if add in the << operator, we get (rd|bit)<<1, which takes the 0101 we worked out in
     * our previous bullet point, and moves everything to the left by one. The result, therefore,
     * is 1010.
     */
    currentSolutionsCount += nQueensBitwiseRecursive(
      boardSize,
      (leftDiagonal | firstAvailablePosition) >> 1,
      column | firstAvailablePosition,
      (rightDiagonal | firstAvailablePosition) << 1,
      solutionsCount,
    );
  }

  return currentSolutionsCount;
}

/**
 * @param {number} boardSize - Size of the squared chess board.
 * @return {number} - Number of possible solutions.
 * @see http://gregtrowbridge.com/a-bitwise-solution-to-the-n-queens-problem-in-javascript/
 */
export default function nQueensBitwise(boardSize) {
  return nQueensBitwiseRecursive(boardSize);
}
