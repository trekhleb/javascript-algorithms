/**
 * BACKTRACKING approach of solving Unique Paths problem.
 *
 * @param {number} width - Width of the board.
 * @param {number} height - Height of the board.
 * @param {number[][]} steps - The steps that have been already made.
 * @param {number} uniqueSteps - Total number of unique steps.
 * @return {number} - Number of unique paths.
 */
export default function btUniquePaths(width, height, steps = [[0, 0]], uniqueSteps = 0) {
  // Fetch current position on board.
  const currentPos = steps[steps.length - 1];

  // Check if we've reached the end.
  if (currentPos[0] === width - 1 && currentPos[1] === height - 1) {
    // In case if we've reached the end let's increase total
    // number of unique steps.
    return uniqueSteps + 1;
  }

  // Let's calculate how many unique path we will have
  // by going right and by going down.
  let rightUniqueSteps = 0;
  let downUniqueSteps = 0;

  // Do right step if possible.
  if (currentPos[0] < width - 1) {
    steps.push([
      currentPos[0] + 1,
      currentPos[1],
    ]);

    // Calculate how many unique paths we'll get by moving right.
    rightUniqueSteps = btUniquePaths(width, height, steps, uniqueSteps);

    // BACKTRACK and try another move.
    steps.pop();
  }

  // Do down step if possible.
  if (currentPos[1] < height - 1) {
    steps.push([
      currentPos[0],
      currentPos[1] + 1,
    ]);

    // Calculate how many unique paths we'll get by moving down.
    downUniqueSteps = btUniquePaths(width, height, steps, uniqueSteps);

    // BACKTRACK and try another move.
    steps.pop();
  }

  // Total amount of unique steps will be equal to total amount of
  // unique steps by going right plus total amount of unique steps
  // by going down.
  return rightUniqueSteps + downUniqueSteps;
}
