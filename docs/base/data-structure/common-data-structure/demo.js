//链表节点
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = new Node('head');
    }
    //增
    append(value){
        const newNode = new Node(value);
        newNode.next=this.head;
        let cur = this.head;
        while (cur.next&&cur.next.value!=='head') {
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
    //删
    deleteByValue(value){
        let pre = this.findPrev(value);
        if (pre) {
            pre.next = pre.next.next;
        }
    }
    //改
    update(value,newValue){
        const target = this.queryByValue(value);
        target.value = newValue;
    }
    //查
    queryByValue(value){
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
        while (cur&&cur.value!=='head') {
            res.push(cur.value);
            cur = cur.next;
        }
        return res.join('=>');
    }
}

//test
const list = new LinkedList();
list.append('test1');
list.append('test2');
list.append('test3');
list.append('test4');
list.append('test5');
list.update('test1','test11')
console.log(list.display());
