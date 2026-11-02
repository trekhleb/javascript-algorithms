# Disjoint Set

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md),
[_Русский_](README.ru-RU.md),
[_Português_](README.pt-BR.md),
[_Українська_](README.uk-UA.md)

**Disjoint-set** data structure (దీన్నే union–find data structure లేదా merge–find set అని కూడా అంటారు)
అనేది కొన్ని elements set ని ఒకదానితో ఒకటి కలవని (non-overlapping) subsets గా విడగొట్టి ట్రాక్ చేసే data
structure. _కొత్త sets కలపడానికి_, _ఉన్న sets ని merge చేయడానికి_, ఇంకా _elements ఒకే set లో ఉన్నాయా
అని తేల్చడానికి_ దాదాపు constant-time operations ఇస్తుంది (inverse Ackermann function తో bound అయి ఉంటుంది).
చాలా ఇతర ఉపయోగాలతో పాటు (Applications section చూడండి), graph కి minimum spanning tree కనుక్కునే Kruskal's
algorithm లో disjoint-sets కీలక పాత్ర పోషిస్తాయి.

![disjoint set](https://upload.wikimedia.org/wikipedia/commons/6/67/Dsu_disjoint_sets_init.svg)

_MakeSet_ 8 singletons (ఒక్కో element ఉన్న sets) తయారుచేస్తుంది.

![disjoint set](https://upload.wikimedia.org/wikipedia/commons/a/ac/Dsu_disjoint_sets_final.svg)

కొన్ని _Union_ operations తర్వాత, కొన్ని sets కలిసిపోయాయి.

## Implementation

- [DisjointSet.js](./DisjointSet.js)
- [DisjointSetAdhoc.js](./DisjointSetAdhoc.js) - DisjointSet (లేదా UnionFind) data structure యొక్క చిన్న (ad hoc) version — దీనికి బయటి dependencies ఏమీ లేవు, coding interview లో interviewer ఒప్పుకుంటే ఈజీగా copy-paste చేసి వాడుకోవచ్చు (ఎందుకంటే JS లో చాలా data structures లేవు).

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Disjoint-set_data_structure)
- [YouTube లో Abdul Bari](https://www.youtube.com/watch?v=wU6udHRIkcc&index=14&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
