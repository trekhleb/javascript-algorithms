/**
 * @function calcIsOdd
 * @param {number} number
 * @returns {boolean}
 */
 const calcIsOdd = (number) => Boolean(number % 2) // 1 -> true, 0 -> false

 /**
  * @function calcIsOddBitwise
  * @param {number} number
  * @returns {boolean}
 */
 const calcIsOddBitwise = (number) => Boolean(number & 1) // 1 -> true, 0 -> false
 
 export { calcIsOdd, calcIsOddBitwise }