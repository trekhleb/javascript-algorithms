# Manipulation de bits

_Read this in other languages:_
[english](README.md).

#### Vérifier un bit (_get_)

Cette méthode décale le bit correspondant (_bit shifting_) à la position zéro.
Ensuite, nous exécutons l'opération `AND` avec un masque comme `0001`.
Cela efface tous les bits du nombre original sauf le correspondant.
Si le bit pertinent est `1`, le résultat est `1`, sinon le résultat est `0`.

> Voir [getBit.js](getBit.js) pour plus de détails.

#### Mettre un bit à 1(_set_)

Cette méthode met un bit à `1` en fonction d'un rang (`bitPosition`),
créant ainsi une valeur qui ressemble à `00100`.
Ensuite, nous effectuons l'opération `OU` qui met un bit spécifique
en `1` sans affecter les autres bits du nombre.

> Voir [setBit.js](setBit.js) pour plus de détails.

#### Mettre un bit à 0 (_clear_)

Cette méthode met un bit à `1` en fonction d'un rang (`bitPosition`),
créant ainsi une valeur qui ressemble à `00100`.
Puis on inverse ce masque de bits pour obtenir un nombre ressemblant à `11011`.
Enfin, l'opération `AND` est appliquée au nombre et au masque.
Cette opération annule le bit.

> Voir [clearBit.js](clearBit.js) pour plus de détails.

#### Mettre à jour un Bit (_update_)

Cette méthode est une combinaison de l'"annulation de bit"
et du "forçage de bit".

> Voir [updateBit.js](updateBit.js) pour plus de détails.

#### Vérifier si un nombre est pair (_isEven_)

Cette méthode détermine si un nombre donné est pair.
Elle s'appuie sur le fait que les nombres impairs ont leur dernier
bit droit à `1`.

```text
Nombre: 5 = 0b0101
isEven: false

Nombre: 4 = 0b0100
isEven: true
```

> Voir [isEven.js](isEven.js) pour plus de détails.

#### Vérifier si un nombre est positif (_isPositive_)

Cette méthode détermine un le nombre donné est positif.
Elle s'appuie sur le fait que tous les nombres positifs
ont leur bit le plus à gauche à `0`.
Cependant, si le nombre fourni est zéro
ou zéro négatif, il doit toujours renvoyer `false`.

```text
Nombre: 1 = 0b0001
isPositive: true

Nombre: -1 = -0b0001
isPositive: false
```

> Voir [isPositive.js](isPositive.js) pour plus de détails.

#### Multiplier par deux

Cette méthode décale un nombre donné d'un bit vers la gauche.
Ainsi, toutes les composantes du nombre binaire (en puissances de deux) sont
multipliées par deux et donc le nombre lui-même est
multiplié par deux.

```
Avant le décalage
Nombre: 0b0101 = 5
Puissances de deux: 0 + 2^2 + 0 + 2^0

Après le décalage
Nombre: 0b1010 = 10
Puissances de deux: 2^3 + 0 + 2^1 + 0
```

> Voir [multiplyByTwo.js](multiplyByTwo.js) pour plus de détails.

#### Diviser par deux

Cette méthode décale un nombre donné d'un bit vers la droite.
Ainsi, toutes les composantes du nombre binaire (en puissances de deux) sont
divisées par deux et donc le nombre lui-même est
divisé par deux, sans reste.

```
Avant le décalage
Nombre: 0b0101 = 5
Puissances de deux: 0 + 2^2 + 0 + 2^0

Après le décalage
Nombre: 0b0010 = 2
Puissances de deux: 0 + 0 + 2^1 + 0
```

> Voir [divideByTwo.js](divideByTwo.js) pour plus de détails.

#### Inverser le signe (_Switch Sign_)

Cette méthode rend positifs les nombres négatifs, et vice-versa.
Pour ce faire, elle s'appuie sur l'approche "Complément à deux",
qui inverse tous les bits du nombre et y ajoute 1.

```
1101 -3
1110 -2
1111 -1
0000  0
0001  1
0010  2
0011  3
```

> Voir [switchSign.js](switchSign.js) pour plus de détails.

#### Multiplier deux nombres signés

Cette méthode multiplie deux nombres entiers signés
à l'aide d'opérateurs bit à bit.
Cette méthode est basée sur les faits suivants:

```text
a * b peut être écrit sous les formes suivantes:
  0                     si a est zero ou b est zero ou les deux sont zero
  2a * (b/2)            si b est pair
  2a * (b - 1)/2 + a    si b est impair et positif
  2a * (b + 1)/2 - a    si b est impair et negatif
```

L'avantage de cette approche est qu'à chaque étape de la récursion
l'un des opérandes est réduit à la moitié de sa valeur d'origine.
Par conséquent, la complexité d'exécution est `O(log(b))`
où `b` est l'opérande qui se réduit de moitié à chaque récursion.

> Voir [multiply.js](multiply.js) pour plus de détails.

#### Multiplier deux nombres positifs

Cette méthode multiplie deux nombres entiers à l'aide d'opérateurs bit à bit.
Cette méthode s'appuie sur le fait que "Chaque nombre peut être lu
comme une somme de puissances de 2".

L'idée principale de la multiplication bit à bit
est que chaque nombre peut être divisé en somme des puissances de deux:

Ainsi

```text
19 = 2^4 + 2^1 + 2^0
```

Donc multiplier `x` par `19` est equivalent à :

```text
x * 19 = x * 2^4 + x * 2^1 + x * 2^0
```

Nous devons maintenant nous rappeler que `x * 2 ^ 4` équivaut
à déplacer`x` vers la gauche par `4` bits (`x << 4`).

> Voir [multiplyUnsigned.js](multiplyUnsigned.js) pour plus de détails.

#### Compter les bits à 1

This method counts the number of set bits in a number using bitwise operators.
The main idea is that we shift the number right by one bit at a time and check
the result of `&` operation that is `1` if bit is set and `0` otherwise.

Cette méthode décompte les bits à `1` d'un nombre
à l'aide d'opérateurs bit à bit.
L'idée principale est de décaler le nombre vers la droite, un bit à la fois,
et de vérifier le résultat de l'opération `&` :
`1` si le bit est défini et `0` dans le cas contraire.

```text
Nombre: 5 = 0b0101
Décompte des bits à 1 = 2
```

> Voir [countSetBits.js](countSetBits.js) pour plus de détails.

#### Compter les bits nécessaire pour remplacer un nombre

This methods outputs the number of bits required to convert one number to another.
This makes use of property that when numbers are `XOR`-ed the result will be number
of different bits.

Cette méthode retourne le nombre de bits requis
pour convertir un nombre en un autre.
Elle repose sur la propriété suivante:
lorsque les nombres sont évalués via `XOR`, le résultat est le nombre
de bits différents entre les deux.

```
5 = 0b0101
1 = 0b0001
Nombre de bits pour le remplacement: 1
```

> Voir [bitsDiff.js](bitsDiff.js) pour plus de détails.

#### Calculer les bits significatifs d'un nombre

Pour connaître les bits significatifs d'un nombre,
on peut décaler `1` d'un bit à gauche plusieurs fois d'affilée
jusqu'à ce que ce nombre soit plus grand que le nombre à comparer.

```
5 = 0b0101
Décompte des bits significatifs: 3
On décale 1 quatre fois pour dépasser 5.
```

> Voir [bitLength.js](bitLength.js) pour plus de détails.

#### Vérifier si un nombre est une puissance de 2

Cette méthode vérifie si un nombre donné est une puissance de deux.
Elle s'appuie sur la propriété suivante.
Disons que `powerNumber` est une puissance de deux (c'est-à-dire 2, 4, 8, 16 etc.).
Si nous faisons l'opération `&` entre `powerNumber` et `powerNumber - 1`,
elle retournera`0` (dans le cas où le nombre est une puissance de deux).

```
Nombre: 4 = 0b0100
Nombre: 3 = (4 - 1) = 0b0011
4 & 3 = 0b0100 & 0b0011 = 0b0000 <-- Égal à zéro, car c'est une puissance de 2.

Nombre: 10 = 0b01010
Nombre: 9 = (10 - 1) = 0b01001
10 & 9 = 0b01010 & 0b01001 = 0b01000 <-- Différent de 0, donc n'est pas une puissance de 2.
```

> Voir [isPowerOfTwo.js](isPowerOfTwo.js) pour plus de détails.

#### Additionneur complet

Cette méthode ajoute deux nombres entiers à l'aide d'opérateurs bit à bit.

Elle implémente un [additionneur](https://fr.wikipedia.org/wiki/Additionneur)
simulant un circuit électronique logique,
pour additionner deux entiers de 32 bits,
sous la forme « complément à deux ».
Elle utilise la logique booléenne pour couvrir tous les cas possibles
d'ajout de deux bits donnés:
avec et sans retenue de l'ajout de l'étape précédente la moins significative.

Légende:

- `A`: Nombre `A`
- `B`: Nombre `B`
- `ai`: ième bit du nombre `A`
- `bi`: ième bit du nombre `B`
- `carryIn`: un bit retenu de la précédente étape la moins significative
- `carryOut`: un bit retenu pour la prochaine étape la plus significative
- `bitSum`: La somme de `ai`, `bi`, et `carryIn`
- `resultBin`: Le résultat complet de l'ajout de l'étape actuelle avec toutes les étapes moins significatives (en binaire)
- `resultDec`: Le résultat complet de l'ajout de l'étape actuelle avec toutes les étapes moins significatives (en decimal)

```
A = 3: 011
B = 6: 110
┌──────┬────┬────┬─────────┬──────────┬─────────┬───────────┬───────────┐
│  bit │ ai │ bi │ carryIn │ carryOut │  bitSum │ resultBin │ resultDec │
├──────┼────┼────┼─────────┼──────────┼─────────┼───────────┼───────────┤
│   0  │ 1  │ 0  │    0    │    0     │     1   │       1   │     1     │
│   1  │ 1  │ 1  │    0    │    1     │     0   │      01   │     1     │
│   2  │ 0  │ 1  │    1    │    1     │     0   │     001   │     1     │
│   3  │ 0  │ 0  │    1    │    0     │     1   │    1001   │     9     │
└──────┴────┴────┴─────────┴──────────┴─────────┴───────────┴───────────┘
```

> Voir [fullAdder.js](fullAdder.js) pour plus de détails.  
> Voir [Full Adder on YouTube](https://www.youtube.com/watch?v=wvJc9CZcvBc&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8).

## Références

- [Bit Manipulation on YouTube](https://www.youtube.com/watch?v=NLKQEOgBAnw&t=0s&index=28&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [Negative Numbers in binary on YouTube](https://www.youtube.com/watch?v=4qH4unVtJkE&t=0s&index=30&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [Bit Hacks on stanford.edu](https://graphics.stanford.edu/~seander/bithacks.html)
