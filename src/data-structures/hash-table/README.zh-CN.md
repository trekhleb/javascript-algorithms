# 哈希表

在计算中, 一个  **哈希表(hash table 或hash map)**  是一种实现 *关联数组(associative array)* 
的抽象数据类型, 该结构可以将 *键映射到值*。

哈希表使用 *哈希函数/散列函数* 来计算一个值在数组或桶(buckets)中或槽(slots)中对应的索引,可使用该索引找到所需的值。

理想情况下,散列函数将为每个键分配给一个唯一的桶(bucket),但是大多数哈希表设计采用不完美的散列函数,这可能会导致"哈希冲突(hash collisions)",也就是散列函数为多个键(key)生成了相同的索引,这种碰撞必须
以某种方式进行处理。


![Hash Table](https://upload.wikimedia.org/wikipedia/commons/7/7d/Hash_table_3_1_1_0_1_0_0_SP.svg)

通过单独的链接解决哈希冲突

![Hash Collision](https://upload.wikimedia.org/wikipedia/commons/d/d0/Hash_table_5_0_1_1_1_1_1_LL.svg)

## 参考

- [Wikipedia](https://en.wikipedia.org/wiki/Hash_table)
- [YouTube](https://www.youtube.com/watch?v=shs0KM3wKv8&index=4&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
