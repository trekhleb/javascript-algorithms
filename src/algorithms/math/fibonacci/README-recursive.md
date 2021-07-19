# Fibonacci recursive function using memoization as a decorator

The Fibonacci algorithm in its recursive form may be considered cursed by the majority of developers (because it is), but there is a way to make it work: using memoization. The memoize function is a closure and needs another function as an argument, then its result is checked on the Map object; if it's there, return it, if not, add it to the Map. As the algorithm grows in size, it will only return references rather than computing values over and over again.

## Memoization

In computing, memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again. Memoization has also been used in other contexts (and for purposes other than speed gains), such as in simple mutually recursive descent parsing. Although related to caching, memoization refers to a specific case of this optimization, distinguishing it from forms of caching such as buffering or page replacement. In the context of some logic programming languages, memoization is also known as tabling.

## Recursion

Recursion in computer science is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem (as opposed to iteration).[1] The approach can be applied to many types of problems, and recursion is one of the central ideas of computer science.

## Closure
More info on closures here: https://javascript.info/closure

## References
 - [Wikipedia](https://en.wikipedia.org/wiki/Memoization) 
 - [Wikipedia](https://en.wikipedia.org/wiki/Recursion_(computer_science))
 - [JavaScript.info](https://javascript.info/closure)
