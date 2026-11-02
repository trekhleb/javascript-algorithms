# Kruskal's Algorithm

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md),
[_한국어_](README.ko-KR.md)

Kruskal's algorithm అనేది ఒక minimum-spanning-tree algorithm. ఇది forest లో ఏవైనా రెండు
trees ని కలిపే, అతి తక్కువ weight ఉన్న edge ని కనుక్కుంటుంది. Graph theory లో ఇది ఒక greedy
algorithm — ఎందుకంటే connected weighted graph కి minimum spanning tree కనుక్కోడానికి,
ప్రతి step లో cost పెరిగే వరుసలో edges (arcs) కలుపుతూ వెళ్తుంది. అంటే, ప్రతి vertex ని
కలిపే ఒక tree ని తయారుచేసే edges subset ని కనుక్కుంటుంది — ఆ tree లో ఉన్న అన్ని edges
weight మొత్తం వీలైనంత తక్కువగా ఉంటుంది. Graph connected కాకపోతే, ఇది ఒక minimum spanning
forest కనుక్కుంటుంది (ప్రతి connected component కి ఒక minimum spanning tree).

![Kruskal Algorithm](https://upload.wikimedia.org/wikipedia/commons/5/5c/MST_kruskal_en.gif)

![Kruskal Demo](https://upload.wikimedia.org/wikipedia/commons/b/bb/KruskalDemo.gif)

Euclidean distance మీద బేస్ అయిన Kruskal's algorithm demo.

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
- [Wikipedia లో Kruskal's Algorithm](https://en.wikipedia.org/wiki/Kruskal%27s_algorithm)
- [YouTube లో Tushar Roy - Kruskal's Algorithm](https://www.youtube.com/watch?v=fAuF0EuZVCk&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [YouTube లో Michael Sambol - Kruskal's Algorithm](https://www.youtube.com/watch?v=71UQH7Pr9kU&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
