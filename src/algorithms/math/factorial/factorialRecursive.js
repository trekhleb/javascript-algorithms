/**
 * @param {number} number
 * @return {number}
 */
export default function factorialRecursive(number) {
  if(number<0){
    throw new error("factorial of a negative number does not exits.");
  } else if(number == 0 || 1){
    return 1;
  }else{
    return number * factorialRecursive(number - 1);
  }

 }
 
