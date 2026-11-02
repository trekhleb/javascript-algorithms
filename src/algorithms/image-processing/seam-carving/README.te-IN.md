# JavaScript లో Content-aware image resizing

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

![Content-aware image resizing in JavaScript](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/01-cover-02.png)

> ఈ post కి ఒక [interactive version](https://trekhleb.dev/blog/2021/content-aware-image-resizing-in-javascript/) కూడా ఉంది — అక్కడ మీ సొంత images upload చేసి resize చేసి చూడొచ్చు.

## TL;DR

*Seam Carving algorithm* గురించి ఇప్పటికే చాలా మంచి articles ఉన్నాయి. కానీ ఇంత అందంగా, powerful గా, *అయినా సింపుల్ గా* ఉండే ఈ algorithm ని నేనే స్వయంగా explore చేసి, నా experience గురించి రాయాలి అనే కోరిక ఆపుకోలేకపోయాను. ఇంకో విషయం నన్ను ఆకర్షించింది ([javascript-algorithms](https://github.com/trekhleb/javascript-algorithms) repo తయారుచేసిన వాడిగా) — దీన్ని solve చేయడానికి *Dynamic Programming (DP)* approach చక్కగా సరిపోతుంది. మీరు కూడా నాలాగే ఇంకా "algorithms నేర్చుకునే" journey లో ఉంటే, ఈ solution మీ DP ఆయుధాలకి ఇంకొకటి కలుపుతుంది.

కాబట్టి, ఈ article తో నేను మూడు పనులు చేయాలనుకుంటున్నాను:

1. మీ సొంత images ని resize చేసి ఆడుకోడానికి ఒక interactive **content-aware resizer** ఇవ్వడం
2. **Seam Carving algorithm** వెనక ఉన్న ఐడియా explain చేయడం
3. ఈ algorithm ని implement చేయడానికి **dynamic programming approach** explain చేయడం (దీనికి TypeScript వాడతాం)

### Content-aware image resizing

Image proportions మార్చాల్సి వచ్చినప్పుడు (అంటే height అలాగే ఉంచి width తగ్గించడం లాంటివి), ఇంకా image లో కొన్ని భాగాలు పోవడం మనకి ఇష్టం లేనప్పుడు *content-aware image resizing* వాడొచ్చు. ఇలాంటప్పుడు డైరెక్ట్ గా image ని scale చేస్తే, అందులో ఉన్న objects షేప్ పాడైపోతుంది. Image proportions మార్చేటప్పుడు objects proportions పాడవకుండా ఉండటానికి *Shai Avidan*, *Ariel Shamir* తీసుకొచ్చిన [Seam Carving algorithm](https://perso.crans.org/frenoy/matlab2012/seamcarving.pdf) వాడొచ్చు.

కింద example లో, original image width ని *content-aware resizing* (ఎడమ image) తో, *డైరెక్ట్ scaling* (కుడి image) తో 50% తగ్గించారు. ఈ case లో ఎడమ image ఎక్కువ natural గా కనిపిస్తుంది, ఎందుకంటే balloons proportions అలాగే ఉన్నాయి.

![Content-aware image resizing](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/01-resizing-options.png)

Seam Carving algorithm ఐడియా ఏంటంటే — image content కి అతి తక్కువ contribution ఇచ్చే *seam* (వరుసగా కలిసి ఉన్న pixels) ని కనుక్కుని, దాన్ని *carve* (తీసేయడం) చేయడం. మనకి కావాల్సిన image width లేదా height వచ్చేదాకా ఇదే మళ్ళీ మళ్ళీ చేస్తాం. కింద example లో చూడొచ్చు — hot air balloon pixels, ఆకాశం pixels కంటే image content కి ఎక్కువ contribute చేస్తాయి. అందుకే ముందు ఆకాశం pixels తీసేస్తారు.

![JS IMAGE CARVER DEMO](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/10-demo-01.gif)

అతి తక్కువ energy ఉన్న seam ని కనుక్కోవడం computer కి చాలా భారమైన పని (ముఖ్యంగా పెద్ద images కి). Seam search ఫాస్ట్ గా చేయడానికి *dynamic programming* approach వాడొచ్చు (implementation details కింద చూద్దాం).

### Objects తీసేయడం

ప్రతి pixel ఎంత ముఖ్యం (దీన్నే pixel's energy అంటారు) అనేది, దాని color (`R`, `G`, `B`, `A`) కి పక్కన ఉన్న రెండు neighbor pixels color కి ఉన్న తేడాని బట్టి లెక్కపెడతాం. ఇప్పుడు, మనమే కావాలని కొన్ని pixels energy ని బాగా తక్కువగా పెట్టేస్తే (అంటే వాటి మీద ఒక mask గీస్తే), Seam Carving algorithm మనకి ఫ్రీగా **object removal** చేసి పెడుతుంది.

![JS IMAGE CARVER OBJECT REMOVAL DEMO](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/10-demo-02.gif)

### JS IMAGE CARVER demo

నేను [JS IMAGE CARVER](https://trekhleb.dev/js-image-carver/) అనే web-app తయారుచేశాను (దాన్ని [GitHub లో open-source](https://github.com/trekhleb/js-image-carver) కూడా చేశాను). మీ సొంత images resize చేసి ఆడుకోడానికి దాన్ని వాడొచ్చు.

### ఇంకొన్ని examples

కొంచెం కష్టమైన backgrounds ని ఈ algorithm ఎలా handle చేస్తుందో చూపించే ఇంకొన్ని examples ఇవి.

Background లో ఉన్న కొండలు ఎక్కడా seams కనిపించకుండా smooth గా చిన్నవయ్యాయి.

![Resizing demo with more complex backgrounds](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/11-demo-01.png)

సముద్రం అలలకి కూడా అంతే. Surfers షేప్ పాడవకుండా, అలల structure ని algorithm అలాగే ఉంచింది.

![Resizing demo with more complex backgrounds](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/11-demo-02.png)

ఒక విషయం గుర్తుపెట్టుకోవాలి — Seam Carving algorithm అన్నిటికీ పనిచేసే మంత్రం కాదు. *ఎక్కువ pixels edges గా ఉండే* (algorithm కి ముఖ్యమైనవిగా కనిపించే) images ని resize చేయడంలో ఇది fail అవ్వొచ్చు. అలాంటప్పుడు image లో ముఖ్యమైన భాగాలు కూడా పాడవడం మొదలవుతుంది. కింద example లో content-aware resizing కూడా దాదాపు డైరెక్ట్ scaling లాగానే ఉంది — ఎందుకంటే algorithm కి అన్ని pixels ముఖ్యమైనవిగానే కనిపిస్తున్నాయి, Van Gogh ముఖాన్ని background నుంచి వేరు చేయడం దానికి కష్టం.

![Example when the algorithm does not work as expected](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/12-demo-01.png)

## Seam Carving algorithm ఎలా పనిచేస్తుంది

మన దగ్గర `1000 x 500 px` ఫోటో ఉంది, దాన్ని square చేయడానికి `500 x 500 px` కి మార్చాలి అనుకుందాం (square ratio అయితే Instagram feed కి బాగా సరిపోతుంది అనుకుందాం). ఇలాంటప్పుడు **resize చేసేటప్పుడు కొన్ని conditions** పెట్టుకోవాలి అనిపిస్తుంది:

- *Image లో ముఖ్యమైన భాగాలు పోకూడదు* (అంటే resize చేసే ముందు 5 చెట్లు ఉంటే, resize చేశాక కూడా 5 చెట్లు ఉండాలి).
- Image లో ముఖ్యమైన భాగాల *proportions పాడవకూడదు* (అంటే గుండ్రంగా ఉండే car wheels నొక్కినట్టు oval గా అయిపోకూడదు)

Image లో ముఖ్యమైన భాగాలు మారకుండా ఉండటానికి, పై నుంచి కిందకి వెళ్ళే, image content కి *అతి తక్కువ contribution* ఇచ్చే (ముఖ్యమైన భాగాలని తప్పించుకుని వెళ్ళే) **వరుసగా కలిసి ఉన్న pixels (seam)** ని కనుక్కుని, దాన్ని తీసేయొచ్చు. ఒక seam తీసేస్తే image 1 pixel చిన్నదవుతుంది. Image కి కావాల్సిన width వచ్చేదాకా ఈ step ని మళ్ళీ మళ్ళీ చేస్తాం.

ఇక్కడ ప్రశ్న ఏంటంటే — *pixel ఎంత ముఖ్యం*, content కి దాని contribution ఎంత అని ఎలా నిర్ణయించాలి (original paper లో authors దీనికి **energy of the pixel** అనే పదం వాడారు). దీనికి ఒక పద్ధతి ఏంటంటే — edges ని ఏర్పరిచే pixels అన్నీ ముఖ్యమైనవిగా చూడటం. ఒక pixel edge లో భాగమైతే, దాని color కి neighbors (ఎడమ, కుడి pixels) color కి ఉన్న తేడా, edge లో భాగం కాని pixel కంటే ఎక్కువగా ఉంటుంది.

![Pixels color difference](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/30-pixel-energy-comparison.png)

ఒక pixel color ని *4* నంబర్లతో (`R` - red, `G` - green, `B` - blue, `A` - alpha) చూపిస్తారు అనుకుంటే, color తేడా (pixel energy) లెక్కపెట్టడానికి ఈ formula వాడొచ్చు:

![Pixel energy formula](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/20-energy-formula.png)

ఇక్కడ:

- `mEnergy` - *మధ్య* pixel యొక్క *Energy* (ఎంత ముఖ్యం) (round చేస్తే `[0..626]`)
- `lR` - *ఎడమ* pixel యొక్క *Red* channel value (`[0..255]`)
- `mR` - *మధ్య* pixel యొక్క *Red* channel value (`[0..255]`)
- `rR` - *కుడి* pixel యొక్క *Red* channel value (`[0..255]`)
- `lG` - *ఎడమ* pixel యొక్క *Green* channel value (`[0..255]`)
- అలా మిగతావి...

పైన formula లో ప్రస్తుతానికి alpha (transparency) channel ని వదిలేస్తున్నాం — image లో transparent pixels ఏమీ లేవు అనుకుంటున్నాం. తర్వాత masking కి, object removal కి alpha channel ని వాడతాం.

![Example of pixel energy calculation](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/30-pixel-energy-calculation-example.png)

ఇప్పుడు ఒక pixel energy ఎలా కనుక్కోవాలో తెలుసు కాబట్టి, **energy map** లెక్కపెట్టొచ్చు — అందులో image లో ప్రతి pixel energy ఉంటుంది. Resize చేసే ప్రతి step లో energy map ని మళ్ళీ లెక్కపెట్టాలి (కనీసం కొంత భాగమైనా, దాని గురించి కింద చెప్తా), దాని సైజ్ image సైజ్ తో సమానంగా ఉంటుంది.

ఉదాహరణకి, resize చేసే 1st step లో మన దగ్గర `1000 x 500` image, `1000 x 500` energy map ఉంటాయి. 2nd step లో image నుంచి seam తీసేసి, కొత్తగా చిన్నదైన image మీద energy map మళ్ళీ లెక్కపెడతాం. అప్పుడు `999 x 500` image, `999 x 500` energy map వస్తాయి.

Pixel energy ఎంత ఎక్కువ ఉంటే, అది edge లో భాగమయ్యే chance అంత ఎక్కువ — అంటే image content కి అది ముఖ్యం, దాన్ని తీసేయాల్సిన అవసరం అంత తక్కువ.

Energy map ని చూడటానికి, ఎక్కువ energy ఉన్న pixels కి brightగా ఉండే color, తక్కువ energy ఉన్న pixels కి dark colors ఇవ్వొచ్చు. Energy map లో ఏదో ఒక భాగం ఎలా ఉండొచ్చో చూపించే ఒక కల్పిత example ఇది. ఇందులో ఒక bright line కనిపిస్తుంది — అది edge, resize చేసేటప్పుడు దాన్ని అలాగే ఉంచాలి.

![Energy map sketch](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/30-energy-map-padding.png)

పైన చూసిన demo image (hot air balloons ఉన్నది) కి నిజమైన energy map ఇది.

![Energy map example](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/40-energy-map.png)

మీ సొంత images తో energy map ఎలా కనిపిస్తుందో [post యొక్క interactive version](https://trekhleb.dev/blog/2021/content-aware-image-resizing-in-javascript/) లో చూడొచ్చు.

Energy map వాడి అతి తక్కువ energy ఉన్న seams ని (ఒకదాని తర్వాత ఒకటి) కనుక్కోవచ్చు, దాంతో చివరికి ఏ pixels ని డిలీట్ చేయాలో నిర్ణయించొచ్చు.

![Searching the seam](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/41-seam-search.png)

అతి తక్కువ energy ఉన్న seam కనుక్కోవడం అంత ఈజీ కాదు — నిర్ణయం తీసుకునే ముందు చాలా pixel combinations చూడాలి. దీన్ని ఫాస్ట్ చేయడానికి dynamic programming approach వాడతాం.

కింద example లో energy map, దానికి దొరికిన మొదటి lowest energy seam చూడొచ్చు.

![Energy map example with seam](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/40-energy-map-with-seam.png)

పైన examples లో image width తగ్గించాం. Image height తగ్గించడానికి కూడా ఇలాంటి పద్ధతే వాడొచ్చు. కానీ approach ని "తిప్పాలి":

- Pixel energy లెక్కపెట్టడానికి *ఎడమ*, *కుడి* neighbors బదులు *పైన*, *కింద* ఉన్న neighbors వాడాలి
- Seam కోసం వెతికేటప్పుడు *పై* నుంచి *కిందకి* బదులు *ఎడమ* నుంచి *కుడికి* వెళ్ళాలి

## TypeScript లో Implementation

> Source code, కింద చెప్పిన functions అన్నీ [js-image-carver](https://github.com/trekhleb/js-image-carver) repository లో దొరుకుతాయి.

Algorithm implement చేయడానికి TypeScript వాడతాం. మీకు JavaScript version కావాలంటే, type definitions, వాటిని వాడిన చోట్లని వదిలేయొచ్చు (తీసేయొచ్చు).

సింపుల్ గా ఉండటానికి, seam carving algorithm ని image *width* తగ్గించడానికి మాత్రమే implement చేద్దాం.

### Content-aware width resizing (entry function)

ముందు, algorithm implement చేసేటప్పుడు వాడబోయే కొన్ని common types define చేద్దాం.

```typescript
// Type that describes the image size (width and height).
type ImageSize = { w: number, h: number };

// The coordinate of the pixel.
type Coordinate = { x: number, y: number };

// The seam is a sequence of pixels (coordinates).
type Seam = Coordinate[];

// Energy map is a 2D array that has the same width and height
// as the image the map is being calculated for.
type EnergyMap = number[][];

// Type that describes the image pixel's RGBA color.
type Color = [
  r: number, // Red
  g: number, // Green
  b: number, // Blue
  a: number, // Alpha (transparency)
] | Uint8ClampedArray;
```

పైపైన చూస్తే algorithm లో ఈ steps ఉంటాయి:

1. Image యొక్క ఇప్పటి version కి **energy map** లెక్కపెట్టడం.
2. Energy map ని బట్టి అతి తక్కువ energy ఉన్న **seam** కనుక్కోవడం (ఇక్కడే Dynamic Programming వాడతాం).
3. అతి తక్కువ energy ఉన్న ఆ **seam ని image నుంచి డిలీట్ చేయడం**.
4. Image width కావాల్సిన value కి తగ్గేదాకా **మళ్ళీ మళ్ళీ చేయడం**.

```typescript
type ResizeImageWidthArgs = {
  img: ImageData, // Image data we want to resize.
  toWidth: number, // Final image width we want the image to shrink to.
};

type ResizeImageWidthResult = {
  img: ImageData, // Resized image data.
  size: ImageSize, // Resized image size (w x h).
};

// Performs the content-aware image width resizing using the seam carving method.
export const resizeImageWidth = (
  { img, toWidth }: ResizeImageWidthArgs,
): ResizeImageWidthResult => {
  // For performance reasons we want to avoid changing the img data array size.
  // Instead we'll just keep the record of the resized image width and height separately.
  const size: ImageSize = { w: img.width, h: img.height };

  // Calculating the number of pixels to remove.
  const pxToRemove = img.width - toWidth;
  if (pxToRemove < 0) {
    throw new Error('Upsizing is not supported for now');
  }

  let energyMap: EnergyMap | null = null;
  let seam: Seam | null = null;

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
```

Resize చేయాల్సిన image ని function కి [ImageData](https://developer.mozilla.org/en-US/docs/Web/API/ImageData) format లో పంపిస్తాం. Image ని canvas మీద గీసి, canvas నుంచి ImageData ని ఇలా తీసుకోవచ్చు:

```javascript
const ctx = canvas.getContext('2d');
const imgData = ctx.getImageData(0, 0, imgWidth, imgHeight);
```

> JavaScript లో images ని upload చేయడం, గీయడం ఈ article పరిధిలో లేదు, కానీ React వాడి ఎలా చేయొచ్చో పూర్తి source code [js-image-carver](https://github.com/trekhleb/js-image-carver) repo లో దొరుకుతుంది.

ఇప్పుడు ఒక్కో step ని విడదీసి చూసి `calculateEnergyMap()`, `findLowEnergySeam()`, `deleteSeam()` functions implement చేద్దాం.

### Pixel energy లెక్కపెట్టడం

ఇక్కడ పైన చెప్పిన color తేడా formula వాడతాం. ఎడమ, కుడి అంచుల దగ్గర (ఎడమ గానీ కుడి గానీ neighbors లేనప్పుడు), ఆ neighbors ని పట్టించుకోము, energy లెక్కలోకి తీసుకోము.

```typescript
// Calculates the energy of a pixel.
const getPixelEnergy = (left: Color | null, middle: Color, right: Color | null): number => {
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
```

### Energy map లెక్కపెట్టడం

మనం పనిచేస్తున్న image [ImageData](https://developer.mozilla.org/en-US/docs/Web/API/ImageData) format లో ఉంది. అంటే అన్ని pixels (వాటి colors) ఒక flat (*1D*) [Uint8ClampedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray) array లో store అయి ఉంటాయి. చదవడానికి ఈజీగా ఉండటానికి, Uint8ClampedArray array తో ఒక *2D* matrix లాగా పనిచేయడానికి రెండు helper functions తీసుకొద్దాం.

```typescript
// Helper function that returns the color of the pixel.
const getPixel = (img: ImageData, { x, y }: Coordinate): Color => {
  // The ImageData data array is a flat 1D array.
  // Thus we need to convert x and y coordinates to the linear index.
  const i = y * img.width + x;
  const cellsPerColor = 4; // RGBA
  // For better efficiency, instead of creating a new sub-array we return
  // a pointer to the part of the ImageData array.
  return img.data.subarray(i * cellsPerColor, i * cellsPerColor + cellsPerColor);
};

// Helper function that sets the color of the pixel.
const setPixel = (img: ImageData, { x, y }: Coordinate, color: Color): void => {
  // The ImageData data array is a flat 1D array.
  // Thus we need to convert x and y coordinates to the linear index.
  const i = y * img.width + x;
  const cellsPerColor = 4; // RGBA
  img.data.set(color, i * cellsPerColor);
};
```

Energy map లెక్కపెట్టడానికి image లో ప్రతి pixel దగ్గరికి వెళ్ళి, దాని మీద ఇంతకుముందు చెప్పిన `getPixelEnergy()` function ని call చేస్తాం.

```typescript
// Helper function that creates a matrix (2D array) of specific
// size (w x h) and fills it with specified value.
const matrix = <T>(w: number, h: number, filler: T): T[][] => {
  return new Array(h)
    .fill(null)
    .map(() => {
      return new Array(w).fill(filler);
    });
};

// Calculates the energy of each pixel of the image.
const calculateEnergyMap = (img: ImageData, { w, h }: ImageSize): EnergyMap => {
  // Create an empty energy map where each pixel has infinitely high energy.
  // We will update the energy of each pixel.
  const energyMap: number[][] = matrix<number>(w, h, Infinity);
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
```

> Resize చేసే ప్రతి iteration లో energy map ని మళ్ళీ లెక్కపెడతాం. అంటే, image ని 500 pixels తగ్గించాలంటే 500 సార్లు లెక్కపెడతాం — ఇది అంత మంచిది కాదు. 2nd, 3rd, ఇంకా తర్వాత steps లో energy map ఫాస్ట్ గా లెక్కపెట్టడానికి, తీసేయబోయే seam చుట్టూ ఉన్న pixels కి మాత్రమే energy మళ్ళీ లెక్కపెట్టొచ్చు. సింపుల్ గా ఉండటానికి ఈ optimization ని ఇక్కడ వదిలేశాం, కానీ example source-code [js-image-carver](https://github.com/trekhleb/js-image-carver) repo లో దొరుకుతుంది.

### అతి తక్కువ energy ఉన్న seam కనుక్కోవడం (Dynamic Programming approach)

> ఇంతకుముందు [Dynamic Programming vs Divide-and-Conquer](https://trekhleb.dev/blog/2018/dynamic-programming-vs-divide-and-conquer/) article లో Dynamic Programming బేసిక్స్ కొన్ని చెప్పాను. అక్కడ minimum edit distance problem మీద ఒక DP example ఉంది. ఇంకొంచెం context కావాలంటే అది చూడొచ్చు.

ఇప్పుడు మనం solve చేయాల్సిన problem ఏంటంటే — energy map మీద పై నుంచి కిందకి వెళ్ళే, pixel energies మొత్తం అతి తక్కువగా ఉండే path (seam) కనుక్కోవడం.

#### Naive approach

Naive approach అంటే అన్ని possible paths ని ఒకదాని తర్వాత ఒకటి చెక్ చేయడం.

![The naive approach](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/50-naive-approach.png)

పై నుంచి కిందకి వెళ్తుంటే, ప్రతి pixel కి 3 options ఉంటాయి (↙︎ కింద-ఎడమకి, ↓ కిందకి, ↘︎ కింద-కుడికి). దాంతో time complexity `O(w * 3^h)` లేదా సింపుల్ గా `O(3^h)` వస్తుంది — ఇక్కడ `w`, `h` అంటే image యొక్క width, height. ఈ approach slow గా ఉంటుంది.

#### Greedy approach

ప్రతిసారి next pixel గా అతి తక్కువ energy ఉన్న pixel ని ఎంచుకుంటూ వెళ్ళొచ్చు — చివరికి వచ్చే seam energy కూడా అతి తక్కువగా ఉంటుంది అని ఆశిస్తూ.

![The greedy approach](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/51-greedy-approach.png)

ఈ approach మరీ worst solution ఇవ్వదు, కానీ ఉన్నవాటిలో best solution దొరుకుతుంది అని guarantee ఇవ్వలేదు. పైన image లో చూడొచ్చు — greedy approach మొదట్లో `10` బదులు `5` ఎంచుకుని, best pixels chain ని miss అయింది.

ఈ approach లో మంచి విషయం ఏంటంటే ఇది ఫాస్ట్ — దీని time complexity `O(w + h)`, ఇక్కడ `w`, `h` అంటే image యొక్క width, height. కానీ ఈ speed కి మనం కట్టే మూల్యం resize quality తక్కువగా ఉండటం. మొదటి row లో minimum value కనుక్కోవాలి (`w` cells చూడాలి), తర్వాత ప్రతి row లో 3 neighbor pixels మాత్రమే చూస్తాం (`h` rows).

#### Dynamic programming approach

మీరు గమనించే ఉంటారు — naive approach లో seams energy లెక్కపెట్టేటప్పుడు, ఒకే pixel energies ని మళ్ళీ మళ్ళీ కలుపుతున్నాం.

![Repeated problems](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/52-dp-repeated-problems.png)

పైన example లో చూడొచ్చు — మొదటి రెండు seams కోసం చిన్న seam (energy `235` ఉన్నది) energy నే మళ్ళీ వాడుతున్నాం. 2nd seam energy లెక్కపెట్టడానికి `235 + 70` అని ఒక్క operation చేయకుండా, `(5 + 0 + 80 + 150) + 70` అని నాలుగు operations చేస్తున్నాం.

> ఇప్పటి seam energy లెక్కపెట్టడానికి ముందు seam energy ని వాడుకుంటున్నాం అనే విషయం, పైన ఉన్న 1st row seam వరకు అన్ని చిన్న seams కి recursive గా వర్తిస్తుంది. ఇలా ఒకదానితో ఒకటి overlap అయ్యే sub-problems ఉన్నప్పుడు, ఆ problem ని dynamic programming approach తో optimize *చేయొచ్చు* అనడానికి [అది ఒక సూచన](https://trekhleb.dev/blog/2018/dynamic-programming-vs-divide-and-conquer/).

కాబట్టి, ఒక particular pixel దగ్గర **ఇప్పటి seam energy ని** ఇంకో `seamsEnergies` table లో **save చేయొచ్చు** — దాంతో next seams ని ఫాస్ట్ గా లెక్కపెట్టడానికి మళ్ళీ వాడుకోవచ్చు (`seamsEnergies` table సైజ్ energy map, image సైజ్ తో సమానంగా ఉంటుంది).

ఇంకో విషయం గుర్తుపెట్టుకుందాం — image లో ఒక particular pixel కి (ఉదాహరణకి కింద ఎడమ మూలలో ఉన్నది) ముందు seams energies కి *చాలా* values ఉండొచ్చు.

![What seam to choose](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/53-dp-what-to-choose.png)

మనం అతి తక్కువ energy ఉన్న seam కోసం వెతుకుతున్నాం కాబట్టి, ముందు seam కూడా అతి తక్కువ energy ఉన్నదే ఎంచుకోవడం కరెక్ట్.

![Seams energies example](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/56-dp-seams-energies-example.png)

మామూలుగా, ఎంచుకోడానికి మూడు possible ముందు seams ఉంటాయి:

![Three options to choose from](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/55-dp-three-options.png)

దీన్ని ఇలా ఆలోచించొచ్చు:

- Cell `[1][x]`: row `[0][?]` లో ఎక్కడో మొదలై cell `[1][x]` దగ్గర ముగిసే seam కి వీలైనంత తక్కువ energy ఇందులో ఉంటుంది
- **ఇప్పటి cell** `[2][3]`: row `[0][?]` లో ఎక్కడో మొదలై cell `[2][3]` దగ్గర ముగిసే seam కి వీలైనంత తక్కువ energy ఇందులో ఉంటుంది. దీన్ని లెక్కపెట్టడానికి ఇప్పటి pixel `[2][3]` energy (energy map నుంచి) ని `min(seam_energy_1_2, seam_energy_1_3, seam_energy_1_4)` తో కలపాలి

`seamsEnergies` table మొత్తం నింపేస్తే, అన్నిటికంటే కింద row లో ఉన్న minimum నంబరే వీలైనంత తక్కువ seam energy.

ఇది ఎలా పనిచేస్తుందో చూడటానికి ఈ table లో కొన్ని cells నింపి చూద్దాం.

![Seams energies map traversal](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/57-dp-seams-energies-traversal.png)

`seamsEnergies` table నింపేశాక, అతి తక్కువ energy ఉన్న pixel energy `50` అని చూడొచ్చు. సౌలభ్యం కోసం, `seamsEnergies` తయారుచేసేటప్పుడు ప్రతి pixel కి seam energy మాత్రమే కాకుండా, ముందు ఉన్న lowest energy seam coordinates కూడా save చేయొచ్చు. దాంతో seam path ని కింద నుంచి పైకి ఈజీగా మళ్ళీ కట్టొచ్చు.

DP approach time complexity `O(w * h)`, ఇక్కడ `w`, `h` అంటే image యొక్క width, height. Image లో *ప్రతి* pixel కి energies లెక్కపెట్టాలి.

ఈ logic ని ఎలా implement చేయొచ్చో ఒక example ఇది:

```typescript
// The metadata for the pixels in the seam.
type SeamPixelMeta = {
  energy: number, // The energy of the pixel.
  coordinate: Coordinate, // The coordinate of the pixel.
  previous: Coordinate | null, // The previous pixel in a seam.
};

// Finds the seam (the sequence of pixels from top to bottom) that has the
// lowest resulting energy using the Dynamic Programming approach.
const findLowEnergySeam = (energyMap: EnergyMap, { w, h }: ImageSize): Seam => {
  // The 2D array of the size of w and h, where each pixel contains the
  // seam metadata (pixel energy, pixel coordinate and previous pixel from
  // the lowest energy seam at this point).
  const seamsEnergies: (SeamPixelMeta | null)[][] = matrix<SeamPixelMeta | null>(w, h, null);

  // Populate the first row of the map by just copying the energies
  // from the energy map.
  for (let x = 0; x < w; x += 1) {
    const y = 0;
    seamsEnergies[y][x] = {
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
      let minPrevX: number = x;
      for (let i = (x - 1); i <= (x + 1); i += 1) {
        if (i >= 0 && i < w && seamsEnergies[y - 1][i].energy < minPrevEnergy) {
          minPrevEnergy = seamsEnergies[y - 1][i].energy;
          minPrevX = i;
        }
      }

      // Update the current cell.
      seamsEnergies[y][x] = {
        energy: minPrevEnergy + energyMap[y][x],
        coordinate: { x, y },
        previous: { x: minPrevX, y: y - 1 },
      };
    }
  }

  // Find where the minimum energy seam ends.
  // We need to find the tail of the lowest energy seam to start
  // traversing it from its tail to its head (from the bottom to the top).
  let lastMinCoordinate: Coordinate | null = null;
  let minSeamEnergy = Infinity;
  for (let x = 0; x < w; x += 1) {
    const y = h - 1;
    if (seamsEnergies[y][x].energy < minSeamEnergy) {
      minSeamEnergy = seamsEnergies[y][x].energy;
      lastMinCoordinate = { x, y };
    }
  }

  // Find the lowest energy seam.
  // Once we know where the tail is we may traverse and assemble the lowest
  // energy seam based on the "previous" value of the seam pixel metadata.
  const seam: Seam = [];
  if (!lastMinCoordinate) {
    return seam;
  }

  const { x: lastMinX, y: lastMinY } = lastMinCoordinate;

  // Adding new pixel to the seam path one by one until we reach the top.
  let currentSeam = seamsEnergies[lastMinY][lastMinX];
  while (currentSeam) {
    seam.push(currentSeam.coordinate);
    const prevMinCoordinates = currentSeam.previous;
    if (!prevMinCoordinates) {
      currentSeam = null;
    } else {
      const { x: prevMinX, y: prevMinY } = prevMinCoordinates;
      currentSeam = seamsEnergies[prevMinY][prevMinX];
    }
  }

  return seam;
};
```

### అతి తక్కువ energy ఉన్న seam ని తీసేయడం

అతి తక్కువ energy ఉన్న seam దొరికాక, దాన్ని ఏర్పరిచే pixels ని image నుంచి తీసేయాలి (carve చేయాలి). Seam కి కుడి వైపు ఉన్న pixels ని `1px` ఎడమకి జరపడం ద్వారా ఇది జరుగుతుంది. Performance కోసం, చివరి columns ని నిజంగా డిలీట్ చేయము. బదులుగా, rendering component resize అయిన image width దాటిన భాగాన్ని పట్టించుకోదు అంతే.

![Deleting the seam](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/60-deleting-example.png)

```typescript
// Deletes the seam from the image data.
// We delete the pixel in each row and then shift the rest of the row pixels to the left.
const deleteSeam = (img: ImageData, seam: Seam, { w }: ImageSize): void => {
  seam.forEach(({ x: seamX, y: seamY }: Coordinate) => {
    for (let x = seamX; x < (w - 1); x += 1) {
      const nextPixel = getPixel(img, { x: x + 1, y: seamY });
      setPixel(img, { x, y: seamY }, nextPixel);
    }
  });
};
```

## Objects తీసేయడం

Seam Carving algorithm తక్కువ energy pixels ఉన్న seams ని ముందు తీసేయడానికి ట్రై చేస్తుంది. ఈ విషయాన్ని మనం వాడుకోవచ్చు — కొన్ని pixels కి మనమే తక్కువ energy ఇస్తే (అంటే image మీద గీసి కొన్ని ఏరియాలని mask చేస్తే), Seam Carving algorithm మనకి ఫ్రీగా *objects removal* చేసి పెడుతుంది.

ప్రస్తుతం `getPixelEnergy()` function లో pixel energy లెక్కపెట్టడానికి `R`, `G`, `B` color channels మాత్రమే వాడుతున్నాం. కానీ color లో ఇంకా వాడని `A` (alpha, transparency) parameter కూడా ఉంది. Transparent pixels అంటే మనం తీసేయాలనుకునే pixels అని algorithm కి చెప్పడానికి transparency channel వాడొచ్చు. Transparency ని లెక్కలోకి తీసుకునే [energy function source-code](https://github.com/trekhleb/js-image-carver/blob/main/src/utils/contentAwareResizer.ts#L54) చూడొచ్చు.

Object removal కి algorithm ఎలా పనిచేస్తుందో ఇక్కడ చూడండి.

![JS IMAGE CARVER OBJECT REMOVAL DEMO](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/10-demo-02.gif)

## Issues, ఇంకా తర్వాత ఏంటి

[JS IMAGE CARVER](https://github.com/trekhleb/js-image-carver) web app నిజంగా production లో వాడేంత resizer కాదు. దీని ముఖ్య ఉద్దేశం Seam Carving algorithm తో interactive గా experiment చేయడం. కాబట్టి ముందు ముందు కూడా experiments కంటిన్యూ చేయాలనేదే plan.

[Original paper](https://perso.crans.org/frenoy/matlab2012/seamcarving.pdf) లో Seam Carving algorithm ని images చిన్నవి చేయడానికి మాత్రమే కాకుండా, **images పెద్దవి చేయడానికి (upscaling)** కూడా ఎలా వాడొచ్చో చెప్పారు. Upscaling ని **objects తీసేశాక image ని మళ్ళీ original width కి పెంచడానికి** వాడొచ్చు.

Experiment చేయడానికి ఇంకో interesting విషయం — algorithm ని **real-time** లో పనిచేసేలా చేయడం.

> ఇవన్నీ ముందు ముందు plans, కానీ ప్రస్తుతానికి image చిన్నది చేసే example మీకు interesting గా, ఉపయోగకరంగా అనిపించిందని ఆశిస్తున్నాను. దీన్ని implement చేయడానికి dynamic programming ఎలా వాడాలో కూడా మీకు ఐడియా వచ్చిందని ఆశిస్తున్నాను.
>
> మీ సొంత experiments కి all the best!
