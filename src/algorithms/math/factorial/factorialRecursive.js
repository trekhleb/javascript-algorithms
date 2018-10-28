/**
 * @param {number} number
 * @return {number}
 */
export default function factorialRecursive(number) {
  return number > 1 ? number * factorialRecursive(number - 1) : 1;
}

/* Alternate Solution */
const factorial = num => {
    return num == 0 ? num+1 : num * factorial(num-1) 
}
console.log(factorial(5)) // 120
