# javascript-iterators

> Author: [Angelos Chalaris](https://twitter.com/chalarangelo)
> From: [javascript-iterators](https://www.30secondsofcode.org/blog/s/javascript-iterators)

## What are JavaScript Iterators and where can I use them?

> JavaScript iterators were introduced in ES6 and they are used to loop over a sequence of values, usually some sort of collection. By definition, an iterator must implement a next() function, that returns an object in the form of { value, done } where value is the next value in the iteration sequence and done is a boolean determining if the sequence has already been consumed.

JavaScript 迭代器是在 ES6 中引入，并用于循环一系列值（通常是某种集合）。根据定义，迭代器必须实现 next（）函数，该函数以{value，done}的形式返回对象，其中 value 是迭代序列中的下一个值，done 是确定序列是否已被使用的布尔值(遍历是否结束，即是否还有必要再一次调用 next 方法)。

> A very simple iterator with practical use in a real-world project could be as follows:

一个实际项目中应用的非常简单的迭代器：

```js
class LinkedList {
    constructor(data) {
        this.data = data;
    }

    firstItem() {
        return this.data.find((i) => i.head);
    }

    findById(id) {
        return this.data.find((i) => i.id === id);
    }

    [Symbol.iterator]() {
        let cur = {next: this.firstItem().id};//开始时指向第一个位置，第一次调用next才会返回第一个值
        return {
            next: () => {
                cur = this.findById(cur.next);
                if (cur) {
                    return {value: cur.value};
                }
                return {done: true};
            },
        };
    }
}
const myList = LinkedList([
    {id: 'a10', value: 'First', next: 'a13', head: true},
    {id: 'a11', value: 'Last', next: null, head: false},
    {id: 'a12', value: 'Third', next: 'a11', head: false},
    {id: 'a13', value: 'Second', next: 'a12', head: false},
]);
for(let item of myList) {
  console.log(item);    // 'First', 'Second', 'Third', 'Last'
}
const itr=myList[Symbol.iterator]()
console.log(itr.next())//{ value: 'First' }

```

> In the above example, we implement a LinkedList data structure, that internally uses a data array where each item has a value, alongside some implementation-specific properties used to determine its position in the sequence. Objects constructed from this class are not iterable by default, so we define an iterator via the use of Symbol.iterator and set it up so that the returned sequence is in order based on the internal implementation of the class, while the returned items only return their value.

在上面的示例中，我们实现了一个LinkedList数据结构，该结构在内部使用一个data数组，其中每个项目都有一个值，以及一些用于确定其在序列中位置的特定属性。在默认情况下，这种对象并不能被for of 迭代，所以我们通过Symbol.iterator实现了一个迭代器，并设置为迭代时按照特定的顺序以及返回时只返回其值

> On a related note, iterators are just functions, meaning they can be called like any other function (e.g. to delegate the iteration to an existing iterator), while also not being restricted to the Symbol.iterator name, allowing us to define multiple iterators for the same object. Here's an example of these concepts at play:

在相关说明中，迭代器只是函数，这意味着它们可以像其他函数一样被调用（例如，给迭代赋值一个现有的迭代器），同时也不受限于Symbol.iterator名称，我们可以为同一对象定义多个迭代器：

```js
class SpecialList {
  constructor(data) {
    this.data = data;
  }
    //默认迭代器-引用data数组的迭代器
  [Symbol.iterator]() {
    return this.data[Symbol.iterator]();
  }
//具名迭代器
  values() {
    return this.data
      .filter(i => i.complete)
      .map(i => i.value)
      [Symbol.iterator]();
  }
}

const myList = new SpecialList([
  {complete: true, value: 'Lorem ipsum'},
  {complete: true, value: 'dolor sit amet'},
  {complete: false},
  {complete: true, value: 'adipiscing elit'}
]);

for(let item of myList) {
  console.log(item);  // The exact data passed to the SpecialList constructor above
}

for(let item of myList.values()) {
  console.log(item);  // 'Lorem ipsum', 'dolor sit amet', 'adipiscing elit'
}
```

>In this example, we use the native array iterator of the data object to make our SpecialList iterable, returning the exact values of the data array. Meanwhile, we also define a values method, which is an iterator itself, using Array.prototype.filter() and Array.prototype.map() on the data array, then finally returning the Symbol.iterator of the result, allowing iteration only over non-empty objects in the sequence and returning just the value for each one.
在这个示例中，我们使用data对象自身的数组迭代器令SpecialList支持迭代，返回了了数组的值。同时，我们也通过数组的map和filter方法定义了一个values函数（本身也是个迭代器），返回值是结果数组的迭代器函数，迭代结果是序列中complete为true并且只返回value