# Filtro Bloom

Un **filtro Bloom** es una estructura de datos probabilística que optimiza el espacio, diseñada para comprobar si un elemento está presente en un conjunto. Está diseñado para ser increíblemente rápido y utilizar la mínima memoria posible, a costa de posibles falsos positivos. Las coincidencias de falsos positivos son posibles, pero no los falsos negativos; en otras palabras, una consulta devuelve "posiblemente en el conjunto" o "definitivamente no en el conjunto".

Bloom propuso la técnica para aplicaciones donde la cantidad de datos fuente requeriría una cantidad de memoria excesivamente grande si se aplicaran técnicas de hash convencionales sin errores.

## Descripción del algoritmo

Un filtro Bloom vacío es una matriz de bits de `m` bits, todos establecidos a `0`. También deben definirse `k` funciones hash diferentes, cada una de las cuales asigna o aplica hashes a un elemento del conjunto a una de las `m` posiciones de la matriz, generando una distribución aleatoria uniforme. Normalmente, `k` es una constante mucho menor que `m`, que es proporcional al número de elementos que se van a añadir; la elección precisa de `k` y la constante de proporcionalidad de `m` están determinadas por la tasa de falsos positivos prevista para el filtro.

A continuación se muestra un ejemplo de un filtro Bloom que representa el conjunto `{x, y, z}`. Las flechas de colores muestran las posiciones en la matriz de bits a las que se asigna cada elemento del conjunto. El elemento `w` no está en el conjunto `{x, y, z}`, porque su valor hash es una posición del array de bits que contiene `0`. Para esta figura, `m = 18` y `k = 3`.

![Filtro Bloom](https://upload.wikimedia.org/wikipedia/commons/a/ac/Bloom_filter.svg)

## Operaciones

Un filtro Bloom puede realizar dos operaciones principales: _inserción_ y _búsqueda_. La búsqueda puede generar falsos positivos. No es posible eliminar elementos.

En otras palabras, el filtro puede aceptar elementos. Al comprobar si un elemento se ha insertado previamente, puede indicar "no" o "quizás".

Tanto la inserción como la búsqueda son operaciones `O(1)`.

## Creación del filtro

Un filtro Bloom se crea asignando un tamaño determinado. En nuestro ejemplo, usamos `100` como longitud predeterminada. Todas las ubicaciones se inicializan como `false`.

### Inserción

Durante la inserción, se utilizan varias funciones hash, en nuestro caso `3`, para crear hashes de la entrada. Estas funciones hash generan índices. Con cada índice recibido, simplemente cambiamos el valor de nuestro filtro Bloom a `true`.

### Búsqueda

Durante una búsqueda, se invocan las mismas funciones hash y se utilizan para generar hashes de la entrada. Luego, comprobamos si todos los índices recibidos tienen un valor `true` dentro de nuestro filtro Bloom. Si todos tienen un valor `true`, sabemos que el filtro Bloom podría haber tenido el valor insertado previamente.

Sin embargo, no es seguro, ya que es posible que otros valores insertados previamente hayan cambiado los valores a `true`. Los valores no son necesariamente `true` debido al elemento que se busca actualmente. La certeza absoluta es imposible a menos que solo se haya insertado previamente un elemento.

Al comprobar el filtro Bloom para los índices devueltos por nuestras funciones hash, si incluso uno de ellos tiene un valor `false`, sabemos con certeza que el elemento no se insertó previamente.

## Falsos positivos

La probabilidad de falsos positivos está determinada por tres factores: el tamaño del filtro Bloom, el número de funciones hash que utilizamos y el número de elementos insertados en el filtro.

La fórmula para calcular la probabilidad de un falso positivo es:

(1 - e <sup>-kn/m</sup> ) <sup>k</sup>

`k` = número de funciones hash

`m` = tamaño del filtro

`n` = número de elementos insertados

Estas variables, `k`, `m` y `n`, deben seleccionarse en función de la aceptabilidad de los falsos positivos. Si se seleccionan los valores y la probabilidad resultante es demasiado alta, se deben ajustar y recalcular la probabilidad.

## Aplicaciones

Un filtro Bloom se puede usar en un blog. Si el objetivo es mostrar a los lectores solo artículos que nunca han visto, un filtro Bloom es perfecto. Puede almacenar valores hash basados ​​en los artículos. Después de que un usuario lea algunos artículos, estos se pueden insertar en el filtro. La próxima vez que el usuario visite el sitio, esos artículos se pueden filtrar de los resultados.

Es inevitable que algunos artículos se filtren por error, pero el costo es aceptable. No importa si un usuario no ve algunos artículos, siempre y cuando tenga otros nuevos para ver cada vez que visite el sitio.

Referencias

- [Wikipedia](https://en.wikipedia.org/wiki/Bloom_filter)
- [Filtros Bloom por ejemplo](http://llimllib.github.io/bloomfilter-tutorial/)
- [Cálculo de la probabilidad de falsos positivos](https://hur.st/bloomfilter/?n=4&p=&m=18&k=3)
- [Filtros Bloom en Medium](https://blog.medium.com/what-are-bloom-filters-1ec2a50c68ff)
- [Filtros Bloom en YouTube](https://www.youtube.com/watch?v=bEmBh1HtYrw)