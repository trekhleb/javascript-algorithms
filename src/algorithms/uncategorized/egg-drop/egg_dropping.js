/**
 * @param {number} eggs
 * @param {number} floors
 * @return {number}
 */

export default function egg_dropping(eggs, floors){
  let dp = Array(eggs).fill().map(() => Array(floors + 1).fill(0));
  let maximum = -1/0;
  for (let i = 1; i <= floors; i++){ dp[0][i] = i; }
  for(let i = 1; i < eggs; i++){
    for(let j = 1; j <= floors; j++){
      let x = j - 1, minimum = 1/0;
      for(let k = 0; k < j; k++){
        maximum = Math.max(dp[i-1][x], dp[i][k]) + 1;
        minimum = Math.min(minimum, maximum);
        x -= 1;
      }
      dp[i][j] = minimum;
    }
  }
  return dp[eggs-1][floors];
}