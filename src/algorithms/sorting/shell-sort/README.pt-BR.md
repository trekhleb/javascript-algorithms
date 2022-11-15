# Shellsort

_Leia isso em outros idiomas:_
[_English_](README.md).

Shellsort, também conhecido como Shell sort ou método de Shell,
é uma classificação de comparação in-loco. Pode ser visto tanto como um
generalização da ordenação por troca (bubble sort) ou ordenação
por inserção (ordenação por inserção). O método começa classificando
pares de elementos distantes um do outro, então progressivamente
reduzindo a distância entre os elementos a serem comparados. Iniciando
com elementos distantes, pode mover alguns fora do lugar
elementos em posição mais rápido do que um simples vizinho mais próximo
intercâmbio

![Shellsort](https://upload.wikimedia.org/wikipedia/commons/d/d8/Sorting_shellsort_anim.gif)

## Como o Shellsort funciona?

Para nosso exemplo e facilidade de compreensão, tomamos o intervalo
de `4`. Faça uma sub-lista virtual de todos os valores localizados no
intervalo de 4 posições. Aqui esses valores são
`{35, 14}`, `{33, 19}`, `{42, 27}` e `{10, 44}`

![Shellsort](https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort_gap_4.jpg)

Comparamos valores em cada sublista e os trocamos (se necessário)
na matriz original. Após esta etapa, o novo array deve
parece com isso

![Shellsort](https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort_step_1.jpg)

Então, pegamos o intervalo de 2 e essa lacuna gera duas sub-listas
- `{14, 27, 35, 42}`, `{19, 10, 33, 44}`

![Shellsort](https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort_gap_2.jpg)

Comparamos e trocamos os valores, se necessário, no array original.
Após esta etapa, a matriz deve ficar assim

![Shellsort](https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort_step_2.jpg)

> OBS: Na imagem abaixo há um erro de digitação e a matriz de resultados deve ser `[14, 10, 27, 19, 35, 33, 42, 44]`.

Finalmente, ordenamos o resto do array usando o intervalo de valor 1.
A classificação de shell usa a classificação por inserção para classificar a matriz.

![Shellsort](https://www.tutorialspoint.com/data_structures_algorithms/images/shell_sort.jpg)

## Complexidade

| Nome                  | Melhor            | Média             | Pior               | Memória    | Estável    | Comentários  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Shell sort**        | n&nbsp;log(n)   | depends on gap sequence   | n&nbsp;(log(n))<sup>2</sup>  | 1         | Não         |           |

## Referências

- [Tutorials Point](https://www.tutorialspoint.com/data_structures_algorithms/shell_sort_algorithm.htm)
- [Wikipedia](https://en.wikipedia.org/wiki/Shellsort)
- [YouTube by Rob Edwards](https://www.youtube.com/watch?v=ddeLSDsYVp8&index=79&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
