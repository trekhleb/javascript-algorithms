import trialDivision from '../trialDivision';

/**
 * @param {function(n: number)} testFunction
 */
function primalityTest(testFunction) {
  expect(testFunction(1)).toBe(false);
  expect(testFunction(2)).toBe(true);
  expect(testFunction(3)).toBe(true);
  expect(testFunction(5)).toBe(true);
  expect(testFunction(11)).toBe(true);
  expect(testFunction(191)).toBe(true);
  expect(testFunction(191)).toBe(true);
  expect(testFunction(199)).toBe(true);

  expect(testFunction(-1)).toBe(false);
  expect(testFunction(0)).toBe(false);
  expect(testFunction(4)).toBe(false);
  expect(testFunction(6)).toBe(false);
  expect(testFunction(12)).toBe(false);
  expect(testFunction(14)).toBe(false);
  expect(testFunction(25)).toBe(false);
  expect(testFunction(192)).toBe(false);
  expect(testFunction(200)).toBe(false);
  expect(testFunction(400)).toBe(false);

  // It should also deal with floats.
  expect(testFunction(0.5)).toBe(false);
  expect(testFunction(1.3)).toBe(false);
  expect(testFunction(10.5)).toBe(false);
}

describe('trialDivision', () => {
  it('should detect prime numbers', () => {
    primalityTest(trialDivision);
  });
});
