//链表节点
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
    }
    //按值查询
    queryByValue(value) {
        let cur = this.head;
        while (cur.next) {
            if (cur.value === value) return cur;
            cur = cur.next;
        }
        return null;
    }
    //按index查询(从0开始,0=>head)
    queryByIndex(index) {
        let cur = this.head;
        for (let i = index; i > 0; i--) {
            if (cur && cur.next) {
                cur = cur.next;
            } else {
                cur = null;
            }
        }
        return cur;
    }
    //获取node个数
    length() {
        let cur = this.head,
            num = 1;
        while (cur.next) {
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
    //展示所有节点
    display() {
        const res = [];
        let cur = this.head;
        while (cur.next) {
            res.push(cur.value);
            cur = cur.next;
        }
        return res.join('=>');
    }
    //按值修改
    updateByValue(value,newValue){
        const target =this.queryByValue(value);
        target.value=newValue
    }
    //按index修改
    updateByIndex(index,newValue){
        const target =this.queryByIndex(index);
        target.value=newValue
    }
    //按值删除
    deleteByValue(value){
        let cur =this.head;
        while(cur.next){
            if(cur.next.value===value){
                cur.next=cur.next.next
            }
        }
    }
}

//test
const list = new LinkedList('head');
list.append('test1');
list.append('test2');
list.append('test3');
list.append('test4');
list.deleteByValue('test1')
console.log(list.display());
