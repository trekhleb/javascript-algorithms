# Nombre complexe

_Read this in other languages:_
[english](README.md).

Un **nombre complexe** est un nombre qui peut s'écrire sous la forme
`a + b * i`, tels que `a` et `b` sont des nombres réels,
et `i` est la solution de l'équation `x^2 = −1`.
Du fait qu'aucun _nombre réel_ ne statisfait l'équation,
`i` est appellé _nombre imaginaire_. Étant donné le nombre complexe `a + b * i`,
`a` est appellé _partie réelle_, et `b`, _partie imaginaire_.

![Complex Number](https://www.mathsisfun.com/numbers/images/complex-example.svg)

Un nombre complexe est donc la combinaison
d'un nombre réel et d'un nombre imaginaire :

![Complex Number](https://www.mathsisfun.com/numbers/images/complex-number.svg)

En géométrie, les nombres complexes étendent le concept
de ligne de nombres sur une dimension à un _plan complexe à deux dimensions_
en utilisant l'axe horizontal pour lepartie réelle
et l'axe vertical pour la partie imaginaire. Le nombre complexe `a + b * i`
peut être identifié avec le point `(a, b)` dans le plan complexe.

Un nombre complexe dont la partie réelle est zéro est dit _imaginaire pur_;
les points pour ces nombres se trouvent sur l'axe vertical du plan complexe.
Un nombre complexe dont la partie imaginaire est zéro
peut être considéré comme un _nombre réel_; son point
se trouve sur l'axe horizontal du plan complexe.

| Nombre complexe | Partie réelle | partie imaginaire |                  |
| :-------------- | :-----------: | :---------------: | ---------------- |
| 3 + 2i          |       3       |         2         |                  |
| 5               |       5       |       **0**       | Purely Real      |
| −6i             |     **0**     |        -6         | Purely Imaginary |

A complex number can be visually represented as a pair of numbers `(a, b)` forming
a vector on a diagram called an _Argand diagram_, representing the _complex plane_.
`Re` is the real axis, `Im` is the imaginary axis, and `i` satisfies `i^2 = −1`.

Un nombre complexe peut être représenté visuellement comme une paire de nombres
`(a, b)` formant un vecteur sur un diagramme appelé _diagramme d'Argand_,
représentant le _plan complexe_.
_Re_ est l'axe réel, _Im_ est l'axe imaginaire et `i` satisfait `i^2 = −1`.

![Complex Number](https://upload.wikimedia.org/wikipedia/commons/a/af/Complex_number_illustration.svg)

> Complexe ne veut pas dire compliqué. Cela signifie simplement que
> les deux types de nombres, réels et imaginaires, forment ensemble un complexe
> comme on le dirait d'un complexe de bâtiments (bâtiments réunis).

## Forme polaire

Une manière de définir un point `P` dans le plan complexe, autre que d'utiliser
les coordonnées x et y, consiste à utiliser la distance entre le point `O`, le point
dont les coordonnées sont `(0, 0)` (l'origine), et l'angle sous-tendu
entre l'axe réel positif et le segment de droite `OP` dans le sens antihoraire.
Cette idée conduit à la forme polaire des nombres complexes.

![Polar Form](https://upload.wikimedia.org/wikipedia/commons/7/7a/Complex_number_illustration_modarg.svg)

The _valeur absolue_ (ou module) d'un nombre complexe `z = x + yi` est:

![Radius](https://wikimedia.org/api/rest_v1/media/math/render/svg/b59629c801aa0ddcdf17ee489e028fb9f8d4ea75)

L'argument de `z` (parfois appelé « phase » ou « amplitude ») est l'angle
du rayon `OP` avec l'axe des réels positifs, et s'écrit `arg(z)`. Comme
avec le module, l'argument peut être trouvé à partir de la forme rectangulaire `x + yi`:

![Phase](https://wikimedia.org/api/rest_v1/media/math/render/svg/7cbbdd9bb1dd5df86dd2b820b20f82995023e566)

Ensemble, `r` et`φ` donnent une autre façon de représenter les nombres complexes, la
forme polaire, car la combinaison du module et de l'argument suffit à indiquer la
position d'un point sur le plan. Obtenir les coordonnées du rectangle d'origine
à partir de la forme polaire se fait par la formule appelée forme trigonométrique :

![Polar Form](https://wikimedia.org/api/rest_v1/media/math/render/svg/b03de1e1b7b049880b5e4870b68a57bc180ff6ce)

En utilisant la formule d'Euler, cela peut être écrit comme suit:

![Euler's Form](https://wikimedia.org/api/rest_v1/media/math/render/svg/0a087c772212e7375cb321d83fc1fcc715cd0ed2)

## Opérations de base

### Addition

Pour ajouter deux nombres complexes, nous ajoutons chaque partie séparément :

```text
(a + b * i) + (c + d * i) = (a + c) + (b + d) * i
```

**Exemple**

```text
(3 + 5i) + (4 − 3i) = (3 + 4) + (5 − 3)i = 7 + 2i
```

Dans un plan complexe, l'addition ressemblera à ceci:

![Complex Addition](https://www.mathsisfun.com/algebra/images/complex-plane-vector-add.svg)

### Soustraction

Pour soustraire deux nombres complexes, on soustrait chaque partie séparément :

```text
(a + b * i) - (c + d * i) = (a - c) + (b - d) * i
```

**Exemple**

```text
(3 + 5i) - (4 − 3i) = (3 - 4) + (5 + 3)i = -1 + 8i
```

### Multiplication

Pour multiplier les nombres complexes, chaque partie du premier nombre complexe est multipliée
par chaque partie du deuxième nombre complexe:

On peut utiliser le "FOIL" (parfois traduit PEID en français), acronyme de
**F**irsts (Premiers), **O**uters (Extérieurs), **I**nners (Intérieurs), **L**asts (Derniers)" (
voir [Binomial Multiplication](ttps://www.mathsisfun.com/algebra/polynomials-multiplying.html) pour plus de détails):

![Complex Multiplication](https://www.mathsisfun.com/algebra/images/foil-complex.svg)

- Firsts: `a × c`
- Outers: `a × di`
- Inners: `bi × c`
- Lasts: `bi × di`

En général, cela ressemble à:

```text
(a + bi)(c + di) = ac + adi + bci + bdi^2
```

Mais il existe aussi un moyen plus rapide !

Utiliser cette loi:

```text
(a + bi)(c + di) = (ac − bd) + (ad + bc)i
```

**Exemple**

```text
(3 + 2i)(1 + 7i)
= 3×1 + 3×7i + 2i×1+ 2i×7i
= 3 + 21i + 2i + 14i^2
= 3 + 21i + 2i − 14   (because i^2 = −1)
= −11 + 23i
```

```text
(3 + 2i)(1 + 7i) = (3×1 − 2×7) + (3×7 + 2×1)i = −11 + 23i
```

### Conjugués

En mathématiques, le conjugué d'un nombre complexe z
est le nombre complexe formé de la même partie réelle que z
mais de partie imaginaire opposée.

Un conjugué vois son signe changer au milieu comme suit:

![Complex Conjugate](https://www.mathsisfun.com/numbers/images/complex-conjugate.svg)

Un conjugué est souvent écrit avec un trait suscrit (barre au-dessus):

```text
______
5 − 3i   =   5 + 3i
```

Dans un plan complexe, le nombre conjugué sera mirroir par rapport aux axes réels.

![Complex Conjugate](https://upload.wikimedia.org/wikipedia/commons/6/69/Complex_conjugate_picture.svg)

### Division

Le conjugué est utiliser pour aider à la division de nombres complexes

L'astuce est de _multiplier le haut et le bas par le conjugué du bas_.

**Exemple**

```text
2 + 3i
------
4 − 5i
```

Multiplier le haut et le bas par le conjugué de `4 − 5i`:

```text
  (2 + 3i) * (4 + 5i)   8 + 10i + 12i + 15i^2
= ------------------- = ----------------------
  (4 − 5i) * (4 + 5i)   16 + 20i − 20i − 25i^2
```

Et puisque `i^2 = −1`, il s'ensuit que:

```text
  8 + 10i + 12i − 15    −7 + 22i   −7   22
= ------------------- = -------- = -- + -- * i
  16 + 20i − 20i + 25      41      41   41

```

Il existe cependant un moyen plus direct.

Dans l'exemple précédent, ce qui s'est passé en bas était intéressant:

```text
(4 − 5i)(4 + 5i) = 16 + 20i − 20i − 25i
```

Les termes du milieu `(20i − 20i)` s'annule! Et pusique `i^2 = −1` on retrouve:

```text
(4 − 5i)(4 + 5i) = 4^2 + 5^2
```

Ce qui est vraiment un résultat assez simple. La règle générale est:

```text
(a + bi)(a − bi) = a^2 + b^2
```

## Références

- [Wikipedia](https://fr.wikipedia.org/wiki/Nombre_complexe)
- [Math is Fun](https://www.mathsisfun.com/numbers/complex-numbers.html)
