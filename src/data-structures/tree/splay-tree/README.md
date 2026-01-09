# Splay Tree

A **splay tree** is a binary search tree with the additional property that recently accessed elements are quick to access again. Like self-balancing binary search trees, a splay tree performs basic operations such as insertion, look-up and removal in **O(log n)** amortized time. For many sequences of non-random operations, splay trees perform better than other search trees, even performing better than **O(log n)** for sufficiently non-random patterns, all without requiring advance knowledge of the pattern. The splay tree was invented by Daniel Sleator and Robert Tarjan in 1985.

All normal operations on a binary search tree are combined with one basic operation, called splaying. **Splaying** the tree for a certain element rearranges the tree so that the element is placed at the root of the tree. One way to do this with the basic search operation is to first perform a standard binary tree search for the element in question, and then use tree rotations in a specific fashion to bring the element to the top. Alternatively, a top-down algorithm can combine the search and the tree reorganization into a single phase.


![Splay Tree](https://study.com/cimages/multimages/16/splay_trees_graphic.png)

## Applications

1. A good example is a network router. A network router receives network packets at a high rate from incoming connections and must quickly decide on which outgoing wire to send each packet, based on the IP address in the packet. The router needs a big table (a map) that can be used to look up an IP address and find out which outgoing connection to use. If an IP address has been used once, it is likely to be used again, perhaps many times. So we can bulid the above look up table using splay tree. if we have look up for a ip address once it will come on top of tree, so next time that ip address come again ,we can find its entry on top and don’t have to go till bottom.

2. Splay trees are typically used in the implementation of caches, memory allocators, garbage collectors, data compression, ropes (replacement of string used for long text strings), in Windows NT (in the virtual memory, networking, and file system code) etc.

3. a example of a domain in which splay trees are used are Intrusion detection systems (IDS)which are an essential part of the security infrastructure. They are used to detect, identify and stop intruders. The administrators can rely on them to find out successful attacks and prevent a future use of known exploits. IDS are also considered as a complementary solution to firewall technology by recognizing attacks against the network that are missed by the firewall. Nevertheless, IDS are plagued with false positive alerts, letting security professionals to be overwhelmed by the analysis tasks. Therefore, IDS employ several techniques in order to increase the detection probability of suspect threats while reducing the risk of false positives. This leads to the construction of a decision tree such as the splay tree used to verify the traffic. The proposed strategy to detect intrusions using protocol analysis consists in extracting data from each received packet and then traversing a pre-built decision tree.

4. Splay tree are used in the gcc compiler and GNU C++ library, the sed string editor,the most popular implementation of Unix malloc, Linux loadable kernel modules, and in much other software.


## Operations

## Splaying

When a node x is accessed, a splay operation is performed on x to move it to the root. To perform a splay operation we carry out a sequence of splay steps, each of which moves x closer to the root. By performing a splay operation on the node of interest after every access, the recently accessed nodes are kept near the root and the tree remains roughly balanced, so that we achieve the desired amortized time bounds.

Each particular step depends on three factors:

- Whether x is the left or right child of its parent node, p,
- whether p is the root or not, and if not
- whether p is the left or right child of its parent, g (the grandparent of x).

It is important to remember to set gg (the great-grandparent of x) to now point to x after any splay operation. If gg is null, then x obviously is now the root and must be updated as such.

There are three types of splay steps, each of which has two symmetric variants: left- and right-handed. For the sake of brevity, only one of these two is shown for each type. (In the following diagrams, circles indicate nodes of interest and triangles indicate sub-trees of arbitrary size.) The three types of splay steps are:

Zig step: this step is done when p is the root. The tree is rotated on the edge between x and p. Zig steps exist to deal with the parity issue, will be done only as the last step in a splay operation, and only when x has odd depth at the beginning of the operation.

![Splaying](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Splay_tree_zig.svg/350px-Splay_tree_zig.svg.png)

**Zig-zig step:** this step is done when p is not the root and x and p are either both right children or are both left children. The picture below shows the case where x and p are both left children. The tree is rotated on the edge joining p with its parent g, then rotated on the edge joining x with p. Note that zig-zig steps are the only thing that differentiate splay trees from the rotate to root method introduced by Allen and Munro prior to the introduction of splay trees.

![Zig - Zig Step](https://upload.wikimedia.org/wikipedia/commons/f/fd/Zigzig.gif)

**Zig-zag step:** this step is done when p is not the root and x is a right child and p is a left child or vice versa. The tree is rotated on the edge between p and x, and then rotated on the resulting edge between x and g.

![Zig - Zag Step](https://upload.wikimedia.org/wikipedia/commons/6/6f/Zigzag.gif)


## Join

Given two trees S and T such that all elements of S are smaller than the elements of T, the following steps can be used to join them to a single tree:

1) Splay the largest item in S. Now this item is in the root of S and has a null right child.
2) Set the right child of the new root to T.

## Split
Given a tree and an element x, return two new trees: one containing all elements less than or equal to x and the other containing all elements greater than x. This can be done in the following way:

- Splay x. Now it is in the root so the tree to its left contains all elements smaller than x and the tree to its
  right - contains all element larger than x.
- Split the right subtree from the rest of the tree.


## Insertion
To insert a value x into a splay tree:

- Insert x as with a normal binary search tree.
- when an item is inserted, a splay is performed.

As a result, the newly inserted node x becomes the root of the tree.

Alternatively:

- Use the split operation to split the tree at the value of x to two sub-trees: S and T.
- Create a new tree in which x is the root, S is its left sub-tree and T its right sub-tree.

## Deletion
To delete a node x, use the same method as with a binary search tree:

If x has two children:
    - Swap its value with that of either the rightmost node of its left sub tree (its in-order predecessor) or the
      leftmost node of its right subtree (its in-order successor).
    - Remove that node instead.

In this way, deletion is reduced to the problem of removing a node with 0 or 1 children. Unlike a binary search tree, in a splay tree after deletion, we splay the parent of the removed node to the top of the tree.

Alternatively:

- The node to be deleted is first splayed, i.e. brought to the root of the tree and then deleted. leaves the tree with
  two sub trees.
- The two sub-trees are then joined using a "join" operation.

## Advantages
Good performance for a splay tree depends on the fact that it is self-optimizing, in that frequently accessed nodes will move nearer to the root where they can be accessed more quickly. The worst-case height—though unlikely—is O(n), with the average being O(log n). Having frequently-used nodes near the root is an advantage for many practical applications (also see locality of reference), and is particularly useful for implementing caches and garbage collection algorithms.

Advantages include:

- Comparable performance: Average-case performance is as efficient as other trees.
- Small memory footprint: Splay trees do not need to store any bookkeeping data.

## Disadvantages
The most significant disadvantage of splay trees is that the height of a splay tree can be linear. For example, this will be the case after accessing all n elements in non-decreasing order. Since the height of a tree corresponds to the worst-case access time, this means that the actual cost of a single operation can be high. However the amortized access cost of this worst case is logarithmic, O(log n). Also, the expected access cost can be reduced to O(log n) by using a randomized variant.

The representation of splay trees can change even when they are accessed in a 'read-only' manner (i.e. by find operations)This complicates the use of such splay trees in a multi-threaded environment. Specifically, extra management is needed if multiple threads are allowed to perform find operations concurrently. This also makes them unsuitable for general use in purely functional programming, although even there they can be used in limited ways to implement priority queues.

Finally, when the access pattern is random, the additional splaying overhead adds a significant constant factor to the cost compared to less-dynamic alternatives.
