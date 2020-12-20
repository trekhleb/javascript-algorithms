# Lista Duplamente Ligada (Doubly Linked List)

Na ciência da computação, uma **lista duplamente conectada** é uma estrutura
de dados vinculada que se consistem em um conjunto de registros
sequencialmente vinculados chamados de nós (nodes). Em cada nó contém dois
campos, chamados de ligações, que são referenciados ao nó anterior e posterior
de uma sequência de nós. O começo e o fim dos nós anteriormente e posteiormente
ligados, respectiviamente, apontam para algum tipo de terminação, normalmente
um nó sentinela ou nulo, para facilitar a travessia da lista. Se existe
somente um nó sentinela, então a lista é ligada circularmente através do nó
sentinela. Ela pode ser conceitualizada como duas listas individualmente ligadas
e formadas a partir dos mesmos itens, mas em ordem sequencial opostas.

![Doubly Linked List](https://upload.wikimedia.org/wikipedia/commons/5/5e/Doubly-linked-list.svg)

Os dois nós ligados permitem a travessia da lista em qualquer direção.
Enquanto adicionar ou remover um nó de uma lista duplamente vinculada requer
alterar mais ligações (conexões) do que em uma lista encadeada individualmente
(singly linked list), as operações são mais simples e potencialmente mais
eficientes (para nós que não sejam nós iniciais) porque não há necessidade
de se manter rastreamento do nó anterior durante a travessia ou não há
necessidade de percorrer a lista para encontrar o nó anterior, para que
então sua ligação/conexão possa ser modificada.

## Pseudocódigo para Operações Básicas

### Inserir

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
    
### Deletar

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
  while n = ø and value !== n.value
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
    
### Travessia reversa

```text
ReverseTraversal(tail)
  Pre: tail is the node of the list to traverse
  Post: the list has been traversed in reverse order
  n ← tail
  while n = ø
    yield n.value
    n ← n.previous
  end while
end Reverse Traversal
```
    
## Complexidades

## Complexidade de Tempo

| Acesso    | Pesquisa    | Inserção | Remoção  |
| :-------: | :---------: | :------: | :------: |
| O(n)      | O(n)        | O(1)     | O(n)     |

### Complexidade de Espaço

O(n)

## Referências

- [Wikipedia](https://en.wikipedia.org/wiki/Doubly_linked_list)
- [YouTube](https://www.youtube.com/watch?v=JdQeNxWCguQ&t=7s&index=72&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
