(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{1071:function(t,s,a){"use strict";a.r(s);var n=a(71),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#队列"}},[t._v("#")]),t._v(" 队列")]),t._v(" "),a("h2",{attrs:{id:"代码实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[t._v("#")]),t._v(" 代码实现")]),t._v(" "),a("ul",[a("li",[t._v("用数组实现一个顺序队列")]),t._v(" "),a("li",[t._v("用链表实现一个链式队列")]),t._v(" "),a("li",[t._v("实现一个循环队列")])]),t._v(" "),a("h2",{attrs:{id:"什么是队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是队列"}},[t._v("#")]),t._v(" 什么是队列？")]),t._v(" "),a("ul",[a("li",[t._v("先进者先出，这就是典型的“队列”结构。")]),t._v(" "),a("li",[t._v("支持两个操作：入队 enqueue()，放一个数据到队尾；出队 dequeue()，从队头取一个元素。")]),t._v(" "),a("li",[t._v("所以，和栈一样，队列也是一种操作受限的线性表。")])]),t._v(" "),a("h2",{attrs:{id:"如何实现队列"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#如何实现队列"}},[t._v("#")]),t._v(" 如何实现队列")]),t._v(" "),a("ul",[a("li",[t._v("队列 API")])]),t._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Queue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("enqueue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//入队")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dequeue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//出队")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("size")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//队列大小")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br")])]),a("ul",[a("li",[t._v("数组实现（顺序队列）")]),t._v(" "),a("li",[t._v("链表实现（链式队列)")]),t._v(" "),a("li",[t._v("循环队列（基于数组)")])]),t._v(" "),a("h2",{attrs:{id:"队列有哪些常见的应用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#队列有哪些常见的应用"}},[t._v("#")]),t._v(" 队列有哪些常见的应用")]),t._v(" "),a("ol",[a("li",[t._v("阻塞队列\n"),a("ul",[a("li",[t._v("在队列的基础上增加阻塞操作，就成了阻塞队列")]),t._v(" "),a("li",[t._v("阻塞队列就是在队列为空的时候，从队头取数据会被阻塞，因为此时还没有数据可取，直到队列中有了数据才能返回；如果队列已经满了，那么插入数据的操作就会被阻塞，直到队列中有空闲位置后再插入数据，然后在返回。")]),t._v(" "),a("li",[t._v("生产者-消费者模型")])])]),t._v(" "),a("li",[t._v("并发队列\n"),a("ul",[a("li",[t._v("在多线程的情况下，会有多个线程同时操作队列，这时就会存在线程安全问题。能够有效解决线程安全问题的队列就称为并发队列。")]),t._v(" "),a("li",[t._v("并发队列简单的实现就是在 enqueue()、dequeue()方法上加锁，但是锁粒度大并发度会比较低，同一时刻仅允许一个存或取操作。")]),t._v(" "),a("li",[t._v("实际上，基于数组的循环队列利用 CAS 原子操作，可以实现非常高效的并发队列。这也是循环队列比链式队列应用更加广泛的原因")])])])]),t._v(" "),a("ul",[a("li",[t._v("CAS 原子操作\n"),a("ul",[a("li",[t._v("原子操作:不可被中断的一个或者一系列操作")]),t._v(" "),a("li",[t._v("CAS 是 Compare And Set 的缩写，是以一种无锁的方式实现并发控制。在实际情况下，同时操作同一个对象的概率非常小，所以多数加锁操作做的是无用功，CAS 以一种乐观锁的方式实现并发控制。")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);