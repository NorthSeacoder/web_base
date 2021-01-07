(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{1107:function(v,_,a){"use strict";a.r(_);var t=a(71),l=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"散列表-哈希表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#散列表-哈希表"}},[v._v("#")]),v._v(" 散列表(哈希表)")]),v._v(" "),a("h2",{attrs:{id:"掌握程度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#掌握程度"}},[v._v("#")]),v._v(" 掌握程度")]),v._v(" "),a("ul",[a("li",[v._v("代码实现一个拉链法解决冲突的散列表")])]),v._v(" "),a("h2",{attrs:{id:"代码实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[v._v("#")]),v._v(" 代码实现")]),v._v(" "),a("ul",[a("li",[v._v("同上")]),v._v(" "),a("li",[v._v("实现一个 LRU 缓存淘汰算法")])]),v._v(" "),a("h2",{attrs:{id:"概念"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[v._v("#")]),v._v(" 概念")]),v._v(" "),a("ul",[a("li",[v._v("散列表来源于数组,借助散列函数对数组这种数据结构进行扩展,利用的是数组支持按照下标随机访问元素时间复杂度是 O(1)的特性")]),v._v(" "),a("li",[v._v("用散列函数将数据的 key 值映射为下标,然后将数据存储再数组中对应下标的位置")])]),v._v(" "),a("h2",{attrs:{id:"散列函数的基本要求"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#散列函数的基本要求"}},[v._v("#")]),v._v(" 散列函数的基本要求")]),v._v(" "),a("ul",[a("li",[v._v("散列函数计算得到的散列值是一个非负整数(用作数组下标)")]),v._v(" "),a("li",[v._v("若 key1===key2.则 hash(key1)===hash(key2)")]),v._v(" "),a("li",[v._v("若 key1!==key2.则 hash(key1)!==hash(key2)")])]),v._v(" "),a("h3",{attrs:{id:"原则"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原则"}},[v._v("#")]),v._v(" 原则")]),v._v(" "),a("ul",[a("li",[v._v("尽可能让散列后的值随机且均匀分布,这样会减少散列冲突")]),v._v(" "),a("li",[v._v("散列函数设计不能太过复杂,防止损耗时间")]),v._v(" "),a("li",[v._v("常见方法:直接寻址,平方取中,折叠,随机数")])]),v._v(" "),a("h2",{attrs:{id:"散列冲突的解决方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#散列冲突的解决方式"}},[v._v("#")]),v._v(" 散列冲突的解决方式")]),v._v(" "),a("ul",[a("li",[v._v("开放寻址法\n"),a("ul",[a("li",[v._v("核心思想:如果出现散列冲突,就重新探测一个空闲位置,将其插入")]),v._v(" "),a("li",[v._v("常见方式:\n"),a("ul",[a("li",[v._v("线性探测:插入时如果位置已经被占用,则从当前位置依次向后查找")]),v._v(" "),a("li",[v._v("二次探测:线性探测每次步长为 1,二次探测步长为其平方")]),v._v(" "),a("li",[v._v("双重散列:使用一组散列函数,直到找到空闲位置位置")])])]),v._v(" "),a("li",[v._v("优点:\n"),a("ul",[a("li",[v._v("数组存储在数组中,可以有效利用 cpu 缓存")]),v._v(" "),a("li",[v._v("易序列化")])])]),v._v(" "),a("li",[v._v("缺点\n"),a("ul",[a("li",[v._v("删除麻烦")]),v._v(" "),a("li",[v._v("冲突时的代价更高")])])]),v._v(" "),a("li",[v._v("应用:更适合数据量小,装载因子小")])])]),v._v(" "),a("li",[v._v("链表法\n"),a("ul",[a("li",[v._v("核心思想:散列表中,每个槽位对应一条链表,,所有散列表值相同的元素都放到相同槽位的链表中")]),v._v(" "),a("li",[v._v("优点:\n"),a("ul",[a("li",[v._v("更灵活,支持更多的优化策略")])])]),v._v(" "),a("li",[v._v("缺点:\n"),a("ul",[a("li",[v._v("更加消耗内存,对 cpu 缓存也不友好")])])]),v._v(" "),a("li",[v._v("应用:适合大对象,大数据量的散列表")])])])]),v._v(" "),a("h2",{attrs:{id:"优化-lru-缓存淘汰算法-链表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化-lru-缓存淘汰算法-链表"}},[v._v("#")]),v._v(" 优化 LRU 缓存淘汰算法(链表)")])])}),[],!1,null,null,null);_.default=l.exports}}]);