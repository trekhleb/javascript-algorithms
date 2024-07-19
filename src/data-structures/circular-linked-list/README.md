# Circular Linked List

In computer science, a **circular linked list** is a variation of
the [linked list](../linked-list/README.md) in which the last node
in the list points back to the first node, creating a sequentially
circular structure. This means it operates the same as the linked
list with exception to pointing at the memory address of the first
node at the end instead of a null reference, allowing for traversal
starting at any node. It is useful in applications where the data
needs to be accessed in a loop or circular manner, such as round-robin
scheduling, for example. Circular linked lists can be either singly
or doubly linked, and in this case it is the former.

![Circular Linked List](./images/circular-linked-list.jpeg)

## Pseudocode for Basic Operations

### Insert

```text
Add(value)
  Pre: value is the value to add to the list
  Post: value has been placed at the tail of the list
  n ← node(value)
  if head = ø
    n.next ← n
    head ← n
  else
    n.next ← head
    tail.next ← n
  end if
  tail ← n
end Add
```

```text
Prepend(value)
  Pre: value is the value to add to the list
  Post: value has been placed at the head of the list
  n ← node(value)
  if head = ø
    n.next ← n
    tail ← n
  else
    tail.next ← n
  end
  head ← n
end Prepend
```

### Search

```text
Contains(head, value)
  Pre: head is the head node in the list
       value is the value to search for
  Post: the item is either in the linked list, true; otherwise false
  if head = ø
    return false
  end if
  n ← head
  repeat
    if n.value = value
      return true
    end if
    n ← n.next
  until n = head
  return false
end Contains
```

### Delete

```text
Remove(head, value)
  Pre: head is the head node in the list
       value is the value(s) to remove from the list
  Post: value is removed from the list, true, otherwise false
  if head = ø
    return false
  end if
  n ← head
  while n.next != ø and n.next.value != value
    n ← n.next
    tail.next ← n
    if n = tail
      head ← ø
      tail ← ø
      return true
    end if
    n ← head
  end while
  previous ← tail
  repeat
    if n.value = value
      previous.next ← n.next
      if n = tail
        tail ← previous
      end if
    else
      previous ← n
      n ← n.next
  until n = head
  if n = ø
    return false
  end if
  return true
end Remove
```

### Traverse

```text
Traverse(head)
  Pre: head is the head node in the list
  Post: the items in the list have been traversed
  if head = ø
    return
  end if
  n ← head
  repeat
    yield n.value
    n ← n.next
  until n = head
end Traverse
```

### Traverse in Reverse

```text
ReverseTraversal(head, tail)
  Pre: head and tail belong to the same list
  Post: the items in the list have been traversed in reverse order
  if tail = ø
    return
  end if
  n ← tail
  repeat
    previous ← head
    while previous.next != n
      previous ← previous.next
    end while
    yield n.value
    n ← previous
  until n = tail
end ReverseTraversal
```

## Complexities

### Time Complexity

| Access    | Search    | Insertion | Deletion  |
| :-------: | :-------: | :-------: | :-------: |
| O(n)      | O(n)      | O(1)      | O(n)      |

### Space Complexity

O(n)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
- [YouTube](https://www.youtube.com/watch?v=HMkdlu5sP4A)
