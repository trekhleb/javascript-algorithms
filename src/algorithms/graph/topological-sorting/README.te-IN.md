# Topological Sorting

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Computer science లో, directed graph యొక్క topological sort (లేదా topological ordering)
అంటే దాని vertices ని ఒక వరుసలో పెట్టడం — ఎలాగంటే, vertex `u` నుంచి vertex `v` కి ఉన్న
ప్రతి directed edge `uv` కి, ఆ వరుసలో `u` ఎప్పుడూ `v` కంటే ముందు రావాలి.

ఉదాహరణకి, graph లో vertices అంటే చేయాల్సిన పనులు (tasks) అనుకోండి, edges అంటే "ఈ పని
అయ్యాకే ఆ పని చేయాలి" అనే conditions అనుకోండి; ఇక్కడ topological ordering అంటే ఆ పనులు
చేయడానికి ఒక కరెక్ట్ వరుస అన్నమాట.

Graph లో directed cycles లేకపోతేనే topological ordering కుదురుతుంది, అంటే అది ఒక
[directed acyclic graph](https://en.wikipedia.org/wiki/Directed_acyclic_graph) (DAG) అయి ఉండాలి.
ప్రతి DAG కి కనీసం ఒక topological ordering ఉంటుంది. ఏ DAG కైనా linear time లో topological
ordering తయారుచేసే algorithms ఉన్నాయి.

![Directed Acyclic Graph](https://upload.wikimedia.org/wikipedia/commons/c/c6/Topological_Ordering.svg)

ఒక directed acyclic graph యొక్క topological ordering: ప్రతి edge వరుసలో ముందు ఉన్నదాని (పైన ఎడమ)
నుంచి వరుసలో తర్వాత ఉన్నదాని (కింద కుడి) వైపు వెళ్తుంది. ఒక directed graph కి topological ordering
ఉంటేనే అది acyclic.

## Example

![Topologic Sorting](https://upload.wikimedia.org/wikipedia/commons/0/03/Directed_acyclic_graph_2.svg)

పైన చూపించిన graph కి చాలా కరెక్ట్ topological sorts ఉన్నాయి, అందులో కొన్ని:

- `5, 7, 3, 11, 8, 2, 9, 10` (చూడటానికి ఎడమ నుంచి కుడికి, పై నుంచి కిందకి)
- `3, 5, 7, 8, 11, 2, 9, 10` (అందుబాటులో ఉన్న వాటిలో చిన్న నంబర్ vertex ముందు)
- `5, 7, 3, 8, 11, 10, 9, 2` (తక్కువ edges ఉన్నవి ముందు)
- `7, 5, 11, 3, 10, 8, 9, 2` (అందుబాటులో ఉన్న వాటిలో పెద్ద నంబర్ vertex ముందు)
- `5, 7, 11, 2, 3, 8, 9, 10` (పై నుంచి కిందకి, ఎడమ నుంచి కుడికి ట్రై చేస్తూ)
- `3, 7, 8, 5, 11, 10, 2, 9` (ఊరికే ఏదో ఒకటి)

## ఎక్కడ వాడతారు

Topological sorting ని ఎక్కువగా వాడేది — పనులు ఒకదానిమీద ఒకటి ఎలా ఆధారపడి ఉన్నాయో చూసి
**jobs లేదా tasks ని ఏ వరుసలో చేయాలో schedule చేయడానికి**. Jobs ని vertices గా చూపిస్తాం,
job `y` మొదలుపెట్టే ముందు job `x` అయిపోవాలంటే `x` నుంచి `y` కి ఒక edge పెడతాం (ఉదాహరణకి,
బట్టలు ఉతికేటప్పుడు, washing machine పని అయిపోయాకే బట్టల్ని dryer లో వేస్తాం). అప్పుడు topological sort
మనకి ఆ jobs ఏ వరుసలో చేయాలో చెప్తుంది.

ఇంకో ఉపయోగం **dependency resolution**. ప్రతి vertex ఒక package, ప్రతి edge అంటే package `a`
అనేది package 'b' మీద ఆధారపడి ఉంది అని. అప్పుడు topological sorting dependencies ని install
చేయడానికి ఒక వరుస ఇస్తుంది — ప్రతి dependency ని install చేసే ముందే దానికి కావాల్సిన packages
install అయిపోయి ఉంటాయి.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Topological_sorting)
- [YouTube లో Tushar Roy - Topological Sorting](https://www.youtube.com/watch?v=ddTC4Zovtbc&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
