# Hungarian Algorithm (Kuhn-Munkres Algorithm)

The **Hungarian algorithm** (also known as the **Kuhn-Munkres algorithm** or
**Munkres assignment algorithm**) is a combinatorial optimization algorithm
that solves the **assignment problem** in polynomial time `O(n³)`.

## The Assignment Problem

Given `n` agents and `n` tasks, and a cost matrix where entry `C[i][j]`
represents the cost of assigning agent `i` to task `j`, find a one-to-one
assignment of agents to tasks that **minimizes the total cost**.

### Example

Consider assigning 3 workers to 3 jobs with the following cost matrix:

|           | Job 1 | Job 2 | Job 3 |
|-----------|-------|-------|-------|
| Worker 1  | 250   | 400   | 350   |
| Worker 2  | 400   | 600   | 350   |
| Worker 3  | 200   | 400   | 250   |

The optimal assignment is:
- Worker 1 → Job 2 (cost 400)
- Worker 2 → Job 3 (cost 350)
- Worker 3 → Job 1 (cost 200)

**Total minimum cost = 950**

## How It Works

The algorithm operates on an `n×n` cost matrix and proceeds through the
following steps:

1. **Row reduction**: Subtract the smallest element in each row from all
   elements in that row.
2. **Column reduction**: Subtract the smallest element in each column from
   all elements in that column.
3. **Cover zeros**: Cover all zeros using a minimum number of horizontal
   and vertical lines.
4. **Test for optimality**: If the number of covering lines equals `n`,
   an optimal assignment can be made among the zeros. If not, proceed to step 5.
5. **Adjust the matrix**: Find the smallest uncovered element. Subtract it
   from all uncovered elements and add it to all elements that are covered
   twice (intersection of two lines). Return to step 3.

![Hungarian Algorithm](https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Hungarian_algorithm_-_step_4.svg/320px-Hungarian_algorithm_-_step_4.svg.png)

## Applications

- **Job scheduling**: Assigning workers to tasks to minimize total cost.
- **Transportation**: Optimizing routing and logistics assignments.
- **Resource allocation**: Matching resources to demands optimally.
- **Pattern recognition**: Matching features across images.
- **Network flow**: Solving bipartite matching problems.

## Complexity

| Complexity | Value  |
|------------|--------|
| Time       | O(n³)  |
| Space      | O(n²)  |

## References

- [Wikipedia - Hungarian Algorithm](https://en.wikipedia.org/wiki/Hungarian_algorithm)
- [Wikipedia - Assignment Problem](https://en.wikipedia.org/wiki/Assignment_problem)
- [Brilliant - Hungarian Matching](https://brilliant.org/wiki/hungarian-matching/)
- [YouTube - Hungarian Algorithm Explained](https://www.youtube.com/watch?v=cQ5MsiGaDY8)
