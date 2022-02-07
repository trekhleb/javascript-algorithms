# Lista doblemente enlazada

_Lea esto en otros idiomas:_
[_Русский_](README.ru-RU.md),
[_简体中文_](README.zh-CN.md),
[_日本語_](README.ja-JP.md),
[_Português_](README.pt-BR.md)
[_한국어_](README.ko-KR.md)

En informática, una **lista doblemente enlazada** es una estructura de datos relacionados que consta de un conjunto de registros conectados secuencialmente llamados nodos. Cada nodo contiene dos campos, llamados enlaces, que son referencias al nodo anterior y al siguiente en la secuencia de nodos. Los enlaces anterior y siguiente de los nodos inicial y final, apuntan respectivamente a algún tipo de terminador (normalmente un nodo centinela o nulo), facilitando así el recorrido de la lista. Si solo hay un nodo nulo, la lista se enlaza circularmente a través este. Puede conceptualizarse como dos listas enlazadas individualmente formadas a partir de los mismos elementos de datos, pero en órdenes secuenciales opuestos.

![Lista doblemente enlazada](https://upload.wikimedia.org/wikipedia/commons/5/5e/Doubly-linked-list.svg)

Los dos enlaces de un nodo permiten recorrer la lista en cualquier dirección. Si bien agregar o eliminar un nodo en una lista doblemente enlazada requiere cambiar más enlaces que las mismas operaciones en una lista enlazada individualmente, las operaciones son más simples y potencialmente más eficientes (para nodos que no sean los primeros) porque no hay necesidad de realizar un seguimiento del nodo anterior durante el recorrido o no es necesario recorrer la lista para encontrar el nodo anterior, de modo que se pueda modificar su enlace.

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
    n.previous ← tail
    tail.next ← n
    tail ← n
  end if
end Add
```

### Eliminar

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
  while n != ø and value !== n.value
    n ← n.next
  end while
  if n = tail
    tail ← tail.previous
    tail.next ← ø
    return true
  else if n != ø
    n.previous.next ← n.next
    n.next.previous ← n.previous
    return true
  end if
  return false
end Remove
```

### Recorrido Inverso

```text
ReverseTraversal(tail)
  Pre: tail is the node of the list to traverse
  Post: the list has been traversed in reverse order
  n ← tail
  while n != ø
    yield n.value
    n ← n.previous
  end while
end Reverse Traversal
```

## Complejidades

## Complejidad del Tiempo

| Acceso | Búsqueda | Inserción | Eliminación |
| :----: | :------: | :-------: | :---------: |
|  O(n)  |   O(n)   |   O(1)    |    O(n)     |

### Complejidad del Espacio

O(n)

## Referencias

- [Wikipedia](https://en.wikipedia.org/wiki/Doubly_linked_list)
- [YouTube](https://www.youtube.com/watch?v=JdQeNxWCguQ&t=7s&index=72&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
