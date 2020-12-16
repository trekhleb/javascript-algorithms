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
 * @param {number[][]} dataSet - array of data points, i.e. [[0, 1], [3, 4], [5, 7]]
 * @param {number[]} labels - array of classes (labels), i.e. [1, 1, 2]
 * @param {number[]} toClassify - the point in space that needs to be classified, i.e. [5, 4]
 * @param {number} k - number of nearest neighbors which will be taken into account (preferably odd)
 * @return {number} - the class of the point
 */
export default function kNN(
  dataSet,
  labels,
  toClassify,
  k = 3,
) {
  if (!dataSet || !labels || !toClassify) {
    throw new Error('Either dataSet or labels or toClassify were not set');
  }

  // Calculate distance from toClassify to each point for all dimensions in dataSet.
  // Store distance and point's label into distances list.
  const distances = [];
  for (let i = 0; i < dataSet.length; i += 1) {
    distances.push({
      dist: euclideanDistance(dataSet[i], toClassify),
      label: labels[i],
    });
  }

  // Sort distances list (from closer point to further ones).
  // Take initial k values, count with class index
  const kNearest = distances.sort((a, b) => {
    if (a.dist === b.dist) {
      return 0;
    }
    return a.dist < b.dist ? -1 : 1;
  }).slice(0, k);

  // Count the number of instances of each class in top k members.
  const labelsCounter = {};
  let topClass = 0;
  let topClassCount = 0;
  for (let i = 0; i < kNearest.length; i += 1) {
    if (kNearest[i].label in labelsCounter) {
      labelsCounter[kNearest[i].label] += 1;
    } else {
      labelsCounter[kNearest[i].label] = 1;
    }
    if (labelsCounter[kNearest[i].label] > topClassCount) {
      topClassCount = labelsCounter[kNearest[i].label];
      topClass = kNearest[i].label;
    }
  }

  // Return the class with highest count.
  return topClass;
}
