class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
    // display() {
    //     const res = [];
    //     let cur = this;
    //     while (cur) {
    //         res.push(cur.value);
    //         cur = cur.next;
    //     }
    //     return res.join('=>');
    // }
}
//单链表
class LinkedList {
    constructor() {
        this.head = new Node('head');
    }
    //按值查询
    queryByValue(value) {
        let cur = this.head;
        while (cur && cur.value !== value) {
            cur = cur.next;
        }
        return cur;
    }
    //按index查询(从0开始)
    queryByIndex(index) {
        let cur = this.head.next;
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
        let cur = this.head.next;
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
    appendNode(newNode) {
        let cur = this.head;
        while (cur.next) {
            cur = cur.next;
        }
        cur.next = newNode;
    }
    reverse0() {
        let newList = new LinkedList();
        let pre = null;
        let cur = this.head.next;
        while (cur) {
            // let tem = cur.next;//首先用一个变量缓存原指针的下一个节点
            // cur.next = pre;//然后将原指针的指向反转
            // pre = cur;//赋值给pre指针
            // cur = tem;//最后将缓存的变量赋值给原指针
            [cur.next, pre, cur] = [pre, cur, cur.next];
        }
        newList.appendNode(pre);
        return newList;
    }
    
}

//test
const list = new LinkedList();
list.append('test1');
list.append('test2');
list.append('test3');
list.append('test4');
list.append('test5');
console.log(list.reverse0().display());
