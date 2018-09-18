import fibonacciNthClosedForm from '../fibonacciNthClosedForm';

describe('fibonacciClosedForm', () => {
  it('should throw an error when trying to calculate fibonacci for not allowed positions', () => {
    const calculateFibonacciForNotAllowedPosition = () => {
      fibonacciNthClosedForm(76);
    };

    expect(calculateFibonacciForNotAllowedPosition).toThrow();
  });

  it('should calculate fibonacci correctly', () => {
    expect(fibonacciNthClosedForm(1)).toBe(1);
    expect(fibonacciNthClosedForm(2)).toBe(1);
    expect(fibonacciNthClosedForm(3)).toBe(2);
    expect(fibonacciNthClosedForm(4)).toBe(3);
    expect(fibonacciNthClosedForm(5)).toBe(5);
    expect(fibonacciNthClosedForm(6)).toBe(8);
    expect(fibonacciNthClosedForm(7)).toBe(13);
    expect(fibonacciNthClosedForm(8)).toBe(21);
    expect(fibonacciNthClosedForm(20)).toBe(6765);
    expect(fibonacciNthClosedForm(30)).toBe(832040);
    expect(fibonacciNthClosedForm(50)).toBe(12586269025);
    expect(fibonacciNthClosedForm(70)).toBe(190392490709135);
    expect(fibonacciNthClosedForm(71)).toBe(308061521170129);
    expect(fibonacciNthClosedForm(72)).toBe(498454011879264);
    expect(fibonacciNthClosedForm(73)).toBe(806515533049393);
    expect(fibonacciNthClosedForm(74)).toBe(1304969544928657);
    expect(fibonacciNthClosedForm(75)).toBe(2111485077978050);
  });
});
