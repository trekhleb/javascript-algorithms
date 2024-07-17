# Big-0 Notation Primer

> *O(1) is holy.* `~Hamid Tizhoosh`

The Big-O notation measures the worst-case complexity of an algorithm. In Big-O
notation, n represents the number of inputs. The question asked with Big-O is the
following: “What will happen as n approaches infinity?”

The figure below shows some common Big-O notations:

![Big-0 graph](./assets/big-o-graph.png)

## Constant time (O(1))
O(1) does not change with respect to input space. Hence, O(1) is referred to as being _constant time_.
An exmple of an of an O(1):
```javascript
function exampleConstantFunc(n) {
    return n*n;
}
```

## Linear time (O(n))

O(n) is *linear* time and applies to algorithms that must do *n* operations in the worst-case scenario.
most its just A simple basic loop that within it we perform constant time operations.
An exmple of an of an O(1):
```javascript
function exampleLinear(n) {
    for (var i = 0 ; i < n; i++ ) {
        console.log(i)
    }
}
```

## Logarithmic time O(log(n))

A Logarithmic time function is one in which the time of execution is proportional to the logarithm of the input size. 
Consider the following example:
```javascript
function log(n) {
    for (let i = 1; i > n; i*=2) {
        const result = i;
        console.log(result);  
    }
}
```

We can see that in any given iteration, the value of i = 2i, so in the nth iteration, the value of i= 2n. Also, we know that the value of i is always less than the size of the loop itself (N). 
From that, we can deduce the following result:
2[^n] < N
log(2[^n]) < log(N)
n < log(N)

From the preceding code, we can see that the number of iterations would always be less than the log on the input size. Hence, the worst-case time complexity of such an algorithm would be O(log(n)).
The efficiency of logarithmic time complexities is apparent with large inputs such as a million items.

## Quadratic time(O(n^2))

With quadratic time algorithms, we have now entered the dark side of the time complexity.
As the name suggests, the size of the input quadratically affects the running time of the algorithm. One common example is nested loops:

```javascript
for (int i = 0; i <n; i += c) {
    for (int j = 0; j < n; j += c) {
    // some O(1) expressions
    }
}
```

As you can see from the preceding example, for i = 0, the inner loop runs n times, and the same for i = 1, and i = 2, and so on. The inner loop always runs n times and is not dependent on the value of n, thus making the algorithms time complexity O(n<sup>2</sup>).

## Polynomial time(O(n<sup>n</sup>))

Polynomial time complexity is the running time complexity of algorithms, which runs to the order of n<sup>k</sup>. Quadratic time algorithms are certain types of polynomial time algorithms where k = 2. A very simple example of such an algorithm would be as follows:

```javascript

for (int i = 0; i <n; i += c) {
    for (int j = 0; j < n; j += c) {
        for (int k = 0; k < n; k += c) {
            // some O(1) expressions
        }
    }
}

```
As you can see, this example is just an extension of the example in the quadratic time section. The worst case complexity of this case is O(n<sup>3</sup>).
As you can see, this example is just an extension of the example in the quadratic time
section. The worst case complexity of this case is O(n<sup>3</sup>).

## Rules of Big-O Notation

Let’s represent an algorithm’s complexity as f(n). n represents the number of inputs, f(n)time represents the time needed, and f(n)space represents the space (additional memory) needed for the algorithm. The goal of algorithm analysis is to understand the algorithm’s efficiency by calculating f(n).
However, it can be challenging to calculate f(n). Big-O notation provides some fundamental rules that help developers compute for f(n).

### Coefficient Rule: “Get Rid of Constants”

Let’s first review the coefficient rule. This rule is the easiest rule to understand. It simply requires you to ignore any non-input-size-related constants. Coefficients in Big-O are negligible with large input sizes. Therefore, this is the most important rule of Big-O notations.
> If f(n) is O(g(n)), then kf(n) is O(g(n)), for any constant k > 0.

This means that both 5f(n) and f(n) have the same Big-O notation of O(f(n)).
Here is an example of a code block with a time complexity of O(n):

```javascript
function a(n){
    var count =0;
    for (var i=0;i<n;i++){
        count+=1;
    }
    return count;
}
```
> This block of code has f(n) = n. This is because it adds to count n times. Therefore, this function is O(n) in time complexity:
```javascript
function a(n){
    var count =0;
    for (var i=0;i<5*n;i++){
        count+=1;
    }
    return count;
}
```

This block has f(n) = 5n. This is because it runs from 0 to 5n.
However, the first two examples both have a Big-O notation of O(n). Simply put, this is because if n is close to infinity or another large number, those four additional operations are meaningless. 
It is going to perform it n times. Any constants are negligible in Big-O notation.

### Sum Rule: “Add Big-Os Up”

The sum rule is intuitive to understand; time complexities can be added. Imagine a master algorithm that involves two other algorithms. The Big-O notation of that master algorithm is simply the sum of the other two Big-O notations.
> If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)+g(n) is O(h(n)+p(n)).

It is important to remember to apply the coefficient rule after applying this rule.
The following code block demonstrates a function with two main loops whose time complexities must be considered independently and then summed:

```javascript
function a(n){
    var count =0;
    for (var i=0; i<n; i++){
        count+=1;
    }
    for (var i=0; i<5*n; i++){
        count+=1;
    }
    return count;
}
```

In this example, line 4 has f(n) = n, and line 7 has f(n) = 5n. This results in 6n.
However, when applying the coefficient rule, the final result is O(n) = n.

### Product Rule: “Multiply Big-Os”

The product rule simply states how Big-Os can be multiplied.
> If f(n) is O(h(n)) and g(n) is O(p(n)), then f(n)g(n) is O(h(n)p(n)).
The following code block demonstrates a function with two nested for loops for which the product rule is applied:

```javascript
function (n){
    var count =0;
    for (var i=0; i<n; i++){
        count+=1;
        for (var i=0; i<5*n; i++){
            count+=1;
        }
    }
    return count;
}
```

In this example, f(n) = 5n*n because line 7 runs 5n times for a total of n iterations.
Therefore, this results in a total of 5n<sup>2</sup> operations. Applying the coefficient rule, the result is that O(n)=n<sup>2</sup>

### Polynomial Rule: “Big-O to the Power of k”

The polynomial rule states that polynomial time complexities have a Big-O notation of the same polynomial degree.
Mathematically, it’s as follows:
> If f(n) is a polynomial of degree k, then f(n) is O(n<sup>k</sup>).
The following code block has only one for loop with quadratic time complexity:
```javascript
function a(n){

    var count =0;

    for (var i=0; i<n*n; i++){
        count+=1;
    }
    return count;
}
```

In this example, f(n) = n<sup>2</sup> because line 4 runs n*n iterations.

## Polynomial time complexity classes

Now that we have started this conversation, most of the time complexity types that we have discussed here so far are of the O(n<sup>k</sup>) type, for example, it is a constant time complexity for n = 1, whereas it is quadratic complexity for k = 2.
The concept of polynomial time complexity leads us into a class of problems, which are defined based on the complexity of their solutions. The following are the types of classes:
* P: Any problem that can be solved in polynomial time O(n<sup>k</sup>).
* NP: Any problem that can be verified in polynomial time. There can exist problems (such as sudoku solving) that can be solved in non-deterministic polynomial time. If the solution to these problems can be verified in polynomial time, then the problem is classified as an NP-class problem. NP-class problems are a superset of the P-class problems.
* NP-Complete: Any NP problem that can be reduced as a function of another NP problem in polynomial time can be classified as an NP-Complete problem. This means that if we know the solution to a certain NP problem, then a solution to another NP problem can be derived in polynomial time.
* NP-Hard: A problem can be classified as an NP-Hard problem (H) if there exists an NP-Complete problem (C) that can be reduced to H in polynomial time.

> In a majority of the real-world scenarios, we will encounter a lot of P and NP problems, a classic example of NP-class problem is Traveling Salesman, where a salesman wants to visit n number of cities to start and end his trip from his house. With a limited amount of gasoline and an upper limit on the total miles that can be driven, can the salesman visit all the cities without running out of gas?

## Recursion and additive complexity

Until now, we have seen some examples that are pretty straightforward: they all have a single loop or nested loops. However, a lot of times, there will be scenarios in which we will have to handle multiple loops/function calls/branches originating from the same algorithm.
Let us see an example of how we can calculate the complexity in that case?

1. When we have subsequent loops/function calls, we will need to calculate the individual complexity of each step and then add them to get the overall complexity, as follows:
```javascript
 function xyz() {
    abc(); // O(n) operation
    pqr(); // O(log(n)) operation
 }
 ```

The collective complexity of this code would be the summation of the complexity of both the sections. So, in this case, the overall complexity would be O(n + log n), which asymptotically will be O(n).

2. When we have branches in our function with varying time complexity, depending on what type of runtime complexity we are talking about, we will need to pick the correct choice:
```javascript
 function xyz() {
    if (someCondition) {
        abc(); // O(n) operation
    } else {
        pqr(); // O(log(n)) operation
    }
 }
 ```
In this case, the worst case complexity will be decided by whatever is worst of the two branches, which would be O(n), but the best case complexity would be O(log(n)).

3. Recursive algorithms are a little tricky compared to their non-recursive counterparts, since not only do we need to determine what the complexity of our algorithm is, we also need to keep in mind how many times recursion would get triggered because that would contribute toward the overall complexity of the algorithm as shown in the following code snippet:
```javascript
 function rec1(array) {
    // O(1) operations
    if (array.length === 0) return;
    array.pop();
    return rec1(array);
 }
 ```

Although our method only performs some O(1) operations, it constantly changes the input and calls itself until the size of the input array is zero. So, our method ends up executing n times, making the overall time complexity of O(n).
