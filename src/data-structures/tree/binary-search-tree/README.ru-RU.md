# Двоичное дерево поиска

Двоичное дерево — иерархическая структура данных, в которой каждый узел имеет не более двух потомков (детей). Как
правило, первый называется родительским узлом, а дети называются левым и правым наследниками. Двоичное дерево не
является упорядоченным ориентированным деревом.

Двоичное дерево поиска — это двоичное дерево, для которого выполняются следующие дополнительные условия (свойства дерева
поиска):

* Оба поддерева — левое и правое — являются двоичными деревьями поиска,
* У всех узлов левого поддерева произвольного узла X значения ключей данных меньше, нежели значение ключа данных самого
узла X,
* У всех узлов правого поддерева произвольного узла X значения ключей данных больше либо равны, нежели значение ключа
данных самого узла X.

Двоичное дерево поиска позволяет осуществлять быстрый поиск, добавление и удаление элементов и может использоваться для
реализации либо динамических наборов элементов, либо таблиц поиска, которые позволяют найти элемент по его ключу
(например, найти номер телефона человека по имени).

Двоичное дерево поиска хранит свои ключи в отсортированном порядке, так что поиск и другие операции могут использовать
принцип бинарного поиска: при поиске ключа в дереве (или места для вставки нового ключа) происходит обход дерева от корня
до листа. В процессе обхода сопоставляются ключи хранящиеся в узлах дерева, и принимается решение - продолжить поиск в
левом или правом поддеревьях. В среднем это означает, что каждое сравнение позволяет операциям пропустить около половины
дерева. Так что каждый поиск, вставка или удаление занимает время, пропорциональное логарифму числа элементов,
хранящихся в дереве. Это намного лучше, чем линейное время, необходимое для поиска элементов по ключу в
(несортированном) массиве. Но медленнее, чем соответствующие операции с хеш-таблицами.

Двоичное дерево поиска размером 9 и глубиной 3, 8 в корне. 

![Двоичное дерево поиска](https://upload.wikimedia.org/wikipedia/commons/d/da/Binary_search_tree.svg)

## Псевдокод базовых операций

### Вставка

```text
insert(value)
  Pre: value has passed custom type checks for type T
  Post: value has been placed in the correct location in the tree
  if root = ø
    root ← node(value)
  else
    insertNode(root, value)
  end if
end insert
```
    
```text
insertNode(current, value)
  Pre: current is the node to start from
  Post: value has been placed in the correct location in the tree
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

### Поиск

```text
contains(root, value)
  Pre: root is the root node of the tree, value is what we would like to locate
  Post: value is either located or not
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
    
     
### Удаление

```text
remove(value)
  Pre: value is the value of the node to remove, root is the node of the BST
      count is the number of items in the BST
  Post: node with value is removed if found in which case yields true, otherwise false
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

### Поиск родителя

```text
findParent(value, root)
  Pre: value is the value of the node we want to find the parent of
       root is the root node of the BST and is != ø
  Post: a reference to the prent node of value if found; otherwise ø
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

### Поиск узла

```text
findNode(root, value)
  Pre: value is the value of the node we want to find the parent of
       root is the root node of the BST
  Post: a reference to the node of value if found; otherwise ø
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
    
### Поиск минимума

```text
findMin(root)
  Pre: root is the root node of the BST
    root = ø
  Post: the smallest value in the BST is located
  if root.left = ø
    return root.value
  end if
  findMin(root.left)
end findMin
```
    
### Поиск максимума

```text
findMax(root)
  Pre: root is the root node of the BST
    root = ø
  Post: the largest value in the BST is located
  if root.right = ø
    return root.value
  end if
  findMax(root.right)
end findMax
```
    
### Обход

#### Симметричный обход

```text
inorder(root)
  Pre: root is the root node of the BST
  Post: the nodes in the BST have been visited in inorder
  if root = ø
    inorder(root.left)
    yield root.value
    inorder(root.right)
  end if
end inorder
```

#### Прямой обход

```text
preorder(root)
  Pre: root is the root node of the BST
  Post: the nodes in the BST have been visited in preorder
  if root = ø
    yield root.value
    preorder(root.left)
    preorder(root.right)
  end if
end preorder
```
   
#### Обратный обход

```text
postorder(root)
  Pre: root is the root node of the BST
  Post: the nodes in the BST have been visited in postorder
  if root = ø
    postorder(root.left)
    postorder(root.right)
    yield root.value
  end if
end postorder
```
     
## Сложность

### Временная сложность

| Access    | Search    | Insertion | Deletion  |
| :-------: | :-------: | :-------: | :-------: |
| O(log(n)) | O(log(n)) | O(log(n)) | O(log(n)) |

### Пространственная сложность

O(n)

## Ссылки

- [Wikipedia](https://ru.wikipedia.org/wiki/%D0%94%D0%B2%D0%BE%D0%B8%D1%87%D0%BD%D0%BE%D0%B5_%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D0%BE_%D0%BF%D0%BE%D0%B8%D1%81%D0%BA%D0%B0)
- [YouTube](https://www.youtube.com/watch?v=VddwdRVYpuw)
