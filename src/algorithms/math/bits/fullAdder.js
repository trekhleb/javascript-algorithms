import getBit from './getBit';

/**
 * Add two numbers using only binary operators.
 *
 * This is an implementation of full adders logic circut.
 * https://en.wikipedia.org/wiki/Adder_(electronics)
 * Inspired by: https://www.youtube.com/watch?v=wvJc9CZcvBc
 *
 * Table(1)
 * INPUT | OUT
 * C A B   C R
 * ----- | --- |
 * 0 0 0 | 0 0 |
 * 0 0 1 | 0 1 |
 * 0 1 0 | 0 1 |
 * 0 1 1 | 1 0 |
 * ----- | --- |
 * 1 0 0 | 0 1 |
 * 1 0 1 | 1 0 |
 * 1 1 0 | 1 0 |
 * 1 1 1 | 1 1 |
 * -------------
 *
 * Legend:
 * First C = Carry in
 * A = Number A
 * B = Number B
 * Second C = Carry out
 * R = Result Bit
 *
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export default function fullAdder(a, b) {
  let result = 0;
  let carry = 0;

  // The operands of all bitwise operators are converted to signed
  // 32-bit integers in two's complement format.
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_Operators#Signed_32-bit_integers
  for (let i = 0; i < 32; i += 1) {
    const ai = getBit(a, i);
    const bi = getBit(b, i);
    const carryIn = carry;

    // Calculate binary ai + bi without carry
    const aiPlusBi = ai ^ bi;
    // Calculate ith bit of the result by "adding" carryIn to ai + bi
    // See table(1) row 1 - 4 for carry = 0
    // See table(1) row 2 - 8 for carry = 1
    const bitSum = aiPlusBi ^ carryIn;

    // Carry out a bit when at least one of these is true:
    // 1) table(1) rows 6, 7: carryIn = 1 AND one of ai OR bi is 1
    // 2) table(1) rows 4, 8: Both ai AND bi are 1
    const carryOut = (aiPlusBi & carryIn) | (ai & bi);
    carry = carryOut;

    // Set ith bit of the result to bitSum.
    result |= bitSum << i;
  }
  return result;
}
