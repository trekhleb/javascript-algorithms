import discreteFourierTransform from '../discreteFourierTransform';

/**
 * Helper class of the output Signal.
 */
class Sgnl {
  constructor(frequency, amplitude, phase) {
    this.frequency = frequency;
    this.amplitude = amplitude;
    this.phase = phase;
  }
}

describe('discreteFourierTransform', () => {
  it('should split signal into frequencies', () => {
    const testCases = [
      {
        inputAmplitudes: [1],
        outputSignals: [
          new Sgnl(0, 1, 0),
        ],
      },
      {
        inputAmplitudes: [1, 0],
        outputSignals: [
          new Sgnl(0, 0.5, 0),
          new Sgnl(1, 0.5, 0),
        ],
      },
      {
        inputAmplitudes: [2, 0],
        outputSignals: [
          new Sgnl(0, 1, 0),
          new Sgnl(1, 1, 0),
        ],
      },
      {
        inputAmplitudes: [1, 0, 0],
        outputSignals: [
          new Sgnl(0, 0.33, 0),
          new Sgnl(1, 0.33, 0),
          new Sgnl(2, 0.33, 0),
        ],
      },
      {
        inputAmplitudes: [1, 0, 0, 0],
        outputSignals: [
          new Sgnl(0, 0.25, 0),
          new Sgnl(1, 0.25, 0),
          new Sgnl(2, 0.25, 0),
          new Sgnl(3, 0.25, 0),
        ],
      },
      {
        inputAmplitudes: [0, 1, 0, 0],
        outputSignals: [
          new Sgnl(0, 0.25, 0),
          new Sgnl(1, 0.25, -90),
          new Sgnl(2, 0.25, 180),
          new Sgnl(3, 0.25, 90),
        ],
      },
      {
        inputAmplitudes: [0, 0, 1, 0],
        outputSignals: [
          new Sgnl(0, 0.25, 0),
          new Sgnl(1, 0.25, 180),
          new Sgnl(2, 0.25, 0),
          new Sgnl(3, 0.25, 180),
        ],
      },
      {
        inputAmplitudes: [0, 0, 0, 2],
        outputSignals: [
          new Sgnl(0, 0.5, 0),
          new Sgnl(1, 0.5, 90),
          new Sgnl(2, 0.5, 180),
          new Sgnl(3, 0.5, -90),
        ],
      },
      {
        inputAmplitudes: [0, 1, 0, 2],
        outputSignals: [
          new Sgnl(0, 0.75, 0),
          new Sgnl(1, 0.25, 90),
          new Sgnl(2, 0.75, 180),
          new Sgnl(3, 0.25, -90),
        ],
      },
      {
        inputAmplitudes: [4, 1, 0, 2],
        outputSignals: [
          new Sgnl(0, 1.75, 0),
          new Sgnl(1, 1.03, 14),
          new Sgnl(2, 0.25, 0),
          new Sgnl(3, 1.03, -14),
        ],
      },
      {
        inputAmplitudes: [4, 1, -3, 2],
        outputSignals: [
          new Sgnl(0, 1, 0),
          new Sgnl(1, 1.77, 8),
          new Sgnl(2, 0.5, 180),
          new Sgnl(3, 1.77, -8),
        ],
      },
      {
        inputAmplitudes: [1, 2, 3, 4],
        outputSignals: [
          new Sgnl(0, 2.5, 0),
          new Sgnl(1, 0.71, 135),
          new Sgnl(2, 0.5, 180),
          new Sgnl(3, 0.71, -135),
        ],
      },
    ];

    testCases.forEach((testCase) => {
      const { inputAmplitudes, outputSignals } = testCase;

      // Try to split input signal into sequence of pure sinusoids.
      const signals = discreteFourierTransform(inputAmplitudes);

      // Check the signal has been split into proper amount of sub-signals.
      expect(signals.length).toBe(outputSignals.length);

      // Now go through all the signals and check their frequency, amplitude and phase.
      signals.forEach((signal, frequency) => {
        // Get polar form of calculated sub-signal since it is more convenient to analyze.
        const signalPolarForm = signal.getPolarForm(false);

        // Get template data we want to test against.
        const signalTemplate = outputSignals[frequency];

        // Check all signal parameters.
        expect(frequency).toBe(signalTemplate.frequency);
        expect(signalPolarForm.radius).toBeCloseTo(signalTemplate.amplitude, 2);
        expect(signalPolarForm.phase).toBeCloseTo(signalTemplate.phase, 0);
      });
    });
  });
});
