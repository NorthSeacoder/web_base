(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{1074:function(s,a,t){"use strict";t.r(a);var v=t(71),_=Object(v.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图"}},[s._v("#")]),s._v(" 图")]),s._v(" "),t("h2",{attrs:{id:"掌握程度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#掌握程度"}},[s._v("#")]),s._v(" 掌握程度")]),s._v(" "),t("ul",[t("li",[s._v("理解图的三种表示方法(能代码实现)\n"),t("ul",[t("li",[s._v("邻接矩阵")]),s._v(" "),t("li",[s._v("邻接表")]),s._v(" "),t("li",[s._v("逆邻接表")])])]),s._v(" "),t("li",[s._v("能代码实现广度优先、深度优先搜索算法")])]),s._v(" "),t("h2",{attrs:{id:"代码实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[s._v("#")]),s._v(" 代码实现")]),s._v(" "),t("ul",[t("li",[s._v("实现有向图,无向图,有权图,无权图的邻接矩阵和邻接表表示方法")]),s._v(" "),t("li",[s._v("实现图的深度优先搜索,广度优先搜索")])]),s._v(" "),t("h2",{attrs:{id:"图的表示"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#图的表示"}},[s._v("#")]),s._v(" 图的表示")]),s._v(" "),t("h3",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),t("ul",[t("li",[s._v("图和树一样都是非线性表数据结构,图更为复杂")]),s._v(" "),t("li",[s._v("图中的元素称为顶点")]),s._v(" "),t("li",[s._v("顶点可以和任意其他顶点关联,这种关系叫边")]),s._v(" "),t("li",[s._v("顶点边的数量叫顶点的度")]),s._v(" "),t("li",[s._v("图分有向无向两种,有向图的边有方向")]),s._v(" "),t("li",[s._v("有向图的度分出度和入度")]),s._v(" "),t("li",[s._v("有权图:每条边都有权重")])]),s._v(" "),t("h3",{attrs:{id:"存储方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#存储方法"}},[s._v("#")]),s._v(" 存储方法")]),s._v(" "),t("ul",[t("li",[s._v("邻接矩阵\n"),t("ul",[t("li",[s._v("底层依赖一个二维数组,a[i][j]与 a[j][i]表示顶点 i 和顶点 j 的关系,可带方向与权重")]),s._v(" "),t("li",[s._v("优点:简单高效,计算方便")]),s._v(" "),t("li",[s._v("缺点:浪费空间")])])]),s._v(" "),t("li",[s._v("邻接表\n"),t("ul",[t("li",[s._v("类似散列图,每个顶点对应一张链表,记录该顶点连接的顶点,")])])]),s._v(" "),t("li",[s._v("逆连接表\n"),t("ul",[t("li",[s._v("同链接表,对应的是指向该顶点的顶点")])])])]),s._v(" "),t("h2",{attrs:{id:"广度优先搜索-bfs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#广度优先搜索-bfs"}},[s._v("#")]),s._v(" 广度优先搜索(BFS)")]),s._v(" "),t("h3",{attrs:{id:"概念-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念-2"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),t("ul",[t("li",[s._v("先查找离起始顶点最近的,然后是次近的,依次往外搜索\n"),t("ul",[t("li",[s._v("访问顶点 s")]),s._v(" "),t("li",[s._v("依次访问 s 所有尚未访问的邻接顶点")]),s._v(" "),t("li",[s._v("依次访问它们所有尚未访问的邻接顶点")]),s._v(" "),t("li",[s._v("如此反复,直到所有顶点都被访问到")]),s._v(" "),t("li",[s._v("最终舍弃图中所有环路,图转换成了树")]),s._v(" "),t("li",[s._v("其实就是树的层次遍历的推广")])])])]),s._v(" "),t("h3",{attrs:{id:"代码实现-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码实现-2"}},[s._v("#")]),s._v(" 代码实现")]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//bfs")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//考虑连通域")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//求顶点间最短路径(应用)")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"深度优先搜索-dfs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#深度优先搜索-dfs"}},[s._v("#")]),s._v(" 深度优先搜索(DFS)")]),s._v(" "),t("h3",{attrs:{id:"概念-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念-3"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),t("ul",[t("li",[s._v("访问顶点 s,dfs(s)")]),s._v(" "),t("li",[s._v("若 s 有未被访问的邻居,则任取其一 u,递归执行 dfs(u)")]),s._v(" "),t("li",[s._v("若无,返回(回溯)")])])])}),[],!1,null,null,null);a.default=_.exports}}]);