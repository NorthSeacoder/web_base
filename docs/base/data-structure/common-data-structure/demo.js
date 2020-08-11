//链表节点
class Node {
    constructor(value){
        this.value=value;
        this.next=null
    }
}

class LinkedList {
    constructor(value){
        this.head=new Node(value);
    }
    //末尾新增
    append(value){
        const newNode=new Node(value);
        let cur=this.head;

        while(cur.next){
            cur=cur.next
        }
        cur.next=newNode
    }
    //展示所有节点
    display(){
        const res=[];
        let cur=this.head;
        while(cur.next){
            res.push(cur.value);
            cur=cur.next
        }
        return res.join('=>')
    }
}

//test
const list=new LinkedList('head');
list.append('test1')
list.append('test2')
list.append('test3')
list.append('test4')
console.log(list.display())