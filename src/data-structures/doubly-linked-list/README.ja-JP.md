# 双方向リスト

コンピュータサイエンスにおいて、**双方向リスト**はノードと呼ばれる一連のリンクレコードからなる連結データ構造です。各ノードはリンクと呼ばれる2つのフィールドを持っていて、これらは一連のノード内における前のノードと次のノードを参照しています。最初のノードの前のリンクと最後のノードの次のリンクはある種の終端を示していて、一般的にはダミーノードやnullが格納され、リストのトラバースを容易に行えるようにしています。もしダミーノードが1つしかない場合、リストはその1つのノードを介して循環的にリンクされます。これは、それぞれ逆の順番の単方向のリンクリストが2つあるものとして考えることができます。

![Doubly Linked List](https://upload.wikimedia.org/wikipedia/commons/5/5e/Doubly-linked-list.svg)

2つのリンクにより、リストをどちらの方向にもトラバースすることができます。双方向リストはノードの追加や削除の際に、片方向リンクリストと比べてより多くのリンクを変更する必要があります。しかし、その操作は簡単で、より効率的な(最初のノード以外の場合)可能性があります。前のノードのリンクを更新する際に前のノードを保持したり、前のノードを見つけるためにリストをトラバースする必要がありません。

## 基本操作の擬似コード

### 挿入

```text
Add(value)
  Pre: value is the value to add to the list
  Post: value has been placed at the tail of the list
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
    
### 削除

```text
Remove(head, value)
  Pre: head is the head node in the list
       value is the value to remove from the list
  Post: value is removed from the list, true; otherwise false
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
    
### 逆トラバース

```text
ReverseTraversal(tail)
  Pre: tail is the node of the list to traverse
  Post: the list has been traversed in reverse order
  n ← tail
  while n = ø
    yield n.value
    n ← n.previous
  end while
end Reverse Traversal
```
    
## 計算量

## 時間計算量

| Access    | Search    | Insertion | Deletion  |
| :-------: | :-------: | :-------: | :-------: |
| O(n)      | O(n)      | O(1)      | O(n)      |

### 空間計算量

O(n)

## 参考

- [Wikipedia](https://en.wikipedia.org/wiki/Doubly_linked_list)
- [YouTube](https://www.youtube.com/watch?v=JdQeNxWCguQ&t=7s&index=72&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
