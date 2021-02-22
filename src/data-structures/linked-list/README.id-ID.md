# Senarai Berantai (Linked List)

_Baca dalam bahasa yang lain:_
[_简体中文_](README.zh-CN.md),
[_Русский_](README.ru-RU.md),
[_日本語_](README.ja-JP.md),
[_Português_](README.pt-BR.md),
[_한국어_](README.ko-KR.md),
[_Español_](README.es-ES.md),

**Senarai berantai** (bahasa inggris: *linked list*) adalah struktur data dinamis dalam ilmu komputer, terdiri dari node, yang masing-masing berisi data aktual dan tautan referensi (*link*) ke node berikutnya dalam daftar. Struktur ini memungkinkan Anda untuk menambah dan menghapus elemen secara efisien pada posisi arbitrer dalam urutan selama iterasi. Senarai berantai yang lebih kompleks memungkinkan Anda menambah dan menghapus elemen secara efisien dari referensi elemen apa pun dengan menambahkan lebih banyak tautan.

Kelemahan dari senarai berantai adalah waktu aksesnya yang linier (dan sulit untuk mengimplementasikan *pipeline*). Serta tidak memunginkan untuk melakukan akses secara acak (*random*). Array memiliki lokalitas referensi yang lebih baik daripada senarai berantai.

![senarai berantai](https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg)

## Pseudocode untuk operasi dasar

### Insert

```text
Add(value)
  Pre: value adalah nilai yang akan ditambahkan ke daftar
  Post: nilai telah ditempatkan di bagian belakang (tail) daftar
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
 Pre: value adalah nilai yang akan ditambahkan ke daftar
 Post: value telah ditempatkan di bagian kepala (head) daftar
 n ← node(value)
 n.next ← head
 head ← n
 if tail = ø
   tail ← n
 end
end Prepend
```

### Search

```text
Contains(head, value)
  Pre: head adalah kepala node dalam daftar
       value adalah nilai yang akan dicari
  Post: item tersebut ada dalam daftar tertaut, true; jika tidak false
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

### Delete

```text
Remove(head, value)
  Pre: head adalah kepala node dalam daftar
       value adalah nilai yang akan dihapus
  Post: nilai dihapus dari daftar, true, jika tidak false
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

### Traverse

```text
Traverse(head)
  Pre: head adalah kepala node dalam daftar
  Post: item dalam daftar telah dilintasi
  n ← head
  while n != ø
    yield n.value
    n ← n.next
  end while
end Traverse
```

### Traverse in Reverse

```text
ReverseTraversal(head, tail)
  Pre: head and tail belong to the same list
  Post: item dalam daftar telah dilintasi dalam urutan terbalik
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

## Kompleksitas

### Kompleksitas Waktu

| Access    | Search    | Insertion | Deletion  |
| :-------: | :-------: | :-------: | :-------: |
| O(n)      | O(n)      | O(1)      | O(n)      |

### Kompleksitas Ruang

O(n)

## Referensi

- [Wikipedia](https://id.wikipedia.org/wiki/Senarai_berantai)
- [YouTube](https://www.youtube.com/watch?v=njTh_OwMljA&index=2&t=1s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
