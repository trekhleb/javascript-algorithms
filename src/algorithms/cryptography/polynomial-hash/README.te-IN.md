# Polynomial Rolling Hash

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

## Hash Function

ఎంత పొడవైనా ఉండే elements (*keys*) ఉన్న పెద్ద data sets ని, ఒక fixed length ఉండే
elements (*fingerprints*) ఉన్న చిన్న data sets కి map చేయడానికి **hash functions** వాడతారు.

Hashing యొక్క బేసిక్ ఉపయోగం ఏంటంటే — రెండు keys సమానమా కాదా అని, వాటి fingerprints ని
compare చేసి ఫాస్ట్ గా చెక్ చేయడం.

రెండు వేరువేరు keys కి ఒకే fingerprint వస్తే దాన్ని *collision* అంటారు. ఈ collisions ని
ఎలా handle చేస్తాం అనేది hashing వాడే చాలా applications లో చాలా ముఖ్యం.
ఫాస్ట్ గా పనిచేసే practical algorithms తయారుచేయడానికి hashing బాగా ఉపయోగపడుతుంది.

## Rolling Hash

**Rolling hash** (దీన్నే recursive hashing లేదా rolling checksum అని కూడా అంటారు) అనేది ఒక hash
function. ఇందులో input మీద ఒక window కదులుతూ ఉంటుంది, ఆ window లో ఉన్న దాన్ని hash చేస్తాం.

కొన్ని hash functions లో rolling hash ని చాలా ఫాస్ట్ గా లెక్కపెట్టొచ్చు — కొత్త
hash value కోసం ఈ data ఉంటే చాలు:

- పాత hash value,
- window నుంచి తీసేసిన పాత value,
- window లో కొత్తగా కలిపిన value.

## Polynomial String Hashing

Strings కి మంచి hash function అంటే, key లో ఏ symbols ఉన్నాయి (*multiset*) అనేదానిమీద,
ఇంకా ఆ symbols ఏ *order* లో ఉన్నాయి అనేదానిమీద — రెండిటిమీదా ఆధారపడాలి. ఇలాంటి hash functions లో
ఎక్కువగా వాడేది ఏంటంటే — string లో ఉన్న symbols ని ఒక integer variable `p` ఉన్న *polynomial* కి
coefficients లాగా చూసి, దాని value ని ఒక integer constant `M` modulo లో లెక్కపెట్టడం:

*Rabin–Karp string search algorithm* ని మామూలుగా కేవలం గుణకారాలు, కూడికలు మాత్రమే వాడే
ఒక సింపుల్ rolling hash function తో explain చేస్తారు — అదే **polynomial rolling hash**:

> H(s<sub>0</sub>, s<sub>1</sub>, ..., s<sub>k</sub>) = s<sub>0</sub> * p<sup>k-1</sup> + s<sub>1</sub> * p<sup>k-2</sup> + ... + s<sub>k</sub> * p<sup>0</sup>

ఇక్కడ `p` ఒక constant, *(s<sub>1</sub>, ... , s<sub>k</sub>)* అనేవి input
characters.

ఉదాహరణకి, digit codes ని ఒక constant యొక్క powers తో గుణించి చిన్న strings ని key numbers గా
మార్చొచ్చు. `ace` అనే మూడు letters word ని ఇలా లెక్కపెట్టి ఒక నంబర్ గా మార్చొచ్చు:

> key = 1 * 26<sup>2</sup> + 3 * 26<sup>1</sup> + 5 * 26<sup>0</sup>

`H` values మరీ పెద్దవి కాకుండా ఉండటానికి, లెక్కలన్నీ modulo `M` లో చేస్తాం.

> H(s<sub>0</sub>, s<sub>1</sub>, ..., s<sub>k</sub>) = (s<sub>0</sub> * p<sup>k-1</sup> + s<sub>1</sub> * p<sup>k-2</sup> + ... + s<sub>k</sub> * p<sup>0</sup>) mod M

Hash function కి "మంచి" properties రావాలంటే, అంటే collisions తక్కువగా రావాలంటే,
`M`, `p` parameters ని జాగ్రత్తగా ఎంచుకోవాలి.

ఈ పద్ధతిలో ఒక మంచి విషయం ఏంటంటే, input string లో ఉన్న అన్ని characters లెక్కలోకి వస్తాయి.
లెక్కపెట్టిన key value ని మామూలు పద్ధతిలోనే array index గా hash చేయొచ్చు:

```javascript
function hash(key, arraySize) {
  const base = 13;

  let hash = 0;
  for (let charIndex = 0; charIndex < key.length; charIndex += 1) {
    const charCode = key.charCodeAt(charIndex);
    hash += charCode * (base ** (key.length - charIndex - 1));
  }

  return hash % arraySize;
}
```

ఈ `hash()` method ఉండాల్సినంత ఫాస్ట్ గా లేదు. Character ని మార్చడం కాకుండా,
loop లోపల రెండు గుణకారాలు, ఒక కూడిక ఉన్నాయి. **Horner's method** వాడితే
ఒక గుణకారం తగ్గించొచ్చు:

> a<sub>4</sub> * x<sup>4</sup> + a<sub>3</sub> * x<sup>3</sup> + a<sub>2</sub> * x<sup>2</sup> + a<sub>1</sub> * x<sup>1</sup> + a<sub>0</sub> = (((a<sub>4</sub> * x + a<sub>3</sub>) * x + a<sub>2</sub>) * x + a<sub>1</sub>) * x + a<sub>0</sub>

ఇంకోలా చెప్పాలంటే:

> H<sub>i</sub> = (P * H<sub>i-1</sub> + S<sub>i</sub>) mod M

పొడవైన strings వస్తే `hash()` పనిచేయదు, ఎందుకంటే hashVal అనేది int సైజ్ దాటిపోతుంది.
గమనించండి, చివరికి key ఎప్పుడూ array size కంటే తక్కువే ఉంటుంది.
Horner's method లో ప్రతి step లోనూ modulo (%) operator వాడొచ్చు.
చివర్లో ఒక్కసారి modulo వాడినా ఇదే result వస్తుంది, కానీ ఇలా చేస్తే overflow అవ్వదు.

```javascript
function hash(key, arraySize) {
  const base = 13;

  let hash = 0;
  for (let charIndex = 0; charIndex < key.length; charIndex += 1) {
    const charCode = key.charCodeAt(charIndex);
    hash = (hash * base + charCode) % arraySize;
  }

  return hash;
}
```

Polynomial hashing కి ఒక rolling property ఉంది: string చివర్లలో symbols కలిపినా, తీసేసినా
fingerprints ని ఫాస్ట్ గా update చేయొచ్చు (కావాల్సినంత పొడవు ఉన్న, p యొక్క powers modulo M ఉన్న ఒక
array ని store చేసి పెట్టుకుంటే చాలు). బాగా పాపులర్ అయిన Rabin–Karp pattern matching algorithm ఈ property మీదే బేస్ అయింది.

## References

- [Polynomial String Hashing ఎక్కడ వాడాలి](https://www.mii.lt/olympiads_in_informatics/pdf/INFOL119.pdf)
- [uTexas లో Hashing](https://www.cs.utexas.edu/~mitra/csSpring2017/cs313/lectures/hash.html)
- [Wikipedia లో Hash Function](https://en.wikipedia.org/wiki/Hash_function)
- [Wikipedia లో Rolling Hash](https://en.wikipedia.org/wiki/Rolling_hash)
