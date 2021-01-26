# 二叉查找树（Binary Search Tree）

在计算机科学中, **二叉搜索树** (BST), 又称二叉查找树或二叉排序树, 是一种特殊的容器:
来存储（如数字、名称等）“节点” 的数据结构.在存储中。它可以快速查找、添加和删除节点,可被用于动态添加节点,或者在表中通过键值查找项目 (例如: 通过名字查找一个人的手机号)

二叉搜索树将它们的键按排序顺序保存，以便可以使用二分法的原理进行查找其他操作。
在树中查找或插入新键时，从树的根遍历到叶，与存储在树的节点中的键进行比较，
并根据比较结果决定继续在左子树或右子树中搜索。
平均而言，这意味着每次比较都允许跳过大约一半树的操作，以便每次查找、插入或删除所需的时间与树中存储的项数的对数成正比。
这比在（未排序的）数组中按键查找项所需的线性时间要好得多，但比哈希表上相应的操作要慢。


这是一个深度为 **3**,数量为 **9**,根节点为**8**的二叉搜索树.叶子节点没有画出来。

![Binary Search Tree](https://upload.wikimedia.org/wikipedia/commons/d/da/Binary_search_tree.svg)

## 基础操作的伪代码

### 插入（Insertion）

```text
insert(value)
  Pre: value 已经通过自定义类型 T 检查
  期望结果: value 已经被插入到树种正确位置
  if root = ø
    root ← node(value)
  else
    insertNode(root, value)
  end if
end insert
```

```text
insertNode(current, value)
  Pre: current 是起始node
  Post: value 已经被插入到树种正确位置
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

### 查找（Searching）

```text
contains(root, value)
  Pre: root 是树的根节点, value 是我们要查找的值
  Post: value 是否查找到
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


### 删除（Deletion）

```text
remove(value)
  Pre: value 是我们要删除的值, root 是BST的节点, count 是BST 项 的数量
  Post: value 节点如果被找到且被删除,结果为 true, 否则为 false
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

### 查找父节点

```text
findParent(value, root)
  Pre: value 是我们要查找其父节点的节点值
       root 是BST的根节点且不为 ø
  Post: 如果找到找到父节点,返回其引用, 否则返回 ø
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

### 查找节点

```text
findNode(root, value)
  Pre: value 要查找其父节点的节点的值
       root 是BST的根节点
  Post: 如果找到节点返回其引用, 否则返回 ø
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

### 查找最小值

```text
findMin(root)
  Pre: root是BST的根节点
       root = ø
  Post: BST中的最小值位置
  if root.left = ø
    return root.value
  end if
  findMin(root.left)
end findMin
```

### 查找最大值

```text
findMax(root)
  Pre: root是BST的根节点
    root = ø
  Post: BST中的最大值位置
  if root.right = ø
    return root.value
  end if
  findMax(root.right)
end findMax
```

### 遍历(Traversal)


#### 中序遍历（Inorder traversal）
> 中序遍历是从当前节点（节点 c）的左孩子开始访问，再访问当前节点，最后是其右节点。开始时，节点 c 为 BST 的根节点。算法如下：

```text
inorder(root)
  Pre: root是BST的根节点
  Post: 中序遍历BST中的所有节点
  if root = ø
    inorder(root.left)
    yield root.value
    inorder(root.right)
  end if
end inorder
```
则上图中树的遍历结果为：1, 3, 4, 6, 7, 8, 10, 13, 14

#### 前序遍历（Perorder traversal）
> 前序遍历从当前节点（节点 c）开始访问，然后访问其左孩子，再访问右孩子。开始时，节点 c 为 BST 的根节点。算法如下：

```text
preorder(root)
  Pre: root是BST的根节点
  Post: 前序遍历BST中的所有节点
  if root = ø
    yield root.value
    preorder(root.left)
    preorder(root.right)
  end if
end preorder
```

则上图中树的遍历结果为：8, 3, 1, 6, 4, 7, 10, 13, 14

#### 后序遍历（Postorder traversal）
> 后序遍历首先从当前节点（节点 c）的左孩子开始访问，然后是右孩子，最后才是当前节点本身。开始时，节点 c 为 BST 的根节点。算法如下：

```text
postorder(root)
  Pre: root是BST的根节点
  Post: 后序遍历BST中的所有节点
  if root = ø
    postorder(root.left)
    postorder(root.right)
    yield root.value
  end if
end postorder
```
则上图中树的遍历结果为：1, 4, 7, 6, 3, 13, 14, 10, 8

## 复杂度（Complexities）

### 时间复杂度（Time Complexities）

| 访问（Access）| 查找（Search）| 插入（Insertion） | 删除（Deletion）|
| :-------: | :-------: | :-------: | :-------: |
| O(log(n)) | O(log(n)) | O(log(n)) | O(log(n)) |

### 空间复杂度（Space Complexities）

O(n)

## 参考文档

- [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_tree)
- [Inserting to BST on YouTube](https://www.youtube.com/watch?v=wcIRPqTR3Kc&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=9&t=0s)
- [BST Interactive Visualisations](https://www.cs.usfca.edu/~galles/visualization/BST.html)
