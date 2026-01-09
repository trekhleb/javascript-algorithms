# Merkle - Tree
![MerkleVisual](https://media-exp1.licdn.com/dms/image/C5112AQHbQzs-tGzrsQ/article-cover_image-shrink_720_1280/0/1537618109250?e=1635984000&v=beta&t=cATJRvRamNOSOdEFDi9EyH1ls3aQ1r_FHD9RXJIPmKY)

## What Is a Merkle Tree?
A Merkle tree is a data structure that is used in computer science applications. In bitcoin and other cryptocurrencies​, Merkle trees serve to encode blockchain data more efficiently and securely.

Ralph C. Merkle (born February 2, 1952) is a computer scientist. He is one of the inventors of public key cryptography, the inventor of hashing. He is also the inventor of MERKEL tree.

A Merkle tree is a hash-based data structure that is a generalization of the hash list. It is a tree structure in which each leaf node is a hash of a block of data, and each non-leaf node is a hash of its children. Typically, Merkle trees have a branching factor of 2, meaning that each node has up to 2 children.

Merkle trees are used in distributed systems for efficient data verification. They are efficient because they use hashes instead of full files. Hashes are ways of encoding files that are much smaller than the actual file itself. Currently, their main uses are in peer-to-peer networks such as Tor, Bitcoin, and Git.

![MerkleTree](https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Hash_Tree.svg/1920px-Hash_Tree.svg.png)

## Usage 
Merkle tree(Hash tree)  is used to verify any kind of data stored, handled and transferred in and between computers.

Currently, the main use of Merkle tree is to make sure that data blocks received from other peers in a peer-to-peer network are received undamaged and unaltered, and even to check that the other peers do not lie and send fake blocks.

Merkle tree is used in git, Amazon's Dynamo, Cassandra as well as BitCoin.

## Role of Merkle Tree in Block Chain:

Merkle Tree is one of the core data structures which is used in the Bitcoin blockchain to verify the existence of a transaction in a way that conserves both space and time quite effectively 

Merkle trees produce an overall digital fingerprint of the entire set of transactions, providing a very efficient process to verify whether a transaction is included in a block.

## Algorithm and Implementation

![Algorithm](https://media-exp1.licdn.com/dms/image/C5112AQEehgC6XD-20Q/article-inline_image-shrink_1000_1488/0/1537618459684?e=1635984000&v=beta&t=jRQinfqEPZvstqnlzklZvUXwyLIjWy6uFkCK3TsMcKQ)

A Merkle tree is constructed by recursively hashing pairs of nodes until there is only one hash.

a, b, c, and d are some data elements (files, JSON, etc) and H is a hash function.

a hash function acts as a “digital fingerprint” of some piece of data by mapping it to a simple string with a low probability that any other piece of data will map to the same string.

Each node is created by hashing the concatenation of its “parents” in the tree.

Note: Merkle tree are mostly a binary tree but there are also Trees. Platforms like Ethereum use non binary tree. 

## Complexity
 Merkle trees have very little overhead when compared with hash lists. Binary Merkle trees, like the one pictured above, operate similarly to binary search trees in that their depth is bounded by their branching factor, 2. Included below is worst-case analysis for a Merkle tree with a branching factor of kk.
![Complexity](https://miro.medium.com/max/875/1*AghVi4KgVsnxjXNKZBJu9Q.png)
 
## References

- [Wikipedia](https://en.wikipedia.org/wiki/Merkle_tree)