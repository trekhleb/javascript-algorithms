/**
 * Calculates calculate the euclidean distance between 2 vectors.
 *
 * @param {number[]} x1
 * @param {number[]} x2
 * @returns {number}
 */
function euclideanDistance(x1, x2) {
  // Checking for errors.
  if (x1.length !== x2.length) {
    throw new Error('Inconsistent vector lengths');
  }
  // Calculate the euclidean distance between 2 vectors and return.
  let squaresTotal = 0;
  for (let i = 0; i < x1.length; i += 1) {
    squaresTotal += (x1[i] - x2[i]) ** 2;
  }
  return Number(Math.sqrt(squaresTotal).toFixed(2));
}
/**
 * Classifies the point in space based on k-nearest neighbors algorithm.
 *
 * @param {number[][]} dataSet - array of dataSet points, i.e. [[0, 1], [3, 4], [5, 7]]
 * @param {number} k - number of nearest neighbors which will be taken into account (preferably odd)
 * @return {number[]} - the class of the point
 */
export default function kMeans(
  dataSetm,
  k = 1,
) {
  const dataSet = dataSetm;
  if (!dataSet) {
    throw new Error('Either dataSet or labels or toClassify were not set');
  }

  // starting algorithm
  // assign k clusters locations equal to the location of initial k points
  const clusterCenters = [];
  const nDim = dataSet[0].length;
  for (let i = 0; i < k; i += 1) {
    clusterCenters[clusterCenters.length] = Array.from(dataSet[i]);
  }

  // continue optimization till convergence
  // centroids should not be moving once optimized
  // calculate distance of each candidate vector from each cluster center
  // assign cluster number to each data vector according to minimum distance
  let flag = true;
  while (flag) {
    flag = false;
    // calculate and store distance of each dataSet point from each cluster
    for (let i = 0; i < dataSet.length; i += 1) {
      for (let n = 0; n < k; n += 1) {
        dataSet[i][nDim + n] = euclideanDistance(clusterCenters[n], dataSet[i].slice(0, nDim));
      }

      // assign the cluster number to each dataSet point
      const sliced = dataSet[i].slice(nDim, nDim + k);
      let minmDistCluster = Math.min(...sliced);
      for (let j = 0; j < sliced.length; j += 1) {
        if (minmDistCluster === sliced[j]) {
          minmDistCluster = j;
          break;
        }
      }

      if (dataSet[i].length !== nDim + k + 1) {
        flag = true;
        dataSet[i][nDim + k] = minmDistCluster;
      } else if (dataSet[i][nDim + k] !== minmDistCluster) {
        flag = true;
        dataSet[i][nDim + k] = minmDistCluster;
      }
    }
    // recalculate cluster centriod values via all dimensions of the points under it
    for (let i = 0; i < k; i += 1) {
      clusterCenters[i] = Array(nDim).fill(0);
      let classCount = 0;
      for (let j = 0; j < dataSet.length; j += 1) {
        if (dataSet[j][dataSet[j].length - 1] === i) {
          classCount += 1;
          for (let n = 0; n < nDim; n += 1) {
            clusterCenters[i][n] += dataSet[j][n];
          }
        }
      }
      for (let n = 0; n < nDim; n += 1) {
        clusterCenters[i][n] = Number((clusterCenters[i][n] / classCount).toFixed(2));
      }
    }
  }
  // return the clusters assigned
  const soln = [];
  for (let i = 0; i < dataSet.length; i += 1) {
    soln.push(dataSet[i][dataSet[i].length - 1]);
  }
  return soln;
}
