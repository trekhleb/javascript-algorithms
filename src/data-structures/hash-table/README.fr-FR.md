# Table de hachage

En informatique, une **table de hachage** (carte de
hachage) est une structure de données qui implémente
un type de données abstrait *tableau nassociatif*,
une structure qui permet de *mapper des clés sur des
valeurs*. Une table de hachage utilise une *fonction
de hachage* pour calculer un index dans un tableau
d'alvéoles (en anglais, buckets ou slots), à partir
duquel la valeur souhaitée peut être trouvée.

Idéalement, la fonction de hachage affectera chaque clé
à une alvéole unique, mais la plupart des tables de
hachage conçues emploient une fonction de hachage
imparfaite, ce qui peut provoquer des collisions de
hachage où la fonction de hachage génère le même index
pour plusieurs clés. De telles collisions doivent être
accommodées d'une manière ou d'une autre.

![Hash Table](https://upload.wikimedia.org/wikipedia/commons/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg)

Collision de hachage résolue par chaînage séparé.

![Hash Collision](https://upload.wikimedia.org/wikipedia/commons/d/d0/Hash_table_5_0_1_1_1_1_1_LL.svg)

## Références

- [Wikipedia](https://fr.wikipedia.org/wiki/Table_de_hachage)
- [YouTube](https://www.youtube.com/watch?v=shs0KM3wKv8&index=4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
