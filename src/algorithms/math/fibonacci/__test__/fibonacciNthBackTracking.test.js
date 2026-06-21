import getFibonacci from '../fibonacciNthBackTracking';

describe('fibonacciNthBackTracking', () => {
  it('should return correct fibonnaci number ar a given position', () => {
    expect(getFibonacci(1)).toBe(1);
    expect(getFibonacci(2)).toBe(1);
    expect(getFibonacci(3)).toBe(2);
    expect(getFibonacci(4)).toBe(3);
    expect(getFibonacci(5)).toBe(5);
    expect(getFibonacci(75)).toBe(2111485077978050);
    expect(getFibonacci(80)).toBe(23416728348467685);
    expect(getFibonacci(90)).toBe(2880067194370816120);
    expect(getFibonacci(101)).toBe(573147844013817200000);
    expect(getFibonacci(500)).toBe(1.394232245616977e+104);
    expect(getFibonacci(1400)).toBe(1.7108476902340223e+292);
  });
});
