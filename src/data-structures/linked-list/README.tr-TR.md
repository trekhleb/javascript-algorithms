# Bağlantılı Liste

_Bunu diğer dillerde okuyun:_
[_简体中文_](README.zh-CN.md),
[_Русский_](README.ru-RU.md),
[_日本語_](README.ja-JP.md),
[_Português_](README.pt-BR.md),
[_한국어_](README.ko-KR.md),
[_Español_](README.es-ES.md),

Bilgisayar bilimlerinde, **Bağlantılı liste**, her biri hem gerçek verileri
hem de listedeki bir sonraki düğümün bir bağlantısını içeren dinamik bir
veri yapısıdır. Bu yapı, yineleme sırasında rastgele bir konumda
öğeleri verimli bir şekilde eklemenize ve kaldırmanıza olanak tanır.
Daha karmaşık seçenekler için, isteğe bağlı öğeleri verimli bir şekilde
eklemek ve kaldırmak için ek bağlantılar içerir.

Bağlantılı listelerin bir dezavantajı, erişim süresinin doğrusal olmasıdır
(ve ardışık düzene geçirilmesi zordur). Rastgele erişim gibi daha hızlı erişim
mümkün değildir. Diziler, bağlantılı listelere kıyasla daha iyi önbellek konumuna sahiptir.

![Bağlantılı Liste](https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg)

## Temel İşlemler için Sözde Kod

### Ekleme

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

### Arama

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

### Silme

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
    end if
    n.next ← n.next.next
    return true
  end if
  return false
end Remove
```

### Geçiş

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

### Ters Geçiş

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

## Karmaşıklıklar

### Zaman Karmaşıklığı

| Erişim    | Arama     | Ekleme    | Silme     |
| :-------: | :-------: | :-------: | :-------: |
| O(n)      | O(n)      | O(1)      | O(n)      |

### Uzay Karmaşıklığı

O(n)

## Referanslar

- [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
- [YouTube](https://www.youtube.com/watch?v=njTh_OwMljA&index=2&t=1s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
