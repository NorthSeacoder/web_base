# 链表

## 什么是链表？

-   和数组一样，链表也是一种线性表。
-   从内存结构来看，链表的内存结构是不连续的内存空间，是将一组零散的内存块串联起来，从而进行数据存储的数据结构。
-   链表中的每一个内存块被称为节点 Node。节点除了存储数据外，还需记录链上下一个节点的地址，即后继指针 next。

## 链表的特点

-   插入、删除数据效率高 O(1)级别（只需更改指针指向即可），随机访问效率低 O(n)级别（需要从链头至链尾进行遍历）。
-   和数组相比，内存空间消耗更大，因为每个存储数据的节点都需要额外的空间存储后继指针。

## 常用链表

### 单链表

-   每个节点只包含一个指针，即后继指针。
-   单链表有两个特殊的节点，即首节点和尾节点。用首节点地址表示整条链表，尾节点的后继指针指向空地址 null。
-   性能特点：插入和删除节点的时间复杂度为 O（1），查找的时间复杂度为 O(n)。

### 循环链表

-   除了尾节点的后继指针指向首节点的地址外均与单链表一致。
-   适用于存储有循环特点的数据，比如约瑟夫问题。

### 双向链表

-   节点除了存储数据外，还有两个指针分别指向前一个节点地址（前驱指针 prev）和下一个节点地址（后继指针 next）。
-   首节点的前驱指针 prev 和尾节点的后继指针均指向空地址。
-   性能特点：
    -   和单链表相比，存储相同的数据，需要消耗更多的存储空间。
    -   插入、删除操作比单链表效率更高 O(1)级别  
        ::: tip
        以删除操作为例，删除操作分为 2 种情况：给定数据值删除对应节点和给定节点地址删除节点。  
        对于前一种情况，单链表和双向链表都需要从头到尾进行遍历从而找到对应节点进行删除，时间复杂度为 O(n)。  
        对于第二种情况，要进行删除操作必须找到前驱节点，单链表需要从头到尾进行遍历直到 p->next = q，时间复杂度为 O(n)，而双向链表可以直接找到前驱节点，时间复杂度为 O(1)。  
        对于一个有序链表，双向链表的按值查询效率要比单链表高一些。因为我们可以记录上次查找的位置 p，每一次查询时，根据要查找的值与 p 的大小关系，决定是往前还是往后查找，所以平均只需要查找一半的数据。
        :::

### 双向循环链表

-   首节点的前驱指针指向尾节点，尾节点的后继指针指向首节点。

## 数组和链表的区别

-   插入、删除和随机访问的时间复杂度

    -   数组：插入、删除的时间复杂度是 O(n)，随机访问的时间复杂度是 O(1)。
    -   链表：插入、删除的时间复杂度是 O(1)，随机访问的时间复杂端是 O(n)。

-   数组缺点
    -   若申请内存空间很大，比如 100M，但若内存空间没有 100M 的连续空间时，则会申请失败，尽管内存可用空间超过 100M。
    -   大小固定，若存储空间不足，需进行扩容，一旦扩容就要进行数据复制，而这时非常费时的。
-   链表缺点
    -   内存空间消耗更大，因为需要额外的空间存储指针信息。
    -   对链表进行频繁的插入和删除操作，会导致频繁的内存申请和释放，容易造成内存碎片，如果是 Java 语言，还可能会造成频繁的 GC（自动垃圾回收器）操作。
-   如何选择
    数组简单易用，在实现上使用连续的内存空间，可以借助 CPU 的缓存机制预读数组中的数据，所以访问效率更高，而链表在内存中并不是连续存储，所以对 CPU 缓存不友好，没办法预读。
    如果代码对内存的使用非常苛刻，那数组就更适合。

::: tip
CPU 在从内存读取数据的时候，会先把读取到的数据加载到 CPU 的缓存中。  
而 CPU 每次从内存读取数据并不是只读取那个特定要访问的地址，而是读取一个数据块并保存到 CPU 缓存中，然后下次访问内存数据的时候就会先从 CPU 缓存开始查找，如果找到就不需要再从内存中取。  
这样就实现了比内存访问速度更快的机制。  
也就是 CPU 缓存存在的意义:为了弥补内存访问速度过慢与 CPU 执行速度快之间的差异而引入。  
对于数组来说，存储空间是连续的，所以在加载某个下标的时候可以把以后的几个下标元素也加载到 CPU 缓存这样执行速度会快于存储空间不连续的链表存储。
:::

## 缓存策略

-   先进先出策略 FIFO(First In，First Out)

-   最少使用策略 LFU（Least Frequently Used）

-   最近最少使用策略 LRU（Least Recently Used)

## 链表代码注意事项

### 理解指针或引用的含义

-   将某个变量（对象）赋值给指针（引用），实际上就是就是将这个变量（对象）的地址赋值给指针（引用）。

### 警惕指针丢失和内存泄漏（单链表）

-   插入节点

```js
//在节点a和节点b之间插入节点x，b是a的下一节点，，p指针指向节点a，则造成指针丢失和内存泄漏
p—>next = x
x—>next = p—>next
//显然这会导致x节点的后继指针指向自身。
//正确写法
x—>next = p—>next
p—>next = x;
```

-   删除节点

```js

//在节点a和节点b之间删除节点b，b是a的下一节点，p指针指向节点a
p—>next = p—>next—>next;

```

### 利用“哨兵”简化实现难度

-   什么是“哨兵”
    链表中的“哨兵”节点是解决边界问题的，不参与业务逻辑。如果我们引入“哨兵”节点，则不管链表是否为空，head 指针都会指向这个“哨兵”节点。我们把这种有“哨兵”节点的链表称为带头链表，相反，没有“哨兵”节点的链表就称为不带头链表。
    本章均为带头链表
-   哨兵的优势
    “哨兵”节点不存储数据，无论链表是否为空，head 指针都会指向它，作为链表的头结点始终存在。这样，插入第一个节点和插入其他节点，删除最后一个节点和删除其他节点都可以统一为相同的代码实现逻辑了。

### 重点留意边界条件处理

经常用来检查链表是否正确的边界 4 个边界条件：

1. 如果链表为空时，代码是否能正常工作？
2. 如果链表只包含一个节点时，代码是否能正常工作？
3. 如果链表只包含两个节点时，代码是否能正常工作？
4. 代码逻辑在处理头尾节点时是否能正常工作？

## 链表实现

## 相关问题(206，141，21，19，876)

### 实现单链表、循环链表、双向链表，支持增删改查

#### 单链表实现

```js
//链表节点
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
//单链表
class LinkedList {
    constructor(value) {
        this.head = new Node(value);
    }
    //按值查询
    queryByValue(value) {
        let cur = this.head;
        while (cur && cur.value !== value) {
            cur = cur.next;
        }
        return cur;
    }
    //按index查询(从0开始,0=>head)
    queryByIndex(index) {
        let cur = this.head;
        let sum = 0;
        while (cur && sum !== index) {
            cur = cur.next;
            sum++;
        }
        // for (let i = index; i > 0; i--) {
        //     if (cur && cur.next) {
        //         cur = cur.next;
        //     } else {
        //         cur = null;
        //     }
        // }
        return cur;
    }
    //获取node个数
    length() {
        let cur = this.head,
            num = 0;
        while (cur) {
            num++;
            cur = cur.next;
        }
        return num;
    }
    //末尾新增
    append(value) {
        const newNode = new Node(value);
        let cur = this.head;

        while (cur.next) {
            cur = cur.next;
        }
        cur.next = newNode;
    }
    //指定元素(值)后插入
    insert(value, target) {
        const newNode = new Node(value);
        const targetNode = this.queryByValue(target);
        if (targetNode) {
            newNode.next = targetNode.next;
            targetNode.next = newNode;
        }
    }
    //展示所有节点
    display() {
        const res = [];
        let cur = this.head;
        while (cur) {
            res.push(cur.value);
            cur = cur.next;
        }
        return res.join('=>');
    }
    //按值修改
    updateByValue(value, newValue) {
        const target = this.queryByValue(value);
        target.value = newValue;
    }
    //按index修改
    updateByIndex(index, newValue) {
        const target = this.queryByIndex(index);
        target.value = newValue;
    }
    //查找前一个
    findPrev(item) {
        let cur = this.head;
        while (cur.next !== null && cur.next.value !== item) {
            cur = cur.next;
        }
        if (cur.next === null) {
            return null;
        }
        return cur;
    }
    //按值删除
    deleteByValue(value) {
        let pre = this.findPrev(value);
        if (pre) {
            pre.next = pre.next.next;
        }
    }
}

//test
const list = new LinkedList('head');
list.append('test1');
list.append('test2');
list.append('test3');
list.append('test4');
console.log(list.display());
```

#### 循环链表实现

```js
//链表节点
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
//循环链表
class LinkedList {
    constructor() {
        this.head = new Node('head');
    }
    //增
    append(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        let cur = this.head;
        while (cur.next && cur.next.value !== 'head') {
            cur = cur.next;
        }
        cur.next = newNode;
    }
    //查找前一个
    findPrev(value) {
        let cur = this.head.next;
        while (cur.next !== null && cur.next.value !== value) {
            cur = cur.next;
        }
        if (cur.next.value === 'head') {
            return null;
        }
        return cur;
    }
    //获取node个数
    length() {
        let cur = this.head,
            num = 0;
        while (cur && cur.next.value !== 'head') {
            num++;
            cur = cur.next;
        }
        return num;
    }
    //删
    deleteByValue(value) {
        let pre = this.findPrev(value);
        if (pre) {
            pre.next = pre.next.next;
        }
    }
    //改
    update(value, newValue) {
        const target = this.queryByValue(value);
        target.value = newValue;
    }
    //查
    queryByValue(value) {
        let cur = this.head.next;
        while (cur && cur.value !== value) {
            cur = cur.next;
        }
        return cur;
    }
    //获取所有
    display() {
        const res = [];
        let cur = this.head.next;
        while (cur && cur.value !== 'head') {
            res.push(cur.value);
            cur = cur.next;
        }
        return res.join('=>');
    }
}
```

#### 双向链表实现

```js
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.pre = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head');
    }
    //增
    append(value) {
        const newNode = new Node(value);
        let cur = this.head;
        while (cur && cur.next) {
            cur = cur.next;
        }
        cur.next = newNode;
        newNode.pre = cur;
    }
    //删
    deleteByValue(value) {
        let cur = this.queryByValue(value);
        cur.pre.next = cur.next;
    }
    //改
    update(value, newValue) {
        const target = this.queryByValue(value);
        target.value = newValue;
    }
    //查
    queryByValue(value) {
        let cur = this.head.next;
        while (cur && cur.value !== value) {
            cur = cur.next;
        }
        return cur;
    }
    //获取所有
    display() {
        const res = [];
        let cur = this.head.next;
        while (cur) {
            res.push(cur.value);
            cur = cur.next;
        }
        return res.join('=>');
    }
}
```

### 实现单链表反转(206)

```js
var reverseList = function(head) {
    let pre = null,
        cur = head;
    while (cur) {
        let tem = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tem;
    }
    return pre;
};
```

### 链表中环的检测(141)

```js
//哈希表
//标记
//双指针
const hasCycle = (head) => {
    if (!head || !head.next) return false;
    let slow = head,
        fast = head;
    while (fast) {
        if (!fast.next) return false;
        slow = slow.next;
        fast = fast.next && fast.next.next;
        if (slow == fast) return true;
    }
    return false;
};
```

### 实现两个有序的链表合并为一个有序链表(21)

```js
const mergeTwoLists = (l1, l2) => {
    if (l1 === null) return l2;
    if (l2 === null) return l1;
    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
};
```

### 删除链表倒数第 n 个点(19)

```js
var removeNthFromEnd = function(head, n) {
    if (!head || !head.next) return null; //空链表或只有一个值,只有一个值的时候,n 只能为 1

    let fast = head,
        slow = head;

    while (n > 0) {
        n--;
        fast = fast.next;
    }

    if (!fast) return head.next;

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }
    //fast = last
    //slow = next to be deleted
    slow.next = slow.next.next;
    return head;
};
```

### 实现求链表的中间结点(876)

```js
var middleNode = function(head) {
    let slow = head,
        fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};
```

### 约瑟夫问题

```js
//循环链表
const josephRing = (n, m) => {
    const list = new LinkedList();
    let v = 0;
    while (v < n) {
        list.append(v);
        v++;
    }
    let cur = list.head.next;
    let sum = 0;
    while (list.length() > 1) {
        cur = cur.next.value === 'head' ? list.head.next : cur.next;
        sum++;
        if (sum == m) {
            console.log('出局：' + cur.value);
            list.deleteByValue(cur.value);

            sum = 0;
        }
    }

    console.log(list.display());
};
josephRing(1002, 7);
```

### 链表实现 LRU 缓存

实现思路:

-   我们维护一个有序单链表，越靠近链表尾部的结点是越早之前访问的。当有一个新的数据被访问时，我们从链表头开始顺序遍历链表。

-   如果此数据之前已经被缓存在链表中了，我们遍历得到这个数据对应的结点，并将其从原来的位置删除，然后再插入到链表的头部。

-   如果此数据没有在缓存链表中，又可以分为两种情况：
    -   如果此时缓存未满，则将此结点直接插入到链表的头部；
    -   如果此时缓存已满，则链表尾结点删除，将新的数据结点插入链表的头部。

```js
//链表节点
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
//单链表
class LRUCache {
    constructor(size = 20) {
        this.head = new Node('head');
        this.size = size;
    }
    //按值查询
    queryByValue(value) {
        let cur = this.head;
        while (cur && cur.value !== value) {
            cur = cur.next;
        }
        return cur;
    }
    //按index查询(从0开始,0=>head)
    queryByIndex(index) {
        let cur = this.head;
        let sum = 0;
        while (cur && sum !== index) {
            cur = cur.next;
            sum++;
        }
        return cur;
    }
    //获取node个数
    length() {
        let cur = this.head.next,
            num = 0;
        while (cur) {
            num++;
            cur = cur.next;
        }
        return num;
    }
    //末尾新增
    append(value) {
        const newNode = new Node(value);
        let cur = this.head;
        while (cur.next) {
            cur = cur.next;
        }
        cur.next = newNode;
    }
    //指定元素(值)后插入
    insertHead(value) {
        const newNode = new Node(value);
        const targetNode = this.head;
        newNode.next = targetNode.next;
        targetNode.next = newNode;
    }
    //展示所有节点
    display() {
        const res = [];
        let cur = this.head.next;
        while (cur) {
            res.push(cur.value);
            cur = cur.next;
        }
        return res.join('=>');
    }
    //查找前一个
    findPrev(item) {
        let cur = this.head;
        while (cur.next !== null && cur.next.value !== item) {
            cur = cur.next;
        }
        if (cur.next === null) {
            return null;
        }
        return cur;
    }
    //按值删除
    deleteByValue(value) {
        let pre = this.findPrev(value);
        if (pre) {
            pre.next = pre.next.next;
        }
    }
    //设置缓存
    set(value) {
        const node = this.queryByValue(value);

        if (node) {
            //如果此数据之前已经被缓存在链表中了，我们遍历得到这个数据对应的结点，并将其从原来的位置删除，然后再插入到链表的头部。
            this.deleteByValue(value);
            this.insertHead(value);
        } else {
            if (this.length() >= this.size) {
                //如果此时缓存已满，则链表尾结点删除，将新的数据结点插入链表的头部。
                const last = this.queryByIndex(this.size);
                this.deleteByValue(last.value);
                this.insertHead(value);
            } else {
                //如果此时缓存未满，则将此结点直接插入到链表的头部；
                this.insertHead(value);
            }
        }
    }
}
```

### 判断一个链表是否为回文链表

```js
const getMiddle = (head) => {
    let slow = head,
        fast = head;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    return slow;
};
const reverse = (head) => {
    let pre = null,
        cur = head;
    while (cur) {
        let tem = cur.next;
        cur.next = pre;
        pre = cur;
        cur = tem;
    }
    return pre;
};
var isPalindrome = function(head) {
    //获取中间节点
    const mid = getMiddle(head);
    //后半链表翻转
    let reverseback = reverse(mid);
    let cur = head;
    //mid 为中间节点,双节点后一个;
    while (reverseback) {
        if (reverseback.val !== cur.val) return false;
        reverseback = reverseback.next;
        cur = cur.next;
    }
    return true;
};
```
