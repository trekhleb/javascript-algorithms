import { getPixel, setPixel } from '../utils/imageData';

/**
 * The seam is a sequence of pixels (coordinates).
 * @typedef {PixelCoordinate[]} Seam
 */

/**
 * Energy map is a 2D array that has the same width and height
 * as the image the map is being calculated for.
 * @typedef {number[][]} EnergyMap
 */

/**
 * The metadata for the pixels in the seam.
 * @typedef {Object} SeamPixelMeta
 * @property {number} energy - the energy of the pixel.
 * @property {PixelCoordinate} coordinate - the coordinate of the pixel.
 * @property {?PixelCoordinate} previous - the previous pixel in a seam.
 */

/**
 * Type that describes the image size (width and height)
 * @typedef {Object} ImageSize
 * @property {number} w - image width.
 * @property {number} h - image height.
 */

/**
 * @typedef {Object} ResizeImageWidthArgs
 * @property {ImageData} img - image data we want to resize.
 * @property {number} toWidth - final image width we want the image to shrink to.
 */

/**
 * @typedef {Object} ResizeImageWidthResult
 * @property {ImageData} img - resized image data.
 * @property {ImageSize} size - resized image size.
 */

/**
 * Helper function that creates a matrix (2D array) of specific
 * size (w x h) and fills it with specified value.
 * @param {number} w
 * @param {number} h
 * @param {?(number | SeamPixelMeta)} filler
 * @returns {?(number | SeamPixelMeta)[][]}
 */
const matrix = (w, h, filler) => {
  return new Array(h)
    .fill(null)
    .map(() => {
      return new Array(w).fill(filler);
    });
};

/**
 * Calculates the energy of a pixel.
 * @param {?PixelColor} left
 * @param {PixelColor} middle
 * @param {?PixelColor} right
 * @returns {number}
 */
const getPixelEnergy = (left, middle, right) => {
  // Middle pixel is the pixel we're calculating the energy for.
  const [mR, mG, mB] = middle;

  // Energy from the left pixel (if it exists).
  let lEnergy = 0;
  if (left) {
    const [lR, lG, lB] = left;
    lEnergy = (lR - mR) ** 2 + (lG - mG) ** 2 + (lB - mB) ** 2;
  }

  // Energy from the right pixel (if it exists).
  let rEnergy = 0;
  if (right) {
    const [rR, rG, rB] = right;
    rEnergy = (rR - mR) ** 2 + (rG - mG) ** 2 + (rB - mB) ** 2;
  }

  // Resulting pixel energy.
  return Math.sqrt(lEnergy + rEnergy);
};

/**
 * Calculates the energy of each pixel of the image.
 * @param {ImageData} img
 * @param {ImageSize} size
 * @returns {EnergyMap}
 */
const calculateEnergyMap = (img, { w, h }) => {
  // Create an empty energy map where each pixel has infinitely high energy.
  // We will update the energy of each pixel.
  const energyMap = matrix(w, h, Infinity);
  for (let y = 0; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      // Left pixel might not exist if we're on the very left edge of the image.
      const left = (x - 1) >= 0 ? getPixel(img, { x: x - 1, y }) : null;
      // The color of the middle pixel that we're calculating the energy for.
      const middle = getPixel(img, { x, y });
      // Right pixel might not exist if we're on the very right edge of the image.
      const right = (x + 1) < w ? getPixel(img, { x: x + 1, y }) : null;
      energyMap[y][x] = getPixelEnergy(left, middle, right);
    }
  }
  return energyMap;
};

/**
 * Finds the seam (the sequence of pixels from top to bottom) that has the
 * lowest resulting energy using the Dynamic Programming approach.
 * @param {EnergyMap} energyMap
 * @param {ImageSize} size
 * @returns {Seam}
 */
const findLowEnergySeam = (energyMap, { w, h }) => {
  // The 2D array of the size of w and h, where each pixel contains the
  // seam metadata (pixel energy, pixel coordinate and previous pixel from
  // the lowest energy seam at this point).
  const seamPixelsMap = matrix(w, h, null);

  // Populate the first row of the map by just copying the energies
  // from the energy map.
  for (let x = 0; x < w; x += 1) {
    const y = 0;
    seamPixelsMap[y][x] = {
      energy: energyMap[y][x],
      coordinate: { x, y },
      previous: null,
    };
  }

  // Populate the rest of the rows.
  for (let y = 1; y < h; y += 1) {
    for (let x = 0; x < w; x += 1) {
      // Find the top adjacent cell with minimum energy.
      // This cell would be the tail of a seam with lowest energy at this point.
      // It doesn't mean that this seam (path) has lowest energy globally.
      // Instead, it means that we found a path with the lowest energy that may lead
      // us to the current pixel with the coordinates x and y.
      let minPrevEnergy = Infinity;
      let minPrevX = x;
      for (let i = (x - 1); i <= (x + 1); i += 1) {
        if (i >= 0 && i < w && seamPixelsMap[y - 1][i].energy < minPrevEnergy) {
          minPrevEnergy = seamPixelsMap[y - 1][i].energy;
          minPrevX = i;
        }
      }

      // Update the current cell.
      seamPixelsMap[y][x] = {
        energy: minPrevEnergy + energyMap[y][x],
        coordinate: { x, y },
        previous: { x: minPrevX, y: y - 1 },
      };
    }
  }

  // Find where the minimum energy seam ends.
  // We need to find the tail of the lowest energy seam to start
  // traversing it from its tail to its head (from the bottom to the top).
  let lastMinCoordinate = null;
  let minSeamEnergy = Infinity;
  for (let x = 0; x < w; x += 1) {
    const y = h - 1;
    if (seamPixelsMap[y][x].energy < minSeamEnergy) {
      minSeamEnergy = seamPixelsMap[y][x].energy;
      lastMinCoordinate = { x, y };
    }
  }

  // Find the lowest energy energy seam.
  // Once we know where the tail is we may traverse and assemble the lowest
  // energy seam based on the "previous" value of the seam pixel metadata.
  const seam = [];

  const { x: lastMinX, y: lastMinY } = lastMinCoordinate;

  // Adding new pixel to the seam path one by one until we reach the top.
  let currentSeam = seamPixelsMap[lastMinY][lastMinX];
  while (currentSeam) {
    seam.push(currentSeam.coordinate);
    const prevMinCoordinates = currentSeam.previous;
    if (!prevMinCoordinates) {
      currentSeam = null;
    } else {
      const { x: prevMinX, y: prevMinY } = prevMinCoordinates;
      currentSeam = seamPixelsMap[prevMinY][prevMinX];
    }
  }

  return seam;
};

/**
 * Deletes the seam from the image data.
 * We delete the pixel in each row and then shift the rest of the row pixels to the left.
 * @param {ImageData} img
 * @param {Seam} seam
 * @param {ImageSize} size
 */
const deleteSeam = (img, seam, { w }) => {
  seam.forEach(({ x: seamX, y: seamY }) => {
    for (let x = seamX; x < (w - 1); x += 1) {
      const nextPixel = getPixel(img, { x: x + 1, y: seamY });
      setPixel(img, { x, y: seamY }, nextPixel);
    }
  });
};

/**
 * Performs the content-aware image width resizing using the seam carving method.
 * @param {ResizeImageWidthArgs} args
 * @returns {ResizeImageWidthResult}
 */
const resizeImageWidth = ({ img, toWidth }) => {
  /**
   * For performance reasons we want to avoid changing the img data array size.
   * Instead we'll just keep the record of the resized image width and height separately.
   * @type {ImageSize}
   */
  const size = { w: img.width, h: img.height };

  // Calculating the number of pixels to remove.
  const pxToRemove = img.width - toWidth;

  let energyMap = null;
  let seam = null;

  // Removing the lowest energy seams one by one.
  for (let i = 0; i < pxToRemove; i += 1) {
    // 1. Calculate the energy map for the current version of the image.
    energyMap = calculateEnergyMap(img, size);

    // 2. Find the seam with the lowest energy based on the energy map.
    seam = findLowEnergySeam(energyMap, size);

    // 3. Delete the seam with the lowest energy seam from the image.
    deleteSeam(img, seam, size);

    // Reduce the image width, and continue iterations.
    size.w -= 1;
  }

  // Returning the resized image and its final size.
  // The img is actually a reference to the ImageData, so technically
  // the caller of the function already has this pointer. But let's
  // still return it for better code readability.
  return { img, size };
};

export default resizeImageWidth;
