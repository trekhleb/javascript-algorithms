# Prim's Algorithm

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Computer science లో **Prim's algorithm** అనేది weighted undirected graph కి minimum
spanning tree కనుక్కునే ఒక greedy algorithm.

ఈ algorithm ఏదో ఒక starting vertex నుంచి మొదలుపెట్టి, ఒక్కో vertex కలుపుతూ ఈ tree ని
కడుతుంది. ప్రతి step లో, tree నుంచి ఇంకో vertex కి ఉన్న connections లో అతి చీప్ (తక్కువ weight)
connection ని కలుపుతుంది.

![Prim's Algorithm](https://upload.wikimedia.org/wikipedia/commons/f/f7/Prim%27s_algorithm.svg)

Vertex `A` నుంచి మొదలయ్యే Prim's algorithm. మూడో step లో, edges `BD`, `AB` రెండిటికీ
weight `2` ఉంది, కాబట్టి `BD` ని ఊరికే ఎంచుకున్నాం. ఆ step తర్వాత, `AB` ని ఇక tree లో
కలపలేం — ఎందుకంటే అది ఇప్పటికే tree లో ఉన్న రెండు nodes ని కలుపుతుంది.

## Minimum Spanning Tree

**Minimum spanning tree** (MST) లేదా minimum weight spanning tree అంటే — connected,
edge-weighted (un)directed graph లో అన్ని vertices ని కలిపే edges subset. అందులో ఒక్క cycle
కూడా ఉండదు, ఇంకా edges weight మొత్తం వీలైనంత తక్కువగా ఉంటుంది. అంటే, edge weights మొత్తం
అతి చిన్నగా ఉండే spanning tree. ఇంకా జనరల్ గా చెప్పాలంటే, ఏ edge-weighted undirected graph కైనా
(connected కాకపోయినా) ఒక minimum spanning forest ఉంటుంది — అది దాని connected components
యొక్క minimum spanning trees అన్నీ కలిపితే వచ్చేది.

![Minimum Spanning Tree](https://upload.wikimedia.org/wikipedia/commons/d/d2/Minimum_spanning_tree.svg)

ఒక planar graph, దాని minimum spanning tree. ప్రతి edge మీద దాని weight రాసి ఉంది —
ఇక్కడ అది దాదాపు ఆ edge పొడవుకి proportional గా ఉంది.

![Minimum Spanning Tree](https://upload.wikimedia.org/wikipedia/commons/c/c9/Multiple_minimum_spanning_trees.svg)

ఒక graph కి ఒకటి కంటే ఎక్కువ minimum spanning trees ఉండొచ్చు అని ఈ బొమ్మ చూపిస్తుంది.
బొమ్మలో graph కింద ఉన్న రెండు trees, ఆ graph కి వచ్చే రెండు possible minimum spanning trees.

## References

- [Wikipedia లో Minimum Spanning Tree](https://en.wikipedia.org/wiki/Minimum_spanning_tree)
- [Wikipedia లో Prim's Algorithm](https://en.wikipedia.org/wiki/Prim%27s_algorithm)
- [YouTube లో Tushar Roy - Prim's Algorithm](https://www.youtube.com/watch?v=oP2-8ysT3QQ&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [YouTube లో Michael Sambol - Prim's Algorithm](https://www.youtube.com/watch?v=cplfcGZmX7I&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
