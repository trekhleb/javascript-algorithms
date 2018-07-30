/**
 * Generates fingerprints using Rabin scheme with x = 2 (for potential compiler optimizations).
 * Guaranteed not to over or underflow if function assumptions are met.
 */
export default class RabinFingerprint {
  /**
   * @param { function() : number } [primeGenerator]
   * @assumes Output from any function call is prime less than Number.MAX_SAFE_INTEGER / 2.
   */
  constructor(primeGenerator) {
    this.prime = primeGenerator();
  }

  /**
   * @param { array[number] } [values]
   * @returns {number} - The hash value after digesting input.
   * @assumes All array elements are non-negative.
   * @note First element in array is considered to be oldest value.
   */
  init(values) {
    this.val = 0;
    this.len = values.length;

    for (let i = 0; i < values.length; i += 1) {
      this.val = (((this.val * 2) % this.prime) + (values[i] % this.prime)) % this.prime;
    }

    return this.val;
  }

  /*
   * @param {number} [oldValue]
   * @param {number} [newValue]
   * @returns {number} - The hash value after removing the oldest value & inserting the newest.
   * @assumes Instance has already been initialized.
   * @assumes oldValue is the oldest value still processed by the hash.
   * @assumes newValue is non-negative.
   */
  roll(oldValue, newValue) {
    let oldVal = oldValue % this.prime;
    for (let i = 1; i < this.len; i += 1) {
      oldVal = (oldVal * 2) % this.prime;
    }
    this.val = (this.val + this.prime - (oldVal % this.prime)) % this.prime;

    const newVal = newValue % this.prime;
    this.val = (((this.val * 2) % this.prime) + (newVal % this.prime)) % this.prime;

    return this.val;
  }
}
