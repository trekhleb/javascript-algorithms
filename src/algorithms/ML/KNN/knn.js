/**
 * @param {object} dataY
 * @param {object} dataX
 * @param {object} toClassify
 * @param {number} k
 * @return {number}
 */
export default function KNN(dataX, dataY, toClassify, K) {
  let k = -1;

  if (K === undefined) {
    k = 3;
  } else {
    k = K;
  }

  // creating function to calculate the euclidean distance between 2 vectors
  function euclideanDistance(x1, x2) {
    // checking errors
    if (x1.length !== x2.length) {
      throw new Error('inconsistency between data and classification vector.');
    }
    // calculate the euclidean distance between 2 vectors and return
    let totalSSE = 0;
    for (let j = 0; j < x1.length; j += 1) {
      totalSSE += (x1[j] - x2[j]) ** 2;
    }
    return Number(Math.sqrt(totalSSE).toFixed(2));
  }

  // starting algorithm

  // calculate distance from toClassify to each point for all dimensions in dataX
  // store distance and point's class_index into distance_class_list
  let distanceList = [];
  for (let i = 0; i < dataX.length; i += 1) {
    const tmStore = [];
    tmStore.push(euclideanDistance(dataX[i], toClassify));
    tmStore.push(dataY[i]);
    distanceList[i] = tmStore;
  }

  // sort distanceList
  // take initial k values, count with class index
  distanceList = distanceList.sort().slice(0, k);

  // count the number of instances of each class in top k members
  // with that maintain record of highest count class simultanously
  const modeK = {};
  const maxm = [-1, -1];
  for (let i = 0; i < Math.min(k, distanceList.length); i += 1) {
    if (distanceList[i][1] in modeK) modeK[distanceList[i][1]] += 1;
    else modeK[distanceList[i][1]] = 1;
    if (modeK[distanceList[i][1]] > maxm[0]) {
      [maxm[0], maxm[1]] = [modeK[distanceList[i][1]], distanceList[i][1]];
    }
  }
  // return the class with highest count from maxm
  return maxm[1];
}
