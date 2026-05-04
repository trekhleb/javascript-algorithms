# Deque (Double-Ended Queue)

A **deque** (pronounced "deck", short for **double-ended queue**) is a linear data
structure that generalises both a stack and a queue. Elements can be added or
removed from **either end** — the front (head) or the back (tail) — in **O(1)** time.

```
addFront(3)         addBack(4)
    ↓                   ↓
┌───┬───┬───┬───┐
│ 3 │ 1 │ 2 │ 4 │   ← internal linked list
└───┴───┴───┴───┘
    ↑               ↑
removeFront()    removeBack()
```

## Operations

| Method        | Description                                  | Time |
| ------------- | -------------------------------------------- | ---- |
| `addFront(v)` | Insert element `v` at the front              | O(1) |
| `addBack(v)`  | Insert element `v` at the back               | O(1) |
| `removeFront()` | Remove and return the front element        | O(1) |
| `removeBack()` | Remove and return the back element          | O(1) |
| `peekFront()` | Return the front element without removing it | O(1) |
| `peekBack()`  | Return the back element without removing it  | O(1) |
| `isEmpty()`   | Return `true` if the deque has no elements   | O(1) |
| `size`        | Return the number of elements                | O(n) |

> **Note:** `size` is O(n) because the underlying linked list does not cache
> length. If you call `size` frequently, consider maintaining an internal counter.

## Complexity

| | |
| --------- | ---- |
| Space     | O(n) |
| addFront  | O(1) |
| addBack   | O(1) |
| removeFront | O(1) |
| removeBack | O(1) |
| peekFront | O(1) |
| peekBack  | O(1) |

## Use Cases

A deque is the right tool when you need **O(1) access at both ends**:

- **Sliding window maximum/minimum** — maintain candidates in a monotonic deque
  so each element is pushed and popped at most once (overall O(n)).
- **Browser history** — navigate backward (`removeFront`) and forward
  (`removeBack`) through pages.
- **Undo / redo stacks** — push actions to the back, undo from the back,
  redo from the front.
- **Palindrome checking** — compare characters from both ends simultaneously.
- **Work-stealing schedulers** (e.g. Java's `ForkJoinPool`) — threads push/pop
  from their own back, while idle threads steal from another thread's front.

## Implementation Note

This implementation is backed by the project's existing `LinkedList` (a doubly
linked list). This gives O(1) `prepend` (for `addFront`) and O(1) `append` /
`deleteTail` (for `addBack` / `removeBack`), with no need to shift array
elements.

An alternative implementation using a circular buffer (fixed-size array) offers
better cache locality but requires resizing logic. The linked-list approach is
chosen here to stay consistent with the other data structures in this project.

## References

- [Deque — Wikipedia](https://en.wikipedia.org/wiki/Double-ended_queue)
- [Deque Data Structure — GeeksForGeeks](https://www.geeksforgeeks.org/deque-set-1-introduction-applications/)
- [▶ Deque in 3 minutes — YouTube](https://www.youtube.com/watch?v=kLBuJ1998Do)
- [Sliding Window Maximum using Deque — YouTube](https://www.youtube.com/watch?v=2SXqBsTR6a8)