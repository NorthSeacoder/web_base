## 大 O 记号

```vue live
<script>
export default {
    data() {
        return {};
    },
    mounted() {
        const ele = document.getElementById('box');
        const data = [
            {date: '2020/01/01', value: '666'},
            {date: '2020/01/02', value: '888'}
        ];
        this.$autoChart(ele, data);
    }
};
</script>
```
