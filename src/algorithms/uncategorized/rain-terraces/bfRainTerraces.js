/**
 * BRUTE FORCE approach of solving Trapping Rain Water problem.
 *
 * @param {number[]} terraces
 * @return {number}
 */
export default function bfRainTerraces(terraces) {
  let waterAmount = 0;

  for (let terraceIndex = 0; terraceIndex < terraces.length; terraceIndex += 1) {
    // Get left most high terrace.
    let leftHighestLevel = 0;
    for (let leftIndex = terraceIndex - 1; leftIndex >= 0; leftIndex -= 1) {
      leftHighestLevel = Math.max(leftHighestLevel, terraces[leftIndex]);
    }

    // Get right most high terrace.
    let rightHighestLevel = 0;
    for (let rightIndex = terraceIndex + 1; rightIndex < terraces.length; rightIndex += 1) {
      rightHighestLevel = Math.max(rightHighestLevel, terraces[rightIndex]);
    }

    // Add current terrace water amount.
    const terraceBoundaryLevel = Math.min(leftHighestLevel, rightHighestLevel);
    if (terraceBoundaryLevel > terraces[terraceIndex]) {
      // Terrace will be able to store the water if the lowest of two left and right highest
      // terraces are still higher than the current one.
      waterAmount += terraceBoundaryLevel - terraces[terraceIndex];
    }
  }

  return waterAmount;
}
