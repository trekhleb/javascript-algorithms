# Bloom Filter

_Read this in other languages:_
[_Русский_](README.ru-RU.md),
[_Português_](README.pt-BR.md)

A **bloom filter** is a space-efficient probabilistic 
data structure designed to test whether an element 
is present in a set. It is designed to be blazingly 
fast and use minimal memory at the cost of potential
false positives. False positive matches are possible,
but false negatives are not – in other words, a query
returns either "possibly in set" or "definitely not in set".

Bloom proposed the technique for applications where the 
amount of source data would require an impractically large
amount of memory if "conventional" error-free hashing 
techniques were applied.

## Algorithm description

An empty Bloom filter is a bit array of `m` bits, all 
set to `0`. There must also be `k` different hash functions
defined, each of which maps or hashes some set element to 
one of the `m` array positions, generating a uniform random 
distribution. Typically, `k` is a constant, much smaller 
than `m`, which is proportional to the number of elements 
to be added; the precise choice of `k` and the constant of 
proportionality of `m` are determined by the intended 
false positive rate of the filter.

Here is an example of a Bloom filter, representing the 
set `{x, y, z}`. The colored arrows show the positions 
in the bit array that each set element is mapped to. The 
element `w` is not in the set `{x, y, z}`, because it 
hashes to one bit-array position containing `0`. For 
this figure, `m = 18` and `k = 3`.

![Bloom Filter](https://upload.wikimedia.org/wikipedia/commons/a/ac/Bloom_filter.svg)

## Operations

There are two main operations a bloom filter can
perform: _insertion_ and _search_. Search may result in
false positives. Deletion is not possible.

In other words, the filter can take in items. When
we go to check if an item has previously been
inserted, it can tell us either "no" or "maybe".

Both insertion and search are `O(1)` operations.

## Making the filter

A bloom filter is created by allotting a certain size.
In our example, we use `100` as a default length. All
locations are initialized to `false`.

### Insertion

During insertion, a number of hash functions,
in our case `3` hash functions, are used to create
hashes of the input. These hash functions output
indexes. At every index received, we simply change
the value in our bloom filter to `true`.

### Search

During a search, the same hash functions are called
and used to hash the input. We then check if the
indexes received _all_ have a value of `true` inside
our bloom filter. If they _all_ have a value of
`true`, we know that the bloom filter may have had
the value previously inserted.

However, it's not certain, because it's possible
that other values previously inserted flipped the
values to `true`. The values aren't necessarily
`true` due to the item currently being searched for.
Absolute certainty is impossible unless only a single
item has previously been inserted.

While checking the bloom filter for the indexes
returned by our hash functions, if even one of them
has a value of `false`, we definitively know that the
item was not previously inserted.

## False Positives

The probability of false positives is determined by
three factors: the size of the bloom filter, the
number of hash functions we use, and the number
of items that have been inserted into the filter.

The formula to calculate probablity of a false positive is:

( 1 - e <sup>-kn/m</sup> ) <sup>k</sup>

`k` = number of hash functions

`m` = filter size

`n` = number of items inserted

These variables, `k`, `m`, and `n`, should be picked based
on how acceptable false positives are. If the values
are picked and the resulting probability is too high,
the values should be tweaked and the probability
re-calculated.

## Applications

A bloom filter can be used on a blogging website. If
the goal is to show readers only articles that they
have never seen before, a bloom filter is perfect.
It can store hashed values based on the articles. After
a user reads a few articles, they can be inserted into
the filter. The next time the user visits the site,
those articles can be filtered out of the results.

Some articles will inevitably be filtered out by mistake,
but the cost is acceptable. It's ok if a user never sees
a few articles as long as they have other, brand new ones
to see every time they visit the site.

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Bloom_filter)
- [Bloom Filters by Example](http://llimllib.github.io/bloomfilter-tutorial/)
- [Calculating False Positive Probability](https://hur.st/bloomfilter/?n=4&p=&m=18&k=3)
- [Bloom Filters on Medium](https://blog.medium.com/what-are-bloom-filters-1ec2a50c68ff)
- [Bloom Filters on YouTube](https://www.youtube.com/watch?v=bEmBh1HtYrw)
