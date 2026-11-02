# Recursive Staircase Problem

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

## Problem

`n` మెట్లు ఉన్నాయి, కింద నిలబడి ఉన్న ఒక వ్యక్తి పైకి చేరాలి. ఆ వ్యక్తి ఒకసారి `1` గానీ `2` గానీ మెట్లు ఎక్కొచ్చు. _ఆ వ్యక్తి పైకి ఎన్ని రకాలుగా చేరొచ్చో లెక్కపెట్టండి._

![](https://cdncontribute.geeksforgeeks.org/wp-content/uploads/nth-stair.png)

## Solution

ఇది interesting problem — ఎందుకంటే దీన్ని solve చేయడానికి చాలా పద్ధతులు ఉన్నాయి, అవి వేరువేరు programming paradigms ని చూపిస్తాయి.

- [Brute Force Recursive Solution](./recursiveStaircaseBF.js) - Time: `O(2^n)`; Space: `O(1)`
- [Memoization తో Recursive Solution](./recursiveStaircaseMEM.js) - Time: `O(n)`; Space: `O(n)`
- [Dynamic Programming Solution](./recursiveStaircaseDP.js) - Time: `O(n)`; Space: `O(n)`
- [Iterative Solution](./recursiveStaircaseIT.js) - Time: `O(n)`; Space: `O(1)` 

## References

- [YouTube లో Gayle Laakmann McDowell](https://www.youtube.com/watch?v=eREiwuvzaUM&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=81&t=0s)
- [GeeksForGeeks](https://www.geeksforgeeks.org/count-ways-reach-nth-stair/)
