/**
 * @param {number[]} terraces
 * @return {number}
 */

/*
 * STEPS
 * 1. Find the highest terraces on the left and right side of the elevation map:
 * e.g. [0, 2, 4, 3, 1, 2, 4, 0, 8, 7, 0] => (leftMax = 4, rightMax = 8)
 * This is because water will "trail off" the sides of the terraces.
 *
 * 2. At this point, we are essentially dealing with a new map: [4, 3, 4, 2, 4, 0, 8].
 * From here, we loop through the map from the left to the right (if leftMax > rightMax,
 * otherwise we move from right to left), adding water as we go unless we reach a value
 * that is greater than or equal to leftMax || rightMax.
 * e.g. [4, 3, 4, 2, 4, 0, 8]
 *             ^
 * water += leftMax - 3 => water = 1
 * or if the terrace array was reversed:
 * e.g. [8, 0, 4, 2, 4, 3, 4]
 *                   ^
 * water += rightMax - 3 => water = 1
 *
 * 3. Again, we've essentially shortened the map: [4, 2, 4, 0, 8].
 * Now we repeat the above steps on the new array.
 * e.g.
 * Next Iteration:
 * [4, 2, 4, 0, 8]
 *        ^
 * water += leftMax - 2 => water = 3
 *
 * Next Iteration:
 * [4, 0, 8]
 *        ^
 * water += leftMax - 0 => water = 7
 *
 * return water(7)
 */
export default function rainTerraces(terraces) {
  let start = 0;
  let end = terraces.length - 1;
  let water = 0;
  let leftMax = 0;
  let rightMax = 0;

  while (start < end) {
    // Loop to find left max
    while (start < end && terraces[start] <= terraces[start + 1]) {
      start += 1;
    }
    leftMax = terraces[start];

    // Loop to find right max
    while (end > start && terraces[end] <= terraces[end - 1]) {
      end -= 1;
    }
    rightMax = terraces[end];

    // Determine which direction we need to move in
    if (leftMax < rightMax) {
      // Move from left to right and collect water
      start += 1;
      while (start < end && terraces[start] <= leftMax) {
        water += leftMax - terraces[start];
        start += 1;
      }
    } else {
      // Move from left to right and collect water
      end -= 1;
      while (end > start && terraces[end] <= rightMax) {
        water += rightMax - terraces[end];
        end -= 1;
      }
    }
  }
  return water;
}
