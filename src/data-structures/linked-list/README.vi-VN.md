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

### Chèn (Insert)

```
ThêmGiáTrị(giá trị) (Add(value))
  Trước(Pre): giá trị là giá trị muốn thêm vào danh sách
  Sau(Post): giá trị đã được đặt ở cuối danh sách
  (head = đầu, tail = đuôi, next = kế tiếp )
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
  Trước: giá trị là giá trị muốn thêm vào danh sách
  Sau: giá trị đã được đặt ở đầu danh sách
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
  n ← đầu
  trong khi n != ø và n.giá trị != giá trị
    n ← n.kế tiếp
  kết thúc trong khi
  nếu n = ø
    trả về false
  kết thúc nếu
  trả về true
end Chứa
```
