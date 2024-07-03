/**
 * Recursive Staircase Problem (Iterative Solution).
 *
 * @param {number} stairsNum - Number of stairs to climb on.
 * @return {number} - Number of ways to climb a staircase.
 */
export default function recursiveStaircaseIT(stairsNum) {
  if (stairsNum <= 0) {
    // There is no way to go down - you climb the stairs only upwards.
    // Also you don't need to do anything to stay on the 0th step.
    return 0;
  }

  // Init the number of ways to get to the 0th, 1st and 2nd steps.
  const steps = [1, 2];

  if (stairsNum <= 2) {
    // Return the number of possible ways of how to get to the 1st or 2nd steps.
    return steps[stairsNum - 1];
  }

  // Calculate the number of ways to get to the n'th step based on previous ones.
  // Comparing to Dynamic Programming solution we don't store info for all the steps but
  // rather for two previous ones only.
  for (let currentStep = 3; currentStep <= stairsNum; currentStep += 1) {
    [steps[0], steps[1]] = [steps[1], steps[0] + steps[1]];
  }

  // Return possible ways to get to the requested step.
  return steps[1];
}
