# Fibonacci Search Algorithm 
Let k be defined as an element in F, the array of Fibonacci numbers. n = Fm is the array size. If n is not a Fibonacci number, let Fm be the smallest number in F that is greater than n.

The array of Fibonacci numbers is defined where Fk+2 = Fk+1 + Fk, when k ≥ 0, F1 = 1, and F0 = 0.

To test whether an item is in the list of ordered numbers, follow these steps:
```sh
Set k = m.
If k = 0, stop. There is no match; the item is not in the array.
Compare the item against element in Fk−1.
If the item matches, stop.
If the item is less than entry Fk−1, discard the elements from positions Fk−1 + 1 to n. Set k = k − 1 and return to step 2.
If the item is greater than entry Fk−1, discard the elements from positions 1 to Fk−1. Renumber the remaining elements from 1 to Fk−2, set k = k − 2, and return to step 2.
Alternative implementation (from "Sorting and Searching" by Knuth[4]):

Given a table of records R1, R2, ..., RN whose keys are in increasing order K1 < K2 < ... < KN, the algorithm searches for a given argument K. Assume N+1 = Fk+1

Step 1. [Initialize] i ← Fk, p ← Fk-1, q ← Fk-2 (throughout the algorithm, p and q will be consecutive Fibonacci numbers)

Step 2. [Compare] If K < Ki, go to Step 3; if K > Ki go to Step 4; and if K = Ki, the algorithm terminates successfully.

Step 3. [Decrease i] If q=0, the algorithm terminates unsuccessfully. Otherwise set (i, p, q) ← (p, q, p - q) (which moves p and q one position back in the Fibonacci sequence); then return to Step 2

Step 4. [Increase i] If p=1, the algorithm terminates unsuccessfully. Otherwise set (i,p,q) ← (i + q, p - q, 2q - p) (which moves p and q two positions back in the Fibonacci sequence); and return to Step 2
```
The two variants of the algorithm presented above always divide the current interval into a larger and a smaller subinterval. The original algorithm,[1] however, would divide the new interval into a smaller and a larger subinterval in Step 4. This has the advantage that the new i is closer to the old i and is more suitable for accelerating searching on magnetic tape.

