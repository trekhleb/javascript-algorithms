/**
 * Calculates the Manhattan distance between two points (arrays of numbers).
 * @param {number[]} a - The first point.
 * @param {number[]} b - The second point.
 * @returns {number} The Manhattan distance.
 */
const manhattanDistance = (a, b) => {
  let distance = 0;
  for (let i = 0; i < a.length; i += 1) {
    distance += Math.abs(a[i] - b[i]);
  }
  return distance;
};

/**
 * Finds the minimum Manhattan distance between any two points in a set.
 * This is an implementation of the algorithm for the closest pair problem in
 * Manhattan distance, which has a time complexity of O(n * log(n) * 2^d),
 * where n is the number of points and d is the number of dimensions.
 *
 * @param {number[][]} points - An array of points, where each point is an array of numbers.
 * @returns {number} The minimum Manhattan distance found.
 */
const minimumManhattanDistance = (points) => {
  if (!points || points.length < 2) {
    return 0;
  }

  const n = points.length;
  const d = points[0].length;
  let minDistance = Infinity;

  // Generate all 2^d sign patterns (orientations).
  // We only need 2^(d-1) because d(p,q) is the same for a mask and its inverse.
  const limit = 1 << (d - 1);
  for (let mask = 0; mask < limit; mask += 1) {
    // Compute projection values for the current orientation.
    const projections = [];
    for (let i = 0; i < n; i += 1) {
      let projectedValue = 0;
      for (let j = 0; j < d; j += 1) {
        // Determine the sign for the current dimension based on the bitmask.
        const sign = ((mask >> j) & 1) ? 1 : -1;
        projectedValue += sign * points[i][j];
      }
      projections.push({ value: projectedValue, index: i });
    }

    // Sort points based on their projected values.
    projections.sort((a, b) => a.value - b.value);

    // Check consecutive pairs in the sorted list.
    // The closest pair for this orientation will be adjacent after sorting.
    for (let i = 0; i < n - 1; i += 1) {
      const pIndex = projections[i].index;
      const qIndex = projections[i + 1].index;
      const distance = manhattanDistance(points[pIndex], points[qIndex]);
      minDistance = Math.min(minDistance, distance);
    }
  }

  return minDistance;
};

export default minimumManhattanDistance;