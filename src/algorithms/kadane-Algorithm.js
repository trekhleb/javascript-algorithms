function kadaneAlgorithm(arr) {
  let sum = 0;
  let maxi = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    maxi = Math.max(sum, maxi);

    if (sum < 0) {
      sum = 0;
    }
  }

  return maxi;
}

module.exports = kadaneAlgorithm;
