# Filtro Bloom (Bloom Filter)

O **bloom filter** é uma estrutura de dados probabilística
espaço-eficiente designada para testar se um elemento está
ou não presente em um conjunto de dados. Foi projetado para ser
incrivelmente rápido e utilizar o mínimo de memória ao 
potencial custo de um falso-positivo. Correspondências 
_falsas positivas_ são possíveis, contudo _falsos negativos_ 
não são - em outras palavras, a consulta retorna 
"possivelmente no conjunto" ou "definitivamente não no conjunto".

Bloom propôs a técnica para aplicações onde a quantidade 
de entrada de dados exigiria uma alocação de memória
impraticavelmente grande se as "convencionais" técnicas
error-free hashing fossem aplicado.

## Descrição do algoritmo

Um filtro Bloom vazio é um _bit array_ de `m` bits, todos
definidos como `0`. Também deverá haver diferentes funções
de hash `k` definidas, cada um dos quais mapeia e produz hash
para um dos elementos definidos em uma das posições `m` da
 _array_, gerando uma distribuição aleatória e uniforme.
Normalmente, `k` é uma constante, muito menor do que `m`,
pelo qual é proporcional ao número de elements a ser adicionado;
a escolha precisa de `k` e a constante de proporcionalidade de `m`
são determinadas pela taxa de falsos positivos planejado do filtro.

Aqui está um exemplo de um filtro Bloom, representando o
conjunto `{x, y, z}`. As flechas coloridas demonstram as
posições no _bit array_ em que cada elemento é mapeado.
O elemento `w` não está definido dentro de `{x, y, z}`,
porque este produz hash para uma posição de array de bits
contendo `0`. Para esta imagem: `m = 18` e `k = 3`.

![Bloom Filter](https://upload.wikimedia.org/wikipedia/commons/a/ac/Bloom_filter.svg)

## Operações

Existem duas operações principais que o filtro Bloom pode operar:
_inserção_ e _pesquisa_. A pesquisa pode resultar em falsos
positivos. Remoção não é possível.

Em outras palavras, o filtro pode receber itens. Quando
vamos verificar se um item já foi anteriormente
inserido, ele poderá nos dizer "não" ou "talvez".

Ambas as inserções e pesquisas são operações `O(1)`.

## Criando o filtro

Um filtro Bloom é criado ao alocar um certo tamanho.
No nosso exemplo, nós utilizamos `100` como tamanho padrão.
Todas as posições são initializadas como `false`.

### Inserção

Durante a inserção, um número de função hash, no nosso caso `3`
funções de hash, são utilizadas para criar hashes de uma entrada.
Estas funções de hash emitem saída de índices. A cada índice
recebido, nós simplismente trocamos o valor de nosso filtro
Bloom para `true`.

### Pesquisa

Durante a pesquisa, a mesma função de hash é chamada
e usada para emitir hash da entrada. Depois nós checamos
se _todos_ os indices recebidos possuem o valor `true`
dentro de nosso filtro Bloom. Caso _todos_ possuam o valor
`true`, nós sabemos que o filtro Bloom pode ter tido
o valor inserido anteriormente.

Contudo, isto não é certeza, porque é possível que outros
valores anteriormente inseridos trocaram o valor para `true`.
Os valores não são necessariamente `true` devido ao ítem
atualmente sendo pesquisado. A certeza absoluta é impossível,
a não ser que apenas um item foi inserido anteriormente.

Durante a checagem do filtro Bloom para índices retornados
pela nossa função de hash, mesmo que apenas um deles possua
valor como `false`, nós definitivamente sabemos que o ítem
não foi anteriormente inserido.

## Falso Positivos

A probabilidade de falso positivos é determinado por
três fatores: o tamanho do filtro de Bloom, o número de 
funções de hash que utilizados, e o número de itens que
foram inseridos dentro do filtro.

A formula para calcular a probabilidade de um falso positivo é:

( 1 - e <sup>-kn/m</sup> ) <sup>k</sup>

`k` = número de funções de hash

`m` = tamanho do filtro

`n` = número de itens inserido

Estas variáveis, `k`, `m` e `n`, devem ser escolhidas baseado
em quanto aceitável são os falsos positivos. Se os valores
escolhidos resultam em uma probabilidade muito alta, então
os valores devem ser ajustados e a probabilidade recalculada.

## Aplicações

Um filtro Bloom pode ser utilizado em uma página de Blog.
Se o objetivo é mostrar aos leitores somente os artigos
em que eles nunca viram, então o filtro Bloom é perfeito 
para isso. Ele pode armazenar hashes baseados nos artigos.
Depois que um usuário lê alguns artigos, eles podem ser
inseridos dentro do filtro. Na próxima vez que o usuário
visitar o Blog, aqueles artigos poderão ser filtrados (eliminados) 
do resultado.

Alguns artigos serão inevitavelmente filtrados (eliminados) 
por engano, mas o custo é aceitável. Tudo bem se um usuário nunca
ver alguns poucos artigos, desde que tenham outros novos
para ver toda vez que eles visitam o site. 


## Referências

- [Wikipedia](https://en.wikipedia.org/wiki/Bloom_filter)
- [Bloom Filters by Example](http://llimllib.github.io/bloomfilter-tutorial/)
- [Calculating False Positive Probability](https://hur.st/bloomfilter/?n=4&p=&m=18&k=3)
- [Bloom Filters on Medium](https://blog.medium.com/what-are-bloom-filters-1ec2a50c68ff)
- [Bloom Filters on YouTube](https://www.youtube.com/watch?v=bEmBh1HtYrw)
