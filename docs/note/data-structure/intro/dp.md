::: tip
动态规划:将一个问题拆成几个子问题，分别求解这些子问题，即可推断出大问题的解。
:::

## 斐波那契数列
[ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34,.... ]

### 二分递归
```js
const fib = (n) => {
    return n < 2 ? n : fib(n - 1) + fib(n - 2);
};
```
### 线性递归
```js
const fib_line = (n, prev) => {
    if (n === 0) {
        prev.val = 1;
        return 0;
    }
    const prevPrev = {};
    prev.val = fib_line(n - 1, prevPrev);
    return prev.val + prevPrev.val;
};
```
### 记忆法
```js
const cache = {};
const fib_memoization = (n) => {
    if(!cache[n]){
        if(n<2){
            cache[n]=n
        }else{
            cache[n]=fib_memoization(n-1)+fib_memoization(n-2)
        }
    }
    return cache[n]
};
```
### 迭代
```js
const fib = (n) => {
    let f = 1,
        g = 0;
    while (n-- > 0) {
        g = g + f;
        f = g - f;
    }
    return g;
};
```

## 最长公共子序列(lcs)

```js
/**
 * 子序列:由序列中若干字符,按原相对次序构成
 * 最长公共子序列:两个序列公共子序列中的最长者(可能有多个)
 * 'dkiudhbvuhd' 'sfdgiudfgu'
 */

//递归
const string=[]
const lcs = (str1, str2) => {
    const array1=str1.split('');
    const array2=str2.split('');
    
};
```
