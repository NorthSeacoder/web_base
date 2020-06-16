## 时间复杂度

<center>T(n)=O(&fnof;(n))</center>

::: tip
T(n):算法中所有语句频度之和  
频度:一个语句的频度是指该语句在算法中被重复执行的次数  
O(时间复杂度):T(n)的数量级  
一般取&fnof;(n)中随 n 增长最快的项将其系数设置为 1 作为时间复杂度的度量,例如&fnof;(n)=an<sup>3</sup>+bn<sup>2</sup>+cn+d,其时间复杂度为 O(n<sup>3</sup>)
:::

## 常见时间复杂度

```vue live
<template>
    <div>
        <div id="constant" style="width: 600px;height:400px;"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },

    mounted() {
        const element = document.getElementById('constant');
        this.$getChart({element,label:'O(1)',title:'常量O(n)',func:(x)=>20})
    },
};
</script>
```
::: tip
- 效率最高的算法
- 不含循环,不含分支转向(判断),不含递归
:::

```vue live
<template>
    <div>
        <div id="polylog" style="width: 600px;height:400px;"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },

    mounted() {
        const element = document.getElementById('polylog');
        
        this.$getChart({yAxis:{max:10,min:-10},element,label:'O(log n)',title:'对数O(log n)',func:(x)=>Math.log(x)})
    },
};
</script>
```
::: tip
- 常底数,常数次幂均不影响时间复杂度
:::

```vue live
<template>
    <div>
        <div id="normal" style="width: 600px;height:400px;"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },

    mounted() {
        const element = document.getElementById('normal');
        
        this.$getChart({element,label:'O(n)',title:'线性( n)',func:(x)=>x})
    },
};
</script>
```

```vue live
<template>
    <div>
        <div id="exponential" style="width: 600px;height:400px;"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {};
    },

    mounted() {
        const element = document.getElementById('exponential');
        
        this.$getChart({element,label:'O(2ⁿ)',title:'指数(2ⁿ)',func:(x)=>Math.pow(2,x)})
    },
};
</script>
```
