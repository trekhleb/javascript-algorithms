# Conjunto Disjuntor (Disjoint Set)

**Conjunto Disjuntor**

**Conjunto Disjuntor** é uma estrutura de dados (também chamado de
estrutura de dados de union–find ou merge–find) é uma estrutura de dados
que rastreia um conjunto de elementos particionados em um número de
subconjuntos separados (sem sobreposição).
Ele fornece operações de tempo quase constante (limitadas pela função
inversa de Ackermann) para *adicionar novos conjuntos*, para 
*mesclar/fundir conjuntos existentes* e para *determinar se os elementos
estão no mesmo conjunto*.
Além de muitos outros usos (veja a seção Applications), conjunto disjuntor
desempenham um papel fundamental no algoritmo de Kruskal para encontrar a
árvore geradora mínima de um gráfico (graph).

![disjoint set](https://upload.wikimedia.org/wikipedia/commons/6/67/Dsu_disjoint_sets_init.svg)

*MakeSet* cria 8 singletons.

![disjoint set](https://upload.wikimedia.org/wikipedia/commons/a/ac/Dsu_disjoint_sets_final.svg)

Depois de algumas operações de *Uniões*, alguns conjuntos são agrupados juntos.

## Referências

- [Wikipedia](https://en.wikipedia.org/wiki/Disjoint-set_data_structure)
- [By Abdul Bari on YouTube](https://www.youtube.com/watch?v=wU6udHRIkcc&index=14&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
