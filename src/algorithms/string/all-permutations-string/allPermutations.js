/**
 * @param {string} string
 * @return {string[]}
 */

 export default function allPermutations(string){
  if (string.length <= 1) return [string];
  let arr = []
  for(let i = 0; i < string.length; i++){
    if (string.indexOf(string[i]) == i){
      arr = arr.concat(allPermutations(string.slice(0,i) + string.slice(i+1)).map((x) => string[i] + x ))
    }
  }
  return arr
}