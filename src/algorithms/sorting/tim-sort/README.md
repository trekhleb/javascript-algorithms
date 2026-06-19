# Tim Sort

Tim Sort is a **hybrid sorting algorithm** derived from Merge Sort and
Insertion Sort. It was designed to perform well on many kinds of real-world
data. It is the default sorting algorithm in:
- **Python** (`list.sort()`, `sorted()`)
- **Java** (`Arrays.sort()` for objects)
- **Android**, **V8** (JavaScript engine for some cases)

## How It Works

Tim Sort exploits the fact that real-world data often contains **natural runs**
(sequences that are already sorted or nearly sorted).

**Phase 1: Create Runs**

The array is divided into small sub-arrays called **runs**. Each run is sorted
using **Insertion Sort**, which is very efficient for small arrays and nearly
sorted sequences. The minimum run size (called `minRun`) is calculated to be
between 32 and 64 to ensure a balanced merge tree.

**Phase 2: Merge Runs**

The sorted runs are then merged together using a **Merge Sort**-style merge.
The merge size doubles each pass (`minRun`, `2*minRun`, `4*minRun`, ...) until
the entire array is sorted.

## Why Not Just Use Merge Sort?

| Scenario | Merge Sort | Tim Sort |
|---|---|---|
| Random data | O(n log n) | O(n log n) |
| Nearly sorted data | O(n log n) | O(n) |
| Sorted data | O(n log n) | O(n) |
| Reverse sorted | O(n log n) | O(n log n) |

Tim Sort is **adaptive** — it takes advantage of existing order in the input.

## Complexity

| | Complexity |
|---|---|
| **Time (Best)** | O(n) |
| **Time (Average)** | O(n log n) |
| **Time (Worst)** | O(n log n) |
| **Space** | O(n) |
| **Stable** | Yes ✓ |

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Timsort)
- [Original Design Document by Tim Peters](https://svn.python.org/projects/python/trunk/Objects/listsort.txt)
- [GeeksforGeeks](https://www.geeksforgeeks.org/timsort/)
