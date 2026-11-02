# k-Nearest Neighbors Algorithm

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md),
[_Português_](README.pt-BR.md)

**k-nearest neighbors algorithm (k-NN)** అనేది ఒక supervised Machine Learning algorithm. ఇది ఒక classification algorithm — sample data వాడి ఒక sample vector ఏ class కి చెందుతుందో నిర్ణయిస్తుంది.

k-NN classification లో output అంటే ఏ class కి చెందుతుంది అని. ఒక object ని దాని neighbors ఎక్కువ votes తో classify చేస్తారు — ఆ object ని దాని `k` nearest neighbors లో ఎక్కువమంది ఏ class లో ఉన్నారో ఆ class కే ఇస్తారు (`k` అనేది ఒక positive integer, మామూలుగా చిన్నది). `k = 1` అయితే, ఆ object ని దానికి అతి దగ్గరగా ఉన్న ఒక్క neighbor class కే ఇస్తారు.

ఐడియా ఏంటంటే — ఒక distance metric ని బట్టి రెండు data points మధ్య పోలిక లెక్కపెట్టడం. దీనికి ఎక్కువగా [Euclidean distance](https://en.wikipedia.org/wiki/Euclidean_distance) వాడతారు.

![Euclidean distance between two points](https://upload.wikimedia.org/wikipedia/commons/5/55/Euclidean_distance_2d.svg)

_Image source: [Wikipedia](https://en.wikipedia.org/wiki/Euclidean_distance)_

Algorithm ఇలా ఉంటుంది:

1. Invalid data/labels లాంటి errors చెక్ చేయండి.
2. Training data లో ఉన్న అన్ని data points కి, classify చేయాల్సిన point కి మధ్య euclidean distance లెక్కపెట్టండి
3. Points distances ని వాటి classes తో సహా చిన్న నుంచి పెద్ద వరుసలో sort చేయండి
4. మొదటి `K` classes తీసుకుని, వాటిలో ఎక్కువసార్లు వచ్చిన (mode) class కనుక్కోండి — అదే అతి దగ్గరి class
5. ఆ అతి దగ్గరి class ని చెప్పండి

ఇంకా బాగా అర్థమవ్వడానికి k-NN classification visualization ఇది:

![KNN Visualization 1](https://upload.wikimedia.org/wikipedia/commons/e/e7/KnnClassification.svg)

_Image source: [Wikipedia](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm)_

Test sample (ఆకుపచ్చ చుక్క) ని నీలం squares కి గానీ ఎర్ర triangles కి గానీ classify చేయాలి. `k = 3` (గట్టి గీత circle) అయితే దాన్ని ఎర్ర triangles కి ఇస్తారు — ఎందుకంటే లోపలి circle లో `2` triangles, `1` square మాత్రమే ఉన్నాయి. `k = 5` (చుక్కల గీత circle) అయితే దాన్ని నీలం squares కి ఇస్తారు (బయటి circle లో `3` squares, `2` triangles).

ఇంకో k-NN classification example:

![KNN Visualization 2](https://media.geeksforgeeks.org/wp-content/uploads/graph2-2.png)

_Image source: [GeeksForGeeks](https://media.geeksforgeeks.org/wp-content/uploads/graph2-2.png)_

ఇక్కడ చూడొచ్చు — తెలియని points ని, అవి వేరే points కి ఎంత దగ్గరగా ఉన్నాయో దాన్ని బట్టి classify చేస్తారు.

ఒక విషయం గమనించాలి — tie (సమానం) అవ్వకుండా ఉండటానికి `K` కి odd values ఇవ్వడం మంచిది. మామూలుగా `K` ని `3` లేదా `5` గా తీసుకుంటారు.

## References

- [Wikipedia లో k-nearest neighbors algorithm](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm)
