# Bloom Filter

A bloom filter is a data structure designed to
test whether an element is present in a set. It
is designed to be blazingly fast and use minimal
memory at the cost of potential false positives.

![Bloom Filter](https://upload.wikimedia.org/wikipedia/commons/a/ac/Bloom_filter.svg)

## Operations

There are two main operations a bloom filter can
perform: insertion and search. Search may result in
false positives. Deletion is not possible.

In other words, the filter can take in items. When
we go to check if an item has previously been
inserted, it can tell us either "no" or "maybe".

Both insertion and search are O(1) operations.

## Making the filter

A bloom filter is created by allotting a certain size.
In our example, we use 100 as a default length. All
locations are initialized to `false`.

### Insertion

During insertion, a number of hash functions,
in our case 3 hash functions, are used to create
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

k = # hash functions

m = size

n = # items inserted

These variables, k, m, and n, should be picked based
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

The popular blog site Medium does a version of this.
Feel free to read [their article](https://blog.medium.com/what-are-bloom-filters-1ec2a50c68ff).

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Bloom_filter)
- [Tutorial](http://llimllib.github.io/bloomfilter-tutorial/)
- [Calculating false positive probability](https://hur.st/bloomfilter/?n=4&p=&m=18&k=3)
- [Medium blog](https://blog.medium.com/what-are-bloom-filters-1ec2a50c68ff)
- [YouTube](https://www.youtube.com/watch?v=bEmBh1HtYrw)
