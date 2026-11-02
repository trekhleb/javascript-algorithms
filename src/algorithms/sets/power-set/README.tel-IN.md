# Power Set

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

ఒక set `S` యొక్క Power set అంటే `S` యొక్క అన్ని subsets ఉన్న set — empty set, `S` తో సహా.
Set `S` యొక్క power set ని `P(S)` అని రాస్తారు.

ఉదాహరణకి `{x, y, z}` కి subsets ఇవి:

```text
{
  {}, // (also denoted empty set ∅ or the null set)
  {x},
  {y},
  {z},
  {x, y},
  {x, z},
  {y, z},
  {x, y, z}
}
```

![Power Set](https://www.mathsisfun.com/sets/images/power-set.svg)

Set `{x, y, z}` యొక్క power set elements ని, ఒకదాంట్లో ఒకటి ఉండటం (inclusion) ని బట్టి వరుసలో
పెడితే ఇలా చూపించొచ్చు:

![](https://upload.wikimedia.org/wikipedia/commons/e/ea/Hasse_diagram_of_powerset_of_3.svg)

**Subsets సంఖ్య**

`S` అనేది `|S| = n` elements ఉన్న finite set అయితే, `S` యొక్క subsets సంఖ్య `|P(S)| = 2^n`.
`2^S` notation కి ఇదే కారణం — దీన్ని సింపుల్ గా ఇలా చూపించొచ్చు:

> ముందు `S` లో elements ని ఏదో ఒక వరుసలో పెట్టండి. `S` యొక్క ఏ subset నైనా `{γ1, γ2, ..., γn}`
format లో రాస్తాం, ఇక్కడ `γi , 1 ≤ i ≤ n` కి `0` గానీ `1` గానీ value ఉండొచ్చు. `γi = 1` అయితే,
`S` లో `i`-th element ఆ subset లో ఉంది; లేకపోతే, `i`-th element subset లో లేదు. `γi ∈ {0, 1}`
కాబట్టి, ఇలా తయారుచేయగలిగే వేరువేరు subsets సంఖ్య `2^n` అని క్లియర్ గా తెలుస్తుంది.

## Algorithms

### Bitwise Solution

`0` నుంచి `2^n` range లో ఉన్న ప్రతి నంబర్ binary representation మనకి కావాల్సిందే చేస్తుంది: దాని
bits (`0` లేదా `1`) తో set లో సంబంధిత element ని కలపాలా వద్దా అని చెప్తుంది. ఉదాహరణకి, set
`{1, 2, 3}` కి binary నంబర్ `0b010` అంటే ఇప్పటి set లో `2` మాత్రమే కలపాలి అని.

|       | `abc` | Subset        |
| :---: | :---: | :-----------: |
| `0`   | `000` | `{}`          |
| `1`   | `001` | `{c}`         |
| `2`   | `010` | `{b}`         |
| `3`   | `011` | `{c, b}`      |
| `4`   | `100` | `{a}`         |
| `5`   | `101` | `{a, c}`      |
| `6`   | `110` | `{a, b}`      |
| `7`   | `111` | `{a, b, c}`   |

> Bitwise solution కోసం [bwPowerSet.js](./bwPowerSet.js) file చూడండి.

### Backtracking Solution

Backtracking approach లో set లో next element ని subset లో కలపడానికి నిరంతరం ట్రై చేస్తాం, దాన్ని
గుర్తుపెట్టుకుని, తర్వాత తీసేసి, next element తో కూడా అలాగే ట్రై చేస్తాం.

> Backtracking solution కోసం [btPowerSet.js](./btPowerSet.js) file చూడండి.

### Cascading Solution

Power Set తయారుచేయడానికి బహుశా ఇదే అన్నిటికంటే సింపుల్ solution.

ఒక empty set తో మొదలుపెడతాం:

```text
powerSets = [[]]
```

ఇప్పుడు, ఇలా అనుకుందాం:

```text
originalSet = [1, 2, 3]
```

originalSet లో 1st element ని ఇప్పటికే ఉన్న అన్ని sets కి కలుపుదాం:

```text
[[]] ← 1 = [[], [1]]
```

2nd element ని ఇప్పటికే ఉన్న అన్ని sets కి కలుపుతున్నాం:

```text
[[], [1]] ← 2 = [[], [1], [2], [1, 2]]
```

3rd element ని ఇప్పటికే ఉన్న అన్ని sets కి కలుపుతున్నాం:

```
[[], [1], [2], [1, 2]] ← 3 = [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
```

`originalSet` లో మిగతా elements కి కూడా ఇలాగే. ప్రతి iteration లో sets సంఖ్య రెట్టింపు అవుతుంది, కాబట్టి `2^n` sets వస్తాయి.

> Cascading solution కోసం [caPowerSet.js](./caPowerSet.js) file చూడండి.

## References

* [Wikipedia](https://en.wikipedia.org/wiki/Power_set)
* [Math is Fun](https://www.mathsisfun.com/sets/power-set.html)
