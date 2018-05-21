# Knapsack Problem

The knapsack problem or rucksack problem is a problem in 
combinatorial optimization: Given a set of items, each with 
a weight and a value, determine the number of each item to 
include in a collection so that the total weight is less 
than or equal to a given limit and the total value is as 
large as possible.

It derives its name from the problem faced by someone who is 
constrained by a fixed-size knapsack and must fill it with the 
most valuable items.

Example of a one-dimensional (constraint) knapsack problem: 
which boxes should be chosen to maximize the amount of money 
while still keeping the overall weight under or equal to 15 kg?

![knapsack problem](https://upload.wikimedia.org/wikipedia/commons/f/fd/Knapsack.svg)

## Definition

### 0/1 knapsack problem

The most common problem being solved is the **0/1 knapsack problem**, 
which restricts the number `xi` of copies of each kind of item to zero or one.

Given a set of n items numbered from `1` up to `n`, each with a 
weight `wi` and a value `vi`, along with a maximum weight 
capacity `W`,

maximize ![0/1 knapsack](https://wikimedia.org/api/rest_v1/media/math/render/svg/85620037d368d2136fb3361702df6a489416931b)

subject to ![0/1 knapsack](https://wikimedia.org/api/rest_v1/media/math/render/svg/dd6e7c9bca4397980976ea6d19237500ce3b8176)
and ![0/1 knapsack](https://wikimedia.org/api/rest_v1/media/math/render/svg/07dda71da2a630762c7b21b51ea54f86f422f951)

Here `xi` represents the number of instances of item `i` to 
include in the knapsack. Informally, the problem is to maximize 
the sum of the values of the items in the knapsack so that the 
sum of the weights is less than or equal to the knapsack's 
capacity.

### Bounded knapsack problem (BKP)

The **bounded knapsack problem (BKP)** removes the restriction 
that there is only one of each item, but restricts the number 
`xi` of copies of each kind of item to a maximum non-negative 
integer value `c`:

maximize ![bounded knapsack](https://wikimedia.org/api/rest_v1/media/math/render/svg/85620037d368d2136fb3361702df6a489416931b)

subject to ![bounded knapsack](https://wikimedia.org/api/rest_v1/media/math/render/svg/dd6e7c9bca4397980976ea6d19237500ce3b8176)
and ![bounded knapsack](https://wikimedia.org/api/rest_v1/media/math/render/svg/6c8c5ac4f8247b3b8e01e89de76a1df0ea969821)

### Unbounded knapsack problem (UKP)

The **unbounded knapsack problem (UKP)** places no upper bound 
on the number of copies of each kind of item and can be 
formulated as above except for that the only restriction 
on `xi` is that it is a non-negative integer.

maximize ![unbounded knapsack](https://wikimedia.org/api/rest_v1/media/math/render/svg/85620037d368d2136fb3361702df6a489416931b)

subject to ![unbounded knapsack](https://wikimedia.org/api/rest_v1/media/math/render/svg/dd6e7c9bca4397980976ea6d19237500ce3b8176) 
and ![unbounded knapsack](https://wikimedia.org/api/rest_v1/media/math/render/svg/90a99710f61d5dea19e49ae5b31164d2b56b07e3)

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Knapsack_problem)
- [0/1 Knapsack Problem on YouTube](https://www.youtube.com/watch?v=8LusJS5-AGo&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
