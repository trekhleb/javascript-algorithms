# 回文检查

一个[回文串](https://en.wikipedia.org/wiki/Palindrome)是一个从前访问和从后访问相同的字符串。
这意味着字符串的后半部分与前半部分的翻转相同

## 例子

下面的是回文串 (所以将返回 `TRUE`):

```
- "a"
- "pop"     ->  p + o + p
- "deed"    ->  de + ed
- "kayak"   ->  ka + y + ak
- "racecar" ->  rac + e + car
```

下面的不是回文串 (所以将返回 `FALSE`):

```
- "rad"
- "dodo"
- "polo"
```

## 参考

- [GeeksForGeeks - 检查一个数字是否回文](https://www.geeksforgeeks.org/check-if-a-number-is-palindrome/)