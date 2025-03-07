# Árvore Fenwick / Árvore Binária Indexada (Fenwick Tree / Binary Indexed Tree)

Uma **árvore Fenwick** ou **árvore binária indexada** é um tipo de
estrutura de dados que consegue eficiemente atualizar elementos e
calcular soma dos prefixos em uma tabela de números.

Quando comparado com um _flat array_ de números, a árvore Fenwick
alcança um balanceamento muito melhor entre duas operações: atualização
(_update_) do elemento e cálculo da soma do prefíxo. Em uma _flar array_
de `n` números, você pode tanto armazenar elementos quando a soma dos
prefixos. Em ambos os casos, computar a soma dos prefixos requer ou 
atualizar um array de elementos também requerem um tempo linear, contudo,
a demais operações podem ser realizadas com tempo constante.
A árvore Fenwick permite ambas as operações serem realizadas com tempo
`O(log n)`.

Isto é possível devido a representação dos números como uma árvore, aonde
os valores de cada nó é a soma dos números naquela sub-árvore. A estrutura
de árvore permite operações a serem realizadas consumindo somente acessos
a nós em `O(log n)`.

## Implementação de Nós

Árvore Binária Indexada é representada como um _array_. Em cada nó da Árvore
Binária Indexada armazena a soma de alguns dos elementos de uma _array_
fornecida. O tamanho da Árvore Binária Indexada é igual a `n` aonde `n` é o
tamanho do _array_ de entrada. Na presente implementação nós utilizados o
tamanho `n+1` para uma implementação fácil. Todos os índices são baseados em 1. 

![Binary Indexed Tree](https://www.geeksforgeeks.org/wp-content/uploads/BITSum.png)

Na imagem abaixo você pode ver o exemplo animado da criação de uma árvore
binária indexada para o _array_ `[1, 2, 3, 4, 5]`, sendo inseridos um após
o outro.

![Fenwick Tree](https://upload.wikimedia.org/wikipedia/commons/d/dc/BITDemo.gif)

## Referências

- [Wikipedia](https://en.wikipedia.org/wiki/Fenwick_tree)
- [GeeksForGeeks](https://www.geeksforgeeks.org/binary-indexed-tree-or-fenwick-tree-2/)
- [YouTube](https://www.youtube.com/watch?v=CWDQJGaN1gY&index=18&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
