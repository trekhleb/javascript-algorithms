# 링크드 리스트

_Read this in other languages:_
[_简体中文_](README.zh-CN.md),
[_Русский_](README.ru-RU.md),
[_日本語_](README.ja-JP.md),
[_Português_](README.pt-BR.md)

컴퓨터과학에서, **링크드 리스트**는 데이터 요소의 선형 집합이며, 이 집합에서 논리적 저장 순서는 메모리의 물리적 저장 순서와 일치하지 않습니다. 그 대신, 각각의 원소들은 자기 자신 다음의 원소를 가리킵니다. **링크드 리스트**는 순서를 표현하는 노드들의 집합으로 이루어져 있습니다. 간단하게, 각각의 노드들은 데이터와 다음 순서의 노드를 가리키는 레퍼런스로 이루어져 있습니다. (링크라고 부릅니다.) 이 자료구조는 순회하는 동안 순서에 상관없이 효율적인 삽입이나 삭제가 가능합니다. 더 복잡한 변형은 추가적인 링크를 더해, 임의의 원소 참조로부터 효율적인 삽입과 삭제를 가능하게 합니다. 링크드 리스트의 단점은 접근 시간이 선형이라는 것이고, 병렬처리도 하지 못합니다. 임의 접근처럼 빠른 접근은 불가능합니다. 링크드 리스트에 비해 배열이 더 나은 캐시 지역성을 가지고 있습니다.

![링크드 리스트](https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg)

## 기본 연산에 대한 수도코드

### 삽입

```text
Add(value)
  Pre: 리스트에 추가할 값
  Post: 리스트의 맨 마지막에 있는 값
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
 Pre: 리스트에 추가할 값
 Post: 리스트의 맨 앞에 있는 값
 n ← node(value)
 n.next ← head
 head ← n
 if tail = ø
   tail ← n
 end
end Prepend
```

### 탐색

```text
Contains(head, value)
  Pre: head는 리스트에서 맨 앞 노드
       value는 찾고자 하는 값
  Post: 항목이 링크드 리스트에 있으면 true;
        없으면 false
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
  Pre: head는 리스트에서 맨 앞 노드
       value는 삭제하고자 하는 값
  Post: 항목이 링크드 리스트에서 삭제되면 true;
        없으면 false
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
  Pre: head는 리스트에서 맨 앞 노드
  Post: 순회된 항목들
  n ← head
  while n != ø
    yield n.value
    n ← n.next
  end while
end Traverse
```

### 역순회

```text
ReverseTraversal(head, tail)
  Pre: 같은 리스트에 들어 있는 맨 앞, 맨 뒤 노드
  Post: 역순회된 항목들
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

### 시간 복잡도

|  접근   |  탐색   |  삽입   |  삭제   |
| :---: | :---: | :---: | :---: |
| O(n)  | O(n)  | O(1)  | O(1)  |

### 공간 복잡도

O(n)

## 참조

- [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
- [YouTube](https://www.youtube.com/watch?v=njTh_OwMljA&index=2&t=1s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
