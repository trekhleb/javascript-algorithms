# 正则表达式匹配

## 问题描述

给定输入字符串 `s` 和模式 `p`，实现支持 `.` 和 `*` 的正则表达式匹配规则：
• `.` 匹配任意单个字符
• `*` 匹配零个或多个前导元素

要求完全匹配整个输入字符串（非部分匹配）。

**约束条件**
• `s` 可能为空且仅包含小写字母 `a-z`
• `p` 可能为空且包含小写字母 `a-z`、`.` 或 `*`

## 示例分析

<details>
<summary>展开查看示例</summary>

**示例 1**  
输入：`s = "aa"`, `p = "a"`  
输出：`false`  
解释：模式仅匹配单个 `a`，无法覆盖整个字符串 `aa`

**示例 2**  
输入：`s = "aa"`, `p = "a*"`  
输出：`true`  
解释：`*` 表示前导元素 `a` 重复一次，形成 `aa`

**示例 3**  
输入：`s = "ab"`, `p = ".*"`  
输出：`true`  
解释：`.*` 表示零个或多个任意字符，可匹配任意两个字符

**示例 4**  
输入：`s = "aab"`, `p = "c*a*b"`  
输出：`true`  
解释：`c*` 匹配空，`a*` 匹配两次 `a`，`b` 匹配 `b`

</details>

---

## 核心解法

### 1. 递归法（回溯）

**核心思想**：通过分解模式字符串处理 `*` 的多种可能性：
• **场景 1**：`*` 匹配零次前导字符，跳过模式中的 `x*` 组合
• **场景 2**：`*` 匹配一次或多次，递归缩减输入字符串

```python
class Solution:
    def isMatch(self, s: str, p: str) -> bool:
        if not p:
            return not s

        first_match = bool(s) and p[0] in {s[0], '.'}

        if len(p) >= 2 and p[1] == '*':
            return self.isMatch(s, p[2:]) or (first_match and self.isMatch(s[1:], p))
        else:
            return first_match and self.isMatch(s[1:], p[1:])
```

**复杂度**：最坏时间复杂度 $O(2^{m+n})$（m、n 为字符串长度），空间复杂度 $O(m^2 + n^2)$

---

### 2. 记忆化搜索优化

**优化点**：通过缓存中间结果避免重复计算：

```python
from functools import lru_cache

class Solution:
    @lru_cache(maxsize=None)
    def isMatch(self, s: str, p: str) -> bool:
        if not p: return not s
        first_match = bool(s) and p[0] in {s[0], '.'}

        if len(p) >=2 and p[1] == '*':
            return self.isMatch(s, p[2:]) or (first_match and self.isMatch(s[1:], p))
        else:
            return first_match and self.isMatch(s[1:], p[1:])
```

**复杂度**：时间复杂度优化至 $O(mn)$，空间复杂度 $O(mn)$

---

### 3. 动态规划（DP）

**状态定义**：`dp[i][j]` 表示 `s[0..i)` 与 `p[0..j)` 是否匹配  
**状态转移方程**：

```math
dp[i][j] =
\begin{cases}
dp[i-1][j-1] & \text{if } p[j-1] \neq '*' \text{且匹配成功} \\
dp[i][j-2] \text{（匹配0次）} \quad \lor \quad (dp[i-1][j] \text{且当前字符匹配}) & \text{if } p[j-1] = '*'
\end{cases}
```

**实现代码**：

```java
public boolean isMatch(String s, String p) {
    int m = s.length(), n = p.length();
    boolean[][] dp = new boolean[m+1][n+1];
    dp[0][0] = true;

    // 初始化空模式匹配情况
    for(int j=1; j<=n; j++){
        if(p.charAt(j-1) == '*' && j>=2)
            dp[0][j] = dp[0][j-2];
    }

    for(int i=1; i<=m; i++){
        for(int j=1; j<=n; j++){
            char sc = s.charAt(i-1), pc = p.charAt(j-1);
            if(pc != '*'){
                dp[i][j] = (pc == '.' || pc == sc) && dp[i-1][j-1];
            } else {
                dp[i][j] = dp[i][j-2] ||
                           ((p.charAt(j-2) == '.' || p.charAt(j-2) == sc) && dp[i-1][j]);
            }
        }
    }
    return dp[m][n];
}
```

**复杂度**：时间复杂度 $O(mn)$，空间复杂度 $O(mn)$（可优化至 $O(n)$）

---

## 关键难点解析

1. **`*` 的语义处理**：需同时考虑匹配零次和多次的情况
   • 示例：模式 `a*` 可匹配空字符串、`a`、`aa` 等
2. **`.` 的泛匹配特性**：需在递归/动态规划中特殊处理通配逻辑
3. **边界条件处理**：空字符串与模式的匹配关系（如 `s=""` 和 `p="a*"` 应返回 `true`）

---

## 参考文献

1. [LeetCode 正则表达式匹配算法解析（CSDN）](https://blog.csdn.net/xx_123_1_rj/article/details/130455123)
2. [动态规划解法详解（CSDN）](https://blog.csdn.net/qq_40280096/article/details/100177992)
3. [递归与记忆化搜索优化实践（力扣官方）](https://leetcode.cn/problems/regular-expression-matching/solution/)
4. [正则表达式引擎实现原理（英文原题）](https://leetcode.com/problems/regular-expression-matching/)
