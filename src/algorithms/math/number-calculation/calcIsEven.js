/**
 * @function calcIsEven
 * @param {number} number
 * @return {boolean}
 */
 export const calcIsEven = (number) => number % 2 === 0


 /**
 * @function calcIsEvenBitwise
 * @param {number} number
 * @returns {boolean}
 */
export const calcIsEvenBitwise = (number) => (number & 1) === 0