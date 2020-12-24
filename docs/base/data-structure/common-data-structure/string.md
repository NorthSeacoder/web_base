# 字符串匹配算法

-   基础概念
    -   在字符串 A 中查找字符串 B，那字符串 A 就是主串，字符串 B 就是模式串

## 掌握程度

-   能实践 BF 算法
-   看懂 RK 算法
-   其余了解

## 代码实现

-   实现朴素的字符串匹配算法
-   实现一个字符集，只包含 a ～ z 这 26 个英文字母的 Trie 树

## BF 算法(暴力|朴素匹配算法)

### 原理

-   在主串中,从 0 开始逐位匹配

## RK 算法

### 原理

-   我们通过哈希算法对主串中的 n-m+1 个子串分别求哈希值，然后逐个与模式串的哈希值比较大小
-   n-m+1 :对比的次数

## BM 算法

### 原理

-   坏字符(BC)
    -   模式串移动距离为坏字符对应下标-坏字符下标(不存在则为-1,多个则为最后一个)
-   好后缀(GS)

## KMP 算法

跟 bm 都需要后期再过一遍....

## Trie 树(字典树)

### 原理

-   Trie 树的本质,就是利用字符串之间的公共前缀,将除服的前缀合并在一起

### 实现

```js
class TrieNode {
    constructor(data) {
        this.children = new Array(26);
        this.data = data;
        this.isEndingChar = false;
    }
}
class Trie {
    //往 Trie 中插入一个字符串
    insert(string) {}
    //在 Trie 中查找一个字符串
    find(string) {}
}
```

## AC自动机

### 原理
- 在 Trie 的基础上加了 KMP 的 next 数组
