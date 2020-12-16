# 归并,快排

## 归并排序

### 概念

-   将数据从中间拆分为两部分,分别排序,再将排序好的两部分拼到一起并排序
-   分治

```js

//递推公式：
merge_sort(p…r) = merge(merge_sort(p…q), merge_sort(q+1…r))

//终止条件：
p >= r 不用再继续分解
```

### 实现

-   伪代码

```js
// 归并排序算法, A是数组，n表示数组大小
merge_sort(A, n) { merge_sort_c(A, 0, n-1)}
// 递归调用函数
merge_sort_c(A, p, r) {
    // 递归终止条件
    if p >= r then return
    // 取p到r之间的中间位置q
    q = (p+r) / 2
    // 分治递归
    merge_sort_c(A, p, q)
    merge_sort_c(A, q+1, r)
    // 将A[p...q]和A[q+1...r]合并为A[p...r]
    merge(A[p...r], A[p...q], A[q+1...r])
}

merge(A[p...r], A[p...q], A[q+1...r]) {
  var i := p，j := q+1，k := 0 // 初始化变量i, j, k
  var tmp := new array[0...r-p] // 申请一个大小跟A[p...r]一样的临时数组
  while i<=q AND j<=r do {
    if A[i] <= A[j] {
      tmp[k++] = A[i++] // i++等于i:=i+1
    } else {
      tmp[k++] = A[j++]
    }
  }

  // 判断哪个子数组中有剩余的数据
  var start := i，end := q
  if j<=r then start := j, end:=r

  // 将剩余的数据拷贝到临时数组tmp
  while start <= end do {
    tmp[k++] = A[start++]
  }

  // 将tmp中的数组拷贝回A[p...r]
  for i:=0 to r-p do {
    A[p+i] = tmp[i]
  }
}
//可以考虑使用哨兵

```

### 稳定性

-   只要保证先处理顺序靠前的数据,即可保证排序稳定

### 时间复杂度

-   计算过程

```

T(a) = T(b) + T(c) + K;

T(1) = C；   n=1时，只需要常量级的执行时间，所以表示为C。
T(n) = 2*T(n/2) + n； n>1


T(n) = 2*T(n/2) + n
     = 2*(2*T(n/4) + n/2) + n = 4*T(n/4) + 2*n
     = 4*(2*T(n/8) + n/4) + 2*n = 8*T(n/8) + 3*n
     = 8*(2*T(n/16) + n/8) + 3*n = 16*T(n/16) + 4*n
     ......
     = 2^k * T(n/2^k) + k * n
     ......
当T(n/2^k)=T(1)时
k=log2n;
即T(n) = 2^log2n +nlog2n;

所以 时间复杂度为 O(nlogn)

```

## 快速排序

### 概念

-   排序数组中下标从 p 到 r 之间的一组数据，我们选择 p 到 r 之间的任意一个数据作为 pivot（分区点）。
-   遍历 p 到 r,小于 pivot 的放到左边，将大于 pivot 的放到右边,此时 pivot 为排序后位置 q
-   递归排序下标从 p 到 q-1 之间的数据和下标从 q+1 到 r 之间的数据

```js

//递推公式：
quick_sort(p…r) = quick_sort(p…q-1) + quick_sort(q+1… r)

//终止条件：
p >= r
```

### 实现

-   伪代码

```js

// 快速排序，A是数组，n表示数组的大小
quick_sort(A, n) {
  quick_sort_c(A, 0, n-1)
}
// 快速排序递归函数，p,r为下标
quick_sort_c(A, p, r) {
  if p >= r then return

  q = partition(A, p, r) // 获取分区点
  quick_sort_c(A, p, q-1)
  quick_sort_c(A, q+1, r)
}
//原地分区
partition(A, p, r) {
  pivot := A[r]
  i := p
  for j := p to r-1 do {
    if A[j] < pivot {
      swap A[i] with A[j]
      i := i+1
    }
  }
  swap A[i] with A[r]
  return i

```

### 稳定性

-   原地,不稳定

### 时间复杂度

-   如果每次分区操作，都能正好把数组分成大小接近相等的两个小区间，O(nlogn).(最好)
-   最差 O(n²)

## 对比

-   归并时间复杂度稳定,非原地,空间复杂度高 O(n);
-   快排平均是 O(nlogn),可以通过合理选择 pivot 来避免最差

## 应用

-O(n) 时间复杂度内求无序数组中的第 K 大元素
