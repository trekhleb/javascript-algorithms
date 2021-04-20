import { createCanvas, loadImage } from 'canvas';
import resizeImageWidth from '../resizeImageWidth';

const testImageBeforePath = './src/algorithms/image-processing/seam-carving/__tests__/test-image-before.jpg';
const testImageAfterPath = './src/algorithms/image-processing/seam-carving/__tests__/test-image-after.jpg';

describe('resizeImageWidth', () => {
  it('should perform content-aware image width reduction', () => {
    // @see: https://jestjs.io/docs/asynchronous
    return Promise.all([
      loadImage(testImageBeforePath),
      loadImage(testImageAfterPath),
    ]).then(([imgBefore, imgAfter]) => {
      // Original image.
      const canvasBefore = createCanvas(imgBefore.width, imgBefore.height);
      const ctxBefore = canvasBefore.getContext('2d');
      ctxBefore.drawImage(imgBefore, 0, 0, imgBefore.width, imgBefore.height);
      const imgDataBefore = ctxBefore.getImageData(0, 0, imgBefore.width, imgBefore.height);

      // Resized image saved.
      const canvasAfter = createCanvas(imgAfter.width, imgAfter.height);
      const ctxAfter = canvasAfter.getContext('2d');
      ctxAfter.drawImage(imgAfter, 0, 0, imgAfter.width, imgAfter.height);

      const toWidth = Math.floor(imgBefore.width / 2);

      const {
        img: resizedImg,
        size: resizedSize,
      } = resizeImageWidth({ img: imgDataBefore, toWidth });

      expect(resizedImg).toBeDefined();
      expect(resizedSize).toBeDefined();

      // Resized image generated.
      const canvasTest = createCanvas(resizedSize.w, resizedSize.h);
      const ctxTest = canvasTest.getContext('2d');
      ctxTest.putImageData(resizedImg, 0, 0, 0, 0, resizedSize.w, resizedSize.h);
      const imgDataTest = ctxTest.getImageData(0, 0, resizedSize.w, resizedSize.h);

      expect(resizedSize).toEqual({ w: toWidth, h: imgBefore.height });
      expect(imgDataTest.width).toBe(toWidth);
      expect(imgDataTest.height).toBe(imgBefore.height);
      expect(imgDataTest.width).toBe(imgAfter.width);
      expect(imgDataTest.height).toBe(imgAfter.height);

      // @TODO: Check that images are identical.
      // expect(canvasTest.toDataURL()).toEqual(canvasAfter.toDataURL());
    });
  });
});
