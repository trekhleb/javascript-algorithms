# السجل (Linked List)

_اقرأ بغير لغات :_
[_简体中文_](README.zh-CN.md),
[_Русский_](README.ru-RU.md),
[_日本語_](README.ja-JP.md),
[_Português_](README.pt-BR.md),
[_한국어_](README.ko-KR.md),
[_Español_](README.es-ES.md),
[_Turkish_](README.tr-TR.md),
[_English_](README.md)

في علوم الحاسوب السجل هو بنية معطيات خطية
كلمة خطية هنا لا تعني أن العناصر يخزنون
في الذاكرة بجانب بعضهم البعض بل تعني أن
كل عنصر من العناصر يشير إلى العنصرالذي
يليه
أنها بنية معطيات مؤلفة من مجموعة من العقد
مترابطة فيما بينها
في أبسط الحالات كل عقدة تحتوي على بيانات
و مؤشر يشير إلى العقدة التالية
هذه البنية تسمح بإضافة و حذف عناصر بفعالية
في أي مكان في السجل

![السجل](./images/linked-list.jpeg)

_Made with [okso.app](https://okso.app)_

## شرح مبسط للعمليات الرئيسية

### الإضافة

```text
Add(value)
  Pre: value is the value to add to the list
  Post: value has been placed at the tail of the list
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
 Pre: value is the value to add to the list
 Post: value has been placed at the head of the list
 n ← node(value)
 n.next ← head
 head ← n
 if tail = ø
   tail ← n
 end
end Prepend
```

### البحث

```text
Contains(head, value)
  Pre: head is the head node in the list
       value is the value to search for
  Post: the item is either in the linked list, true; otherwise false
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

### الحذف

```text
Remove(head, value)
  Pre: head is the head node in the list
       value is the value to remove from the list
  Post: value is removed from the list, true, otherwise false
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

### التجوال

```text
Traverse(head)
  Pre: head is the head node in the list
  Post: the items in the list have been traversed
  n ← head
  while n != ø
    yield n.value
    n ← n.next
  end while
end Traverse
```

### التجوال العكسي

```text
ReverseTraversal(head, tail)
  Pre: head and tail belong to the same list
  Post: the items in the list have been traversed in reverse order
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

## التعقيد

### التعقيد الزمني

| البحث | الوصول | الإضافة | الحذف |
| :---: | :----: | :-----: | :---: |
| O(n)  |  O(n)  |  O(1)   | O(n)  |

### تعقيد المساحة

O(n)

## المراجع

- [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
- [YouTube](https://www.youtube.com/watch?v=njTh_OwMljA&index=2&t=1s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
