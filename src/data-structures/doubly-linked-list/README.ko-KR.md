# Doubly Linked List

_Read this in other languages:_
[_Русский_](README.ru-RU.md),
[_简体中文_](README.zh-CN.md),
[_日本語_](README.ja-JP.md),
[_Português_](README.pt-BR.md)

컴퓨터공학에서 **이중 연결 리스트**는 순차적으로 링크된 노드라는 레코드 세트로 구성된 링크된 데이터 구조입니다.
각 노드에는 링크라고 하는 두 개의 필드가 있으며, 노드 순서에서 이전 노드와 다음 노드에 대한 참조를 가집니다.
시작 및 종료 노드의 이전 및 다음 링크는 각각 리스트의 순회를 용이하게 하기 위해서 일종의 종결자 (일반적으로 센티넬노드 또는 null)를 나타냅니다.
센티넬 노드가 하나만 있으면, 목록이 센티넬 노드를 통해서 원형으로 연결됩니다.
동일한 데이터 항목으로 구성되어 있지만, 반대 순서로 두 개의 단일 연결 리스트로 개념화 할 수 있습니다.

![이중 연결 리스트](https://upload.wikimedia.org/wikipedia/commons/5/5e/Doubly-linked-list.svg)

두 개의 노드 링크를 사용하면 어느 방향으로든 리스트를 순회할 수 있습니다.
이중 연결 리스트에서 노드를 추가하거나 제거하려면, 단일 연결 리스트에서 동일한 작업보다 더 많은 링크를 변경해야 하지만, 첫 번째 노드 이외의 노드인 경우 작업을 추적할 필요가 없으므로 작업이 더 단순해져 잠재적으로 더 효율적입니다.
리스트 순회 중 이전 노드 또는 링크를 수정할 수 있도록 이전 노드를 찾기 위해 리스트를 순회할 필요가 없습니다.

## 기본 동작을 위한 Pseudocode

### 삽입

```text
Add(value)
  Pre: value는 리스트에 추가하고자 하는 값
  Post: value는 목록의 끝에 배치됨
  n ← node(value)
  if head = ø
    head ← n
    tail ← n
  else
    n.previous ← tail
    tail.next ← n
    tail ← n
  end if
end Add
```
    
### 삭제

```text
Remove(head, value)
  Pre: head는 리스트의 앞단에 위치
       value는 리스트에서 제거하고자 하는 값
  Post: value가 리스트에서 제거되면 true; 아니라면 false;
  if head = ø
    return false
  end if
  if value = head.value
    if head = tail
      head ← ø
      tail ← ø
    else
      head ← head.next
      head.previous ← ø
    end if
    return true
  end if
  n ← head.next
  while n = ø and value !== n.value
    n ← n.next
  end while
  if n = tail
    tail ← tail.previous
    tail.next ← ø
    return true
  else if n = ø
    n.previous.next ← n.next
    n.next.previous ← n.previous
    return true
  end if
  return false
end Remove
```
    
### 역순회

```text
ReverseTraversal(tail)
  Pre: tail은 리스트에서 순회하고자 하는 노드
  Post: 리스트가 역순으로 순회됨
  n ← tail
  while n = ø
    yield n.value
    n ← n.previous
  end while
end Reverse Traversal
```
    
## 복잡도

## 시간 복잡도

| Access    | Search    | Insertion | Deletion  |
| :-------: | :-------: | :-------: | :-------: |
| O(n)      | O(n)      | O(1)      | O(n)      |

### 공간 복잡도

O(n)

## 참고

- [Wikipedia](https://en.wikipedia.org/wiki/Doubly_linked_list)
- [YouTube](https://www.youtube.com/watch?v=JdQeNxWCguQ&t=7s&index=72&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
