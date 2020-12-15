/**
 * @param {object} data_y
 * @param {object} data_x
 * @param {object} to_classify_x
 * @param {number} k
 * @return {number}
 */
export default function KNN(data_x, data_y, to_classify_x, k) {
  // checking errors

  // if no data given, data object is blank, no class data given, notify and return
  try {
    data_x[0];
    if (data_x[0].length < 1) throw '';
  } catch (error) {
    throw 'Error: data invalid/empty/number of classes less than 1.';
  }

  // if no class lables given or number of x_vectors dont match with number of y vectors, notify and return
  try {
    data_y[0];
    if (!(data_x.length == data_y.length)) throw '';
  } catch (error) {
    throw 'Error: labels invalid/empty/size of data and labels dont match';
  }

  // if no vector/data point is given to make prediction, algorithm cannot be proceeded, notify and return
  try {
    if (!to_classify_x.length == data_x[0].length) throw '';
  } catch (error) {
    throw 'Error: no vector given to classify/classification point invalid.';
  }
  if (k == undefined) {
    k = 3;
  }

  // creating function to calculate the euclidean distance between 2 vectors
  function euclidean_distance(x1, x2) {
    // checking errors
    if (x1.length != x2.length) {
      throw 'inconsistency between data and classification vector.';
    }
    // calculate the euclidean distance between 2 vectors and return
    let total_sse = 0;
    for (let j = 0; j < x1.length; j++) {
      total_sse += Math.pow(x1[j] - x2[j], 2);
    }
    return Number(Math.sqrt(total_sse).toFixed(2));
  }

  // starting algorithm

  // calculate distance from to_classify_x to each point for all dimensions in data_x
  // store distance and point's class_index into distance_class_list
  let distance_list = [];
  for (var i = 0; i < data_x.length; i++) {
    const tm_store = [];
    tm_store.push(euclidean_distance(data_x[i], to_classify_x));
    tm_store.push(data_y[i]);
    distance_list[i] = tm_store;
  }

  // sort distance_list
  // take initial k values, count with class index
  distance_list = distance_list.sort().slice(0, k);

  // count the number of instances of each class in top k members
  // with that maintain record of highest count class simultanously
  const mode_k = {};
  const maxm = [-1, -1];
  for (i = 0; i < Math.min(k, distance_list.length); i++) {
    if (distance_list[i][1] in mode_k) mode_k[distance_list[i][1]] += 1;
    else mode_k[distance_list[i][1]] = 1;
    if (mode_k[distance_list[i][1]] > maxm[0]) {
      maxm[0] = mode_k[distance_list[i][1]];
      maxm[1] = distance_list[i][1];
    }
  }
  // return the class with highest count from maxm
  return maxm[1];
}
