import discreteFourierTransform from '../discreteFourierTransform';

describe('discreteFourierTransform', () => {
  it('should calculate split signal into frequencies', () => {
    const frequencies = discreteFourierTransform([1, 0, 0, 0]);

    expect(frequencies).toBeDefined();
  });
});
