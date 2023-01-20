# Power of two greater than a given Number

We want to calculate the power of two which is greater than a given
number

**Naive solution**

In this case, we need to use a loop.

Let's set `number, power` which are two variables that represente respectively
the number given to the function and the power of two obtained after each iteration.
The variable `power` is initialize to 1 before the loop.
As condition of our loop, we must check out if power is less than number.
If it verified, we continue to run the loop and `power <- power*2` else we break it 
and return the value of the variable power.

For exemple: consider number = 5

```
1. number = 5 and power = 1	(power < number) we continue
2. number = 5 and power = 2 (power < number) we continue
3. number = 5 and power = 4 (power < number) we continue
4. number = 5 and power = 8 (power > number) we do not continue and we return 8
```
This method resolve the probleme but the complexity is great.

**Optimal solution**

The best solution for this problem is to use the logarithme function in basis 2.

Note: log2(number) = ln(number) / ln(2)

This expression return a real number and, if we consider the entire part of this
and adding 1 of it we obtain a number. Assuming that this number is n, then if
we calculate 2 power n we obtain the power of two which is directly greater than
number.

For exemple: consider number = 5

```
	n = E(log2(number = 5)) + 1
	n = E(ln(5) / ln(2)) + 1
	n = E(2.3219...) + 1
	n = 2 + 1
	n = 3

	then 2 power n=3 equals 8
```

#reference
"Logarithme binaire - Wikipédia"  https://fr.m.wikipedia.org/wiki/Logarithme_binaire


