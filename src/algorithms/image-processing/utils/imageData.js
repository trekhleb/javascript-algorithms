/**
 * @typedef {ArrayLike<number> | Uint8ClampedArray} PixelColor
 */

/**
 * @typedef {Object} PixelCoordinate
 * @property {number} x - horizontal coordinate.
 * @property {number} y - vertical coordinate.
 */

/**
 * Helper function that returns the color of the pixel.
 * @param {ImageData} img
 * @param {PixelCoordinate} coordinate
 * @returns {PixelColor}
 */
export const getPixel = (img, { x, y }) => {
  // The ImageData data array is a flat 1D array.
  // Thus we need to convert x and y coordinates to the linear index.
  const i = y * img.width + x;
  const cellsPerColor = 4; // RGBA
  // For better efficiency, instead of creating a new sub-array we return
  // a pointer to the part of the ImageData array.
  return img.data.subarray(i * cellsPerColor, i * cellsPerColor + cellsPerColor);
};

/**
 * Helper function that sets the color of the pixel.
 * @param {ImageData} img
 * @param {PixelCoordinate} coordinate
 * @param {PixelColor} color
 */
export const setPixel = (img, { x, y }, color) => {
  // The ImageData data array is a flat 1D array.
  // Thus we need to convert x and y coordinates to the linear index.
  const i = y * img.width + x;
  const cellsPerColor = 4; // RGBA
  img.data.set(color, i * cellsPerColor);
};
