import trialDivision from '../trialDivision';

/**
 * @param {function(n: number)} testFunction
 */
function primalityTest(testFunction) {
  expect(testFunction(1)).toBeFalsy();
  expect(testFunction(2)).toBeTruthy();
  expect(testFunction(3)).toBeTruthy();
  expect(testFunction(5)).toBeTruthy();
  expect(testFunction(11)).toBeTruthy();
  expect(testFunction(191)).toBeTruthy();
  expect(testFunction(191)).toBeTruthy();
  expect(testFunction(199)).toBeTruthy();

  expect(testFunction(-1)).toBeFalsy();
  expect(testFunction(0)).toBeFalsy();
  expect(testFunction(4)).toBeFalsy();
  expect(testFunction(6)).toBeFalsy();
  expect(testFunction(12)).toBeFalsy();
  expect(testFunction(14)).toBeFalsy();
  expect(testFunction(25)).toBeFalsy();
  expect(testFunction(192)).toBeFalsy();
  expect(testFunction(200)).toBeFalsy();
  expect(testFunction(400)).toBeFalsy();

  // It should also deal with floats.
  expect(testFunction(0.5)).toBeFalsy();
  expect(testFunction(1.3)).toBeFalsy();
  expect(testFunction(10.5)).toBeFalsy();
}

describe('trialDivision', () => {
  it('should detect prime numbers', () => {
    primalityTest(trialDivision);
  });
});
