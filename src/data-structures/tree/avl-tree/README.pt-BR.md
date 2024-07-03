# Árvore AVL (AVL Tree)

Na ciência da computação, uma **árvore AVL** (em homenagem aos
inventores Adelson-Velsky e Landis) é uma árvore de pesquisa
binária auto balanceada. Foi a primeira estrutura de dados a
ser inventada.
Em uma árvore AVL, as alturas de duas sub-árvores filhas
de qualquer nó diferem no máximo em um; se a qualquer momento
diferirem por em mais de um, um rebalanceamento é feito para
restaurar esta propriedade.
Pesquisa, inserção e exclusão possuem tempo `O(log n)` tanto na
média quanto nos piores casos, onde `n` é o número de nós na
árvore antes da operação. Inserções e exclusões podem exigir
que a árvore seja reequilibrada por uma ou mais rotações.


Animação mostrando a inserção de vários elementos em uma árvore AVL.
Inclui as rotações de esquerda, direita, esquerda-direita e direita-esquerda.

![AVL Tree](https://upload.wikimedia.org/wikipedia/commons/f/fd/AVL_Tree_Example.gif)

Árvore AVL com fatores de equilíbrio (verde)

![AVL Tree](https://upload.wikimedia.org/wikipedia/commons/a/ad/AVL-tree-wBalance_K.svg)

### Rotações de Árvores AVL

**Rotação Esquerda-Esquerda**

![Left-Left Rotation](http://btechsmartclass.com/data_structures/ds_images/LL%20Rotation.png)

**Rotação direita-direita**

![Right-Right Rotation](http://btechsmartclass.com/data_structures/ds_images/RR%20Rotation.png)

**Rotação Esquerda-Direita**

![Left-Right Rotation](http://btechsmartclass.com/data_structures/ds_images/LR%20Rotation.png)

**Rotação Direita-Esquerda**

![Right-Right Rotation](http://btechsmartclass.com/data_structures/ds_images/RL%20Rotation.png)

## Referências

* [Wikipedia](https://en.wikipedia.org/wiki/AVL_tree)
* [Tutorials Point](https://www.tutorialspoint.com/data_structures_algorithms/avl_tree_algorithm.htm)
* [BTech](http://btechsmartclass.com/data_structures/avl-trees.html)
* [AVL Tree Insertion on YouTube](https://www.youtube.com/watch?v=rbg7Qf8GkQ4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&index=12&)
* [AVL Tree Interactive Visualisations](https://www.cs.usfca.edu/~galles/visualization/AVLtree.html)
