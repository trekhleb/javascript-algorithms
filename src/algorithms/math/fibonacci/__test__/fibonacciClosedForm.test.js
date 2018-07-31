import fibonacciClosedForm from '../fibonacciClosedForm';

describe('fibonacciClosedForm', () => {
  it('should calculate fibonacci correctly', () => {
    expect(fibonacciClosedForm(1)).toBe(1);
    expect(fibonacciClosedForm(2)).toBe(1);
    expect(fibonacciClosedForm(3)).toBe(2);
    expect(fibonacciClosedForm(4)).toBe(3);
    expect(fibonacciClosedForm(5)).toBe(5);
    expect(fibonacciClosedForm(6)).toBe(8);
    expect(fibonacciClosedForm(7)).toBe(13);
    expect(fibonacciClosedForm(8)).toBe(21);
    expect(fibonacciClosedForm(20)).toBe(6765);
    expect(fibonacciClosedForm(30)).toBe(832040);
    expect(fibonacciClosedForm(50)).toBe(12586269025);
    expect(fibonacciClosedForm(70)).toBe(190392490709135);
    expect(fibonacciClosedForm(71)).toBe(308061521170129);
    expect(fibonacciClosedForm(72)).toBe(498454011879264);
    expect(fibonacciClosedForm(73)).toBe(806515533049393);
    expect(fibonacciClosedForm(74)).toBe(1304969544928657);
    expect(fibonacciClosedForm(75)).toBe(2111485077978050);
  });
});
