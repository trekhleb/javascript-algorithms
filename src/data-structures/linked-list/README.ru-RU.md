# Связный список

Связный список — базовая динамическая структура данных в информатике, состоящая из узлов, каждый из которых содержит как собственно данные,так ссылку («связку») на следующий узел списка. Данная структура позволяет эффективно добавлять и удалять элементы на произвольной позиции в последовательности в процессе итерации. Более сложные варианты включают дополнительные ссылки, позволяющие эффективно добавлять и удалять произвольные элементы.

Принципиальным преимуществом перед массивом является структурная гибкость: порядок элементов связного списка может не совпадать с порядком расположения элементов данных в памяти компьютера, а порядок обхода списка всегда явно задаётся его внутренними связями. Суть преимущества состоит в том, что во многих языках создание массива требует указать его размер заранее. Связный список позволяет обойти это ограничение.

Недостатком связных списков является то, что время доступа линейно (и затруднительно для реализации конвейеров). Быстрый доступ(случайный) невозможен.

![Связный список](https://upload.wikimedia.org/wikipedia/commons/6/6d/Singly-linked-list.svg)

## Псевдокод основных операций

### Вставка

```text
Add(value)
  Pre: value - добавляемое значение
  Post: value помещено в конец списка
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
 Pre: value - добавляемое значение
 Post: value помещено в начало списка
 n ← node(value)
 n.next ← head
 head ← n
 if tail = ø
   tail ← n
 end
end Prepend
```

### Поиск

```text
Contains(head, value)
  Pre: head - первый узел в списке
         value - значение, которое следует найти
  Post: true - value найдено в списке, иначе false
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
    
### Удаление

```text
Remove(head, value)
  Pre: head - первый узел в списке
       value - значение, которое следует удалить
  Post: true - value удалено из списка, иначе false
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

### Обход

```text
Traverse(head)
  Pre: head - первый узел в списке
  Post: элементы списка пройдены
  n ← head
  while n != ø
    yield n.value
    n ← n.next
  end while
end Traverse
```

### Обратный обход

```text
ReverseTraversal(head, tail)
  Pre: head и tail относятся к одному списку
  Post: элементы списка пройдены в обратном порядке
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

## Сложность

### Временная сложность

| Чтение    | Поиск     | Вставка   | Удаление  |
| :--------: | :-------: | :--------: | :-------: |
| O(n)       | O(n)      | O(1)       | O(1)      |

### Пространственная сложность

O(n)

## Ссылки

- [Wikipedia](https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D1%8F%D0%B7%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA)
- [YouTube](https://www.youtube.com/watch?v=KTpOalDwBjg)
