import { calcIsEven } from "../calcIsEven";

describe('calcIsEven', () => {
    it('should calculate even number correctly', () => {
        expect(calcIsEven(2)).toEqual(true);
        expect(calcIsEven(4)).toEqual(true);
    });
    it('should throw an error in case if detect odd number', () =>{
        expect(() => calcIsEven(3).toThrowError('It is odd number'))
    });
});

import { calcIsEvenBitwise } from "../calcIsEven";

describe('calcIsEvenBitwise', () => {
    it('should calculate even bitwise number correctly', () => {
        expect(calcIsEvenBitwise(2)).toEqual(true);
        expect(calcIsEvenBitwise(4)).toEqual(true);
    });
    it('should throw an error in case if detect odd number', () =>{
        expect(() => calcIsEvenBitwise(3).toThrowError('It is odd bitwise number'))
    });
});