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
    //按index查询(从0开始)
    queryByIndex(index) {
        let cur = this.head.next;
        let sum = 0;
        if (index < 0) return this.head;
        while (cur && sum !== index) {
            cur = cur.next;
            sum++;
        }
        return cur;
    }
    //删
    deleteByValue(value) {
        let pre = this.findPrev(value);
        if (pre) {
            pre.next = pre.next.next;
        }
    }
    //按值删除
    deleteByIndex(index) {
        let pre = this.queryByIndex(index - 1);
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

//test
// const list = new LinkedList();
// list.append('test1');
// list.append('test2');
// list.append('test3');
// list.append('test4');
// list.append('test5');
// console.log(list.reverse0().display());

//约瑟夫问题
//即 n 个人围成一个圈，这 n 个人的编号从 0——(n-1)，
//第一个人（编号为0的人）从 1 开始报数，报数为 m 的人离开，
//再从下一个开始从 1 开始报数，报数为 m 的人离开，依次循环下去，
//直到剩下最后一个人（也可以剩最后两个，少循环一次就是了），
//那么，把最后一个人的编号打印出来。
const josephRing = (n, m) => {
    const list = new LinkedList();
    let v = 0;
    while (v < n) {
        list.append(v);
        v++;
    }
    let cur = list.head.next;
    let sum=0
    while(list.length()>1){
        cur=cur.next.value==='head'?list.head.next:cur.next
        sum++
        if(sum==m){
            console.log('出局：'+cur.value);
            list.deleteByValue(cur.value);

            sum=0
        }
    }

    console.log(list.display());
};
// josephRing(1002, 7);
function countOff(N, M) {
    if (N < 1 || M < 1) {
      return;
    }
    let source=[];
    for(let i=1;i<=N;i++){
      source.push(i);
    }
    // const source = Array(...Array(N)).map((_, i) => i + 1);
    let index = 0;
    while (source.length>1) {// 剩下一人，结束条件
      index = (index + M - 1) % source.length;
      console.log('出局：'+source[index]);
      source.splice(index, 1);
    }
    console.log('剩下：'+source[0])
  }
  countOff(1002, 7)
//   function countOff(num,m){
//     let players=[];
//     for(let i=1;i<=num;i++){
//       players.push(i);
//     }
//     let flag=0;
//     while(players.length>1){// 剩下一人，结束条件
//       let outPlayerNum=0,len=players.length;
//       for(let i=0;i<len;i++){
//         flag++;
//         if(flag===m){
//           flag=0;
//           console.log("出局："+players[i-outPlayerNum]);
//           players.splice(i-outPlayerNum,1);
//           outPlayerNum++;
//         }
//       }
//     }
//     // return players[0];
//     console.log("剩下："+players[0]);
//   }
//   // console.log("剩下："+find(100,5))
//   countOff(41,3)