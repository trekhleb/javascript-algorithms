/**
 * Recursive Staircase Problem (Dynamic Programming Solution).
 *
 * @param {number} stairsNum - Number of stairs to climb on.
 * @return {number} - Number of ways to climb a staircase.
 */
export default function recursiveStaircaseDP(stairsNum) {
  if (stairsNum < 0) {
    // There is no way to go down - you climb the stairs only upwards.
    return 0;
  }

  // Init the steps vector that will hold all possible ways to get to the corresponding step.
  const steps = new Array(stairsNum + 1).fill(0);

  // Init the number of ways to get to the 0th, 1st and 2nd steps.
  steps[0] = 0;
  steps[1] = 1;
  steps[2] = 2;

  if (stairsNum <= 2) {
    // Return the number of ways to get to the 0th or 1st or 2nd steps.
    return steps[stairsNum];
  }

  // Calculate every next step based on two previous ones.
  for (let currentStep = 3; currentStep <= stairsNum; currentStep += 1) {
    steps[currentStep] = steps[currentStep - 1] + steps[currentStep - 2];
  }

  // Return possible ways to get to the requested step.
  return steps[stairsNum];
}
