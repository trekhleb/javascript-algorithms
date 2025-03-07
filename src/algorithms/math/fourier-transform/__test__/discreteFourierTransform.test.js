import discreteFourierTransform from '../discreteFourierTransform';
import FourierTester from './FourierTester';

describe('discreteFourierTransform', () => {
  it('should split signal into frequencies', () => {
    FourierTester.testDirectFourierTransform(discreteFourierTransform);
  });
});
