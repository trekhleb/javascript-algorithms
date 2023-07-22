## The Minimax Algorithm

The minimax algorithm is a recursive algorithm used to make intelligent decisions in a zero-sum game. In this case it is implemented for a two-player game, but is possible to implement for a game with more players. The algorithm looks ahead into possible future states of the game, and assuming that each of the two players seek to maximize their own score. The algorithm attempts to maximize the guaranteed gain of a move. In other words it tries to maximize the minimum gain of a move or minimize the maximum loss of a move.

The algorithm simulates a decision tree of different moves by the two players. At the bottom of the decision tree the state of the game is evaluated and assigned a score reflecting how good the game state is for some player. The algorithm works depth first, which in practice means that any game that takes many turns to finish, needs to use a depth limit in order for the minimax to terminate reasonably fast or at all. 

A small example below shows a value associated with each game state in a decision tree. In the example, there are two moves possible in each state. As the topmost player seeks to maximize the score, the value 10 is chosen at the bottom of the tree.

```
maximizing:        7
                 /   \
minimizing:     3     7
               / \   / \
maximizing:   3   5 7  10
```



### Pseudo code for the algorithm
```
function minimax(node, depth, maximizingPlayer) is
    if depth = 0 or node is a terminal node then
        return the heuristic value of node
    if maximizingPlayer then
        value := −∞
        for each child of node do
            value := max(value, minimax(child, depth − 1, FALSE))
        return value
    else (* minimizing player *)
        value := +∞
        for each child of node do
            value := min(value, minimax(child, depth − 1, TRUE))
        return value
```

The initial call to the method will be
```
minimax(origin, depth, TRUE)
```

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Minimax)