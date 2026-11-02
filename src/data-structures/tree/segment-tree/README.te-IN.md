# Segment Tree

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md),
[_Português_](README.pt-BR.md)

Computer science లో **segment tree** (దీన్నే statistic tree అని కూడా అంటారు) అనేది intervals లేదా
segments గురించి సమాచారం store చేయడానికి వాడే tree data structure. Store చేసిన segments లో ఏవి ఒక
point ని కలిగి ఉన్నాయో query చేయడానికి ఇది ఉపయోగపడుతుంది. సూత్రప్రాయంగా ఇది static structure; అంటే,
ఒకసారి కట్టాక దీన్ని మార్చలేం. దీనిలాంటిదే ఇంకో data structure interval tree.

Segment tree ఒక binary tree. Tree root మొత్తం array ని సూచిస్తుంది. Root యొక్క ఇద్దరు children array
మొదటి సగం, రెండో సగం ని సూచిస్తారు. అలాగే, ప్రతి node children ఆ node కి సంబంధించిన array యొక్క రెండు
సగాలని సూచిస్తారు.

Tree ని కింద నుంచి పైకి (bottom up) కడతాం — ప్రతి node value దాని children values యొక్క "minimum"
(లేదా ఇంకేదైనా function). దీనికి `O(n log n)` టైమ్ పడుతుంది. చేసే operations సంఖ్య tree ఎత్తు, అది
`O(log n)`. Range queries చేయడానికి, ప్రతి node query ని రెండు భాగాలుగా విడగొడుతుంది — ఒక్కో child కి
ఒక sub-query. ఒక query ఒక node యొక్క subarray మొత్తాన్ని కవర్ చేస్తే, ఆ node దగ్గర ముందే లెక్కపెట్టిన
value వాడొచ్చు. ఈ optimisation తో, కేవలం `O(log n)` minimum operations మాత్రమే జరుగుతాయి అని prove చేయొచ్చు.

![Min Segment Tree](https://www.geeksforgeeks.org/wp-content/uploads/RangeMinimumQuery.png)

![Sum Segment Tree](https://www.geeksforgeeks.org/wp-content/uploads/segment-tree1.png)

## ఎక్కడ వాడతారు

Segment tree అనేది కొన్ని array operations ని — ముఖ్యంగా range queries ఉన్నవాటిని — ఫాస్ట్ గా చేయడానికి
డిజైన్ చేసిన data structure.

Computational geometry, geographic information systems రంగాల్లో segment tree ని వాడతారు.

ఇప్పటి Segment Tree implementation లో ఏ binary (రెండు input params ఉన్న) function నైనా ఇవ్వొచ్చు,
కాబట్టి చాలా రకాల functions కి range query చేయొచ్చు. Tests లో SegmentTree మీద `min`, `max`, `sum`
range queries చేసే examples చూడొచ్చు.
 
## References

- [Wikipedia](https://en.wikipedia.org/wiki/Segment_tree)
- [YouTube](https://www.youtube.com/watch?v=ZBHKZF5w4YU&index=65&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [GeeksForGeeks](https://www.geeksforgeeks.org/segment-tree-set-1-sum-of-given-range/)
