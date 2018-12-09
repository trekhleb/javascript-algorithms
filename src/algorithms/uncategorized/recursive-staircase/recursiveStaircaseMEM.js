/**
 * Recursive Staircase Problem (Recursive Solution With Memoization).
 *
 * @param {number} totalStairs - Number of stairs to climb on.
 * @return {number} - Number of ways to climb a staircase.
 */
export default function recursiveStaircaseMEM(totalStairs) {
  // Memo table that will hold all recursively calculated results to avoid calculating them
  // over and over again.
  const memo = [];

  // Recursive closure.
  const getSteps = (stairsNum) => {
    if (stairsNum <= 0) {
      // There is no way to go down - you climb the stairs only upwards.
      // Also if you're standing on the ground floor that you don't need to do any further steps.
      return 0;
    }

    if (stairsNum === 1) {
      // There is only one way to go to the first step.
      return 1;
    }

    if (stairsNum === 2) {
      // There are two ways to get to the second steps: (1 + 1) or (2).
      return 2;
    }

    // Avoid recursion for the steps that we've calculated recently.
    if (memo[stairsNum]) {
      return memo[stairsNum];
    }

    // Sum up how many steps we need to take after doing one step up with the number of
    // steps we need to take after doing two steps up.
    memo[stairsNum] = getSteps(stairsNum - 1) + getSteps(stairsNum - 2);

    return memo[stairsNum];
  };

  // Return possible ways to get to the requested step.
  return getSteps(totalStairs);
}
