# Deque (Double-Ended Queue)

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

**Deque** ("deck" అని పలుకుతారు, **double-ended queue** కి షార్ట్ ఫామ్) అనేది stack, queue రెండిటినీ
కలిపిన ఒక జనరల్ linear data structure. Elements ని **ఏ చివర నుంచైనా** — ముందు (head) నుంచి గానీ వెనక
(tail) నుంచి గానీ — **O(1)** టైమ్ లో కలపొచ్చు, తీసేయొచ్చు.

```
   addFront(3)             addBack(4)
        ↓                       ↓
    ┌───────┬───────┬───────┬───────┐
    │   3   │   1   │   2   │   4   │   ← internal doubly linked list
    └───────┴───────┴───────┴───────┘
        ↑                       ↑
  removeFront()           removeBack()
```

## Operations

| Method          | ఏం చేస్తుంది                                  | Time |
| --------------- | -------------------------------------------- | ---- |
| `addFront(v)`   | Element `v` ని ముందు కలుపుతుంది                | O(1) |
| `addBack(v)`    | Element `v` ని వెనక కలుపుతుంది                 | O(1) |
| `removeFront()` | ముందు ఉన్న element ని తీసేసి return చేస్తుంది   | O(1) |
| `removeBack()`  | వెనక ఉన్న element ని తీసేసి return చేస్తుంది    | O(1) |
| `peekFront()`   | ముందు ఉన్న element ని తీసేయకుండా return చేస్తుంది | O(1) |
| `peekBack()`    | వెనక ఉన్న element ని తీసేయకుండా return చేస్తుంది  | O(1) |
| `isEmpty()`     | Deque లో elements లేకపోతే `true` return చేస్తుంది | O(1) |
| `size`          | Elements సంఖ్య return చేస్తుంది                | O(1) |

> **Note:** `size` O(1) — ఎందుకంటే deque ప్రతి add, remove operation లో update అయ్యే ఒక element
> లెక్కని ఉంచుకుంటుంది.

## Complexity

| Operation                    | Time |
| ---------------------------- | ---- |
| `addFront` / `addBack`       | O(1) |
| `removeFront` / `removeBack` | O(1) |
| `peekFront` / `peekBack`     | O(1) |
| `isEmpty` / `size`           | O(1) |
| Space                        | O(n) |

## ఎక్కడ వాడతారు

**రెండు చివర్లలోనూ O(1) access** కావాల్సినప్పుడు deque కరెక్ట్ tool:

- **Sliding window maximum/minimum** — candidates ని ఒక monotonic deque లో ఉంచితే ప్రతి element మహా అయితే
  ఒకసారి push, ఒకసారి pop అవుతుంది (మొత్తం O(n)).
- **Browser history** — pages మధ్య వెనక్కి (`removeFront`), ముందుకి (`removeBack`) వెళ్ళడం.
- **Undo / redo stacks** — actions ని వెనక push చేయడం, వెనక నుంచి undo చేయడం, ముందు నుంచి redo చేయడం.
- **Palindrome checking** — రెండు చివర్ల నుంచి ఒకేసారి characters compare చేయడం.
- **Work-stealing schedulers** (ఉదాహరణకి Java `ForkJoinPool`) — threads తమ సొంత వెనక చివర నుంచి push/pop
  చేస్తాయి, ఖాళీగా ఉన్న threads ఇంకో thread ముందు చివర నుంచి పని తీసుకుంటాయి.

## Implementation Note

ఈ implementation, project లో ఇప్పటికే ఉన్న [`DoublyLinkedList`](../doubly-linked-list) మీద బేస్ అయింది.
ప్రతి node తన ముందు, తర్వాత neighbours రెండిటికీ reference ఉంచుకుంటుంది కాబట్టి — O(1) `prepend`
(`addFront` కోసం), O(1) `deleteHead` (`removeFront` కోసం), O(1) `append` / `deleteTail` (`addBack` /
`removeBack` కోసం) వస్తాయి, array elements ని జరపాల్సిన అవసరం ఉండదు. Elements సంఖ్యని ఒక counter లో
ట్రాక్ చేస్తారు, కాబట్టి `size` కూడా O(1).

Circular buffer (fixed-size array) వాడే ఇంకో implementation కి cache locality బెటర్ గా ఉంటుంది, కానీ
resize చేసే logic కావాలి. ఈ project లో మిగతా data structures తో consistent గా ఉండటానికి ఇక్కడ linked-list
పద్ధతి ఎంచుకున్నారు.

## References

- [Deque — Wikipedia](https://en.wikipedia.org/wiki/Double-ended_queue)
- [Deque Data Structure — GeeksForGeeks](https://www.geeksforgeeks.org/deque-set-1-introduction-applications/)
- [▶ Deque (Double-Ended Queue) — YouTube](https://www.youtube.com/watch?v=pqg0SOPRlJ4)
- [▶ Deque వాడి Sliding Window Maximum — YouTube](https://www.youtube.com/watch?v=2SXqBsTR6a8)
