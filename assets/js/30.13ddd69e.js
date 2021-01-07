(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{1066:function(s,a,t){"use strict";t.r(a);var n=t(71),r=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#树"}},[s._v("#")]),s._v(" 树")]),s._v(" "),t("h2",{attrs:{id:"掌握程度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#掌握程度"}},[s._v("#")]),s._v(" 掌握程度")]),s._v(" "),t("ul",[t("li",[s._v("二叉树\n"),t("ul",[t("li",[s._v("能代码实现二叉树的三种遍历算法,按层遍历,求高度等经典二叉树题目")])])])]),s._v(" "),t("h2",{attrs:{id:"代码实现"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#代码实现"}},[s._v("#")]),s._v(" 代码实现")]),s._v(" "),t("ul",[t("li",[s._v("实现一个二叉查找树,支持插入,删除,查找操作")]),s._v(" "),t("li",[s._v("实现查找二叉树中某个节点的后继,前驱结点")]),s._v(" "),t("li",[s._v("实现二叉树前中后序及层次遍历")])]),s._v(" "),t("h2",{attrs:{id:"常用概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#常用概念"}},[s._v("#")]),s._v(" 常用概念")]),s._v(" "),t("ul",[t("li",[s._v("节点:树中的每个元素称为节点")]),s._v(" "),t("li",[s._v("父子关系:相邻节点的连线")]),s._v(" "),t("li",[s._v("根节点:没有父节点的节点")]),s._v(" "),t("li",[s._v("叶子节点:没有子节点的节点")]),s._v(" "),t("li",[s._v("兄弟节点:具有相同父节点的多个节点")]),s._v(" "),t("li",[s._v("节点高度:节点到叶子节点的最长路径包含的边数")]),s._v(" "),t("li",[s._v("深度:根节点到节点的路径所包含的边数")]),s._v(" "),t("li",[s._v("层数:节点的深度+1")]),s._v(" "),t("li",[s._v("树的高度:根节点的高度/任一节点深度+高度")])]),s._v(" "),t("h2",{attrs:{id:"二叉树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二叉树"}},[s._v("#")]),s._v(" 二叉树")]),s._v(" "),t("h3",{attrs:{id:"概念"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),t("ul",[t("li",[s._v("二叉树:每个节点最多只有两个子节点的树")]),s._v(" "),t("li",[s._v("满二叉树:除了叶子节点,每个节点都有左右两个子节点的二叉树")]),s._v(" "),t("li",[s._v("完全二叉树:叶子节点都在最下两层,最后一层叶子节点都为左节点,且除了最后一层其它层为满二叉树")])]),s._v(" "),t("h3",{attrs:{id:"存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#存储"}},[s._v("#")]),s._v(" 存储")]),s._v(" "),t("h4",{attrs:{id:"链式存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#链式存储"}},[s._v("#")]),s._v(" 链式存储")]),s._v(" "),t("ul",[t("li",[s._v("每个节点由三个字段组成,数据以及分别指向左右子节点的指针")])]),s._v(" "),t("h4",{attrs:{id:"数组存储"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#数组存储"}},[s._v("#")]),s._v(" 数组存储")]),s._v(" "),t("ul",[t("li",[s._v("根节点存储在下标为 1 的位置,左子节点为 2,右子节点为 3,即,节点下标为 i,其左子节点下标为 2i,右子节点下标为 2i+1,父节点为 i/2")])]),s._v(" "),t("h3",{attrs:{id:"遍历"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#遍历"}},[s._v("#")]),s._v(" 遍历")]),s._v(" "),t("h4",{attrs:{id:"前序遍历"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前序遍历"}},[s._v("#")]),s._v(" 前序遍历")]),s._v(" "),t("ul",[t("li",[s._v("先遍历本身,再遍历左子树,最后遍历右子树")]),s._v(" "),t("li",[s._v("递推公式")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("preOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("handle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("preOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("preOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("实现")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//递归实现")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//迭代实现1-栈")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//迭代实现 2-先左")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h4",{attrs:{id:"中序遍历"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#中序遍历"}},[s._v("#")]),s._v(" 中序遍历")]),s._v(" "),t("ul",[t("li",[s._v("先遍历左子树,再遍历本身,最后遍历右子树")]),s._v(" "),t("li",[s._v("递推公式")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("inOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("inOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("handle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("preOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("ul",[t("li",[s._v("实现")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//递归")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//迭代,左子树")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h4",{attrs:{id:"后序遍历"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#后序遍历"}},[s._v("#")]),s._v(" 后序遍历")]),s._v(" "),t("ul",[t("li",[s._v("先遍历左子树,再遍历右子树,最后是本身")]),s._v(" "),t("li",[s._v("递推公式")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("postOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("postOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("left"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("posteOrder")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("right"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("handle")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("r"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"时间复杂度"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#时间复杂度"}},[s._v("#")]),s._v(" 时间复杂度")]),s._v(" "),t("ul",[t("li",[s._v("每个节点的最多被访问两次,故时间复杂度是 O(n)")])]),s._v(" "),t("h2",{attrs:{id:"二叉搜索树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#二叉搜索树"}},[s._v("#")]),s._v(" 二叉搜索树")]),s._v(" "),t("h3",{attrs:{id:"概念-2"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念-2"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),t("p",[s._v("树中的任意一个节点,其左子树中的每个节点的值都小于这个节点的值,而右子树节点的值都大于这个节点的值")]),s._v(" "),t("h3",{attrs:{id:"特点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[s._v("#")]),s._v(" 特点")]),s._v(" "),t("p",[s._v("支持动态数据集合的快速插入,删除,查找操作")]),s._v(" "),t("h3",{attrs:{id:"操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#操作"}},[s._v("#")]),s._v(" 操作")]),s._v(" "),t("ul",[t("li",[s._v("查找")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code")]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"})]),t("ul",[t("li",[s._v("插入")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code")]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"})]),t("ul",[t("li",[s._v("删除")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//注意三种情况")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//注意删除后的平衡因子")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("ul",[t("li",[s._v("查找最大节点和最小节点")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code")]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"})]),t("ul",[t("li",[s._v("查找前驱结点和后继节点")])]),s._v(" "),t("div",{staticClass:"language-js line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-js"}},[t("code")]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"})]),t("h2",{attrs:{id:"红黑树"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#红黑树"}},[s._v("#")]),s._v(" 红黑树")]),s._v(" "),t("h3",{attrs:{id:"概念-3"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概念-3"}},[s._v("#")]),s._v(" 概念")]),s._v(" "),t("ul",[t("li",[s._v("根节点是黑色的")]),s._v(" "),t("li",[s._v("每个叶子节点都是黑色的空节点(叶子节点不存储数据)")]),s._v(" "),t("li",[s._v("任何相邻的节点都不能同为红色(指同一路径上的节点)")]),s._v(" "),t("li",[s._v("每个节点,从该节点到达其可达叶子节点的所有路径,都包含相同的黑色节点")])]),s._v(" "),t("h4",{attrs:{id:"演变"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#演变"}},[s._v("#")]),s._v(" 演变")]),s._v(" "),t("ul",[t("li",[s._v("起源为二叉查找树,但容易退化为链表")]),s._v(" "),t("li",[s._v("产生 2-3 树\n"),t("ul",[t("li",[s._v("定义:\n"),t("ul",[t("li",[s._v("二叉查找树的变种,有 2-,3-两种节点")]),s._v(" "),t("li",[s._v("2-节点为普通节点,即包含一个元素,两条子连接")]),s._v(" "),t("li",[s._v("3-节点是包含 2 个元素和 3 条连接")])])]),s._v(" "),t("li",[s._v("构造\n"),t("ul",[t("li",[s._v("值插入 2-节点,2-节点扩充为 3-节点")]),s._v(" "),t("li",[s._v("插入 3-节点\n"),t("ul",[t("li",[s._v("该节点为根节点,将其扩充为 4-节点,然后分解为一课二叉树")]),s._v(" "),t("li",[s._v("3-节点有一个 2-节点的父节点,将其扩充为 4-节点,然后分解,将新树的父节点融入原父节点生成 3-节点")]),s._v(" "),t("li",[s._v("3-节点有一个 3-父节点,3-节点扩充为 4-节点,分解,新树节点融入原父节点变成 4-节点,父节点分解,行程新的二叉树,如果父节点为根节点,则再加一层")])])])])]),s._v(" "),t("li",[s._v("优点:保持平衡,性能良好")]),s._v(" "),t("li",[s._v("缺点:代码复杂,处理情况多,同时维护两种不同的节点")])])]),s._v(" "),t("li",[s._v("产生红黑树\n"),t("ul",[t("li",[s._v("红黑树中,所有节点都是 2-节点,为了体现出 3-节点,将 3-节点的两个元素用左斜红斜线连接,即连接了两个 2-节点来表示一个 3-节点")]),s._v(" "),t("li",[s._v("该红色斜线指向的节点为红色节点")])])])])])}),[],!1,null,null,null);a.default=r.exports}}]);