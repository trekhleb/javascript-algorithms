import fs from 'fs';
import { PNG } from 'pngjs';

import resizeImageWidth from '../resizeImageWidth';

const testImageBeforePath = './src/algorithms/image-processing/seam-carving/__tests__/test-image-before.png';
const testImageAfterPath = './src/algorithms/image-processing/seam-carving/__tests__/test-image-after.png';

/**
 * Compares two images and finds the number of different pixels.
 *
 * @param {ImageData} imgA - ImageData for the first image.
 * @param {ImageData} imgB - ImageData for the second image.
 * @param {number} threshold - Color difference threshold [0..255]. Smaller - stricter.
 * @returns {number} - Number of different pixels.
 */
function pixelsDiff(imgA, imgB, threshold = 0) {
  if (imgA.width !== imgB.width || imgA.height !== imgB.height) {
    throw new Error('Images must have the same size');
  }

  let differentPixels = 0;
  const numColorParams = 4; // RGBA

  for (let pixelIndex = 0; pixelIndex < imgA.data.length; pixelIndex += numColorParams) {
    // Get pixel's color for each image.
    const [aR, aG, aB] = imgA.data.subarray(pixelIndex, pixelIndex + numColorParams);
    const [bR, bG, bB] = imgB.data.subarray(pixelIndex, pixelIndex + numColorParams);

    // Get average pixel's color for each image (make them greyscale).
    const aAvgColor = Math.floor((aR + aG + aB) / 3);
    const bAvgColor = Math.floor((bR + bG + bB) / 3);

    // Compare pixel colors.
    if (Math.abs(aAvgColor - bAvgColor) > threshold) {
      differentPixels += 1;
    }
  }

  return differentPixels;
}

const pngLoad = (path) => new Promise((resolve) => {
  fs.createReadStream(path)
    .pipe(new PNG())
    .on('parsed', function Parsed() {
      /** @type {ImageData} */
      const imageData = {
        colorSpace: 'srgb',
        width: this.width,
        height: this.height,
        data: this.data,
      };
      resolve(imageData);
    });
});

describe('resizeImageWidth', () => {
  it('should perform content-aware image width reduction', async () => {
    const imgBefore = await pngLoad(testImageBeforePath);
    const imgAfter = await pngLoad(testImageAfterPath);

    const toWidth = Math.floor(imgBefore.width / 2);

    const {
      img: imgResized,
      size: resizedSize,
    } = resizeImageWidth({ img: imgBefore, toWidth });

    expect(imgResized).toBeDefined();
    expect(resizedSize).toBeDefined();

    expect(resizedSize).toEqual({ w: toWidth, h: imgBefore.height });
    expect(imgResized.width).toBe(imgAfter.width);
    expect(imgResized.height).toBe(imgAfter.height);

    const colorThreshold = 50;
    const differentPixels = pixelsDiff(imgResized, imgAfter, colorThreshold);

    // Allow 10% of pixels to be different
    const pixelsThreshold = Math.floor((imgAfter.width * imgAfter.height) / 10);

    expect(differentPixels).toBeLessThanOrEqual(pixelsThreshold);
  });
});
