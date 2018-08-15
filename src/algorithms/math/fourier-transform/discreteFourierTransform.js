import ComplexNumber from '../complex-number/ComplexNumber';

/**
 * @param {number[]} inputSignalAmplitudes - Input signal amplitudes over time (i.e. [1, 0, 4]).
 * @return {ComplexNumber[]} - Array of complex number. Each of the number represents the frequency
 * or signal. All signals together will form input signal over discrete time periods. Each signal's
 * complex number has radius (amplitude) and phase (angle) in polar form that describes the signal.
 *
 * @see https://gist.github.com/anonymous/129d477ddb1c8025c9ac
 * @see https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/
 */
export default function discreteFourierTransform(inputSignalAmplitudes) {
  const N = inputSignalAmplitudes.length;
  const outpuFrequencies = [];

  // For every frequency discrete...
  for (let frequencyValue = 0; frequencyValue < N; frequencyValue += 1) {
    let signal = new ComplexNumber();

    // For every discrete point in time...
    for (let t = 0; t < N; t += 1) {
      // Spin the signal _backwards_ at each frequency (as radians/s, not Hertz)
      const rate = -1 * (2 * Math.PI) * frequencyValue;

      // How far around the circle have we gone at time=t?
      const time = t / N;
      const distance = rate * time;

      // Data-point * e^(-i*2*pi*f) is complex, store each part.
      const dataPointContribution = new ComplexNumber({
        re: inputSignalAmplitudes[t] * Math.cos(distance),
        im: inputSignalAmplitudes[t] * Math.sin(distance),
      });

      // Add this data point's contribution.
      signal = signal.add(dataPointContribution);
    }

    // Close to zero? You're zero.
    if (Math.abs(signal.re) < 1e-10) {
      signal.re = 0;
    }

    if (Math.abs(signal.im) < 1e-10) {
      signal.im = 0;
    }

    // Average contribution at this frequency
    signal = signal.divide(N);

    outpuFrequencies[frequencyValue] = signal;
  }

  return outpuFrequencies;
}
