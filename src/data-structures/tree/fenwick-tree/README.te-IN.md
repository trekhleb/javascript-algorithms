# Fenwick Tree / Binary Indexed Tree

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md),
[_Português_](README.pt-BR.md)

**Fenwick tree** లేదా **binary indexed tree** అనేది నంబర్ల table లో elements ని ఫాస్ట్ గా update
చేయగలిగే, prefix sums (మొదటి నుంచి ఒక point వరకు మొత్తం) ఫాస్ట్ గా లెక్కపెట్టగలిగే data structure.

మామూలు flat array తో పోలిస్తే, Fenwick tree రెండు operations మధ్య చాలా బెటర్ balance ఇస్తుంది: element
update, prefix sum లెక్క. `n` నంబర్లు ఉన్న flat array లో, elements ని గానీ prefix sums ని గానీ store
చేయొచ్చు. మొదటి case లో prefix sums లెక్కపెట్టడానికి linear time పడుతుంది; రెండో case లో array elements
update చేయడానికి linear time పడుతుంది (రెండు cases లోనూ ఇంకో operation constant time లో చేయొచ్చు).
Fenwick trees తో రెండు operations `O(log n)` టైమ్ లో చేయొచ్చు. నంబర్లని ఒక tree గా చూపించడం వల్ల ఇది
కుదురుతుంది — ప్రతి node value అంటే ఆ subtree లో ఉన్న నంబర్ల మొత్తం. ఈ tree structure వల్ల కేవలం
`O(log n)` node accesses తో operations చేయొచ్చు.

## Implementation Notes

Binary Indexed Tree ని ఒక array గా చూపిస్తారు. Binary Indexed Tree లో ప్రతి node, ఇచ్చిన array లో కొన్ని
elements మొత్తాన్ని store చేస్తుంది. Binary Indexed Tree సైజ్ `n`, ఇక్కడ `n` అంటే input array సైజ్. ఇప్పటి
implementation లో ఈజీగా ఉండటానికి సైజ్ `n+1` వాడాం. అన్ని indexes 1 నుంచి మొదలవుతాయి (1-based).

![Binary Indexed Tree](https://www.geeksforgeeks.org/wp-content/uploads/BITSum.png)

కింద బొమ్మలో, `[1, 2, 3, 4, 5]` array కి ఒక్కొక్కటిగా insert చేస్తూ binary indexed tree తయారుచేయడాన్ని
animated example గా చూడొచ్చు.

![Fenwick Tree](https://upload.wikimedia.org/wikipedia/commons/d/dc/BITDemo.gif)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Fenwick_tree)
- [GeeksForGeeks](https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/)
- [YouTube](https://www.youtube.com/watch?v=CWDQJGaN1gY&index=18&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
