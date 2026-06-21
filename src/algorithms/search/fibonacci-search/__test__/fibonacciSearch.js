import fibonacciSearch from '../fibonaccySearch';

describe('fibonacciSearch', () => {
    expect(fibonacciSearch([], 1)).toBe(-1);
    expect(fibonacciSearch([1], 1)).toBe(0);
    expect(fibonacciSearch([1, 2], 1)).toBe(0);
    expect(fibonacciSearch([1, 2], 2)).toBe(1);
    expect(fibonacciSearch([1, 5, 10, 12], 1)).toBe(0);
    expect(fibonacciSearch([1, 5, 10, 12, 14, 17, 22, 100], 17)).toBe(5);
    expect(fibonacciSearch([1, 5, 10, 12, 14, 17, 22, 100], 1)).toBe(0);
    expect(fibonacciSearch([1, 5, 10, 12, 14, 17, 22, 100], 100)).toBe(7);
    expect(fibonacciSearch([1, 5, 10, 12, 14, 17, 22, 100], 0)).toBe(-1);
    });




  