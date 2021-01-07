(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1109:function(t,a,r){"use strict";r.r(a);var s=r(71),n=Object(s.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:"跳表"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#跳表"}},[t._v("#")]),t._v(" 跳表")]),t._v(" "),r("h2",{attrs:{id:"掌握程度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#掌握程度"}},[t._v("#")]),t._v(" 掌握程度")]),t._v(" "),r("ul",[r("li",[t._v("可跳过")])]),t._v(" "),r("h2",{attrs:{id:"概念"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[t._v("#")]),t._v(" 概念")]),t._v(" "),r("p",[t._v("为一个值有序的链表建立多级索引(比如每两个节点提取一个节点到上一级,作为索引层),这种数据结构叫做跳表")]),t._v(" "),r("h2",{attrs:{id:"时间复杂度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度"}},[t._v("#")]),t._v(" 时间复杂度")]),t._v(" "),r("ul",[r("li",[r("p",[t._v("计算高度"),r("br"),t._v("\nn 个节点,每 2 个节点抽取出一个节点作为索引,一级索引的节点个数是 n/2,2 级是 n/4 ,k 级是 n/(2^k);假设索引有 h 级别,最高级有 2 个节点,则 n/(2^h)=2,故 h=log2n-1,算上原始链表,高度为 log2n")])]),t._v(" "),r("li",[r("p",[t._v("计算时间复杂度\n按照当前索引结构,每层最多遍历 3 个节点,故查询一个数据的时间复杂度是 O(mlogn)=O(logn)")])])]),t._v(" "),r("h2",{attrs:{id:"空间复杂度"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#空间复杂度"}},[t._v("#")]),t._v(" 空间复杂度")]),t._v(" "),r("p",[t._v("如果链表有 n 个节点,每 2 个节点抽取出一个节点作为索引,,每级索引节点数为 n/2,n/4,n/8...8.4.2,等比数列求和,为 n-2,所以空间复杂度为 O(n);")]),t._v(" "),r("h2",{attrs:{id:"优化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[t._v("#")]),t._v(" 优化")]),t._v(" "),r("p",[t._v("扩大步长,每三个节点抽出一个索引")])])}),[],!1,null,null,null);a.default=n.exports}}]);