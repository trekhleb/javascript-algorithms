import ComplexNumber from '../complex-number/ComplexNumber';

const CLOSE_TO_ZERO_THRESHOLD = 1e-10;

/**
 * Inverse Discrete Fourier Transform (IDFT): frequencies to time.
 *
 * Time complexity: O(N^2)
 *
 * @param {ComplexNumber[]} frequencies - Frequencies summands of the final signal.
 * @param {number} zeroThreshold - Threshold that is used to convert real and imaginary numbers
 * to zero in case if they are smaller then this.
 *
 * @return {number[]} - Discrete amplitudes distributed in time.
 */
export default function inverseDiscreteFourierTransform(
  frequencies,
  zeroThreshold = CLOSE_TO_ZERO_THRESHOLD,
) {
  const N = frequencies.length;
  const amplitudes = [];

  // Go through every discrete point of time.
  for (let timer = 0; timer < N; timer += 1) {
    // Compound amplitude at current time.
    let amplitude = new ComplexNumber();

    // Go through all discrete frequencies.
    for (let frequency = 0; frequency < N; frequency += 1) {
      const currentFrequency = frequencies[frequency];

      // Calculate rotation angle.
      const rotationAngle = (2 * Math.PI) * frequency * (timer / N);

      // Remember that e^ix = cos(x) + i * sin(x);
      const frequencyContribution = new ComplexNumber({
        re: Math.cos(rotationAngle),
        im: Math.sin(rotationAngle),
      }).multiply(currentFrequency);

      amplitude = amplitude.add(frequencyContribution);
    }

    // Close to zero? You're zero.
    if (Math.abs(amplitude.re) < zeroThreshold) {
      amplitude.re = 0;
    }

    if (Math.abs(amplitude.im) < zeroThreshold) {
      amplitude.im = 0;
    }

    // Add current frequency signal to the list of compound signals.
    amplitudes[timer] = amplitude.re;
  }

  return amplitudes;
}
