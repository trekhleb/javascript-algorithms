import ComplexNumber from '../../complex-number/ComplexNumber';

export const fourierDirectTestCases = [
  {
    input: [
      { amplitude: 1 },
    ],
    output: [
      {
        frequency: 0, amplitude: 1, phase: 0, re: 1, im: 0,
      },
    ],
  },
  {
    input: [
      { amplitude: 1 },
      { amplitude: 0 },
    ],
    output: [
      {
        frequency: 0, amplitude: 0.5, phase: 0, re: 0.5, im: 0,
      },
      {
        frequency: 1, amplitude: 0.5, phase: 0, re: 0.5, im: 0,
      },
    ],
  },
  {
    input: [
      { amplitude: 2 },
      { amplitude: 0 },
    ],
    output: [
      {
        frequency: 0, amplitude: 1, phase: 0, re: 1, im: 0,
      },
      {
        frequency: 1, amplitude: 1, phase: 0, re: 1, im: 0,
      },
    ],
  },
  {
    input: [
      { amplitude: 1 },
      { amplitude: 0 },
      { amplitude: 0 },
    ],
    output: [
      {
        frequency: 0, amplitude: 0.3333, phase: 0, re: 0.3333, im: 0,
      },
      {
        frequency: 1, amplitude: 0.3333, phase: 0, re: 0.3333, im: 0,
      },
      {
        frequency: 2, amplitude: 0.3333, phase: 0, re: 0.3333, im: 0,
      },
    ],
  },
  {
    input: [
      { amplitude: 1 },
      { amplitude: 0 },
      { amplitude: 0 },
      { amplitude: 0 },
    ],
    output: [
      {
        frequency: 0, amplitude: 0.25, phase: 0, re: 0.25, im: 0,
      },
      {
        frequency: 1, amplitude: 0.25, phase: 0, re: 0.25, im: 0,
      },
      {
        frequency: 2, amplitude: 0.25, phase: 0, re: 0.25, im: 0,
      },
      {
        frequency: 3, amplitude: 0.25, phase: 0, re: 0.25, im: 0,
      },
    ],
  },
  {
    input: [
      { amplitude: 0 },
      { amplitude: 1 },
      { amplitude: 0 },
      { amplitude: 0 },
    ],
    output: [
      {
        frequency: 0, amplitude: 0.25, phase: 0, re: 0.25, im: 0,
      },
      {
        frequency: 1, amplitude: 0.25, phase: -90, re: 0, im: -0.25,
      },
      {
        frequency: 2, amplitude: 0.25, phase: 180, re: -0.25, im: 0,
      },
      {
        frequency: 3, amplitude: 0.25, phase: 90, re: 0, im: 0.25,
      },
    ],
  },
  {
    input: [
      { amplitude: 0 },
      { amplitude: 0 },
      { amplitude: 1 },
      { amplitude: 0 },
    ],
    output: [
      {
        frequency: 0, amplitude: 0.25, phase: 0, re: 0.25, im: 0,
      },
      {
        frequency: 1, amplitude: 0.25, phase: 180, re: -0.25, im: 0,
      },
      {
        frequency: 2, amplitude: 0.25, phase: 0, re: 0.25, im: 0,
      },
      {
        frequency: 3, amplitude: 0.25, phase: 180, re: -0.25, im: 0,
      },
    ],
  },
  {
    input: [
      { amplitude: 0 },
      { amplitude: 0 },
      { amplitude: 0 },
      { amplitude: 2 },
    ],
    output: [
      {
        frequency: 0, amplitude: 0.5, phase: 0, re: 0.5, im: 0,
      },
      {
        frequency: 1, amplitude: 0.5, phase: 90, re: 0, im: 0.5,
      },
      {
        frequency: 2, amplitude: 0.5, phase: 180, re: -0.5, im: 0,
      },
      {
        frequency: 3, amplitude: 0.5, phase: -90, re: 0, im: -0.5,
      },
    ],
  },
  {
    input: [
      { amplitude: 0 },
      { amplitude: 1 },
      { amplitude: 0 },
      { amplitude: 2 },
    ],
    output: [
      {
        frequency: 0, amplitude: 0.75, phase: 0, re: 0.75, im: 0,
      },
      {
        frequency: 1, amplitude: 0.25, phase: 90, re: 0, im: 0.25,
      },
      {
        frequency: 2, amplitude: 0.75, phase: 180, re: -0.75, im: 0,
      },
      {
        frequency: 3, amplitude: 0.25, phase: -90, re: 0, im: -0.25,
      },
    ],
  },
  {
    input: [
      { amplitude: 4 },
      { amplitude: 1 },
      { amplitude: 0 },
      { amplitude: 2 },
    ],
    output: [
      {
        frequency: 0, amplitude: 1.75, phase: 0, re: 1.75, im: 0,
      },
      {
        frequency: 1, amplitude: 1.03077, phase: 14.0362, re: 0.99999, im: 0.25,
      },
      {
        frequency: 2, amplitude: 0.25, phase: 0, re: 0.25, im: 0,
      },
      {
        frequency: 3, amplitude: 1.03077, phase: -14.0362, re: 1, im: -0.25,
      },
    ],
  },
  {
    input: [
      { amplitude: 4 },
      { amplitude: 1 },
      { amplitude: -3 },
      { amplitude: 2 },
    ],
    output: [
      {
        frequency: 0, amplitude: 1, phase: 0, re: 1, im: 0,
      },
      {
        frequency: 1, amplitude: 1.76776, phase: 8.1301, re: 1.75, im: 0.25,
      },
      {
        frequency: 2, amplitude: 0.5, phase: 180, re: -0.5, im: 0,
      },
      {
        frequency: 3, amplitude: 1.76776, phase: -8.13010, re: 1.75, im: -0.24999,
      },
    ],
  },
  {
    input: [
      { amplitude: 1 },
      { amplitude: 2 },
      { amplitude: 3 },
      { amplitude: 4 },
    ],
    output: [
      {
        frequency: 0, amplitude: 2.5, phase: 0, re: 2.5, im: 0,
      },
      {
        frequency: 1, amplitude: 0.70710, phase: 135, re: -0.5, im: 0.49999,
      },
      {
        frequency: 2, amplitude: 0.5, phase: 180, re: -0.5, im: 0,
      },
      {
        frequency: 3, amplitude: 0.70710, phase: -134.99999, re: -0.49999, im: -0.5,
      },
    ],
  },
];

export default class FourierTester {
  /**
   * @param {function} fourierTransform
   */
  static testDirectFourierTransform(fourierTransform) {
    fourierDirectTestCases.forEach((testCase) => {
      const { input, output: expectedOutput } = testCase;

      // Convert input into complex numbers.
      const complexInput = input.map(sample => new ComplexNumber({ re: sample.amplitude }));

      // Try to split input signal into sequence of pure sinusoids.
      const currentOutput = fourierTransform(complexInput);

      // Check the signal has been split into proper amount of sub-signals.
      expect(currentOutput.length).toBeGreaterThanOrEqual(complexInput.length);

      // Now go through all the signals and check their frequency, amplitude and phase.
      expectedOutput.forEach((expectedSignal, frequency) => {
        // Get template data we want to test against.
        const currentSignal = currentOutput[frequency];
        const currentPolarSignal = currentSignal.getPolarForm(false);

        // Check all signal parameters.
        expect(frequency).toBe(expectedSignal.frequency);
        expect(currentSignal.re).toBeCloseTo(expectedSignal.re, 4);
        expect(currentSignal.im).toBeCloseTo(expectedSignal.im, 4);
        expect(currentPolarSignal.phase).toBeCloseTo(expectedSignal.phase, 4);
        expect(currentPolarSignal.radius).toBeCloseTo(expectedSignal.amplitude, 4);
      });
    });
  }
}
