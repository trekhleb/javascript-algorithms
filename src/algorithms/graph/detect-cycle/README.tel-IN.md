# Graphs లో Cycle కనుక్కోవడం

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Graph theory లో **cycle** అంటే edges, vertices తో ఏర్పడే ఒక path — అందులో ఒక vertex నుంచి
బయలుదేరి మళ్ళీ అదే vertex కి చేరుకోవచ్చు. Cycles లో చాలా రకాలు ఉన్నాయి, ముఖ్యమైనవి
**closed walk**, **simple cycle**.

## Definitions

**Closed walk** అంటే ఒకే vertex దగ్గర మొదలై అదే vertex దగ్గర ముగిసే vertices sequence.
ఆ sequence లో పక్కపక్కన ఉన్న ప్రతి రెండు vertices graph లో ఒకదానికొకటి adjacent గా ఉండాలి.
Directed graph లో అయితే, walk ప్రతి edge ని దాని direction లోనే దాటాలి:
అంటే edge అనేది sequence లో ముందు వచ్చే vertex నుంచి తర్వాత వచ్చే vertex వైపు ఉండాలి.
ఏ vertex నుంచి మొదలుపెడతాం అనేది ముఖ్యం కాదు: అదే cyclic edges sequence ని వేరువేరు
vertices నుంచి మొదలుపెట్టి దాటినా, అదే closed walk వస్తుంది.

**Simple cycle** ని రెండు రకాలుగా చెప్పొచ్చు — మొదలు, చివర vertex తప్ప, vertices గానీ edges గానీ
రిపీట్ అవ్వని closed walk అని; లేదా అలాంటి walk లో ఉన్న edges సెట్ అని. Directed graphs లో ఈ రెండు
definitions ఒకటే — అక్కడ simple cycles ని directed cycles అని కూడా అంటారు: ఒక walk వాడే
edges సెట్ ని బట్టే దాని vertices, edges cyclic sequence పూర్తిగా తెలిసిపోతుంది. Undirected graphs లో
ఒక cycle edges సెట్ ని రెండు directions లో ఏ వైపు నుంచైనా దాటొచ్చు, కాబట్టి ప్రతి undirected cycle కి
రెండు directed cycles వస్తాయి. Circuit అంటే vertices రిపీట్ అవ్వొచ్చు కానీ edges రిపీట్ అవ్వని
closed walk కావొచ్చు; కానీ అది simple cycle కూడా కావొచ్చు, అందుకే ఈ పదం వాడినప్పుడు దాని అర్థం
క్లియర్ గా చెప్పడం మంచిది.

## Example

![Cycles](https://upload.wikimedia.org/wikipedia/commons/e/e7/Graph_cycle.gif)

ఈ graph లో edges కి రంగులు వేసి చూపించారు: **path** `H-A-B` (ఆకుపచ్చ), closed path లేదా
**ఒక vertex రిపీట్ అయిన walk** `B-D-E-F-D-C-B` (నీలం), ఇంకా **ఏ edge గానీ vertex గానీ రిపీట్ అవ్వని cycle**
`H-D-G-H` (ఎరుపు)

### Undirected graph లో Cycle

![Undirected Cycle](https://www.geeksforgeeks.org/wp-content/uploads/cycleGraph.png)

### Directed graph లో Cycle

![Directed Cycle](https://cdncontribute.geeksforgeeks.org/wp-content/uploads/cycle.png)

## References

జనరల్ సమాచారం:

- [Wikipedia](https://en.wikipedia.org/wiki/Cycle_(graph_theory))

Undirected graphs లో cycles:

- [GeeksForGeeks లో Undirected Graph లో Cycle కనుక్కోవడం](https://www.geeksforgeeks.org/detect-cycle-undirected-graph/)
- [YouTube లో Undirected Graph లో Cycle కనుక్కునే Algorithm](https://www.youtube.com/watch?v=n_t0a_8H8VY&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)

Directed graphs లో cycles:

- [GeeksForGeeks లో Directed Graph లో Cycle కనుక్కోవడం](https://www.geeksforgeeks.org/detect-cycle-in-a-graph/)
- [YouTube లో Directed Graph లో Cycle కనుక్కునే Algorithm](https://www.youtube.com/watch?v=rKQaZuoUR4M&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
