/**
 * @param {number, number, number}
 * @return {number}
 */
 
 
 /*  Function to extract 'k' bits from position 'p'
  *  and returns the extracted value.
  *
  */
export default function extractBits(number, k, p) {
    return (((1 << k) - 1) & (number >> (p - 1)));
}
