//链表节点
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
//循环链表
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

//test
const list = new LRUCache(5);
list.append('test1');
list.append('test2');
list.append('test3');
list.append('test4');
list.append('test5');
list.set('test6')
list.set('test12')
console.log(list.display());
