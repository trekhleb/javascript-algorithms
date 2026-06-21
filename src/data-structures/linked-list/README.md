# Linked List

_Read this in other languages:_
[_简体中文_](README.zh-CN.md),
[_Русский_](README.ru-RU.md),
[_日本語_](README.ja-JP.md),
[_Português_](README.pt-BR.md),
[_한국어_](README.ko-KR.md),
[_Español_](README.es-ES.md),
[_Türkçe_](README.tr-TR.md),
[_Українська_](README.uk-UA.md)

In computer science, a **linked list** is a linear collection
of data elements, in which linear order is not given by
their physical placement in memory. Instead, each
element points to the next. It is a data structure
consisting of a group of nodes which together represent
a sequence. Under the simplest form, each node is
composed of data and a reference (in other words,
a link) to the next node in the sequence. This structure
allows for efficient insertion or removal of elements
from any position in the sequence during iteration.
More complex variants add additional links, allowing
efficient insertion or removal from arbitrary element
references. A drawback of linked lists is that access
time is linear (and difficult to pipeline). Faster
access, such as random access, is not feasible. Arrays
have better cache locality as compared to linked lists.

![Linked List](./images/linked-list.jpeg)

*Made with [okso.app](https://okso.app)*

## Pseudocode for Basic Operations

### Insert

```text
Add(value)
  Pre: value is the value to add to the list
  Post: value has been placed at the tail of the list
  n ← node(value)
  if head = ø
    head ← n
    tail ← n
  else
    tail.next ← n
    tail ← n
  end if
end Add
```

```text
Prepend(value)
 Pre: value is the value to add to the list
 Post: value has been placed at the head of the list
 n ← node(value)
 n.next ← head
 head ← n
 if tail = ø
   tail ← n
 end
end Prepend
```

### Search

```text
Contains(head, value)
  Pre: head is the head node in the list
       value is the value to search for
  Post: the item is either in the linked list, true; otherwise false
  n ← head
  while n != ø and n.value != value
    n ← n.next
  end while
  if n = ø
    return false
  end if
  return true
end Contains
```

### Delete

```text
Remove(head, value)
  Pre: head is the head node in the list
       value is the value to remove from the list
  Post: value is removed from the list, true, otherwise false
  if head = ø
    return false
  end if
  n ← head
  if n.value = value
    if head = tail
      head ← ø
      tail ← ø
    else
      head ← head.next
    end if
    return true
  end if
  while n.next != ø and n.next.value != value
    n ← n.next
  end while
  if n.next != ø
    if n.next = tail
      tail ← n
      tail.next = null
    else
      n.next ← n.next.next
    end if
    return true
  end if
  return false
end Remove
```

### Traverse

```text
Traverse(head)
  Pre: head is the head node in the list
  Post: the items in the list have been traversed
  n ← head
  while n != ø
    yield n.value
    n ← n.next
  end while
end Traverse
```

### Traverse in Reverse

```text
ReverseTraversal(head, tail)
  Pre: head and tail belong to the same list
  Post: the items in the list have been traversed in reverse order
  if tail != ø
    curr ← tail
    while curr != head
      prev ← head
      while prev.next != curr
        prev ← prev.next
      end while
      yield curr.value
      curr ← prev
    end while
   yield curr.value
  end if
end ReverseTraversal
```

## Complexities

### Time Complexity

| Access    | Search    | Insertion | Deletion  |
| :-------: | :-------: | :-------: | :-------: |
| O(n)      | O(n)      | O(1)      | O(n)      |

### Space Complexity

O(n)


### Examples
Some of real live usages are listed below:

  - Snake Game
    You start the game with one node on the list which in thime and place is both the head and tail

      [] <- (single node)

    As the snake keeps eating those items are being added to the tail, and as such, becoming the tail for the list

     (food)-> *  [] <-(snake)
                /  \ 
              head tail

        [][] (snake has eaten and it grew by one)
        /  \
      head tail

    And so on and so forth
      (food)-> *  [][] <-(snake)
                  /   \ 
                head  tail

          [][][] (snake has eaten and it grew by one)
          /     \
        head   tail



      (food)-> *  [][][] <-(snake)
                  /     \ 
                head    tail

          [][][][] (snake has eaten and it grew by one)
          /       \
        head     tail


 - Web Browser History
    Let's say you are confortably browsing the web on your computer, you are using your favorite browser, when you visit your first page your browser creates a single node list with the website you are looking at.

    The value for the node would then be the link for that site, for example, Github

            [ Github/javascript-algorithms ].  <- current website (tail and also head)

    But then you decide to go to facebook on that tab, but your browser instead of forgetting where you've been keeps track of the last page by adding nodes to that list

            [ Github/javascript-algorithms ].  <- (head)
                        |
            [ Facebook/your-profile  ] <- current website (tail)

    As you keep visiting new websites on that tab the browser keeps track of it and will append it to the tail of the list
    until you have something like this

            [ Github/javascript-algorithms ].  <- (head)
                        |
            [ Facebook/your-profile  ] <- node
                        |
            [ Wikipedia/Pomodoro_Technique ] <- node
                        |
            [ Wikipedia/Life_hack ] <- node
                        |
            [ Whatsapp ] <- current website (tail)

    This is a very good example of a double link list


 
## References

- [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
- [YouTube](https://www.youtube.com/watch?v=njTh_OwMljA&index=2&t=1s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
