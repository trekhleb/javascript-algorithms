# Algoritmo de k-vizinhos mais próximos

_Leia isso em outros idiomas:_
[_English_](README.md)

O **algoritmo de k-vizinhos mais próximos (k-NN)** é um algoritmo de aprendizado de máquina supervisionado. É um algoritmo de classificação, determinando a classe de um vetor de amostra usando dados de amostra.

Na classificação k-NN, a saída é uma associação de classe. Um objeto é classificado por uma pluralidade de votos de seus vizinhos, com o objeto sendo atribuído à classe mais comum entre seus `k` vizinhos mais próximos (`k` é um inteiro positivo, tipicamente pequeno). Se `k = 1`, então o objeto é simplesmente atribuído à classe daquele único vizinho mais próximo.

The idea is to calculate the similarity between two data points on the basis of a distance metric. [Distância Euclidiana](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/euclidean-distance) é usado principalmente para esta tarefa.

![Distância Euclidiana entre dois pontos](https://upload.wikimedia.org/wikipedia/commons/5/55/Euclidean_distance_2d.svg)

_Fonte: [Wikipedia](https://en.wikipedia.org/wiki/Euclidean_distance)_

O algoritmo é o seguinte:

1. Verifique se há erros como dados/rótulos inválidos.
2. Calcule a distância euclidiana de todos os pontos de dados nos dados de treinamento com o ponto de classificação
3. Classifique as distâncias dos pontos junto com suas classes em ordem crescente
4. Pegue as classes iniciais `K` e encontre o modo para obter a classe mais semelhante
5. Informe a classe mais semelhante

Aqui está uma visualização da classificação k-NN para melhor compreensão:

![KNN Visualization 1](https://upload.wikimedia.org/wikipedia/commons/e/e7/KnnClassification.svg)

_Fonte: [Wikipedia](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm)_

A amostra de teste (ponto verde) deve ser classificada em quadrados azuis ou em triângulos vermelhos. Se `k = 3` (círculo de linha sólida) é atribuído aos triângulos vermelhos porque existem `2` triângulos e apenas `1` quadrado dentro do círculo interno. Se `k = 5` (círculo de linha tracejada) é atribuído aos quadrados azuis (`3` quadrados vs. `2` triângulos dentro do círculo externo).

Outro exemplo de classificação k-NN:

![KNN Visualization 2](https://media.geeksforgeeks.org/wp-content/uploads/graph2-2.png)

_Fonte: [GeeksForGeeks](https://media.geeksforgeeks.org/wp-content/uploads/graph2-2.png)_

Aqui, como podemos ver, a classificação dos pontos desconhecidos será julgada pela proximidade com outros pontos.

É importante notar que `K` é preferível ter valores ímpares para desempate. Normalmente `K` é tomado como `3` ou `5`.

## Referências

- [k-nearest neighbors algorithm on Wikipedia](https://en.wikipedia.org/wiki/K-nearest_neighbors_algorithm)
