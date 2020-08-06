<template>
    <div id="mindGraph">
    </div>
</template>

<script>
import G6 from '@antv/g6';

export default {
    data() {
        return {
            data: {},
            thisPages: []
        }
    },
    mounted() {
        const {$page: {path, title}, $site: {pages}} = this;
        const regex = new RegExp(path);
        this.thisPages = pages.filter(item => regex.test(item.path) && item.path !== path);
        const data = {
            id: title,
            children: []
        }
        this.thisPages.forEach((page, key) => {
            const children = page.headers.reduce((acc, item, index) => {
                if (item.level === 2) {
                    acc.push({
                        id: item.title,
                        children: []
                    })
                } else {
                    acc[acc.length - 1].children.push({
                        id: item.title,
                    })
                }
                return acc;
            }, [])
            data.children.push({
                id: page.title,
                children
            })
        })

        this.$set(this, 'data', data);
        this.G6Render(data)

    },
    methods: {
        G6Render(data) {
            const width = document.getElementById('mindGraph').scrollWidth||800;
            const height = document.getElementById('mindGraph').scrollHeight || 600;
            const graph = new G6.TreeGraph({
                container: 'mindGraph',
                width,
                height,
                modes: {
                    default: [
                        {
                            type: 'collapse-expand',
                            onChange: function onChange(item, collapsed) {
                                const data = item.get('model').data;
                                data.collapsed = collapsed;
                                return true;
                            },
                        },
                        'drag-canvas',
                        'zoom-canvas',
                    ],
                },
                defaultNode: {
                    size: 26,
                    anchorPoints: [
                        [0, 0.5],
                        [1, 0.5],
                    ],
                    style: {
                        fill: '#C6E5FF',
                        stroke: '#5B8FF9',
                    },
                },
                defaultEdge: {
                    type: 'cubic-horizontal',
                    style: {
                        stroke: '#A3B1BF',
                    },
                },
                layout: {
                    type: 'mindmap',
                    direction: 'LR',
                    getHeight: () => {
                        return 16;
                    },
                    getWidth: () => {
                        return 16;
                    },
                    getVGap: () => {
                        return 10;
                    },
                    getHGap: () => {
                        return 50;
                    },
                },
            });

            let centerX = 0;
            graph.node(function (node) {
                if (node.id === 'Modeling Methods') {
                    centerX = node.x;
                }

                return {
                    label: node.id,
                    labelCfg: {
                        position:
                            node.children && node.children.length > 0
                                ? 'left'
                                : node.x > centerX
                                    ? 'right'
                                    : 'left',
                        offset: 5,
                    },
                };
            });

            graph.data(data);
            graph.render();
            graph.fitView();
        }
    },
}
</script>

<style lang="scss" scoped>
</style>