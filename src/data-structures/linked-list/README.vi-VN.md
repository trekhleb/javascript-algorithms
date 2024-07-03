# Danh sách liên kết (Linked List)

_Đọc bằng ngôn ngữ khác:_
[_简体中文_](README.zh-CN.md),
[_Русский_](README.ru-RU.md),
[_日本語_](README.ja-JP.md),
[_Português_](README.pt-BR.md),
[_한국어_](README.ko-KR.md),
[_Español_](README.es-ES.md),
[_Türkçe_](README.tr-TR.md),
[_Українська_](README.uk-UA.md)


Trong khoa học máy tính, một danh sách liên kết là một bộ sưu tập tuyến tính
các phần tử dữ liệu, trong đó thứ tự tuyến tính không được xác định bởi
vị trí vật lý của chúng trong bộ nhớ. Thay vào đó, mỗi
phần tử trỏ đến phần tử tiếp theo. Đây là một cấu trúc dữ liệu
bao gồm một nhóm các nút cùng đại diện cho
một chuỗi. Dưới dạng đơn giản nhất, mỗi nút
bao gồm dữ liệu và một tham chiếu (nói cách khác,
một liên kết) đến nút tiếp theo trong chuỗi. Cấu trúc này
cho phép việc chèn hoặc loại bỏ các phần tử một cách hiệu quả
từ bất kỳ vị trí nào trong chuỗi trong quá trình lặp.
Các biến thể phức tạp hơn thêm các liên kết bổ sung, cho phép
việc chèn hoặc loại bỏ một cách hiệu quả từ bất kỳ phần tử nào
trong chuỗi dựa trên tham chiếu. Một nhược điểm của danh sách liên kết
là thời gian truy cập tuyến tính (và khó điều chỉnh). Truy cập nhanh hơn,
như truy cập ngẫu nhiên, là không khả thi. Mảng
có độ tương phản cache tốt hơn so với danh sách liên kết.

![Linked List](./images/linked-list.jpeg)
*Được làm từ [okso.app](https://okso.app)*

## Mã giải (Pseudocode) cho Các Hoạt Động Cơ Bản
  *head = đầu,
  *tail = đuôi,
  *next = kế tiếp,
  *node = nút,
  *value = giá trị

### Chèn (Insert)

```
ThêmGiáTrị(giá trị) (Add(value))
  Trước(Pre): giá trị là giá trị muốn thêm vào danh sách
  Sau(Post): giá trị đã được đặt ở cuối danh sách

 n ← node(value)
  if head = ø
    head ← n
    tail ← n
  else
    tail.next ← n
    tail ← n
  end if
end ThêmGiáTrị(Add)
```

```
ChènVàoĐầu(giá trị)
  Trước(Pre): giá trị là giá trị muốn thêm vào danh sách
  Sau(Post): giá trị đã được đặt ở đầu danh sách

 n ← node(value)
 n.next ← head
 head ← n
 if tail = ø
   tail ← n
 end
end ChènVàoĐầu
```

### Tìm Kiếm (Search)
```
Chứa(đầu, giá trị)
  Trước: đầu là nút đầu trong danh sách
       giá trị là giá trị cần tìm kiếm
  Sau: mục đó có thể ở trong danh sách liên kết, true; nếu không, là false
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

### Xóa (Delete)
```
Xóa(đầu, giá trị)
  Trước: đầu là nút đầu trong danh sách
       giá trị là giá trị cần xóa khỏi danh sách
  Sau: giá trị đã được xóa khỏi danh sách, true; nếu không, là false
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

### Duyệt(raverse)
Duyệt(đầu)
  Trước: đầu là nút đầu trong danh sách
  Sau: các mục trong danh sách đã được duyệt
  n ← head
  while n != ø
    yield n.value
    n ← n.next
  end while
end Traverse

### Duyệt Ngược (Traverse in Reverse)
DuyệtNgược(đầu, đuôi)
  Trước: đầu và đuôi thuộc cùng một danh sách
  Sau: các mục trong danh sách đã được duyệt theo thứ tự ngược lại

## Độ Phức Tạp

### Độ Phức Tạp Thời Gian (Time Complexity)

| Access    | Search    | Insertion | Deletion  |
| :-------: | :-------: | :-------: | :-------: |
| O(n)      | O(n)      | O(1)      | O(n)      |

## Độ Phức Tạp Không Gian (Space Complexity)
O(n)

## Tham Khảo

- [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
- [YouTube](https://www.youtube.com/watch?v=njTh_OwMljA&index=2&t=1s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
