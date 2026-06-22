/**
 * DYNAMIC PROGRAMMING approach of solving Trapping Rain Water problem.
 *
 * @param {number[]} terraces
 * @return {number}
 */
export default function dpRainTerraces(terraces) {
  // Obtain the maximum elevations to the left and right of each terrace (inclusive).
  const maxL = terraces.reduce((acc, val, idx) => [...acc, Math.max(val, (acc[idx - 1] || 0))], []);
  const maxR = terraces.reduceRight((acc, val) => [Math.max(val, (acc[0] || 0)), ...acc], []);

  // Convert maximum values to amount of water at current index and sum water values.
  const trap = terraces.map((val, idx) => Math.max(0, Math.min(maxL[idx], maxR[idx]) - val));
  return trap.reduce((acc, val) => acc + val);
}
