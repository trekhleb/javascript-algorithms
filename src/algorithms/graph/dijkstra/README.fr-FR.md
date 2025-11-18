# Algorithme de Dijkstra

_Lire ceci dans d’autres langues :_
[_English_](README.md),
[_한국어_](README.ko-KR.md),
[_日本語_](README.ja-JP.md),
[_简体中文_](README.zh-CN.md),
[_繁體中文_](README.zh-TW.md),
[_Українська_](README.uk-UA.md),
[_Español_](README.es-ES.md),
[_Français_](README.fr-FR.md),
[_Deutsch_](README.de-DE.md),
[_עברית_](README.he-IL.md)

L’algorithme de Dijkstra est un algorithme permettant de trouver les plus courts chemins entre des nœuds dans un graphe, pouvant représenter, par exemple, un réseau routier.

Il existe plusieurs variantes de cet algorithme. La version originale de Dijkstra trouvait le plus court chemin entre deux nœuds, mais la version la plus courante fixe un seul nœud comme « nœud source » et calcule les plus courts chemins de cette source vers tous les autres nœuds du graphe, produisant ainsi un arbre des plus courts chemins.

![Dijkstra](https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif)

L’algorithme de Dijkstra trouve le plus court chemin entre `a` et `b`.
Il sélectionne le sommet non visité avec la plus petite distance, calcule la distance à travers ce sommet vers chacun de ses voisins non visités, et met à jour la distance du voisin si celle-ci est plus courte.
Le sommet est ensuite marqué comme visité (en rouge) lorsque tous ses voisins ont été traités.

## Applications pratiques de l’algorithme de Dijkstra

- Systèmes GPS / navigation
- Optimisation des itinéraires de transport public et d’avions
- Routage Internet (protocoles OSPF, IS-IS)
- Optimisation du trafic et de la latence réseau
- Recherche de chemin dans les jeux vidéo (chemin le plus court sur une carte)
- Optimisation des itinéraires de livraison et de logistique
- Conception de réseaux de transport et de chaînes d’approvisionnement

## Exemple pas à pas de l’algorithme de Dijkstra

Supposons que nous ayons un graphe pondéré de nœuds, où chaque arête possède une distance entre deux nœuds.
Par exemple, la distance entre le nœud `A` et le nœud `B` est de `7 mètres` (ou simplement `7m`).

L’algorithme utilise une [file de priorité](../../../data-structures/priority-queue/) pour toujours extraire le prochain sommet non visité ayant la plus petite distance depuis le nœud d’origine.

Le nœud de départ, par définition, a une distance de `0m` depuis lui-même.
Nous commençons donc avec ce nœud, le seul présent dans la file de priorité au départ.

Les autres nœuds seront ajoutés à la file de priorité plus tard, pendant la traversée du graphe (en visitant les voisins).

![Dijkstra step 1](./images/dijkstra-01.png)

Chaque voisin du nœud extrait de la file est parcouru afin de calculer la distance à partir du nœud d’origine.
Par exemple, la distance de `A` à `B` est `0m + 7m = 7m`.

Chaque fois qu’un voisin encore non visité est découvert, il est ajouté à la file de priorité, la priorité correspondant à la distance depuis le nœud d’origine.

Le nœud `B` est ajouté à la file de priorité minimale pour être traité plus tard.

![Dijkstra step 2](./images/dijkstra-02.png)

Nous visitons le voisin suivant, `C`, du nœud `A`.
La distance depuis le nœud d’origine `A` vers `C` est `0m + 9m = 9m`.

Le nœud `C` est ajouté à la file de priorité minimale pour être parcouru ultérieurement.

![Dijkstra step 3](./images/dijkstra-03.png)

Même chose pour le nœud `F`.
La distance actuelle de `A` à `F` est `0m + 14m = 14m`.

Le nœud `F` est ajouté à la file de priorité minimale pour être visité plus tard.

![Dijkstra step 4](./images/dijkstra-04.png)

Une fois que tous les voisins du nœud actuel ont été examinés, ce nœud est ajouté à l’ensemble `visited`.
Nous ne souhaitons plus revisiter ces nœuds lors des prochaines itérations.

Nous extrayons maintenant de la file le nœud le plus proche de la source (celui ayant la plus courte distance) et commençons à visiter ses voisins.

![Dijkstra step 5](./images/dijkstra-05.png)

Si le nœud que nous visitons (dans ce cas, `C`) est déjà présent dans la file, cela signifie que sa distance a déjà été calculée via un autre chemin (`A → C`).
Si la nouvelle distance (depuis le chemin `A → B → C`) est plus courte, nous mettons à jour la distance dans la file de priorité.
Si elle est plus longue, nous la laissons telle quelle.

En visitant le nœud `C` via `B` (chemin `A → B → C`), nous trouvons que la distance est `7m + 10m = 17m`.
Ceci est plus long que la distance enregistrée de `9m` pour le chemin `A → C`.
Dans ce cas, nous ignorons simplement cette distance plus longue.

![Dijkstra step 6](./images/dijkstra-06.png)

Nous visitons un autre voisin de `B`, à savoir `D`.
La distance vers `D` est `7m + 15m = 22m`.
Comme `D` n’a pas encore été visité et n’est pas dans la file, nous l’ajoutons avec une priorité (distance) de `22m`.

![Dijkstra step 7](./images/dijkstra-07.png)

À ce stade, tous les voisins de `B` ont été parcourus, donc nous ajoutons `B` à l’ensemble `visited`.
Ensuite, nous extrayons de la file le nœud le plus proche du nœud d’origine.

![Dijkstra step 8](./images/dijkstra-08.png)

Nous parcourons les voisins non visités du nœud `C`.
La distance vers `F` via `C` (chemin `A → C → F`) est `9m + 2m = 11m`.
C’est plus court que la distance précédemment enregistrée de `14m` pour le chemin `A → F`.
Nous mettons donc à jour la distance de `F` à `11m` et ajustons sa priorité dans la file.
Nous venons de trouver un chemin plus court vers `F`.

![Dijkstra step 9](./images/dijkstra-09.png)

Même chose pour `D`.
Nous avons trouvé un chemin plus court vers `D` : `A → C → D` est plus court que `A → B → D`.
Nous mettons à jour la distance de `22m` à `20m`.

![Dijkstra step 10](./images/dijkstra-10.png)

Tous les voisins de `C` ont été parcourus, donc nous pouvons ajouter `C` à l’ensemble `visited`.
Nous extrayons maintenant de la file le prochain nœud le plus proche, `F`.

![Dijkstra step 11](./images/dijkstra-11.png)

Nous enregistrons la distance vers `E` comme `11m + 9m = 20m`.

![Dijkstra step 12](./images/dijkstra-12.png)

Nous ajoutons `F` à l’ensemble `visited` et extrayons ensuite `D`, le prochain nœud le plus proche.

![Dijkstra step 13](./images/dijkstra-13.png)

La distance vers `E` via `D` est `20m + 6m = 26m`.
C’est plus long que la distance déjà calculée depuis `F` (`20m`).
Nous pouvons donc ignorer cette distance plus longue.

![Dijkstra step 14](./images/dijkstra-14.png)

Le nœud `D` est maintenant visité.

![Dijkstra step 15](./images/dijkstra-15.png)

Le nœud `E` est maintenant visité également.
La traversée du graphe est terminée.

![Dijkstra step 16](./images/dijkstra-16.png)

Nous connaissons maintenant les distances les plus courtes vers chaque nœud depuis le nœud de départ `A`.

En pratique, pendant le calcul des distances, on enregistre également les `previousVertices` (nœuds précédents) pour pouvoir reconstruire la séquence exacte des nœuds qui forment le chemin le plus court.

Par exemple, le chemin le plus court de `A` à `E` est `A → C → F → E`.

## Exemple d’implémentation

- [dijkstra.js](./dijkstra.js)

## Références

- [Wikipédia](https://fr.wikipedia.org/wiki/Algorithme_de_Dijkstra)
- [YouTube - Nathaniel Fan](https://www.youtube.com/watch?v=gdmfOwyQlcI&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [YouTube - Tushar Roy](https://www.youtube.com/watch?v=lAXZGERcDf4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
