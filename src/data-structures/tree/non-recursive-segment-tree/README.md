# Segment Tree (Non-recursive Implementation)

In computer science, a **Segment Tree** also known as a statistic tree 
is a tree data structure used for storing information about intervals, 
or segments. It allows querying which of the stored segments contain 
a given point.

A segment tree is a binary tree. The root of the tree represents the 
whole array. The two children of the root represent the 
first and second halves of the array. Similarly, the 
children of each node corresponds to the two halves of 
the array corresponding to the node.

## Perfect binary tree

Visualize a segment tree in the following way:

![Min Segment Tree](http://i.imgur.com/GGBmcEP.png)

Notation is *node_index*: corresponding segment (left border included, right excluded).
At the bottom row we have our array (0-indexed), the leaves of the tree. For now 
suppose it's length is a power of 2 (16 in the example), so we get perfect binary tree.
When going up the tree we take pairs of nodes with indices `(2 * parent,  2 * parent + 1)` 
and combine their values in their parent with index `parent`. This way when we're asked
to find a sum on interval `[3, 11)`, we need to sum up only values in the nodes
19, 5, 12 and 26 (marked with bold), not all 8 values inside the interval.
See the [implementation](NonRecursiveSegmentTree.js)
to see how it works.

Forget about those cumbersome recursive functions with 5 arguments!

Now let's see why this works, and works very efficient.

1. As you could notice from the picture, leaves are stored in continuous nodes
with indices starting with `inputArrayLength`, element with index `parent`
corresponds to a node with index `parent + inputArrayLength`.

1. Before doing any queries we need to build the tree, which is quite straightforward
and takes `O(n)` time. Since parent always has index less than its children, we just
process all the internal nodes in decreasing order.

1. Modifying an element is also quite straightforward and takes time proportional to
the height of the tree, which is `O(log(n))`. We only need to update values in the
parents of given node. So we just go up the tree knowing that parent of
node `indexPosition` is `indexPosition / 2` or `indexPosition >> 1`, which means the same.

Finding range operation also works in `O(log(n))` time. To better understand
it's logic you can go through example with interval `[3, 11)` and verify that
result is composed exactly of values in nodes 19, 26, 12 and 5 (in that order).

General idea is the following. If `leftIndex`, the left interval border, is odd
then `leftIndex` is the right child of its parent. Then our interval includes
node `leftIndex` but doesn't include it's parent. So we save `segmentTree[leftIndex]`
and move to the right of `leftIndex`'s parent by setting `leftIndex = (leftIndex + 1) / 2`.
If `leftIndex` is even, it is the left child, and the interval includes its parent
as well (unless the right border interferes), so we just move to it by setting
`leftIndex = leftIndex / 2`. Similar argumentation is applied to the right border.
We stop once borders meet.

No recursion and no additional computations like finding the middle of the interval
are involved, we just go through all the nodes we need, so this is very efficient.

## Arbitrary sized array

For now we talked only about an array with size equal to some power of 2,
so the binary tree was perfect. The next fact may be stunning, so prepare yourself.

**The algorithm above works for any size array.**

Explanation is much more complex than before, so let's focus first on the advantages it gives us.

1. Segment tree uses exactly `2 * inputArrayLength` memory, not `4 * inputArrayLength`
like some other implementations offer.
1. Array elements are stored in continuous manner starting with index `inputArrayLength`.
1. All operations are very efficient and easy to write.

Here's how the tree for `inputArrayLength = 13` looks like:

![Sum Segment Tree](http://i.imgur.com/cwKpYH1.png)

It's not actually a single tree any more, but a set of perfect binary trees:
with root 2 and height 4, root 7 and height 2, root 12 and height 2,
root 13 and height 1. Nodes denoted by dashes aren't ever used in query operations,
so it doesn't matter what's stored there. Leaves seem to appear on different heights,
but that can be fixed by cutting the tree before the node 13 and moving its right
part to the left. The resulting structure can be shown to be isomorphic
to a part of larger perfect binary tree with respect to operations we perform,
and this is why we get correct results.

There is no formal proof here, let's just go through the example with interval
`[0, 7)`. We have `leftIndex = 13`, `rightIndex = 20`, `if leftIndex is odd => 
save segmentTree[13]` and borders change to `leftIndex = 7`, `rightIndex = 10`.
Again `if leftIndex is odd => save segmentTree[7]`, borders change
to `leftIndex = 4`, `rightIndex = 5`, and suddenly nodes are at the same height.
Now we have `if rightIndex is odd => save t[4 = rightIndex - 1]`,
borders change to `leftIndex = 2`, `rightIndex = 2`, so we're finished.

## Application

A segment tree is a data structure designed to perform 
certain array operations efficiently - especially those 
involving range queries.

Applications of the segment tree are in the areas of computational geometry, 
and geographic information systems.

Current implementation of Segment Tree implies that you may
pass any binary (with two input params) function to it and 
thus you're able to do range query for variety of functions.
In tests you may find examples of doing `min`, `max` and `sam` range
queries and updates on SegmentTree.
 
## References

- [Wikipedia](https://en.wikipedia.org/wiki/Segment_tree)
- [CodeForces](https://codeforces.com/blog/entry/18051)
- [GeeksForGeeks](https://www.geeksforgeeks.org/segment-tree-efficient-implementation/)
