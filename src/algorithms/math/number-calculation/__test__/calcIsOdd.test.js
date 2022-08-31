import { calcIsOdd } from "../calcIsOdd";

describe('calcIsOdd', () => {
    it('should calculate odd number correctly', () => {
        expect(calcIsOdd(1)).toEqual(true);
        expect(calcIsOdd(3)).toEqual(true);
    });
    it('should throw an error in case if detect even number', () =>{
        expect(() => calcIsOdd(8).toThrowError('It is even number'))
    });
});

import { calcIsOddBitwise } from "../calcIsOdd";

describe('calcIsOddBitwise', () => {
    it('should calculate odd bitwise number correctly', () => {
        expect(calcIsOddBitwise(1)).toEqual(true);
        expect(calcIsOddBitwise(3)).toEqual(true);
    });
    it('should throw an error in case if detect even number', () =>{
        expect(() => calcIsOddBitwise(6).toThrowError('It is even bitwise number'))
    });
});
