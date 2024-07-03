# Quicksort

_Leia isso em outros idiomas:_
[_简体中文_](README.zh-CN.md),
[_English_](README.md)

Quicksort é um algoritmo de dividir para conquistar.
Quicksort primeiro divide uma grande matriz em duas menores
submatrizes: os elementos baixos e os elementos altos.
O Quicksort pode então classificar recursivamente as submatrizes.

As etapas são:

1. Escolha um elemento, denominado pivô, na matriz.
2. Particionamento: reordene a matriz para que todos os elementos com
valores menores que o pivô estejam antes do pivô, enquanto todos
elementos com valores maiores do que o pivô vêm depois dele
(valores iguais podem ser usados em qualquer direção). Após este particionamento,
o pivô está em sua posição final. Isso é chamado de
operação de partição.
3. Aplique recursivamente as etapas acima à submatriz de
elementos com valores menores e separadamente para o
submatriz de elementos com valores maiores.

Visualização animada do algoritmo quicksort.
As linhas horizontais são valores dinâmicos. 

![Quicksort](https://upload.wikimedia.org/wikipedia/commons/6/6a/Sorting_quicksort_anim.gif)

## Complexidade

| Nome                  | Melhor            | Média             | Pior               | Memória    | Estável    | Comentários  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Quick sort**        | n&nbsp;log(n)   | n&nbsp;log(n)       | n<sup>2</sup>       | log(n)    | Não        |  Quicksort geralmente é feito no local com espaço de pilha O(log(n)) |

## Referências

- [Wikipedia](https://pt.wikipedia.org/wiki/Quicksort)
- [YouTube](https://www.youtube.com/watch?v=SLauY6PpjW4&index=28&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
