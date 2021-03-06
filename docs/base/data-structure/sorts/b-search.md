# 二分查找

## 概念

- 二分查找针对的是一个有序的数据集合,每次通过跟区间中间的元素对比,将待查找的区间缩小为之前的一般,直到找到目标元素,或者区间缩小为 0

## 时间复杂度

- O(logn)
- 假设数据大小为 n,每次查找后未原来的一般,k次后为 n/2^k,当n/2^k=1 时 ,k 为查找的总次数,时间复杂度为O(k),k=log2n

## 实现

```js
//循环实现

//递归实现

//变形一:查找第一个值等于给定值的元素

//变形二:查找最后一个值等于给定值的元素

//变形三:查找第一个值大于给定值的元素

//变形四:查找第一个值小于给定值的元素

```
### 注意事项

- 循环退出条件是 low<=high
- mid = low+(high-low)>>1
- low=mid-1,high=mid+1

## 局限

- 二分查找一脸顺序表结构,即数组
- 只针对有序数组,因此只能用在插入删除操作不频繁,一次排序多次查找的场景中
- 适用于数据间比较操作比较费时的场景
- 数据量太大也不适合,数组需要连续空间

## 应用

- 循环有序数组