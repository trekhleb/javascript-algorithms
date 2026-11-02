# Breadth-First Search (BFS)

_వేరే భాషల్లో చదవాలంటే:_
[_English_](README.md)

Breadth-first search (BFS) అనేది tree లేదా graph data structures ని traverse చేయడానికి, search
చేయడానికి వాడే algorithm. ఇది tree root నుంచి (graph అయితే ఏదో ఒక node నుంచి — దాన్ని కొన్నిసార్లు
'search key' అంటారు) మొదలుపెట్టి, ముందు పక్కనే ఉన్న neighbor nodes అన్నీ చూస్తుంది, ఆ తర్వాతే next
level neighbors దగ్గరికి వెళ్తుంది.

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/5/5d/Breadth-First-Search-Algorithm.gif)

## Pseudocode

```text
BFS(root)
  Pre: root is the node of the BST
  Post: the nodes in the BST have been visited in breadth first order
  q ← queue
  while root = ø
    yield root.value
    if root.left = ø
      q.enqueue(root.left)
    end if
    if root.right = ø
      q.enqueue(root.right)
    end if
    if !q.isEmpty()
      root ← q.dequeue()
    else
      root ← ø
    end if
  end while
end BFS
```

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Breadth-first_search)
- [Tree Traversals (Inorder, Preorder and Postorder)](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/)
- [BFS vs DFS](https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/)
