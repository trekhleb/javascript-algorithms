# Counting Sort

_Leia isso em outros idiomas:_
[_English_](README.md)

Em ciência da computação, **counting sort** é um algoritmo para ordenar
uma coleção de objetos de acordo com chaves que são pequenos inteiros;
ou seja, é um algoritmo de ordenação de inteiros. Ele opera por
contando o número de objetos que têm cada valor de chave distinto,
e usando aritmética nessas contagens para determinar as posições
de cada valor de chave na sequência de saída. Seu tempo de execução é
linear no número de itens e a diferença entre o
valores de chave máximo e mínimo, portanto, é adequado apenas para
uso em situações em que a variação de tonalidades não é significativamente
maior que o número de itens. No entanto, muitas vezes é usado como
sub-rotina em outro algoritmo de ordenação, radix sort, que pode
lidar com chaves maiores de forma mais eficiente.

Como a classificação por contagem usa valores-chave como índices em um vetor,
não é uma ordenação por comparação, e o limite inferior `Ω(n log n)` para
a ordenação por comparação não se aplica a ele. A classificação por bucket pode ser usada
para muitas das mesmas tarefas que a ordenação por contagem, com um tempo semelhante
análise; no entanto, em comparação com a classificação por contagem, a classificação por bucket requer
listas vinculadas, arrays dinâmicos ou uma grande quantidade de pré-alocados
memória para armazenar os conjuntos de itens dentro de cada bucket, enquanto
A classificação por contagem armazena um único número (a contagem de itens)
por balde.

A classificação por contagem funciona melhor quando o intervalo de números para cada
elemento do vetor é muito pequeno.

## Algoritmo

**Passo I**

Na primeira etapa, calculamos a contagem de todos os elementos do
vetor de entrada 'A'. Em seguida, armazene o resultado no vetor de contagem `C`.
A maneira como contamos é descrita abaixo.

![Counting Sort](https://3.bp.blogspot.com/-jJchly1BkTc/WLGqCFDdvCI/AAAAAAAAAHA/luljAlz2ptMndIZNH0KLTTuQMNsfzDeFQCLcB/s1600/CSortUpdatedStepI.gif)

**Passo II**

Na segunda etapa, calculamos quantos elementos existem na entrada
do vetor `A` que são menores ou iguais para o índice fornecido.
`Ci` = números de elementos menores ou iguais a `i` no vetor de entrada.

![Counting Sort](https://1.bp.blogspot.com/-1vFu-VIRa9Y/WLHGuZkdF3I/AAAAAAAAAHs/8jKu2dbQee4ap9xlVcNsILrclqw0UxAVACLcB/s1600/Step-II.png)

**Passo III**

Nesta etapa, colocamos o elemento `A` do vetor de entrada em classificado
posição usando a ajuda do vetor de contagem construída `C`, ou seja, o que
construímos no passo dois. Usamos o vetor de resultados `B` para armazenar
os elementos ordenados. Aqui nós lidamos com o índice de `B` começando de
zero.
 
![Counting Sort](https://1.bp.blogspot.com/-xPqylngqASY/WLGq3p9n9vI/AAAAAAAAAHM/JHdtXAkJY8wYzDMBXxqarjmhpPhM0u8MACLcB/s1600/ResultArrayCS.gif)

## Complexidade

| Nome                  | Melhor            | Média             | Pior               | Memória    | Estável    | Comentários  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Counting sort**     | n + r           | n + r               | n + r               | n + r     | Sim       | r - Maior número no vetor |

## Referências

- [Wikipedia](https://en.wikipedia.org/wiki/Counting_sort)
- [YouTube](https://www.youtube.com/watch?v=OKd534EWcdk&index=61&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [EfficientAlgorithms](https://efficientalgorithms.blogspot.com/2016/09/lenear-sorting-counting-sort.html)
