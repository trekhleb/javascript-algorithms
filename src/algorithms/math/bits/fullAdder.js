import getBit from './getBit';

/**
 * Add two numbers using only binary operators.
 *
 * This is an implementation of full adders logic circuit.
 * https://en.wikipedia.org/wiki/Adder_(electronics)
 * Inspired by: https://www.youtube.com/watch?v=wvJc9CZcvBc
 *
 * Table(1)
 *  INPUT  | OUT
 *  C Ai Bi | C Si | Row
 * -------- | -----| ---
 *  0  0  0 | 0  0 | 1
 *  0  0  1 | 0  1 | 2
 *  0  1  0 | 0  1 | 3
 *  0  1  1 | 1  0 | 4
 * -------- | ---- | --
 *  1  0  0 | 0  1 | 5
 *  1  0  1 | 1  0 | 6
 *  1  1  0 | 1  0 | 7
 *  1  1  1 | 1  1 | 8
 * ---------------------
 *
 * Legend:
 * INPUT C = Carry in, from the previous less-significant stage
 * INPUT Ai = ith bit of Number A
 * INPUT Bi = ith bit of Number B
 * OUT C = Carry out to the next most-significant stage
 * OUT Si = Bit Sum, ith least significant bit of the result
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

    // Calculate binary Ai + Bi without carry (half adder)
    // See Table(1) rows 1 - 4: Si = Ai ^ Bi
    const aiPlusBi = ai ^ bi;

    // Calculate ith bit of the result by adding the carry bit to Ai + Bi
    // For Table(1) rows 5 - 8 carryIn = 1: Si = Ai ^ Bi ^ 1, flip the bit
    // Fpr Table(1) rows 1 - 4 carryIn = 0: Si = Ai ^ Bi ^ 0, a no-op.
    const bitSum = aiPlusBi ^ carryIn;

    // Carry out one to the next most-significant stage
    // when at least one of these is true:
    // 1) Table(1) rows 6, 7: one of Ai OR Bi is 1 AND carryIn = 1
    // 2) Table(1) rows 4, 8: Both Ai AND Bi are 1
    const carryOut = (aiPlusBi & carryIn) | (ai & bi);
    carry = carryOut;

    // Set ith least significant bit of the result to bitSum.
    result |= bitSum << i;
  }

  return result;
}
