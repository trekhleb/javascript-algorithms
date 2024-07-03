# Algorithme d'exponentiation rapide

_Read this in other languages:_
[english](README.md).

En algèbre, une **puissance** d'un nombre est le résultat de la multiplication répétée de ce nombre avec lui-même.

Elle est souvent notée en assortissant le nombre d'un entier, typographié en exposant, qui indique le nombre de fois qu'apparaît le nombre comme facteur dans cette multiplication.

![Power](https://www.mathsisfun.com/algebra/images/exponent-8-2.svg)

## Implémentation « naïve »

Comment trouver `a` élevé à la puissance `b` ?

On multiplie `a` avec lui-même, `b` nombre de fois.
Ainsi, `a^b = a * a * a * ... * a` (`b` occurrences de `a`).

Cette opération aura un complexité linéaire, notée `O(n)`,
car la multiplication aura lieu exactement `n` fois.

## Algorithme d'exponentiation rapide

Peut-on faire mieux que cette implémentation naïve?
Oui, on peut réduire le nombre de puissance à un complexité de `O(log(n))`.

Cet algorithme utilise l'approche « diviser pour mieux régner »
pour calculer cette puissance.
En l'état, cet algorithme fonctionne pour deux entiers positifs `X` et `Y`.

L'idée derrière cet algorithme est basée sur l'observation suivante.

Lorsque `Y` est **pair**:

```text
X^Y = X^(Y/2) * X^(Y/2)
```

Lorsque `Y` est **impair**:

```text
X^Y = X^(Y//2) * X^(Y//2) * X
où Y//2 est le résultat de la division entière de Y par 2.
```

**Par exemple**

```text
2^4 = (2 * 2) * (2 * 2) = (2^2) * (2^2)
```

```text
2^5 = (2 * 2) * (2 * 2) * 2 = (2^2) * (2^2) * (2)
```

Ainsi, puisqu'à chaque étape on doits calculer
deux fois la même puissance `X ^ (Y / 2)`,
on peut optimiser en l'enregistrant dans une variable intermédiaire
pour éviter son calcul en double.

**Complexité en temps**

Comme à chaque itération nous réduisons la puissance de moitié,
nous appelons récursivement la fonction `log(n)` fois. Le complexité de temps de cet algorithme est donc réduite à:

```text
O(log(n))
```

## Références

- [YouTube](https://www.youtube.com/watch?v=LUWavfN9zEo&index=80&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8&t=0s)
- [Wikipedia](https://fr.wikipedia.org/wiki/Exponentiation_rapide)
