import trialDivision from '../trialDivision';
import primalityTest from './primalityTest';

describe('trialDivision', () => {
  it('should detect prime numbers', () => {
    primalityTest(trialDivision);
  });
});
