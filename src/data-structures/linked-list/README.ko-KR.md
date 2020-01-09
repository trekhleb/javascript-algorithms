# 연결리스트

컴퓨터 공학에서, **연결리스트**는 데이터 요소들의 선형 콜렉션이며, 요소의 선형 순서는 메모리의 물리적 위치에 의해 제공되지 않습니다.
대신, 각각의 요소들은 다음(next)를 가리키게 되어 있습니다. 이는 일련의 노드로 구성된 데이터 구조이며 시퀀스를 함께 나타냅니다.
가장 간단한 형식에서 각 노드는 데이터와 시퀀스의 다음 노드에 대한 참조 (즉, 링크)로 구성됩니다.
이 구조에서는 반복하는 동안 시퀀스의 임의 위치에서 요소를 효율적으로 삽입하거나 제거할 수 있습니다.
보다 복잡한 변형은 링크를 추가하여 임의의 요소 참조를 효율적으로 삽입하거나 제거할 수 있습니다.
연결리스트의 단점은 접근 시간이 선형적이며, 파이프라인이 어렵다는 것입니다.
랜덤한 접근과 같은 빠른 접근은 불가능 합니다. 배열은 연결 리스트에 비해 캐시 위치가 더 좋습니다.

![연결리스트](https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg)

## 기본 조작을 위한 Pseudocode

### 추가

```text
Add(value)
  Pre: value는 리스트에 추가할 값
  Post: value는 리스트의 끝에 배치될 값을 가져야함
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
 Pre: value는 리스트에 추가할 값
 Post: value는 리스트의 앞부분에 배치될 값이 있어야함
 n ← node(value)
 n.next ← head
 head ← n
 if tail = ø
   tail ← n
 end
end Prepend
```

### 검색

```text
Contains(head, value)
  Pre: head는 리스트의 앞부분에 위치한 노드
       value는 찾고자 하는 값
  Post: 아이템이 연결리스트에 있으면, true, 아니라면 false
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

### 삭제

```text
Remove(head, value)
  Pre: head는 리스트의 앞부분에 위치한 노드
       value는 리스트에서 삭제할 값
  Post: value가 리스트에서 삭제되었다면 true; 아니라면 false
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
    end if
    n.next ← n.next.next
    return true
  end if
  return false
end Remove
```

### 순회

```text
Traverse(head)
  Pre: head는 리스트의 앞부분에 위치할 노드
  Post: 리스트의 아이템들은 순회 되어야 함
  n ← head
  while n != ø
    yield n.value
    n ← n.next
  end while
end Traverse
```

### 역전 순회

```text
ReverseTraversal(head, tail)
  Pre: head와 tail은 같은 리스트에 포함되어야 함
  Post: 리스트의 아이템들은 역전 순회되어야 함.
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

## 복잡도

### Time Complexity

| Access    | Search    | Insertion | Deletion  |
| :-------: | :-------: | :-------: | :-------: |
| O(n)      | O(n)      | O(1)      | O(n)      |

### Space Complexity

O(n)

## 참고

- [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
- [YouTube](https://www.youtube.com/watch?v=njTh_OwMljA&index=2&t=1s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
