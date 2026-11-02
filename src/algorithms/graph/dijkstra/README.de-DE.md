# Dijkstra-Algorithmus

_Lies dies in anderen Sprachen:_
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

Der Dijkstra-Algorithmus ist ein Algorithmus zur Bestimmung der kürzesten Wege zwischen Knoten in einem Graphen, der beispielsweise Straßennetze darstellen kann.

Der Algorithmus existiert in vielen Varianten; die ursprüngliche Version von Dijkstra fand den kürzesten Weg zwischen zwei Knoten, aber eine gebräuchlichere Variante fixiert einen einzelnen Knoten als „Quellknoten“ und findet die kürzesten Wege von dieser Quelle zu allen anderen Knoten im Graphen. Das Ergebnis ist ein sogenannter „kürzester-Wege-Baum“ (Shortest-Path Tree).

![Dijkstra](https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif)

Der Dijkstra-Algorithmus findet den kürzesten Weg zwischen `a` und `b`.
Er wählt den unbesuchten Knoten mit der kleinsten aktuellen Entfernung,
berechnet die Distanzen zu jedem unbesuchten Nachbarn über diesen Knoten
und aktualisiert die Entfernung des Nachbarn, wenn sie kleiner ist.
Nachdem alle Nachbarn überprüft wurden, wird der Knoten als besucht markiert (rot dargestellt).

## Praktische Anwendungen des Dijkstra-Algorithmus

- GPS- und Navigationssysteme
- Optimierung von Routen im öffentlichen Verkehr und im Flugverkehr
- Internet-Routing (OSPF-, IS-IS-Protokolle)
- Optimierung von Netzwerkverkehr und Latenzzeiten
- Pfadsuche in Computerspielen (kürzester Weg auf Karten)
- Routenoptimierung in Logistik und Lieferketten
- Planung von Transport- und Versorgungsnetzen

## Schritt-für-Schritt-Beispiel des Dijkstra-Algorithmus

Nehmen wir an, wir haben einen gewichteten Graphen, bei dem jede Kante eine Distanz zwischen Knoten hat.
Zum Beispiel beträgt die Entfernung zwischen Knoten `A` und `B` `7 Meter` (oder kurz `7m`).

Der Algorithmus verwendet eine [Prioritätswarteschlange](../../../data-structures/priority-queue/),
um immer den nächsten unbesuchten Knoten mit der kleinsten Entfernung vom Startknoten zu entnehmen.

Der Startknoten hat per Definition eine Entfernung von `0m` zu sich selbst.
Wir beginnen also mit diesem Knoten – er ist der einzige in der Prioritätswarteschlange zu Beginn.

Die restlichen Knoten werden während der Graphdurchquerung (beim Besuchen der Nachbarn) später hinzugefügt.

![Dijkstra step 1](./images/dijkstra-01.png)

Jeder Nachbar des aus der Warteschlange entnommenen Knotens wird überprüft, um die Entfernung vom Startpunkt zu berechnen.
Zum Beispiel: Die Entfernung von `A` nach `B` beträgt `0m + 7m = 7m`.

Jedes Mal, wenn wir einen neuen, noch nicht gesehenen Nachbarn besuchen, fügen wir ihn der Prioritätswarteschlange hinzu, wobei die Priorität die Distanz zum Startknoten ist.

Der Knoten `B` wird mit der Priorität 7m in die Warteschlange eingefügt, um später besucht zu werden.

![Dijkstra step 2](./images/dijkstra-02.png)

Als Nächstes besuchen wir den Nachbarn `C` von `A`.
Die Entfernung vom Startknoten `A` zu `C` beträgt `0m + 9m = 9m`.

Der Knoten `C` wird ebenfalls in die Prioritätswarteschlange eingefügt.

![Dijkstra step 3](./images/dijkstra-03.png)

Dasselbe gilt für den Knoten `F`.
Die aktuelle Entfernung von `A` zu `F` ist `0m + 14m = 14m`.

`F` wird in die Warteschlange eingefügt, um später besucht zu werden.

![Dijkstra step 4](./images/dijkstra-04.png)

Nachdem alle Nachbarn des aktuellen Knotens überprüft wurden, wird dieser Knoten zur `visited`-Menge hinzugefügt.
Solche Knoten werden in den nächsten Schritten nicht erneut besucht.

Nun entnehmen wir aus der Prioritätswarteschlange den nächsten Knoten mit der kürzesten Distanz zur Quelle und beginnen, seine Nachbarn zu besuchen.

![Dijkstra step 5](./images/dijkstra-05.png)

Wenn der Knoten, den wir besuchen (in diesem Fall `C`), bereits in der Warteschlange ist,
bedeutet das, dass die Distanz zu ihm bereits von einem anderen Pfad (`A → C`) berechnet wurde.
Wenn die aktuelle Distanz (über `A → B → C`) kürzer ist, aktualisieren wir den Wert in der Warteschlange.
Ist sie länger, bleibt sie unverändert.

Beim Besuch von `C` über `B` (`A → B → C`) beträgt die Distanz `7m + 10m = 17m`.
Dies ist länger als die bereits gespeicherte Distanz `9m` für `A → C`.
Daher ignorieren wir diesen längeren Pfad.

![Dijkstra step 6](./images/dijkstra-06.png)

Wir besuchen einen weiteren Nachbarn von `B`, nämlich `D`.
Die Entfernung zu `D` beträgt `7m + 15m = 22m`.
Da `D` noch nicht besucht wurde und nicht in der Warteschlange ist, fügen wir ihn mit der Priorität `22m` hinzu.

![Dijkstra step 7](./images/dijkstra-07.png)

An diesem Punkt wurden alle Nachbarn von `B` besucht, daher wird `B` zur `visited`-Menge hinzugefügt.
Als Nächstes entnehmen wir aus der Warteschlange den Knoten, der dem Ursprung am nächsten ist.

![Dijkstra step 8](./images/dijkstra-08.png)

Wir besuchen die unbesuchten Nachbarn von `C`.
Die Distanz zu `F` über `C` (`A → C → F`) beträgt `9m + 2m = 11m`.
Dies ist kürzer als der bisher gespeicherte Weg `A → F` von `14m`.
In diesem Fall aktualisieren wir die Distanz zu `F` auf `11m` und passen ihre Priorität in der Warteschlange an.
Wir haben einen kürzeren Weg zu `F` gefunden.

![Dijkstra step 9](./images/dijkstra-09.png)

Dasselbe gilt für `D`.
Wir haben einen kürzeren Pfad zu `D` gefunden – der Weg `A → C → D` ist kürzer als `A → B → D`.
Die Distanz wird von `22m` auf `20m` aktualisiert.

![Dijkstra step 10](./images/dijkstra-10.png)

Alle Nachbarn von `C` wurden besucht, daher fügen wir `C` zur `visited`-Menge hinzu.
Wir entnehmen den nächsten Knoten aus der Warteschlange, der `F` ist.

![Dijkstra step 11](./images/dijkstra-11.png)

Wir notieren die Distanz zu `E` als `11m + 9m = 20m`.

![Dijkstra step 12](./images/dijkstra-12.png)

Wir fügen `F` zur `visited`-Menge hinzu und entnehmen den nächsten Knoten `D`.

![Dijkstra step 13](./images/dijkstra-13.png)

Die Distanz zu `E` über `D` ist `20m + 6m = 26m`.
Das ist länger als die bereits berechnete Distanz von `20m` über `F`.
Daher verwerfen wir diesen längeren Weg.

![Dijkstra step 14](./images/dijkstra-14.png)

Der Knoten `D` ist jetzt besucht.

![Dijkstra step 15](./images/dijkstra-15.png)

Auch der Knoten `E` wurde besucht.
Die Durchquerung des Graphen ist abgeschlossen.

![Dijkstra step 16](./images/dijkstra-16.png)

Nun kennen wir die kürzesten Distanzen von jedem Knoten ausgehend vom Startknoten `A`.

In der Praxis speichert man während der Berechnungen zusätzlich die `previousVertices` (vorherige Knoten),
um die genaue Reihenfolge der Knoten im kürzesten Pfad rekonstruieren zu können.

Zum Beispiel ist der kürzeste Pfad von `A` nach `E`: `A → C → F → E`.

## Beispielimplementierung

- [dijkstra.js](./dijkstra.js)

## Quellen

- [Wikipedia](https://de.wikipedia.org/wiki/Dijkstra-Algorithmus)
- [YouTube – Nathaniel Fan](https://www.youtube.com/watch?v=gdmfOwyQlcI&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [YouTube – Tushar Roy](https://www.youtube.com/watch?v=lAXZGERcDf4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
