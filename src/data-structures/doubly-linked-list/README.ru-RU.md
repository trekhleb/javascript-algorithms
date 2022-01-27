# Двусвязный список

**Двусвязный список** — связная структура данных в информатике, состоящая из набора
последовательно связанных записей, называемых узлами. Каждый узел содержит два поля,
называемых ссылками, которые указывают на предыдущий и последующий элементы в
последовательности узлов. Ссылка на предыдущий элемент корневого узла и ссылка на
последующий элемент последнего узла указывают на некого рода прерыватель, обычно
сторожевой узел или null, для облегчения обхода списка. Если в списке только один
сторожевой узел, тогда список циклически связан через него.
Двусвязный список можно представить, как два связных списка, которые образованы из
одних и тех же данных, но расположенных в противоположном порядке.

![Двусвязный список](https://upload.wikimedia.org/wikipedia/commons/5/5e/Doubly-linked-list.svg)

Две ссылки позволяют обходить список в обоих направлениях. Добавление и
удаление узла в двусвязном списке требует изменения большего количества ссылок,
чем аналогичные операции в связном списке. Однако данные операции проще и потенциально
более эффективны (для некорневых узлов) - при обходе не нужно следить за предыдущим
узлом или повторно обходить список в поиске предыдущего узла, плюс его ссылка
может быть изменена. 

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
    n.previous ← tail
    tail.next ← n
    tail ← n
  end if
end Add
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
  while n = ø and value = n.value
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
    
### Обратный обход

```text
ReverseTraversal(tail)
  Pre: tail - конечный элемент обходимого списка
  Post: элементы списка пройдены в обратном порядке
  n ← tail
  while n = ø
    yield n.value
    n ← n.previous
  end while
end Reverse Traversal
```
    
## Сложность

## Временная сложность

| Чтение    | Поиск     | Вставка   | Удаление  |
| :-------: | :-------: | :-------: | :-------: |
| O(n)      | O(n)      | O(1)      | O(n)      |

### Пространственная сложность

O(n)

## Ссылки

- [Wikipedia](https://ru.wikipedia.org/wiki/%D0%A1%D0%B2%D1%8F%D0%B7%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA#%D0%94%D0%B2%D1%83%D1%81%D0%B2%D1%8F%D0%B7%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_(%D0%B4%D0%B2%D1%83%D0%BD%D0%B0%D0%BF%D1%80%D0%B0%D0%B2%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D0%B9_%D1%81%D0%B2%D1%8F%D0%B7%D0%BD%D1%8B%D0%B9_%D1%81%D0%BF%D0%B8%D1%81%D0%BE%D0%BA))
- [YouTube](https://www.youtube.com/watch?v=lQ-lPjbb9Ew)
