/**
 * @param {number} number
 * @return {number}
 */
export default function factorialRecursive(number) {
  if(number < 0){
    return undefined
  }
  else if(number === 0 || number === 1){
    return 1
  }
  else{
    return number * factorialRecursive(number - 1)
  }
}
