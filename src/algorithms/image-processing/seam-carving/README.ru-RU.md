# Изменение размеров изображения с учетом его содержимого в JavaScript

![Content-aware image resizing in JavaScript](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/01-cover-02.png)

> Доступна [английская интерактивная версия этой статьи](https://trekhleb.dev/blog/2021/content-aware-image-resizing-in-javascript/) в которой вы можете загрузить свои собственные изображения и посмотреть, как алгоритм "справляется" с ними.

## TL;DR

Написано много замечательных статей об алгоритме *Seam Carving* ("Вырезание швов"), но я не смог устоять перед соблазном самостоятельно исследовать этот элегантный, мощный и в то же время простой алгоритм и написать о своем личном опыте работы с ним. Мое внимание также привлек тот факт, что для его имплементации мы можем применить *динамическое программирование (DP)*. И, если вы, как и я, все еще находитесь на пути изучения алгоритмов, то это решение может обогатить ваш личный арсенал DP.

Итак, в этой статье я хочу сделать три вещи:

1. Предоставить вам возможность "поиграться" с алгоритмом самостоятельно при помощи **интерактивного ресайзера**.
2. Объяснить **идею алгоритма Seam Carving**.
3. Объяснить как можно **применить динамическое программирование** для имплементации алгоритма (мы будем писать на TypeScript).

### Изменение размеров изображений с учетом их содержимого

*Изменение размера изображения с учетом содержимого* (content-aware image resizing) может быть применено, когда дело доходит до изменения пропорций изображения (например, уменьшения ширины при сохранении высоты), а также когда потеря некоторых частей изображения нежелательна. Простое масштабирование изображения в этом случае исказит находящиеся в нем объекты. Для сохранения пропорций объектов при изменении пропорций изображения можно использовать [алгоритм Seam Carving](https://perso.crans.org/frenoy/matlab2012/seamcarving.pdf), который был описан *Shai Avidan* и *Ariel Shamir*.

В приведенном ниже примере показано, как ширина исходного изображения была уменьшена на 50% *с учетом содержимого изображения* (слева) и *без учета содержимого изображения* (справа, простой скейлинг). В данном случае левое изображение выглядит более естественным, так как пропорции воздушных шаров в нем были сохранены.

![Content-aware image resizing](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/01-resizing-options.png)

Идея алгоритма Seam Carving заключается в том, чтобы найти *шов* (seam, непрерывную последовательность пикселей) с наименьшим влиянием на содержание изображения, а затем его *вырезать* (carve). Этот процесс повторяется снова и снова, пока мы не получим требуемую ширину или высоту изображения. В примере ниже интуитивно видно, что пиксели воздушных шаров вносят больший "вклад" в содержание и смысл изображения, чем пиксели неба. Таким образом, сначала удаляются пиксели неба.

![JS IMAGE CARVER DEMO](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/10-demo-01.gif)

Поиск шва с наименьшей энергией (с наименьшим вкладом в содержимое изображения) является вычислительно дорогостоящей операцией (особенно для больших изображений). Для ускорения поиска шва может быть применено *динамическое программирование* (мы рассмотрим детали реализации ниже).

### Удаление объектов

Важность каждого пикселя (так называемая энергия пикселя) вычисляется исходя из его цветовой разницы (`R`, `G`, `B`, `A`) между двумя соседними пикселями. Если же мы вручную зададим некоторым пикселям низкий уровень энергии (например нарисовав маску поверх них), то алгоритм Seam Carving выполнит для нас **удаление помеченного объекта**, как говорится, "забесплатно".

![JS IMAGE CARVER OBJECT REMOVAL DEMO](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/10-demo-02.gif)

### Интерактивный ресзайзер

Для этой статьи я создал приложение [JS IMAGE CARVER](https://trekhleb.dev/js-image-carver/) (доступен также и [исходный код на GitHub](https://github.com/trekhleb/js-image-carver)), которым вы можете воспользоваться для ресайза своих изображений и увидеть в реальном времени, как работает алгоритм.

### Другие примеры ресайза

Вот еще несколько примеров того, как алгоритм справляется с более сложным фоном.

Горы на заднем плане плавно сжимаются, без видимых швов.

![Resizing demo with more complex backgrounds](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/11-demo-01.png)

То же самое и с океанскими волнами. Алгоритм сохранил волновую структуру, не искажая серферов.

![Resizing demo with more complex backgrounds](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/11-demo-02.png)

Нужно помнить, что алгоритм Seam Carving не является "волшебной таблеткой", и может не сохранить пропорции важных частей изображения в том случае, когда *большая часть пикселей выглядят как края, ребра или границы* (почти все пиксели выглядят одинаково важными с точки зрения алгоритма). В приведенном ниже примере изменение размера изображения с учетом содержимого похоже на простое масштабирование, т.к. для алгоритма все пиксели выглядят важными, и ему трудно отличить лицо Ван Гога от фона.

![Example when the algorithm does not work as expected](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/12-demo-01.png)

## Как работает алгоритм Seam Carving

Представим, что у нас есть картинка размером `1000 x 500 px`, и мы хотим уменьшить ее до `500 x 500 px` (допустим, квадратное изображение больше подходит для Instagram). В этом случае мы, возможно, захотим задать несколько **требований к процессу изменения размера**:

- *Важные части изображения должны быть сохранены* (если до ресайза на фото было 5 деревьев, то и после ресайза мы хотим увидеть все те же 5 деревьев).
- *Пропорции важных частей изображения должны быть сохранены* (круглые колеса автомобиля не должны стать овальными после ресайза).

Чтобы избежать изменения важных частей изображения можно найти **непрерывную последовательность пикселей (шов)**, которая будет идти от верхней границы к нижней и иметь *наименьший вклад в содержимое* изображения (шов, который не проходит через важные части изображения), а затем удалить его. Удаление шва сожмет изображение на один пиксель. Далее надо повторять этот шаг до тех пор, пока изображение не станет нужной ширины.

Вопрос в том, как определить *важность пикселя* и его вклад в содержание изображения (в оригинальной статье авторы используют термин **энергия пикселя**). Один из способов это сделать — рассматривать все пиксели, образующие края (границы, ребра), как важные. В случае, если пиксель является частью ребра, его цвет будет отличаться от соседей (левого и правого пикселей).

![Pixels color difference](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/30-pixel-energy-comparison.png)

Предполагая, что цвет пикселя представлен *4-мя* числами (`R` - красный, `G` - зеленый, `B` - синий, `A` - альфа, прозрачность), мы можем использовать следующую формулу для вычисления разницы в цвете (энергии пикселя):

![Pixel energy formula](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/20-energy-formula.png)

Где:

- `mEnergy` - *Энергия* (важность) *среднего* пикселя (`[0..626]` если округлить)
- `lR` - *Красный* цветовой канал *левого* пикселя (`[0..255]`)
- `mR` - *Красный* цветовой канал *среднего* пикселя (`[0..255]`)
- `rR` - *Красный* цветовой канал *правого* пикселя (`[0..255]`)
- `lG` - *Зеленый* цветовой канал *левого* пикселя (`[0..255]`)
- и так далее...

В приведенной выше формуле мы пока не используем альфа-канал (прозрачность), предполагая, что изображение не содержит прозрачные пиксели. Позже мы будем использовать альфа-канал для маскировки и удаления объектов.

![Example of pixel energy calculation](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/30-pixel-energy-calculation-example.png)

Поскольку мы знаем, как найти энергию одного пикселя, мы можем вычислить так называемую **энергетическую карту**, которая будет содержать энергии каждого пикселя изображения. На каждом шаге изменения размера изображения карту энергий необходимо пересчитывать (по крайней мере частично, подробнее об этом ниже), и она будет иметь тот же размер, что и изображение.

Например, на 1-м шаге у нас будет изображение размером `1000 x 500` и энергетическая карта размером `1000 x 500`. На 2-м шаге изменения размера мы удалим шов с изображения и пересчитаем карту энергий на основе нового уменьшенного изображения. Таким образом, мы получим изображение размером `999 x 500` и карту энергий размером `999 x 500`.

Чем выше энергия пикселя, тем больше вероятность того, что он является частью ребра, важен для содержимого изображения и тем меньше вероятность того, что нам потребуется его удалить.

Для визуализации карты энергий мы можем присвоить более яркий цвет пикселям с большей энергией и более темные цвета пикселям с меньшей энергией. Вот как может выглядеть часть карты энергий. Вы можете увидеть светлую линию, которая представляет край и которую мы хотим сохранить при изменении размера.

![Energy map sketch](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/30-energy-map-padding.png)

Вот реальный пример энергетической карты для изображения, которое вы видели выше (с воздушными шарами).

![Energy map example](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/40-energy-map.png)

Вы можете загрузить свое изображение и посмотреть, как будет выглядеть энергетическая карта в [интерактивной версии статьи](https://trekhleb.dev/blog/2021/content-aware-image-resizing-in-javascript/).

Мы можем использовать энергетическую карту, чтобы найти швы (один за другим) с наименьшей энергией и тем самым решить, какие пиксели в конечном итоге должны быть удалены.

![Searching the seam](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/41-seam-search.png)

Поиск шва с наименьшими затратами энергии не является тривиальной задачей и требует перебора множества возможных комбинаций пикселей. Мы применим динамическое программирование для оптимизации поиска шва.

В примере ниже вы можете увидеть карту энергий с первым найденным для нее швом с наименьшей энергией.

![Energy map example with seam](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/40-energy-map-with-seam.png)

В приведенных выше примерах мы уменьшали ширину изображения. Аналогичный подход может быть использован для уменьшения высоты изображения. Для этого нам нужно:

- начать использовать соседей *сверху* и *снизу*, а не *слева* и *справа*, для вычисления энергии пикселя
- при поиске шва нам нужно двигаться *слева* *направо*, а не *сверху* *вниз*.

## Реализация алгоритма на TypeScript

> Исходный код и функции, упомянутые ниже, можно найти в репозитории [js-image-carver](https://github.com/trekhleb/js-image-carver).

Для реализации алгоритма мы будем использовать TypeScript. Если вам нужна версия на JavaScript, вы можете игнорировать (удалить) определения типов и их использование.

Для простоты примеров мы напишем код только для уменьшения *ширины* изображения.

### Уменьшение ширины с учетом содержимого изображения (исходная функция)

Для начала определим некоторые общие типы, которые мы будем использовать при реализации алгоритма.

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

Для имплементации алгоритма нам необходимо выполнить следующие шаги:

1. Рассчитать **карту энергии** для текущей версии изображения.
2. Найти **шов** с наименьшей энергией на основе карты энергий (здесь мы применим динамическое программирование).
3. **Удалить шов** с наименьшей энергией из изображения.
4. **Повторять** до тех пор, пока ширина изображения не будет уменьшена до нужного значения.

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

Изображение, которому необходимо изменить размер, передается в функцию в формате [ImageData](https://developer.mozilla.org/en-US/docs/Web/API/ImageData). Вы можете отобразить изображение на canvas-е, а затем извлечь ImageData из того же canvas-а следующим образом:

```javascript
const ctx = canvas.getContext('2d');
const imgData = ctx.getImageData(0, 0, imgWidth, imgHeight);
```

> Загрузка и отрисовка изображений в JavaScript выходит за рамки данной статьи, но вы можете найти полный исходный код того, как это можно сделать с помощью React в репозитории [js-image-carver](https://github.com/trekhleb/js-image-carver).

Теперь, пошагово реализуем функции `calculateEnergyMap()`, `findLowEnergySeam()` и `deleteSeam()`.

### Расчет энергии пикселя

Для расчета воспользуемся формулой разницы цветов, описанной выше. Для левой и правой краев изображения (когда нет левого или правого соседей) мы игнорируем соседей и не учитываем их при расчете энергии.

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

### Расчет энергетической карты

Изображение, с которым мы работаем, имеет формат [ImageData](https://developer.mozilla.org/en-US/docs/Web/API/ImageData). Это означает, что все пиксели (и их цвета) хранятся в одномерном массиве [Uint8ClampedArray](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8ClampedArray). Для удобства чтения введем пару вспомогательных функций, которые позволят работать с массивом Uint8ClampedArray как с *2D* матрицей.

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

Для вычисления карты энергии мы проходим через каждый пиксель изображения и вызываем для него описанную ранее функцию `getPixelEnergy()`.

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

> Карта энергии будет пересчитываться при каждой итерации изменения размера. Это значит, что она будет пересчитываться, скажем, 500 раз, если нам нужно будет уменьшить изображение на 500 пикселей, что выглядит неоптимально. Чтобы ускорить вычисление карты энергии на 2-м, 3-м и последующих этапах, мы можем пересчитать энергию только для тех пикселей, которые расположены вокруг шва, который будет удален. Для простоты эта оптимизация здесь пропущена, но пример с исходным кодом можно найти в репозитории [js-image-carver](https://github.com/trekhleb/js-image-carver).

### Нахождение шва с минимальной энергией (применяем динамическое программирование)

> В статье [Dynamic Programming vs Divide-and-Conquer](https://trekhleb.dev/blog/2018/dynamic-programming-vs-divide-and-conquer/) я описывал некоторые аспекты динамического программирования на примере нахождения "расстояния Левенштейна" (преобразование одной строки в другую). Возможно она будет полезна для ознакомления.

Проблема, которую нам необходимо решить заключается в нахождении пути (шва) на энергетической карте, который идет от верхней границы изображения к нижней и имеет минимальную энергию (сумма энергий пикселей, составляющих шов должна быть минимальной).

#### "Наивный" подход (naive)

Прямолинейный ("наивный") подход — перебрать все возможные пути один за другим.

![The naive approach](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/50-naive-approach.png)

Двигаясь сверху вниз, для каждого пикселя у нас есть 3 варианта (↙︎ идти вниз-влево, ↓ вниз, ↘︎ идти вниз-вправо). Это дает нам временную сложность `O (w * 3 ^ h)` или просто `O (3 ^ h)`, где `w` и` h` - ширина и высота изображения. Такой подход выглядит неоптимальным.

#### "Жадный" подход (greedy)

Жадный подход — выбирать следующий пиксель как пиксель с наименьшей энергией, надеясь, что результирующая энергия шва будет наименьшей.

![The greedy approach](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/51-greedy-approach.png)

Жадный подход приведет нас к не самому худшему решению, но он не сможет гарантировать, что мы найдем наилучшее доступное решение. На картинке выше видно, как мы выбрали `5` вместо `10` и пропустили цепочку оптимальных пикселей.

Плюс этого подхода в том, что он быстрый и имеет временную сложность `O(w + h)`, где `w` и `h` - это ширина и высота изображения. В этом случае плата за скорость — низкое качество ресайза (много искажений). Временная сложность обусловлена тем, что нужно найти минимальное значение в первом ряду (обход `w` ячеек), а затем исследовать только 3 соседних пикселя для каждого ряда (обход `h` рядов).

#### Используем динамическое программирование

Вы, наверное, заметили, что в наивном подходе мы снова и снова суммировали одни и те же энергии пикселей, вычисляя энергию образовавшихся швов.

![Repeated problems](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/52-dp-repeated-problems.png)

В примере выше видно, что для первых двух швов мы повторно используем энергию более короткого шва (который имеет энергию `235`). Вместо одной операции `235 + 70` для вычисления энергии 2-го шва мы делаем четыре операции `(5 + 0 + 80 + 150) + 70`.

> Тот факт, что мы повторно используем энергию предыдущего шва для вычисления энергии текущего шва, может быть применен рекурсивно ко всем более коротким швам до самого верхнего 1-го ряда. Когда у нас есть такие перекрывающиеся под-проблемы, [это признак](https://trekhleb.dev/blog/2018/dynamic-programming-vs-divide-and-conquer/), что общая задача *может* быть оптимизирована с использованием динамического программирования.

Таким образом, мы можем **сохранить энергию текущего шва** для конкретного пикселя в дополнительной таблице `samsEnergies`, чтобы повторно использовать ее при расчете энергии следующих швов (таблица `samsEnergies` будет иметь тот же размер, что и энергетическая карта и само изображение).

Обратите также внимание, что для большинства пикселей в изображении (например, для левого нижнего) мы можем иметь *несколько* значений энергий предыдущих швов.

![What seam to choose](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/53-dp-what-to-choose.png)

Так как мы ищем шов с наименьшей результирующей энергией, имеет смысл выбирать и предыдущий шов с наименьшей результирующей энергией.

![Seams energies example](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/56-dp-seams-energies-example.png)

Как правило, у нас есть три возможных предыдущих шва, которые текущий пиксель продолжает:

![Three options to choose from](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/55-dp-three-options.png)

Можем посмотреть на это с такой стороны:

- Ячейка `[1][x]`: содержит наименьшую возможную энергию шва, который начинается где-то в ряду `[0][?] ` и заканчивается в ячейке `[1][x]`.
- **Текущая ячейка** `[2][3]`: содержит наименьшую возможную энергию шва, который начинается где-то в ряду `[0][?] ` и заканчивается в ячейке `[2][3]`. Для вычисления нужно суммировать энергию текущего пикселя `[2][3]` (из энергетической карты) с `min(seam_energy_1_2, seam_energy_1_3, seam_energy_1_4)`.

Если мы заполним таблицу `ShesamsEnergies` полностью, то минимальное число в нижнем ряду будет наименьшей возможной энергией шва.

Попробуем заполнить несколько ячеек этой таблицы, чтобы посмотреть, как это работает.

![Seams energies map traversal](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/57-dp-seams-energies-traversal.png)

После заполнения таблицы `ShesamsEnergies` видно, что в нижнем ряду пиксель с самой низкой энергией имеет значение `50`. Для удобства во время генерации `samsEnergies` для каждого пикселя мы можем сохранить не только энергию шва, но и координаты предыдущего шва с наименьшей энергией. Это даст нам возможность легко восстанавливать траекторию шва снизу вверх.

Временная сложность DP подхода составит `O(w * h)`, где `w` и `h` - это ширина и высота изображения. Обусловлена она тем, что нужно вычислить энергии для *всех* пикселей изображения.

Вот пример того, как эта логика может быть реализована:

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

  // Find the lowest energy energy seam.
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

### Удаление шва с минимальной энергией

Как только мы нашли шов с наименьшей суммарной энергией, нам нужно удалить (вырезать) пиксели, которые образуют его из изображения. Удаление происходит путем смещения пикселей справа от шва на `1px` влево. Из соображений производительности мы не будем удалять крайний столбик пикселей. Вместо этого, компонент, отвечающий за отрисовку уменьшенного изображения просто проигнорирует ту часть изображения, которая лежит за пределами обрезанной ширины.

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

## Удаление объектов с изображения

Seam Carving алгоритм пытается сначала удалить швы, состоящие из низкоэнергетических пикселей. Мы могли бы использовать этот факт и, присвоив низкую энергию некоторым пикселям вручную (например, нарисовав на изображении маску), мы могли бы заставить алгоритм удалить отмеченные пиксели (*объекты*).

В настоящее время в функции `getPixelEnergy()` мы используем только каналы цветов `R`, `G`, `B` для вычисления энергии пикселей. Но есть еще и параметр `A` (альфа, прозрачность), который мы не использовали. Мы можем использовать канал прозрачности, чтобы "сказать" алгоритму, что прозрачные пиксели — это те пиксели, которые мы хотим удалить. Вы можете ознакомиться с [исходным кодом функции getPixelEnergy()](https://github.com/trekhleb/js-image-carver/blob/main/src/utils/contentAwareResizer.ts#L54), которая учитывает прозрачность.

Вот как при этом будет выглядеть удаление объектов:

![JS IMAGE CARVER OBJECT REMOVAL DEMO](https://raw.githubusercontent.com/trekhleb/trekhleb.github.io/master/src/posts/2021/content-aware-image-resizing-in-javascript/assets/10-demo-02.gif)

## Проблемы алгоритма и дальнейшие планы

Приложение [JS IMAGE CARVER](https://github.com/trekhleb/js-image-carver) далеко от идеала и не является приложением production-ready качества. Основной его целью была возможность интерактивного экспериментирования с алгоритмом. Поэтому в дальнейших планах — использовать его именно для экспериментов.

В [оригинальной статье](https://perso.crans.org/frenoy/matlab2012/seamcarving.pdf) описывается, как алгоритм может быть использован не только для уменьшения, но и для **увеличения изображения**. Увеличение (расширение) изображения, в свою очередь, может быть использовано для **автоматического расширения изображения до его исходной ширины после удаления объектов**.

Еще одной интересной областью экспериментов может быть попытка ускорить алгоритм, чтобы он работал в режиме **реального времени**.

> Таковы планы на будущее, но пока, надеюсь, пример с уменьшением изображения был интересен и полезен для вас. Также надеюсь, что вам было интересно увидеть применение динамического программирования в задачах, приближенных к реальности.
>
> Удачи с вашими собственными экспериментами!
