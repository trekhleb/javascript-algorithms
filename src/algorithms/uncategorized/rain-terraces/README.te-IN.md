# Rain Terraces (Trapping Rain Water) Problem

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

ఒక elevation map (ఎత్తుల పటం) లో terraces ని సూచించే negative కాని integers ఉన్న array ఇస్తారు —
ప్రతి bar వెడల్పు `1`. వర్షం పడ్డాక ఎంత నీళ్ళు నిలుస్తాయో లెక్కపెట్టండి.

![Rain Terraces](https://www.geeksforgeeks.org/wp-content/uploads/watertrap.png)

## Examples

**Example #1**

```
Input: arr[] = [2, 0, 2]
Output: 2
Structure is like below:

| |
|_|

We can trap 2 units of water in the middle gap.
```

(మధ్యలో ఉన్న ఖాళీలో 2 units నీళ్ళు నిలుస్తాయి.)

**Example #2**

```
Input: arr[] = [3, 0, 0, 2, 0, 4]
Output: 10
Structure is like below:

     |
|    |
|  | |
|__|_| 

We can trap "3*2 units" of water between 3 an 2,
"1 unit" on top of bar 2 and "3 units" between 2 
and 4. See below diagram also.
```

(3, 2 మధ్య "3*2 units", bar 2 పైన "1 unit", 2, 4 మధ్య "3 units" నీళ్ళు నిలుస్తాయి.)

**Example #3**

```
Input: arr[] = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]
Output: 6
Structure is like below:

       | 
   |   || |
_|_||_||||||

Trap "1 unit" between first 1 and 2, "4 units" between
first 2 and 3 and "1 unit" between second last 1 and last 2.
```

(మొదటి 1, 2 మధ్య "1 unit", మొదటి 2, 3 మధ్య "4 units", చివరి నుంచి రెండో 1, చివరి 2 మధ్య "1 unit" నీళ్ళు నిలుస్తాయి.)

## Algorithm

ఒక array element కి ఎడమ, కుడి వైపు ఇంకా ఎత్తైన bars ఉంటేనే అది నీళ్ళు నిలుపుకోగలదు. ఎడమ, కుడి వైపు
bars ఎత్తులు కనుక్కుంటే, ప్రతి element లో ఎంత నీళ్ళు నిలుస్తాయో కనుక్కోవచ్చు. ఐడియా ఏంటంటే — array లో
ప్రతి element లో ఎంత నీళ్ళు నిలుస్తాయో లెక్కపెట్టడం. ఉదాహరణకి, `[3, 0, 0, 2, 0, 4]` array తీసుకుంటే,
3, 2 మధ్య "3*2 units", bar 2 పైన "1 unit", 2, 4 మధ్య "3 units" నీళ్ళు నిలుస్తాయి. పైన diagram కూడా చూడండి.

### Approach 1: Brute force

**ఐడియా**

Array లో ప్రతి element కి, వర్షం తర్వాత అది నిలుపుకోగలిగే maximum నీటి level కనుక్కుంటాం — అది
రెండు వైపులా ఉన్న bars maximum ఎత్తుల్లో తక్కువది, దాని నుంచి దాని సొంత ఎత్తు తీసేస్తే వచ్చేది.

**Steps**

- `answer = 0` తో initialize చేయండి
- Array ని ఎడమ నుంచి కుడికి iterate చేయండి:
  - `max_left = 0`, `max_right = 0` తో initialize చేయండి
  - ఇప్పటి element నుంచి array మొదలు వరకు iterate చేస్తూ update చేయండి: `max_left = max(max_left, height[j])`
  - ఇప్పటి element నుంచి array చివరి వరకు iterate చేస్తూ update చేయండి: `max_right = max(max_right, height[j])`
  - `min(max_left, max_right) − height[i]` ని `answer` కి కలపండి

**Complexity Analysis**

Time complexity: `O(n^2)`. Array లో ప్రతి element కి, ఎడమ, కుడి భాగాలని iterate చేస్తాం.

Auxiliary space complexity: `O(1)` అదనపు space.

### Approach 2: Dynamic Programming

**ఐడియా**

Brute force లో, ఆ index వరకు అతి ఎత్తైన bar సైజ్ కనుక్కోవడానికే ఎడమ, కుడి భాగాలని మళ్ళీ మళ్ళీ
iterate చేస్తాం. కానీ దీన్ని store చేసుకోవచ్చు. అదిగో, అదే dynamic programming.

కాబట్టి ప్రతి bar కి ఎడమ, కుడి వైపు అతి ఎత్తైన bar ని ముందే `O(n)` టైమ్ లో లెక్కపెట్టుకోవచ్చు. తర్వాత
ఈ ముందే లెక్కపెట్టిన values వాడి ప్రతి array element లో ఎంత నీళ్ళు ఉన్నాయో కనుక్కోవచ్చు.

ఈ concept ని ఇలా చూపించారు:

![DP Trapping Rain Water](https://leetcode.com/problems/trapping-rain-water/Figures/42/trapping_rain_water.png)

**Steps**

- ఎడమ చివర నుంచి index `i` వరకు bar maximum ఎత్తు కనుక్కుని `left_max` array లో పెట్టండి.
- కుడి చివర నుంచి index `i` వరకు bar maximum ఎత్తు కనుక్కుని `right_max` array లో పెట్టండి.
- `height` array మీద iterate చేస్తూ `answer` update చేయండి:
  - `min(max_left[i], max_right[i]) − height[i]` ని `answer` కి కలపండి.

**Complexity Analysis**

Time complexity: `O(n)`. ఒక point వరకు maximum ఎత్తులని ఒక్కోటి `O(n)` ఉండే 2 iterations తో store
చేస్తాం. చివరగా store చేసిన values వాడి `answer` ని `O(n)` లో update చేస్తాం.

Auxiliary space complexity: `O(n)` అదనపు space. Approach 1 కంటే `left_max`, `right_max` arrays కోసం
అదనపు space కావాలి.

## References

- [GeeksForGeeks](https://www.geeksforgeeks.org/trapping-rain-water/)
- [LeetCode](https://leetcode.com/problems/trapping-rain-water/solution/)
