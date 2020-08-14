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
    append(){}
    //删
    delete(){}
    //改
    update(){}
    //查
    query(){}
    //获取所有
    display() {
        const res = [];
        let cur = this.head;
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
list.insert('test5-1','test5')
console.log(list.display());
