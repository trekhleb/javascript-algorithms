# Tabela de Hash (Hash Table)

Na ciência da computação, uma **tabela de hash** (hash table) é uma
estrutura de dados pela qual implementa um tipo de dado abstrado de
*array associativo*, uma estrutura que pode *mapear chaves para valores*.
Uma tabela de hash utiliza uma *função de hash* para calcular um índice
em um _array_ de buckets ou slots, a partir do qual o valor desejado
pode ser encontrado.

Idealmente, a função de hash irá atribuir a cada chave a um bucket único,
mas a maioria dos designs de tabela de hash emprega uma função de hash
imperfeita, pela qual poderá causar colisões de hashes onde a função de hash
gera o mesmo índice para mais de uma chave. Tais colisões devem ser
acomodados de alguma forma.

![Hash Table](./images/hash-table.jpeg)

Colisão de hash resolvida por encadeamento separado.

![Hash Collision](./images/collision-resolution.jpeg)

*Made with [okso.app](https://okso.app)*

## Referências

- [Wikipedia](https://en.wikipedia.org/wiki/Hash_table)
- [YouTube](https://www.youtube.com/watch?v=shs0KM3wKv8&index=4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
