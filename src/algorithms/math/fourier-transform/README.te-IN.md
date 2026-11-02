# Fourier Transform

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md),
[_Français_](README.fr-FR.md)

## Definitions

**Fourier Transform** (**FT**) అనేది టైమ్ మీద ఆధారపడే ఒక function (signal) ని, దాన్ని తయారుచేసే
frequencies గా విడగొడుతుంది — ఒక musical chord ని, దాంట్లో ఉన్న notes యొక్క frequencies (లేదా
pitches) గా చెప్పినట్టు.

**Discrete Fourier Transform** (**DFT**) అనేది ఒక function నుంచి సమాన దూరాల్లో తీసుకున్న finite
samples sequence ని, discrete-time Fourier transform (DTFT) నుంచి సమాన దూరాల్లో తీసుకున్న అంతే
పొడవు ఉన్న samples sequence గా మారుస్తుంది — DTFT అనేది frequency మీద ఆధారపడే complex-valued
function. DTFT ని ఏ interval లో sample చేస్తారో, అది input sequence duration కి reciprocal. Inverse DFT
అనేది ఒక Fourier series — DTFT samples ని, వాటికి సరిపోయే DTFT frequencies దగ్గర complex sinusoids కి
coefficients గా వాడుతుంది. దీనికి original input sequence కి ఉన్న sample-values నే ఉంటాయి. అందుకే DFT ని
original input sequence యొక్క frequency domain representation అంటారు. Original sequence ఒక function
యొక్క అన్ని non-zero values ని cover చేస్తే, దాని DTFT continuous (ఇంకా periodic) గా ఉంటుంది, DFT ఒక
cycle యొక్క discrete samples ఇస్తుంది. Original sequence ఒక periodic function యొక్క ఒక cycle అయితే,
DFT ఒక DTFT cycle యొక్క అన్ని non-zero values ఇస్తుంది.

Discrete Fourier transform `N` complex numbers ఉన్న ఈ sequence ని:

{x<sub>n</sub>} = x<sub>0</sub>, x<sub>1</sub>, x<sub>2</sub> ..., x<sub>N-1</sub>

ఇంకో complex numbers sequence గా మారుస్తుంది:

{X<sub>k</sub>} = X<sub>0</sub>, X<sub>1</sub>, X<sub>2</sub> ..., X<sub>N-1</sub>

దాన్ని ఇలా define చేస్తారు:

![DFT](https://wikimedia.org/api/rest_v1/media/math/render/svg/1af0a78dc50bbf118ab6bd4c4dcc3c4ff8502223)

**Discrete-Time Fourier Transform** (**DTFT**) అనేది ఒక continuous function నుంచి సమాన దూరాల్లో
తీసుకున్న samples కి వర్తించే ఒక రకమైన Fourier analysis. Discrete-time అంటే ఈ transform discrete data
(samples) మీద పనిచేస్తుంది అని — ఆ samples interval కి మామూలుగా టైమ్ units ఉంటాయి. కేవలం samples
నుంచే ఇది ఒక frequency function తయారుచేస్తుంది — అది original continuous function యొక్క continuous
Fourier transform ని periodic గా కలిపితే వచ్చేది.

**Fast Fourier Transform** (**FFT**) అనేది ఒక signal ని కొంత టైమ్ (లేదా space) పాటు sample చేసి,
దాన్ని frequency components గా విడగొట్టే algorithm. ఈ components అనేవి వేరువేరు frequencies దగ్గర
ఉండే ఒక్కో sinusoidal oscillation — ప్రతిదానికి దాని సొంత amplitude, phase ఉంటాయి.

ఈ మార్పుని కింద Diagram లో చూపించారు. Diagram లో కొలిచిన టైమ్ లో, signal లో 3 వేరువేరు ముఖ్యమైన
frequencies ఉన్నాయి.

ఒక signal ని time domain లో, frequency domain లో చూస్తే:

![FFT](https://upload.wikimedia.org/wikipedia/commons/6/61/FFT-Time-Frequency-View.png)

FFT algorithm ఒక sequence యొక్క discrete Fourier transform (DFT) ని గానీ, దాని inverse (IFFT) ని గానీ
లెక్కపెడుతుంది. Fourier analysis ఒక signal ని దాని original domain నుంచి frequency domain కి,
frequency domain నుంచి మళ్ళీ original domain కి మారుస్తుంది. DFT matrix ని sparse (ఎక్కువగా zeroes ఉండే)
factors గుణకారంగా విడగొట్టి, FFT ఈ మార్పులని ఫాస్ట్ గా లెక్కపెడుతుంది. దాంతో DFT లెక్కపెట్టే complexity ని
O(n<sup>2</sup>) నుంచి (DFT definition ని డైరెక్ట్ గా వాడితే ఇదే వస్తుంది) O(n log n) కి తగ్గిస్తుంది —
ఇక్కడ n అంటే data సైజ్.

10, 20, 30, 40, 50 Hz దగ్గర ఉన్న cosine waves మొత్తానికి discrete Fourier analysis ఇక్కడ ఉంది:

![FFT](https://upload.wikimedia.org/wikipedia/commons/6/64/FFT_of_Cosine_Summation_Function.png)

## Explanation (సింపుల్ గా అర్థం)

Fourier Transform అనేది ఇప్పటివరకు వచ్చిన అతి లోతైన ఆలోచనల్లో ఒకటి. దురదృష్టం ఏంటంటే, దాని అర్థం
కష్టమైన equations లో దాగి ఉంటుంది:

![](https://betterexplained.com/wp-content/plugins/wp-latexrender/pictures/45c088dbb767150fc0bacfeb49dd49e5.png)

ఇంకా

![](https://betterexplained.com/wp-content/plugins/wp-latexrender/pictures/faeb9c5bf2e60add63ae4a70b293c7b4.png)

Symbols లోకి దూకే ముందు, ముఖ్య ఐడియాని మనమే అనుభవించి చూద్దాం. సింపుల్ ఉదాహరణ ఇది:

- _Fourier Transform ఏం చేస్తుంది?_ ఒక smoothie (జ్యూస్) ఇస్తే, దాని recipe కనుక్కుంటుంది.
- _ఎలా?_ Smoothie ని filters గుండా పంపి, ఒక్కో ingredient ని బయటికి తీస్తుంది.
- _ఎందుకు?_ Smoothie కంటే recipe ని analyze చేయడం, compare చేయడం, మార్చడం ఈజీ.
- _Smoothie మళ్ళీ ఎలా తెచ్చుకోవాలి?_ Ingredients ని మళ్ళీ mixie లో వేయండి.

**Sinusoids గా మాత్రమే కాదు, Circles గా ఆలోచించండి**

Fourier Transform అనేది వృత్తాకార దారుల (1-d sinusoids కాదు) గురించి, ఇంకా Euler's formula అలాంటి
దారిని తయారుచేసే ఒక తెలివైన పద్ధతి:

![](https://betterexplained.com/wp-content/uploads/euler/equal_paths.png)

Circle లో తిరగడానికి imaginary exponents వాడాల్సిందేనా? అక్కర్లేదు. కానీ అది సౌకర్యంగా, compact గా
ఉంటుంది. నిజమే, మన దారిని రెండు dimensions (real, imaginary) లో కలిసి జరిగే కదలికగా కూడా చెప్పొచ్చు,
కానీ పెద్ద విషయం మర్చిపోకండి: మనం జస్ట్ ఒక circle లో తిరుగుతున్నాం అంతే.

**పూర్తి Transform ని కనుక్కోవడం**

పెద్ద ఐడియా ఏంటంటే: మన signal అంటే కొన్ని time spikes కలిసినదే! ప్రతి time spike యొక్క recipes ని
కలిపేస్తే, పూర్తి signal యొక్క recipe వచ్చేస్తుంది.

Fourier Transform ఒక్కో frequency దగ్గర recipe ని కడుతూ వెళ్తుంది:

![](https://betterexplained.com/wp-content/uploads/images/fourier-explained-20121219-224649.png)

కొన్ని notes:

- N = మన దగ్గర ఉన్న time samples సంఖ్య
- n = ఇప్పుడు చూస్తున్న sample (0 ... N-1)
- x<sub>n</sub> = టైమ్ n దగ్గర signal value
- k = ఇప్పుడు చూస్తున్న frequency (0 Hertz నుంచి N-1 Hertz వరకు)
- X<sub>k</sub> = signal లో frequency k ఎంత ఉంది (amplitude, phase — ఒక complex number)
- 1/N factor ని మామూలుగా reverse transform (frequencies నుంచి మళ్ళీ టైమ్ కి వెళ్ళేది) లోకి జరుపుతారు. అలా చేయొచ్చు, కానీ నాకు forward transform లో 1/N ఉండటమే ఇష్టం — ఎందుకంటే అది time spikes కి అసలు సైజ్ ఇస్తుంది. ఇంకా కావాలంటే రెండు transforms లోనూ 1/sqrt(N) వాడొచ్చు (forward, back రెండూ కలిపితే 1/N factor వస్తుంది).
- n/N అంటే టైమ్ లో ఎంత శాతం దాటేశాం అని. 2 _ pi _ k అంటే radians / sec లో మన speed. e^-ix అంటే వెనక్కి తిరిగే మన వృత్తాకార దారి. ఇవన్నీ కలిపితే, ఈ speed కి, ఈ టైమ్ కి మనం ఎంత దూరం కదిలాం అనేది వస్తుంది.
- Fourier Transform యొక్క అసలు equations "complex numbers ని కలపండి" అని మాత్రమే చెప్తాయి. చాలా programming languages complex numbers ని డైరెక్ట్ గా handle చేయలేవు, కాబట్టి అన్నిటినీ rectangular coordinates గా మార్చి కలపాలి.

Stuart Riffle Fourier Transform కి ఒక అద్భుతమైన వివరణ ఇచ్చాడు:

![](https://betterexplained.com/wp-content/uploads/images/DerivedDFT.png)

## References

- [Fourier Transform కి Interactive Guide](https://betterexplained.com/articles/an-interactive-guide-to-the-fourier-transform/)
- [YouTube లో Better Explained - DFT](https://www.youtube.com/watch?v=iN0VG9N2q0U&t=0s&index=77&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [YouTube లో 3Blue1Brown - FT](https://www.youtube.com/watch?v=spUNpyF58BY&t=0s&index=76&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [YouTube లో Simon Xu - FFT](https://www.youtube.com/watch?v=htCj9exbGo0&index=78&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&t=0s)
- Wikipedia
  - [FT](https://en.wikipedia.org/wiki/Fourier_transform)
  - [DFT](https://www.wikiwand.com/en/Discrete_Fourier_transform)
  - [DTFT](https://en.wikipedia.org/wiki/Discrete-time_Fourier_transform)
  - [FFT](https://www.wikiwand.com/en/Fast_Fourier_transform)
