# 位运算

_Read this in other languages:_
[français](README.fr-FR.md),
[english](README.md)

#### Get Bit

该方法向右移动目标位到最右边，即位数组的第0个位置上。然后在该数上与形如 `0001`的二进制形式的数进行`AND`操作。这会清理掉除了目标位的所有其它位的数据。如果目标位是1，那么结果就是`1`，反之，结果是`0`;

> 查看[getBit.js](getBit.js)了解更多细节。

#### Set Bit

该方法把`1`向左移动了`bitPosition`位，生成了一个二进制形如`00100`的值。然后我们拿该值与目标数字进行`OR`操作，就能把目标位设置位`1`而不影响其它位。

> 查看[setBit.js](setBit.js)了解更多细节。

#### Clear Bit

该方法把`1`向左移动了`bitPosition`位，生成了一个二进制形如`00100`的值。然后反转每一位的数字，得到一个二进制形如`11011`的值。接着与目标值进行`AND`操作，就能清除掉目标位的值。

> 查看[clearBit.js](clearBit.js)了解更多细节。

#### Update Bit

该方法组合了“Clear Bit”和“Set Bit”

> 查看[updateBit.js](updateBit.js)了解更多细节。

#### isEven

该方法检测传入的number是否是偶数。它的实现基于奇数的最右边的位永远是`1`这个事实。

```text
Number: 5 = 0b0101
isEven: false

Number: 4 = 0b0100
isEven: true
```

> 查看[isEven.js](isEven.js)了解更多细节。

#### isPositive

该方法检测传入的number是否是正数。它的实现基于正数最左边的位永远是`0`这个事实。然而如果传入的number是0或者-0，它也应该返回false。

```text
Number: 1 = 0b0001
isPositive: true

Number: -1 = -0b0001
isPositive: false
```

> 查看[isPositive.js](isPositive.js)了解更多细节。

#### Multiply By Two

该方法将原始数字向左移动一位。因此所有位都将乘以2，因此数字本身也将乘以2。

```
Before the shift
Number: 0b0101 = 5
Powers of two: 0 + 2^2 + 0 + 2^0

After the shift
Number: 0b1010 = 10
Powers of two: 2^3 + 0 + 2^1 + 0
```

> 查看[multiplyByTwo.js](multiplyByTwo.js)了解更多细节。

#### Divide By Two

该方法将原始数字向右移动一位。因此所有位都将除以2，因此数字本身也将除以2,且不会产生余数。

```
Before the shift
Number: 0b0101 = 5
Powers of two: 0 + 2^2 + 0 + 2^0

After the shift
Number: 0b0010 = 2
Powers of two: 0 + 0 + 2^1 + 0
```

> 查看[divideByTwo.js](divideByTwo.js)了解更多细节。

#### Switch Sign

该方法将正数变成负数，反之亦然。为了做到这一点，它使用了“二进制补码”的方法，即取反所有位然后加1.

```
1101 -3
1110 -2
1111 -1
0000  0
0001  1
0010  2
0011  3
```

> 查看[switchSign.js](switchSign.js)了解更多细节。

#### Multiply Two Signed Numbers

该方法使用位运算符计算两个有符号数的乘积。实现基于以下事实：

```text
a * b 可以被改写成如下形式:
  0                     a为0，b为0，或者a，b都为0
  2a * (b/2)            b是偶数
  2a * (b - 1)/2 + a    b是奇数，正数
  2a * (b + 1)/2 - a    b是奇数，负数
```

这样转换的优势在于，递归的每一步，递归的操作数的值都减少了一半。因此，运行时的时间复杂度为`O(log(b))`,其中b是在每个递归步骤上减少为一半的操作数。


> 查看[multiply.js](multiply.js)了解更多细节。

#### Multiply Two Unsigned Numbers

该方法使用位运算符计算两个无符号数的乘积。实现基于“每个数字都可以表示为一系列2的幂的和”。

逐位乘法的主要思想是，每个数字都可以拆分为两个乘方的和：

比如：

```text
19 = 2^4 + 2^1 + 2^0
```

然后`19`乘`x`就等价于：

```text
x * 19 = x * 2^4 + x * 2^1 + x * 2^0
```

接着我们应该意识到`x*2^4`是等价于`x`向左移动`4`位（`x << 4`）的;

> 查看[multiplyUnsigned.js](multiplyUnsigned.js)了解更多细节。

#### Count Set Bits

该方法使用位运算符对一个数字里设置为`1`的位进行记数。主要方法是，把数字每次向右移动1位，然后使用`&`操作符取出最右边一位的值，`1`则记数加1，`0`则不计。

```text
Number: 5 = 0b0101
Count of set bits = 2
```

> 查看[countSetBits.js](countSetBits.js)了解更多细节。

#### Count Bits to Flip One Number to Another


该方法输出把一个数字转换为另一个数字所需要转换的位数。这利用了以下特性：当数字进行`XOR`异或运算时，结果将是不同位数的数量(即异或的结果中所有被设置为1的位的数量)。

```
5 = 0b0101
1 = 0b0001
Count of Bits to be Flipped: 1
```

> 查看[bitsDiff.js](bitsDiff.js)了解更多细节。

#### Count Bits of a Number

为了计算数字的有效位数，我们需要把`1`每次向左移动一位，然后检查产生的值是否大于输入的数字。

```
5 = 0b0101
有效位数: 3
当我们把1向左移动4位的时候，会大于5.
```

> 查看[bitLength.js](bitLength.js)了解更多细节。

#### Is Power of Two

该方法检测数字是否可以表示为2的幂。它使用了以下特性，我们定义`powerNumber`是可以写成2的幂的形式的数(2,4,8,16 etc.)。然后我们会把`powerNumber`和`powerNumber - 1`进行`&`操作，它会返回`0`(如果该数字可以表示为2的幂)。

```
Number: 4 = 0b0100
Number: 3 = (4 - 1) = 0b0011
4 & 3 = 0b0100 & 0b0011 = 0b0000 <-- Equal to zero, is power of two.

Number: 10 = 0b01010
Number: 9 = (10 - 1) = 0b01001
10 & 9 = 0b01010 & 0b01001 = 0b01000 <-- Not equal to zero, not a power of two.
```

> 查看[isPowerOfTwo.js](isPowerOfTwo.js)了解更多细节。

#### Full Adder

该方法使用位运算符计算两个数的和。

它实现了[完整的加法器](<https://en.wikipedia.org/wiki/Adder_(electronics)>)电子电路逻辑，以补码的形式计算两个32位数字的和。它使用布尔逻辑来覆盖了两个位相加的所有情况：从前一位相加的时候，产没产生进位“carry bit”。

Legend:

- `A`: 数字 `A`
- `B`: 数字 `B`
- `ai`: 数字`A`以二进制表示时的位下标
- `bi`: 数字`B`以二进制表示时的位下标
- `carryIn`: 本次计算产生的进位
- `carryOut`: 带入此次计算的进位
- `bitSum`: `ai`, `bi`, 和 `carryIn` 的和
- `resultBin`: 当前计算的结果（二进制形式）
- `resultDec`: 当前计算的结果（十进制形式）

```
A = 3: 011
B = 6: 110
┌──────┬────┬────┬─────────┬──────────┬─────────┬───────────┬───────────┐
│  bit │ ai │ bi │ carryIn │ carryOut │  bitSum │ resultBin │ resultDec │
├──────┼────┼────┼─────────┼──────────┼─────────┼───────────┼───────────┤
│   0  │ 1  │ 0  │    0    │    0     │     1   │       1   │     1     │
│   1  │ 1  │ 1  │    0    │    1     │     0   │      01   │     1     │
│   2  │ 0  │ 1  │    1    │    1     │     0   │     001   │     1     │
│   3  │ 0  │ 0  │    1    │    0     │     1   │    1001   │     9     │
└──────┴────┴────┴─────────┴──────────┴─────────┴───────────┴───────────┘
```

> 查看[fullAdder.js](fullAdder.js)了解更多细节。  
> 查看[Full Adder on YouTube](https://www.youtube.com/watch?v=wvJc9CZcvBc&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8).

## References

- [Bit Manipulation on YouTube](https://www.youtube.com/watch?v=NLKQEOgBAnw&t=0s&index=28&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [Negative Numbers in binary on YouTube](https://www.youtube.com/watch?v=4qH4unVtJkE&t=0s&index=30&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
- [Bit Hacks on stanford.edu](https://graphics.stanford.edu/~seander/bithacks.html)
