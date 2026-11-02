# Bloom Filter

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md),
[_Русский_](README.ru-RU.md),
[_Português_](README.pt-BR.md),
[_Українська_](README.uk-UA.md)

**Bloom filter** అనేది ఒక element ఒక set లో ఉందో లేదో test చేయడానికి డిజైన్ చేసిన, తక్కువ space వాడే
probabilistic data structure. ఇది చాలా చాలా ఫాస్ట్ గా ఉండేలా, అతి తక్కువ memory వాడేలా డిజైన్ చేశారు —
దానికి బదులుగా false positives రావొచ్చు. False positive matches రావొచ్చు, కానీ false negatives రావు —
ఇంకోలా చెప్పాలంటే, query కి "బహుశా set లో ఉంది" లేదా "ఖచ్చితంగా set లో లేదు" అనే answer వస్తుంది.

"మామూలు" error లేని hashing techniques వాడితే, source data మరీ ఎక్కువ కాబట్టి memory చాలా చాలా ఎక్కువ
కావాల్సి వచ్చే applications కోసం Bloom ఈ technique ప్రతిపాదించాడు.

## Algorithm description

ఖాళీ Bloom filter అంటే `m` bits ఉన్న bit array, అన్నీ `0` గా set అయి ఉంటాయి. ఇంకా `k` వేరువేరు hash
functions define చేసి ఉండాలి — ఒక్కోటి ఒక set element ని `m` array positions లో ఒకదానికి map (hash)
చేస్తుంది, uniform random distribution వచ్చేలా. మామూలుగా `k` ఒక constant, `m` కంటే చాలా చిన్నది — `m`
అనేది కలపబోయే elements సంఖ్యకి proportional. `k` ని ఎంత పెట్టాలి, `m` proportionality constant ఎంత
అనేది filter కి ఎంత false positive rate కావాలో దాన్ని బట్టి నిర్ణయిస్తారు.

`{x, y, z}` set ని సూచించే Bloom filter example ఇది. రంగు arrows ప్రతి set element bit array లో ఏ
positions కి map అయిందో చూపిస్తాయి. Element `w`, `{x, y, z}` set లో లేదు — ఎందుకంటే అది `0` ఉన్న ఒక
bit-array position కి hash అవుతుంది. ఈ బొమ్మలో `m = 18`, `k = 3`.

![Bloom Filter](https://upload.wikimedia.org/wikipedia/commons/a/ac/Bloom_filter.svg)

## Operations

Bloom filter చేయగలిగే రెండు ముఖ్యమైన operations: _insertion_, _search_. Search లో false positives రావొచ్చు.
Deletion కుదరదు.

ఇంకోలా చెప్పాలంటే, filter లో items వేయొచ్చు. ఒక item ఇంతకుముందు వేశామా అని చెక్ చేస్తే, అది "లేదు" అని
గానీ "బహుశా" అని గానీ చెప్తుంది.

Insertion, search రెండూ `O(1)` operations.

## Filter తయారుచేయడం

ఒక fixed సైజ్ ఇచ్చి bloom filter తయారుచేస్తారు. మన example లో default length `100`. అన్ని locations
`false` తో initialize అవుతాయి.

### Insertion

Insertion సమయంలో, input కి hashes తయారుచేయడానికి కొన్ని hash functions (మన case లో `3` hash functions)
వాడతారు. ఈ hash functions indexes ఇస్తాయి. వచ్చిన ప్రతి index దగ్గర, bloom filter లో value ని `true` గా
మారుస్తాం అంతే.

### Search

Search సమయంలో, అవే hash functions ని call చేసి input ని hash చేస్తారు. తర్వాత వచ్చిన indexes _అన్నిటికీ_
bloom filter లో `true` value ఉందా అని చెక్ చేస్తాం. _అన్నిటికీ_ `true` ఉంటే, ఆ value ఇంతకుముందు bloom
filter లో వేసి ఉండొచ్చు అని తెలుస్తుంది.

కానీ, అది ఖచ్చితం కాదు — ఎందుకంటే ఇంతకుముందు వేసిన వేరే values ఆ positions ని `true` గా మార్చి ఉండొచ్చు.
ఇప్పుడు వెతుకుతున్న item వల్లే values `true` అయ్యాయి అని చెప్పలేం. ఇంతకుముందు ఒకే ఒక్క item వేస్తే తప్ప,
100% ఖచ్చితంగా చెప్పడం కుదరదు.

Hash functions ఇచ్చిన indexes కోసం bloom filter చెక్ చేసేటప్పుడు, వాటిలో ఒక్కదానికి `false` value ఉన్నా,
ఆ item ఇంతకుముందు వేయలేదు అని ఖచ్చితంగా తెలుస్తుంది.

## False Positives

False positives వచ్చే probability మూడు విషయాల మీద ఆధారపడి ఉంటుంది: bloom filter సైజ్, మనం వాడే hash
functions సంఖ్య, filter లో వేసిన items సంఖ్య.

False positive probability లెక్కపెట్టే formula:

( 1 - e <sup>-kn/m</sup> ) <sup>k</sup>

`k` = hash functions సంఖ్య

`m` = filter సైజ్

`n` = వేసిన items సంఖ్య

False positives ఎంత వరకు ఓకే అనేదాన్ని బట్టి `k`, `m`, `n` variables ఎంచుకోవాలి. Values ఎంచుకున్నాక
వచ్చే probability మరీ ఎక్కువగా ఉంటే, values మార్చి probability మళ్ళీ లెక్కపెట్టాలి.

## ఎక్కడ వాడతారు

Bloom filter ని ఒక blogging website లో వాడొచ్చు. Readers కి వాళ్ళు ఇంతకుముందు ఎప్పుడూ చూడని articles
మాత్రమే చూపించాలంటే, bloom filter perfect. Articles మీద బేస్ అయిన hashed values ని ఇది store చేయొచ్చు.
User కొన్ని articles చదివాక, వాటిని filter లో వేయొచ్చు. తర్వాత user site కి వచ్చినప్పుడు, ఆ articles ని
results నుంచి తీసేయొచ్చు.

కొన్ని articles పొరపాటున filter అయిపోవడం తప్పదు, కానీ ఆ నష్టం ఓకే. User site కి వచ్చిన ప్రతిసారి చూడటానికి
వేరే కొత్త articles ఉన్నంత వరకు, కొన్ని articles ఎప్పుడూ చూడకపోయినా పర్లేదు.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Bloom_filter)
- [Examples తో Bloom Filters](http://llimllib.github.io/bloomfilter-tutorial/)
- [False Positive Probability లెక్కపెట్టడం](https://hur.st/bloomfilter/?n=4&p=&m=18&k=3)
- [Medium లో Bloom Filters](https://blog.medium.com/what-are-bloom-filters-1ec2a50c68ff)
- [YouTube లో Bloom Filters](https://www.youtube.com/watch?v=bEmBh1HtYrw)
