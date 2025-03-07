import * as mtrx from '../../math/matrix/Matrix';
import euclideanDistance from '../../math/euclidean-distance/euclideanDistance';

/**
 * Classifies the point in space based on k-Means algorithm.
 *
 * @param {number[][]} data - array of dataSet points, i.e. [[0, 1], [3, 4], [5, 7]]
 * @param {number} k - number of clusters
 * @return {number[]} - the class of the point
 */
export default function KMeans(
  data,
  k = 1,
) {
  if (!data) {
    throw new Error('The data is empty');
  }

  // Assign k clusters locations equal to the location of initial k points.
  const dataDim = data[0].length;
  const clusterCenters = data.slice(0, k);

  // Continue optimization till convergence.
  // Centroids should not be moving once optimized.
  // Calculate distance of each candidate vector from each cluster center.
  // Assign cluster number to each data vector according to minimum distance.

  // Matrix of distance from each data point to each cluster centroid.
  const distances = mtrx.zeros([data.length, k]);

  // Vector data points' classes. The value of -1 means that no class has bee assigned yet.
  const classes = Array(data.length).fill(-1);

  let iterate = true;
  while (iterate) {
    iterate = false;

    // Calculate and store the distance of each data point from each cluster.
    for (let dataIndex = 0; dataIndex < data.length; dataIndex += 1) {
      for (let clusterIndex = 0; clusterIndex < k; clusterIndex += 1) {
        distances[dataIndex][clusterIndex] = euclideanDistance(
          [clusterCenters[clusterIndex]],
          [data[dataIndex]],
        );
      }
      // Assign the closest cluster number to each dataSet point.
      const closestClusterIdx = distances[dataIndex].indexOf(
        Math.min(...distances[dataIndex]),
      );

      // Check if data point class has been changed and we still need to re-iterate.
      if (classes[dataIndex] !== closestClusterIdx) {
        iterate = true;
      }

      classes[dataIndex] = closestClusterIdx;
    }

    // Recalculate cluster centroid values via all dimensions of the points under it.
    for (let clusterIndex = 0; clusterIndex < k; clusterIndex += 1) {
      // Reset cluster center coordinates since we need to recalculate them.
      clusterCenters[clusterIndex] = Array(dataDim).fill(0);
      let clusterSize = 0;
      for (let dataIndex = 0; dataIndex < data.length; dataIndex += 1) {
        if (classes[dataIndex] === clusterIndex) {
          // Register one more data point of current cluster.
          clusterSize += 1;
          for (let dimensionIndex = 0; dimensionIndex < dataDim; dimensionIndex += 1) {
            // Add data point coordinates to the cluster center coordinates.
            clusterCenters[clusterIndex][dimensionIndex] += data[dataIndex][dimensionIndex];
          }
        }
      }
      // Calculate the average for each cluster center coordinate.
      for (let dimensionIndex = 0; dimensionIndex < dataDim; dimensionIndex += 1) {
        clusterCenters[clusterIndex][dimensionIndex] = parseFloat(Number(
          clusterCenters[clusterIndex][dimensionIndex] / clusterSize,
        ).toFixed(2));
      }
    }
  }

  // Return the clusters assigned.
  return classes;
}
