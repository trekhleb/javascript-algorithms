/**
 * Fast Powering Algorithm.
 * Recursive implementation to compute power.
 *
 * Complexity: log(n)
 *
 * @param {number} base - Number that will be raised to the power.
 * @param {number} power - The power that number will be raised to.
 * @return {number}
 */
export default function fastPoweringBitwise(base, power) {
    let result = 1;

    while (power !== 0) {
        if (power & 1 === 1) {
            result *= base;
        }

        base *= base;
        power >>= 1;
    }

    return result;
}
