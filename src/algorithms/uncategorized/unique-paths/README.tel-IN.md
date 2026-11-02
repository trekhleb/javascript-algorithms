# Unique Paths Problem

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

ఒక robot `m x n` grid లో పై-ఎడమ మూలలో ఉంది (కింద diagram లో 'Start' అని mark చేసింది).

Robot ఏ టైమ్ లో అయినా కిందకి గానీ కుడికి గానీ మాత్రమే కదలగలదు. Robot grid లో కింద-కుడి మూలకి
(కింద diagram లో 'Finish' అని mark చేసింది) చేరడానికి ట్రై చేస్తోంది.

మొత్తం ఎన్ని unique paths (వేరువేరు దారులు) ఉన్నాయి?

![Unique Paths](https://leetcode.com/static/images/problemset/robot_maze.png)

## Examples

**Example #1**

```
Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
```

(పై-ఎడమ మూల నుంచి కింద-కుడి మూలకి చేరడానికి మొత్తం 3 దారులు ఉన్నాయి.)

**Example #2**

```
Input: m = 7, n = 3
Output: 28
```

## Algorithms

### Backtracking

మొదట మనసులోకి వచ్చే ఆలోచన ఏంటంటే — ఒక decision tree కట్టాలి, అందులో `D` అంటే కిందకి కదలడం, `R`
అంటే కుడికి కదలడం. ఉదాహరణకి `width = 3`, `height = 2` ఉన్న board కి ఈ decision tree వస్తుంది:

```
                START
                /   \
               D     R
             /     /   \
           R      D      R
         /      /         \
        R      R            D

       END    END          END
```

ఇక్కడ మూడు unique branches కనిపిస్తున్నాయి — అదే మన problem కి answer.

**Time Complexity**: `O(2 ^ n)` - `n` సైజ్ ఉన్న square board కి worst case లో దాదాపుగా.

**Auxiliary Space Complexity**: `O(m + n)` - ఎందుకంటే ఇప్పటి path ని positions తో store చేయాలి.

### Dynamic Programming

`BOARD[i][j]` ని మన sub-problem గా చూద్దాం.

కుడికి, కిందకి మాత్రమే కదలాలి అనే condition ఉంది కాబట్టి — ఇప్పటి cell కి unique paths సంఖ్య అంటే,
దాని పైన ఉన్న cell కి unique paths సంఖ్య, దాని ఎడమ వైపు ఉన్న cell కి unique paths సంఖ్య — ఈ రెండూ
కలిపితే వచ్చేది అని చెప్పొచ్చు.

```
BOARD[i][j] = BOARD[i - 1][j] + BOARD[i][j - 1]; // since we can only move down or right.
```

Base cases ఇవి:

```
BOARD[0][any] = 1; // only one way to reach any top slot.
BOARD[any][0] = 1; // only one way to reach any slot in the leftmost column.
```

(పైన ఏ slot కైనా చేరడానికి ఒకే దారి; ఎడమ column లో ఏ slot కైనా చేరడానికి ఒకే దారి.)

`3 x 2` board కి మన dynamic programming matrix ఇలా ఉంటుంది:

|     | 0   | 1   | 1   |
|:---:|:---:|:---:|:---:|
|**0**| 0   | 1   | 1   |
|**1**| 1   | 2   | 3   |

ప్రతి cell లో దానికి ఉన్న unique paths సంఖ్య ఉంటుంది. మనకి కావాల్సింది నంబర్ `3` ఉన్న కింద-కుడి cell.

**Time Complexity**: `O(m * n)` - ఎందుకంటే DP matrix లో ప్రతి cell గుండా వెళ్తాం.

**Auxiliary Space Complexity**: `O(m * n)` - ఎందుకంటే DP matrix కావాలి.

### Pascal's Triangle మీద బేస్ అయినది

ఈ ప్రశ్న నిజానికి Pascal Triangle కి ఇంకో రూపం.

ఈ rectangle మూల, Pascal's Triangle లో `m + n - 2` line లో, `min(m, n) - 1` position లో ఉంటుంది.

## References

- [LeetCode](https://leetcode.com/problems/unique-paths/description/)
