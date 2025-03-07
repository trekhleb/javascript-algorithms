# Algoritmo k-Means

_Leia isso em outros idiomas:_
[_English_](README.md)

O **algoritmo k-Means** é um algoritmo de aprendizado de máquina não supervisionado. É um algoritmo de agrupamento, que agrupa os dados da amostra com base na semelhança entre as dimensões dos vetores.

Na classificação k-Means, a saída é um conjunto de classes atribuídas a cada vetor. Cada localização de cluster é continuamente otimizada para obter as localizações precisas de cada cluster de forma que representem cada grupo claramente.

A ideia é calcular a similaridade entre a localização do cluster e os vetores de dados e reatribuir os clusters com base nela. [Distância Euclidiana](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/math/euclidean-distance) é usado principalmente para esta tarefa.

![Distância Euclidiana entre dois pontos](https://upload.wikimedia.org/wikipedia/commons/5/55/Euclidean_distance_2d.svg)

_Fonte: [Wikipedia](https://en.wikipedia.org/wiki/Euclidean_distance)_

O algoritmo é o seguinte:

1. Verifique se há erros como dados inválidos/inconsistentes
2. Inicialize os locais do cluster `k` com pontos `k` iniciais/aleatórios
3. Calcule a distância de cada ponto de dados de cada cluster
4. Atribua o rótulo do cluster de cada ponto de dados igual ao do cluster em sua distância mínima
5. Calcule o centroide de cada cluster com base nos pontos de dados que ele contém
6. Repita cada uma das etapas acima até que as localizações do centroide estejam variando

Aqui está uma visualização do agrupamento k-Means para melhor compreensão:

![KNN Visualization 1](https://upload.wikimedia.org/wikipedia/commons/e/ea/K-means_convergence.gif)

_Fonte: [Wikipedia](https://en.wikipedia.org/wiki/K-means_clustering)_

Os centroides estão se movendo continuamente para criar uma melhor distinção entre os diferentes conjuntos de pontos de dados. Como podemos ver, após algumas iterações, a diferença de centroides é bastante baixa entre as iterações. Por exemplo, entre as iterações `13` e `14` a diferença é bem pequena porque o otimizador está ajustando os casos limite.

## Referências

- [k-Means neighbors algorithm on Wikipedia](https://en.wikipedia.org/wiki/K-means_clustering)
