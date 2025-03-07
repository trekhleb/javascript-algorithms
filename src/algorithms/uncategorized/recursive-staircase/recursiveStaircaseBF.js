/**
 * Recursive Staircase Problem (Brute Force Solution).
 *
 * @param {number} stairsNum - Number of stairs to climb on.
 * @return {number} - Number of ways to climb a staircase.
 */
export default function recursiveStaircaseBF(stairsNum) {
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

  // Sum up how many steps we need to take after doing one step up with the number of
  // steps we need to take after doing two steps up.
  return recursiveStaircaseBF(stairsNum - 1) + recursiveStaircaseBF(stairsNum - 2);
}
