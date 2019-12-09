# Linked List

_Read this in other languages:_
[_简体中文_](README.zh-CN.md),
[_Русский_](README.ru-RU.md),
[_日本語_](README.ja-JP.md),
[_Português_](README.pt-BR.md),
[_한국어_](README.ko-KR.md)

컴퓨터과학에서 **연결 리스트**는 데이터 원소의 선형 컬렉션이고,
그 선형 순서는 메모리의 물리적 위치로 결정되지 않습니다.
대신, 각 원소는 다음 원소를 가리 킵니다.
시퀀스를 나타내는 노드의 그룹으로 이루어진 데이터 구조입니다.
가장 간단한 형태로, 각 노드는 데이터와 시퀀스의 다음 노드에 대한 참조(다른 말로 연결)로 구성되어 있습니다.
이 구조는 반복을 통해 시퀀스의 어떤 위치의 원소라도 효율적으로 추가와 삭제할 수 있습니다.
보다 복잡한 변형은 연결을 추가해 임의 위치의 원소인 경우에도 효율적으로 추가와 삭제가 가능합니다.
연결 리스트의 단점은 접근 시간이 선형이라는 것입니다(그리고 파이프라인하기 어렵).
임의 접근과 같이 빠른 접근은 불가능합니다.
배열은 연결 리스트와 비교하면 캐쉬 지역성(locality)이 더 좋습니다.

![Linked List](https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg)

## 기본 연산을 위한 의사 코드

### 추가

```text
Add(value)
  Pre: value는 리스트에 추가되어야할 값
  Post: value가 리스트 끝에 추가됨
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
 Pre: value는 리스트에 추가되어야할 값
 Post: value가 리스트 앞에 추가됨
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
  Pre: head는 리스트의 헤드 노드
       value는 리스트에서 검색하려는 값
  Post: value가 리스트에 있으면, true; 그렇지 않으면 false
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
  Pre: head는 리스트의 헤드 노드
       value는 리스트에서 삭제하려는 값
  Post: value가 리스트에서 삭제되면, true; 그렇지 않으면 false
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

### 탐색

```text
Traverse(head)
  Pre: head는 리스트의 헤드 노드
  Post: 탐색된 리스트의 원소값들
  n ← head
  while n != ø
    yield n.value
    n ← n.next
  end while
end Traverse
```

### 역탐색

```text
ReverseTraversal(head, tail)
  Pre: head와 tail은 같은 리스트에 속해있음
  Post: 역방향으로 탐색된 리스트의 원소값들
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

| 접근      | 검색      | 추가      | 삭제      |
| :-------: | :-------: | :-------: | :-------: |
| O(n)      | O(n)      | O(1)      | O(n)      |

### 공간 복잡도

O(n)

## 참조

- [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
- [YouTube](https://www.youtube.com/watch?v=njTh_OwMljA&index=2&t=1s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
