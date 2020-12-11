/**
 * @param {number} mass - The mass of the person in kilograms
 * @param {number} height - The height of the person in meters
 * @returns {number}
 */
export default function adultBodyMassIndex(mass, height) {
  return mass / Math.pow(height, 2);
}
