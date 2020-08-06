<template>
    <div id="mindGraph">
    </div>
</template>

<script>
export default {
    data() {
        return {
            thisPages: {}
        }
    },
    mounted() {
        const {$page: {path, title}, $site: {pages}} = this;
        const regex = new RegExp(path);
        this.thisPages = pages.filter(item => regex.test(item.path) && path !== item.path);
        const data = {
            id: title,
            children: []
        }
        
    },
}
</script>

<style lang="scss" scoped>
</style>