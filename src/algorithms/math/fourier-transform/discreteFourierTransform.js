/**
 * @param {number[]} data
 * @return {*[]}
 */
export default function discreteFourierTransform(data) {
  const N = data.length;
  const frequencies = [];

  // for every frequency...
  for (let frequency = 0; frequency < N; frequency += 1) {
    let re = 0;
    let im = 0;

    // for every point in time...
    for (let t = 0; t < N; t += 1) {
      // Spin the signal _backwards_ at each frequency (as radians/s, not Hertz)
      const rate = -1 * (2 * Math.PI) * frequency;

      // How far around the circle have we gone at time=t?
      const time = t / N;
      const distance = rate * time;

      // Data-point * e^(-i*2*pi*f) is complex, store each part.
      const rePart = data[t] * Math.cos(distance);
      const imPart = data[t] * Math.sin(distance);

      // add this data point's contribution
      re += rePart;
      im += imPart;
    }

    // Close to zero? You're zero.
    if (Math.abs(re) < 1e-10) {
      re = 0;
    }

    if (Math.abs(im) < 1e-10) {
      im = 0;
    }

    // Average contribution at this frequency
    re /= N;
    im /= N;

    frequencies[frequency] = {
      re,
      im,
      frequency,
      amp: Math.sqrt((re ** 2) + (im ** 2)),
      phase: Math.atan2(im, re) * 180 / Math.PI, // in degrees
    };
  }

  return frequencies;
}
