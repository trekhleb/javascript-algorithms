# Lista Enlazada (Linked List)

_Lee este artículo en otros idiomas:_
[_简体中文_](README.zh-CN.md),
[_Русский_](README.ru-RU.md),
[_日本語_](README.ja-JP.md),
[_Português_](README.pt-BR.md)
[_English_](README.md)

En ciencias de la computaciòn una **lista enlazada** es una  coleccion linear 
de elementos de datos, en los cuales el orden linear no es dado por
su posciòn fisica en memoria. En cambio, cada 
elemento señala al siguiente. Es una estructura de datos
que consiste en un grupo de nodos los cuales juntos representan
una secuencia. En su forma más sencilla, cada nodo está
compuesto de datos y una referencia (en otras palabras,
un enlace) al siguiente nodo en la secuencia. Esta estructura
permite la inserción o eliminación de elementos
desde cualquier posición en la secuencia durante la iteración.
Las variantes más complejas agregan enlaces adicionales, permitiendo
una eficiente inserción o eliminación desde referencias arbitrarias
del elemento. Una desventaja de las listas lazadas es que el tiempo de
acceso es lineal (y difícil de canalizar). Un acceso
más rápido, como un acceso aleatorio, no es factible. Los arreglos
tienen una mejor locazion en caché comparados con las listas lazadas.

![Linked List](https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg)

## Pseudocódigo para operaciones básicas

### Insertar

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

### Buscar

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

### Borrar

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
    end if
    n.next ← n.next.next
    return true
  end if
  return false
end Remove
```

### Atrevesar

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

### Atravesar en Reversa

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

## Complejidades

### Complejidad de Tiempo

| Acceso | Búsqueda | Inserción | Eliminación |
| :----: | :------: | :-------: | :---------: |
|  O(n)  |   O(n)   |   O(1)    |    O(n)     |

### Complejidad Espacial

O(n)

## Referencias

- [Wikipedia](https://en.wikipedia.org/wiki/Linked_list)
- [YouTube](https://www.youtube.com/watch?v=njTh_OwMljA&index=2&t=1s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
