export default class RunningStatistics {
  constructor() {
    this.size = 0;
    this.mean = 0.0;
    this.dist = 0.0;
  }

  /**
   * @param {number} [value]
   */
  append(value) {
    const diff = (value / 2) - (this.mean / 2); // Avoid over/underflow

    this.size += 1;
    this.mean += (diff / this.size) * 2;
    this.dist += (2 * diff * (value - this.mean));
  }

  /**
   * @return {number} - The current variance of appended data.
   */
  variance() {
    return (this.size === 0) ? 0.0 : (this.dist / this.size);
  }

  /**
   * @return {number} - The current sample variance of appended data.
   */
  sampleVariance() {
    return (this.size === 0 || this.size === 1) ? 0.0 : (this.dist / (this.size - 1));
  }
}
