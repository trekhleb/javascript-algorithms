<h1>Extended Euclidean Algorithm </h1>

The standard Euclidean algorithm only calculates the gcd of a and b given 2 integers a and b. The extended Euclidean algorithm takes this one step further. For any 2 integers 
a and b, the extended Euclidean algorithm calculates x and y such that ax + by = gcd(a, b). To perform this, the extended euclidean algorithm makes some slight modifications to the original euclidean algorithm.

The original euclidean algorithm arrived at a = gcd(a,b) and b = 0. Notice that if the original a and b equalled these values, then the solution would merely be x = 1 and y = 0. We can use these 2 values as a starting point for our algorithm. That way, all we would have to do is figure out how x and y change during the transition from (a, b) to (b, a mod b).

Let us say that we have x1 and y1 such that b * x1 + (a mod b) * y1 = gcd(a, b). <br>

Notice that we can substitute a mod b with a - floor(a/b) * b. <br>

Thus, after rearranging the terms, we get gcd(a, b) = a * y1 + b * (x1 - y1 * floor(a / b)). <br>

So after every step, <br>

x = y1 <br>
y = x1 - y1 * floor(a/b). <br>

**We can use this to eventually backtrack and arrive at the desired x and y.**
