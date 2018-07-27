/**
 * @param {number[]} terraces
 * @return {number}
 */
export default function rainTerraces(terraces) {
  /*
   * STEPS
   *
   * 1. Find the highest terraces on the left and right side of the elevation map:
   * e.g. for [0, 2, 4, 3, 4, 2, 4, 0, 8, 7, 0] we would have leftMax = 4 and rightMax = 8.
   * This is because water will "trail off" the sides of the terraces.
   *
   * 2. At this point, we are essentially dealing with a new map: [4, 3, 4, 2, 4, 0, 8].
   * From here, we loop through the map from the left to the right if leftMax < rightMax
   * (otherwise we move from right to left), adding water as we go unless we reach a value
   * that is greater than or equal to leftMax or rightMax.
   * e.g. [4, 3, 4, 2, 4, 0, 8]
   *             ^
   * water = water + (leftMax - 3) = 1
   *
   * or if the terrace array was reversed:
   * e.g. [8, 0, 4, 2, 4, 3, 4]
   *                   ^
   * water = water + (rightMax - 3) = 1
   *
   * 3. Again, we've essentially shortened the map: [4, 2, 4, 0, 8].
   * Now we repeat the above steps on the new array.
   *
   * Next Iteration:
   * [4, 2, 4, 0, 8]
   *        ^
   * water = water + (leftMax - 2) = 3
   *
   * Next Iteration:
   * [4, 0, 8]
   *        ^
   * water = water + (leftMax - 0) = 7
   *
   * 4. Return result: 7
   */
  let leftIndex = 0;
  let rightIndex = terraces.length - 1;

  let leftMaxLevel = 0;
  let rightMaxLevel = 0;

  let waterAmount = 0;

  while (leftIndex < rightIndex) {
    // Loop to find the highest terrace from the left side.
    while (leftIndex < rightIndex && terraces[leftIndex] <= terraces[leftIndex + 1]) {
      leftIndex += 1;
    }

    leftMaxLevel = terraces[leftIndex];

    // Loop to find the highest terrace from the right side.
    while (rightIndex > leftIndex && terraces[rightIndex] <= terraces[rightIndex - 1]) {
      rightIndex -= 1;
    }

    rightMaxLevel = terraces[rightIndex];

    // Determine which direction we need to go.
    if (leftMaxLevel < rightMaxLevel) {
      // Move from left to right and collect water.
      leftIndex += 1;

      while (leftIndex < rightIndex && terraces[leftIndex] <= leftMaxLevel) {
        waterAmount += leftMaxLevel - terraces[leftIndex];
        leftIndex += 1;
      }
    } else {
      // Move from right to left and collect water.
      rightIndex -= 1;

      while (leftIndex < rightIndex && terraces[rightIndex] <= rightMaxLevel) {
        waterAmount += rightMaxLevel - terraces[rightIndex];
        rightIndex -= 1;
      }
    }
  }

  return waterAmount;
}
