# Algoritmo de Dijkstra

_Lee esto en otros idiomas:_
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

El algoritmo de Dijkstra es un algoritmo para encontrar los caminos más cortos entre nodos en un grafo, que puede representar, por ejemplo, redes de carreteras.

El algoritmo existe en muchas variantes; la versión original de Dijkstra encontraba el camino más corto entre dos nodos, pero una variante más común fija un solo nodo como el "nodo fuente" y encuentra los caminos más cortos desde la fuente hacia todos los demás nodos del grafo, produciendo un árbol de caminos más cortos.

![Dijkstra](https://upload.wikimedia.org/wikipedia/commons/5/57/Dijkstra_Animation.gif)

El algoritmo de Dijkstra busca el camino más corto entre `a` y `b`.
Selecciona el vértice no visitado con la menor distancia, calcula la distancia a través de él hacia cada vecino no visitado, y actualiza la distancia del vecino si es menor. Marca el vértice como visitado (en rojo) cuando se han procesado todos sus vecinos.

## Aplicaciones prácticas del algoritmo de Dijkstra

- Sistemas GPS / navegación
- Optimización de rutas de transporte público y aerolíneas
- Enrutamiento de Internet (protocolos OSPF, IS-IS)
- Optimización del tráfico y la latencia en redes
- Búsqueda de caminos en videojuegos (camino más corto en mapas)
- Optimización de rutas de logística y entrega
- Diseño de redes de transporte y cadenas de suministro

## Ejemplo paso a paso del algoritmo de Dijkstra

Supongamos que tenemos un grafo ponderado de nodos, donde cada arista tiene un valor de distancia entre los nodos. Por ejemplo, la distancia entre el nodo `A` y el nodo `B` es de `7 metros` (o simplemente `7m` para abreviar).

El algoritmo utiliza una [cola de prioridad](../../../data-structures/priority-queue/) para obtener siempre el siguiente vértice no visitado con la menor distancia desde el nodo de origen.

El nodo inicial, por definición, tiene una distancia de `0m` desde sí mismo. Así que comenzamos con él — el único nodo en la cola de prioridad al inicio.

El resto de los nodos se agregará a la cola de prioridad más tarde, durante la exploración del grafo (al visitar los vecinos).

![Dijkstra step 1](./images/dijkstra-01.png)

Cada vecino del nodo extraído de la cola se recorre para calcular la distancia desde el origen.
Por ejemplo, la distancia de `A` a `B` es `0m + 7m = 7m`.

Cada vez que visitamos un vecino aún no visto, lo agregamos a la cola de prioridad, donde la prioridad es la distancia al nodo vecino desde el origen.

El nodo `B` se agrega a la cola de prioridad mínima para ser recorrido más adelante.

![Dijkstra step 2](./images/dijkstra-02.png)

Visitamos el siguiente vecino `C` del nodo `A`.
La distancia desde el nodo de origen `A` hasta `C` es `0m + 9m = 9m`.

El nodo `C` se agrega a la cola de prioridad mínima para recorrerlo más tarde.

![Dijkstra step 3](./images/dijkstra-03.png)

Lo mismo ocurre con el nodo `F`.
La distancia actual de `A` a `F` es `0m + 14m = 14m`.

El nodo `F` se agrega a la cola de prioridad mínima para ser recorrido más adelante.

![Dijkstra step 4](./images/dijkstra-04.png)

Una vez que se han revisado todos los vecinos del nodo actual, este se agrega al conjunto `visited`. No queremos volver a visitar estos nodos más adelante.

Ahora extraemos de la cola el siguiente nodo más cercano al origen (el de menor distancia) y comenzamos a visitar sus vecinos.

![Dijkstra step 5](./images/dijkstra-05.png)

Si el nodo que estamos visitando (en este caso, `C`) ya está en la cola, significa que ya habíamos calculado la distancia hacia él, pero desde otro camino (`A → C`).
Si la distancia actual (desde el camino `A → B → C`) es menor que la calculada antes, actualizamos la distancia (en la cola de prioridad) con la más corta, ya que buscamos los caminos más cortos.
Si la distancia es mayor, la dejamos como está.

Al visitar el nodo `C` a través de `B` (camino `A → B → C`), vemos que la distancia sería `7m + 10m = 17m`.
Esto es más largo que la distancia ya registrada de `9m` para el camino `A → C`. En estos casos, simplemente ignoramos la distancia más larga.

![Dijkstra step 6](./images/dijkstra-06.png)

Visitamos otro vecino de `B`, que es `D`.
La distancia hacia `D` es `7m + 15m = 22m`.
Como aún no hemos visitado `D` y no está en la cola de prioridad, la agregamos con una prioridad (distancia) de `22m`.

![Dijkstra step 7](./images/dijkstra-07.png)

En este punto, todos los vecinos de `B` han sido recorridos, así que agregamos `B` al conjunto `visited`.
Luego extraemos el nodo más cercano al origen desde la cola de prioridad.

![Dijkstra step 8](./images/dijkstra-08.png)

Recorremos los vecinos no visitados del nodo `C`.
La distancia hacia `F` a través de `C` (camino `A → C → F`) es `9m + 2m = 11m`.
Esto es más corto que el camino anterior `A → F` de `14m`.
En este caso, actualizamos la distancia de `F` a `11m` y su prioridad en la cola. Hemos encontrado un camino más corto hacia `F`.

![Dijkstra step 9](./images/dijkstra-09.png)

Lo mismo ocurre con `D`.
Hemos encontrado un camino más corto hacia `D`, donde `A → C → D` es más corto que `A → B → D`.
Actualizamos la distancia de `22m` a `20m`.

![Dijkstra step 10](./images/dijkstra-10.png)

Todos los vecinos de `C` han sido recorridos, así que podemos agregar `C` al conjunto `visited`.
Extraemos de la cola el siguiente nodo más cercano, que es `F`.

![Dijkstra step 11](./images/dijkstra-11.png)

Registramos la distancia hacia `E` como `11m + 9m = 20m`.

![Dijkstra step 12](./images/dijkstra-12.png)

Agregamos el nodo `F` al conjunto `visited` y extraemos el siguiente nodo más cercano, `D`.

![Dijkstra step 13](./images/dijkstra-13.png)

La distancia hacia `E` a través de `D` es `20m + 6m = 26m`.
Esto es más largo que la distancia ya calculada hacia `E` desde `F`, que es `20m`.
Podemos descartar la distancia más larga.

![Dijkstra step 14](./images/dijkstra-14.png)

El nodo `D` ahora está visitado.

![Dijkstra step 15](./images/dijkstra-15.png)

El nodo `E` también ha sido visitado.
Hemos terminado de recorrer el grafo.

![Dijkstra step 16](./images/dijkstra-16.png)

Ahora conocemos las distancias más cortas desde el nodo inicial `A` hacia cada nodo.

En la práctica, durante el cálculo de distancias también registramos los `previousVertices` (vértices anteriores) para poder mostrar la secuencia exacta de nodos que forman el camino más corto.

Por ejemplo, el camino más corto de `A` a `E` es `A → C → F → E`.

## Ejemplo de implementación

- [dijkstra.js](./dijkstra.js)

## Referencias

- [Wikipedia](https://es.wikipedia.org/wiki/Algoritmo_de_Dijkstra)
- [YouTube - Nathaniel Fan](https://www.youtube.com/watch?v=gdmfOwyQlcI&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [YouTube - Tushar Roy](https://www.youtube.com/watch?v=lAXZGERcDf4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
