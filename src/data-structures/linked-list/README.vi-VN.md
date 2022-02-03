# Danh sách liên kết

_Đọc tài liệu này bằng các ngôn ngữ khác:_
[_简体中文_](README.zh-CN.md),
[_Русский_](README.ru-RU.md),
[_日本語_](README.ja-JP.md),
[_Português_](README.pt-BR.md),
[_한국어_](README.ko-KR.md),
[_Español_](README.es-ES.md),
[_Turkish_](README.tr-TR.md),

Trong khoa học máy tính, **danh sách liên kết** là một tập hợp tuyến tính các phần tử dữ liệu, theo đó thứ tự các phần tử không phụ thuộc vào địa chỉ trên thanh ghi. Thay vào đó, mỗi phần tử chứa địa chỉ của phần tử tiếp theo của nó. Nó là một cấu trúc dữ liệu bao gồm các nút đại diện cho một chu kì. Có thể hiểu đơn giản, mỗi nút bao gồm dữ liệu và một địa chỉ (nói cách khác, một liên kết) đến nút tiếp theo. Cấu trúc này cho phép bạn có thể Chèn hoặc xóa phần tử tại một vị trí trong suốt quá trình duyệt.
Các biến thể phức tạp hơn có thêm liên kết bổ sung, cho phép chèn hoặc xóa hiệu quả từ một tham chiếu. Một nhược điểm của danh sách liên kết là độ phức tạp là một hàm tuyến tính. Truy cập ngẫu nhiên là không khả thi. Mảng có cơ chế cache tốt hơn danh sách liên kết.

![Linked List](https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg)

## Mã giả cho cá theo tác cơ bản

### Chèn

```text
Add(value)
  Pre: value là giá trị thêm vào danh sách
  Post: value được chèn vào cuối danh sách
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
 Pre: value là giá trị thêm vào danh sách
 Post: value được chèn vào đầu danh sách
 n ← node(value)
 n.next ← head
 head ← n
 if tail = ø
   tail ← n
 end
end Prepend
```

### Tìm kiếm

```text
Contains(head, value)
  Pre: head là nút đầu tiên của danh sách
       value là giá trị cần tìm kiếm
  Post: phần tử có trong danh sách, true; phần tử không có trong danh sách, false
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

### Xóa

```text
Remove(head, value)
  Pre: head là nút đầu của danh sách
       value là giá trị cần xóa khỏi danh sách
  Post: phần tử được xóa khỏi danh sách, true, ngược lại false
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

### Duyệt

```text
Traverse(head)
  Pre: head là nút đầu của danh sách cần duyệt
  Post: tất cả các phần tử được duyệt qua
  n ← head
  while n != ø
    yield n.value
    n ← n.next
  end while
end Traverse
```

### Duyệt nghịch đảo

```text
ReverseTraversal(head, tail)
  Pre: head và tail là nút đầu và cuối của danh sách
  Post: các phần tử trong danh sách được duyệt từ sau ra trước
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

## Độ phức tạp

### Time Complexity

| Truy cập | Tìm kiếm | Chèn | Xóa  |
|:--------:|:--------:|:----:|:----:|
|   O(n)   |   O(n)   | O(1) | O(n) |

### Space Complexity

O(n)

## Tham khảo

- [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
- [YouTube](https://www.youtube.com/watch?v=njTh_OwMljA&index=2&t=1s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
