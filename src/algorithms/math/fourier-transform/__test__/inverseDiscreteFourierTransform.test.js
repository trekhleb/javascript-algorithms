import inverseDiscreteFourierTransform from '../inverseDiscreteFourierTransform';
import FourierTester from './FourierTester';

describe('inverseDiscreteFourierTransform', () => {
  it('should calculate output signal out of input frequencies', () => {
    FourierTester.testInverseFourierTransform(inverseDiscreteFourierTransform);
  });
});
