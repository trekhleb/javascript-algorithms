# Manhattan Distance

In mathematics, the **Manhattan distance**, also known as **L1 distance**, **taxicab distance**, or **city block distance**, between two points in a grid-based space is the sum of the absolute differences of their Cartesian coordinates. It is the distance a car would drive in a city laid out in square blocks, where you can only travel along horizontal and vertical streets.

The name relates to the grid layout of the streets on the island of Manhattan, which causes the shortest path a car could take between two points to be the length of the path along the grid lines.

![Manhattan vs Euclidean Distance](https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Manhattan_distance.svg/400px-Manhattan_distance.svg.png)

In the image above, the red, blue, and yellow lines have the same length (12 units) and are the Manhattan distances between the two black points. The green line is the Euclidean distance, which has a length of approximately 8.49 units.

## Formula

The Manhattan distance, `d`, between two points `p` and `q` with `n` dimensions (given by Cartesian coordinates) is the sum of the lengths of the projections of the line segment between the points onto the coordinate axes.

![Manhattan distance formula](https://wikimedia.org/api/rest_v1/media/math/render/svg/ead7631ca37af0070e989f8415b4cd6886229720)

For example, the Manhattan distance between the two points `(p1, p2)` and `(q1, q2)` is `|p1 - q1| + |p2 - q2|`.

## Closest Pair Problem

Finding the closest pair of points in a set is a fundamental problem in computational geometry. While the brute-force approach of calculating the distance between every pair of points takes `O(n^2)` time, a more efficient algorithm exists for Manhattan distance.

The provided `minimumManhattanDistance` implementation uses an algorithm that runs in `O(n * log(n) * 2^d)` time, where `n` is the number of points and `d` is the number of dimensions. It works by projecting all points onto `2^(d-1)` different orientations. For each orientation, it sorts the points and checks only the adjacent pairs, as the closest pair for that specific projection will be next to each other in the sorted list. This significantly reduces the number of comparisons needed.

## References

- [Manhattan Distance on Wikipedia](https://en.wikipedia.org/wiki/Manhattan_distance)