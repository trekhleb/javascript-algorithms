# Floyd's Tortoise and Hare
**Floyd's cycle-finding algorithm** is a pointer algorithm that is used for finding a cycle in a linked list. It uses only two pointers, each moving at different speeds. It is also called the "tortoise and the hare algorithm", alluding to Aseop's fable of [The Tortoise and the Hare](https://en.wikipedia.org/wiki/The_Tortoise_and_the_Hare).

## Main algorithm
1. Create two pointers, which are the tortoise and the hare. Tortoise begins at the head, while hare begins at `head.next`.
2. Since hare and `hare.next` are not null, enter the while loop. Tortoise and hare are not equal to each other, so we'll move both of them over. Tortoise gets moved one spot, while hare gets moved two spots.
3. Repeat step two until the while loop is still true and tortoise and hare are equal to each other.
    * If tortoise and hare are equal to eachother, then return true because a cycle was found.
    * Otherwise, if the while loop cannot continue because hare and/or `hare.next` is null, then return false because no cycle was found.

## References
* [Wikipedia](https://en.wikipedia.org/wiki/Cycle_detection#Floyd's_Tortoise_and_Hare)
* [Floyd's Tortoise and Hare Algorithm: Finding a Cycle in a Linked List](https://dev.to/alisabaj/floyd-s-tortoise-and-hare-algorithm-finding-a-cycle-in-a-linked-list-39af)
