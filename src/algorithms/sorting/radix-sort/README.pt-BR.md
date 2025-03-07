# Radix Sort

_Leia isso em outros idiomas:_
[_English_](README.md)

Em ciência da computação, **radix sort** é uma classificação inteira não comparativa
algoritmo que classifica os dados com chaves inteiras agrupando as chaves pelo indivíduo
dígitos que compartilham a mesma posição e valor significativos. Uma notação posicional
é necessário, mas porque os números inteiros podem representar cadeias de caracteres
(por exemplo, nomes ou datas) e números de ponto flutuante especialmente formatados, base
sort não está limitado a inteiros.

*De onde vem o nome?*

Em sistemas numéricos matemáticos, a *radix* ou base é o número de dígitos únicos,
incluindo o dígito zero, usado para representar números em um sistema de numeração posicional.
Por exemplo, um sistema binário (usando números 0 e 1) tem uma raiz de 2 e um decimal
sistema (usando números de 0 a 9) tem uma raiz de 10.

## Eficiência

O tópico da eficiência do radix sort comparado a outros algoritmos de ordenação é
um pouco complicado e sujeito a muitos mal-entendidos. Se raiz
sort é igualmente eficiente, menos eficiente ou mais eficiente do que o melhor
algoritmos baseados em comparação depende dos detalhes das suposições feitas.
A complexidade de classificação de raiz é `O(wn)` para chaves `n` que são inteiros de tamanho de palavra `w`.
Às vezes, `w` é apresentado como uma constante, o que tornaria a classificação radix melhor
(para `n` suficientemente grande) do que os melhores algoritmos de ordenação baseados em comparação,
que todos realizam comparações `O(n log n)` para classificar chaves `n`. No entanto, em
geral `w` não pode ser considerado uma constante: se todas as chaves `n` forem distintas,
então `w` tem que ser pelo menos `log n` para que uma máquina de acesso aleatório seja capaz de
armazená-los na memória, o que dá na melhor das hipóteses uma complexidade de tempo `O(n log n)`. Este
parece tornar a ordenação radix no máximo tão eficiente quanto a melhor
ordenações baseadas em comparação (e pior se as chaves forem muito mais longas que `log n`).

![Radix Sort](https://www.researchgate.net/publication/291086231/figure/fig1/AS:614214452404240@1523451545568/Simplistic-illustration-of-the-steps-performed-in-a-radix-sort-In-this-example-the.png)

## Complexidade

| Nome                  | Melhor            | Média             | Pior               | Memória    | Estável    | Comentários  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Radix sort**        | n * k           | n * k               | n * k               | n + k     | Sim       | k - comprimento da chave mais longa |

## Referências

- [Wikipedia](https://en.wikipedia.org/wiki/Radix_sort)
- [YouTube](https://www.youtube.com/watch?v=XiuSW_mEn7g&index=62&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [ResearchGate](https://www.researchgate.net/figure/Simplistic-illustration-of-the-steps-performed-in-a-radix-sort-In-this-example-the_fig1_291086231)
