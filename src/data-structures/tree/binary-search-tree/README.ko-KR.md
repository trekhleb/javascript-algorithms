# 이진 탐색 트리

_Read this in other languages:_
[_Português_](README.pt-BR.md)

컴퓨터 과학에서 **이진 탐색 트리** (BST)는 순서가 부여된 또는 정렬된 이진 트리라고도 불리며, 
메모리에 "항목들" (숫자, 이름 등)을 저장하는 자료 구조입니다.
항목의 빠른 조회, 추가 및 삭제를 가능하게 하며 동적인 항목 집합 또는 키로 항목을 찾을 수 있는 
룩업 테이블(예를 들어, 이름으로 사람의 전화번호를 찾을 수 있는 것)을 구현하기 위해 사용할 수 있습니다.

이진 탐색 트리는 조회 및 기타 작업이 이진 탐색의 원리를 사용할 수 있도록 키를 정렬된 순서로 유지합니다.
트리에서 키(또는 새 키를 삽입하는 위치)를 찾을 때, 트리를 루트에서 리프까지 이동하며 트리의 노드에 저장된 키와 비교하고,
비교를 바탕으로 왼쪽 또는 오른쪽 서브 트리에서 탐색을 계속할지 결정합니다. 
평균적으로 각 비교는 트리의 절반 정도를 건너뛸 수 있으므로 각 조회, 삽입 또는 삭제는 트리에 저장된 항목 수에 비례하여 시간이 걸립니다. 
이는 (정렬되지 않은) 배열에서 키로 항목을 찾는 데 필요한 선형 시간보다 훨씬 빠르지만 해시 테이블의 해당 작업보다는 느립니다.

루트에 8이 있는 크기 9와 깊이 3의 이진 탐색 트리. 리프는 그려지지 않습니다.

![Binary Search Tree](https://upload.wikimedia.org/wikipedia/commons/d/da/Binary_search_tree.svg)

## 기본 연산에 대한 수도코드

### 삽입

```text
insert(value)
  Pre: value는 타입 T에 대한 커스텀 타입 체크를 통과한 값
  Post: 값이 트리의 올바른 위치에 배치
  if root = ø
    root ← node(value)
  else
    insertNode(root, value)
  end if
end insert
```

```text
insertNode(current, value)
  Pre: current는 시작하는 노드
  Post: 값이 트리의 올바른 위치에 배치
  if value < current.value
    if current.left = ø
      current.left ← node(value)
    else
      InsertNode(current.left, value)
    end if
  else
    if current.right = ø
      current.right ← node(value)
    else
      InsertNode(current.right, value)
    end if
  end if
end insertNode
```

### 탐색

```text
contains(root, value)
  Pre: root는 트리의 루트 노드, value는 찾고자 하는 값
  Post: value가 있는지 없는지에 대한 여부
  if root = ø
    return false
  end if
  if root.value = value
    return true
  else if value < root.value
    return contains(root.left, value)
  else
    return contains(root.right, value)
  end if
end contains
```

### 삭제

```text
remove(value)
  Pre: value는 삭제할 노드의 값, root는 BST의 노드
      count는 BST내의 항목 수
  Post: value가 있는 노드가 발견되면 제거되고 이 경우 true, 그렇지 않으면 false
  nodeToRemove ← findNode(value)
  if nodeToRemove = ø
    return false
  end if
  parent ← findParent(value)
  if count = 1
    root ← ø
  else if nodeToRemove.left = ø and nodeToRemove.right = ø
    if nodeToRemove.value < parent.value
      parent.left ←  nodeToRemove.right
    else
      parent.right ← nodeToRemove.right
    end if
  else if nodeToRemove.left != ø and nodeToRemove.right != ø
    next ← nodeToRemove.right
    while next.left != ø
      next ← next.left
    end while
    if next != nodeToRemove.right
      remove(next.value)
      nodeToRemove.value ← next.value
    else
      nodeToRemove.value ← next.value
      nodeToRemove.right ← nodeToRemove.right.right
    end if
  else
    if nodeToRemove.left = ø
      next ← nodeToRemove.right
    else
      next ← nodeToRemove.left
    end if
    if root = nodeToRemove
      root = next
    else if parent.left = nodeToRemove
      parent.left = next
    else if parent.right = nodeToRemove
      parent.right = next
    end if
  end if
  count ← count - 1
  return true
end remove
```

### 노드의 부모 찾기

```text
findParent(value, root)
  Pre: value는 부모를 찾고자 하는 노드의 값
       root는 ø이 아닌 BST의 루트 노드
  Post: 찾았다면 value의 부모 노드의 참조값, 그렇지 않으면 ø
  if value = root.value
    return ø
  end if
  if value < root.value
    if root.left = ø
      return ø
    else if root.left.value = value
      return root
    else
      return findParent(value, root.left)
    end if
  else
    if root.right = ø
      return ø
    else if root.right.value = value
      return root
    else
      return findParent(value, root.right)
    end if
  end if
end findParent
```

### 노드 찾기

```text
findNode(root, value)
  Pre: value는 value는 부모를 찾고자 하는 노드의 값
       root는 BST의 루트 노드
  Post: 찾았다면 value의 부모 노드의 참조값, 그렇지 않으면 ø
  if root = ø
    return ø
  end if
  if root.value = value
    return root
  else if value < root.value
    return findNode(root.left, value)
  else
    return findNode(root.right, value)
  end if
end findNode
```

### 최소값 찾기

```text
findMin(root)
  Pre: root는 BST의 루트 노드
    root = ø
  Post: BST에 있는 가장 작은 값
  if root.left = ø
    return root.value
  end if
  findMin(root.left)
end findMin
```

### 최대값 찾기

```text
findMax(root)
  Pre: root는 BST의 루트 노드
    root = ø
  Post: BST에 있는 가장 큰 값
  if root.right = ø
    return root.value
  end if
  findMax(root.right)
end findMax
```

### 순회

#### 중위 순회

```text
inorder(root)
  Pre: root는 BST의 루트 노드
  Post: BST의 노드들을 중위 순회
  if root != ø
    inorder(root.left)
    yield root.value
    inorder(root.right)
  end if
end inorder
```

#### 전위 순회

```text
preorder(root)
  Pre: root는 BST의 루트 노드
  Post: BST의 노드들을 전위 순회
  if root != ø
    yield root.value
    preorder(root.left)
    preorder(root.right)
  end if
end preorder
```

#### 후위 순회

```text
postorder(root)
  Pre: root는 BST의 루트 노드
  Post: BST의 노드들을 후위 순회
  if root != ø
    postorder(root.left)
    postorder(root.right)
    yield root.value
  end if
end postorder
```

## 복잡도

### 시간 복잡도

|   접근    |   탐색    |   삽입    |   삭제    |
| :-------: | :-------: | :-------: | :-------: |
| O(log(n)) | O(log(n)) | O(log(n)) | O(log(n)) |

### 공간 복잡도

O(n)

## 참고

- [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_tree)
- [Inserting to BST on YouTube](https://www.youtube.com/watch?v=wcIRPqTR3Kc&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=9&t=0s)
- [BST Interactive Visualisations](https://www.cs.usfca.edu/~galles/visualization/BST.html)
