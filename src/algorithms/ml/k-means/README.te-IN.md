# k-Means Algorithm

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md),
[_Português_](README.pt-BR.md)

**k-Means algorithm** అనేది ఒక unsupervised Machine Learning algorithm. ఇది ఒక clustering algorithm — vectors dimensions మధ్య ఉన్న పోలికని బట్టి sample data ని groups గా చేస్తుంది.

k-Means classification లో, output అనేది ప్రతి vector కి ఇచ్చిన classes సెట్. ప్రతి cluster location ని నిరంతరం optimize చేస్తూ ఉంటారు — ఎందుకంటే ప్రతి cluster కి కరెక్ట్ location రావాలి, అది ప్రతి group ని క్లియర్ గా చూపించాలి.

ఐడియా ఏంటంటే — cluster location కి, data vectors కి మధ్య పోలిక (similarity) లెక్కపెట్టి, దాన్ని బట్టి clusters ని మళ్ళీ కేటాయించడం. దీనికి ఎక్కువగా [Euclidean distance](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/euclidean-distance) వాడతారు.

![Euclidean distance between two points](https://upload.wikimedia.org/wikipedia/commons/5/55/Euclidean_distance_2d.svg)

_Image source: [Wikipedia](https://en.wikipedia.org/wiki/Euclidean_distance)_

Algorithm ఇలా ఉంటుంది:

1. Invalid/సరిగ్గా లేని data లాంటి errors చెక్ చేయండి
2. `k` cluster locations ని మొదటి/random `k` points తో initialize చేయండి
3. ప్రతి data point కి ప్రతి cluster నుంచి దూరం లెక్కపెట్టండి
4. ప్రతి data point కి, దానికి అతి దగ్గరగా ఉన్న cluster label నే ఇవ్వండి
5. ప్రతి cluster లో ఉన్న data points ని బట్టి దాని centroid (మధ్య బిందువు) లెక్కపెట్టండి
6. Centroid locations మారుతున్నంత వరకు పైన steps అన్నీ మళ్ళీ మళ్ళీ చేయండి

ఇంకా బాగా అర్థమవ్వడానికి k-Means clustering visualization ఇది:

![KNN Visualization 1](https://upload.wikimedia.org/wikipedia/commons/e/ea/K-means_convergence.gif)

_Image source: [Wikipedia](https://en.wikipedia.org/wiki/K-means_clustering)_

వేరువేరు data points sets మధ్య ఇంకా బాగా తేడా తీసుకురావడానికి centroids నిరంతరం కదులుతూ ఉంటాయి. చూడొచ్చు — కొన్ని iterations తర్వాత, iterations మధ్య centroids లో తేడా చాలా తక్కువగా ఉంటుంది. ఉదాహరణకి iterations `13`, `14` మధ్య తేడా చాలా చిన్నది — ఎందుకంటే అక్కడ optimizer అంచుల దగ్గర ఉన్న cases ని సరిచేస్తోంది.

## Code Examples

- [kMeans.js](./kMeans.js)
- [kMeans.test.js](./__test__/kMeans.test.js) (test cases)

## References

- [Wikipedia లో k-Means algorithm](https://en.wikipedia.org/wiki/K-means_clustering)
