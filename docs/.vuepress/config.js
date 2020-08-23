const path = require('path');
const {getSidebarConfig} = require('./utils');

const stylusPlugin = () => {
    return (style)=>{
        style.define('random', (min, max)=>{
            if (min === undefined || max === undefined) {
                return Math.random();
            }
            return Math.floor(Math.random() * (Number(max) - Number(min) + 1)) + Number(min);
        });
    };
};
module.exports = {
    base: '/web_base/',
    title: '前端补完计划',
    description: 'Just playing around',
    head: [['link', {rel: 'icon', href: '/web-base.png'}]],
    markdown: {
        lineNumbers: true,
    },
    plugins: [
        [
            'live',
            {
                // to use a custom layout for your vue components
                layout: path.resolve(__dirname, './layout.vue'),
            },
        ],
    ],
    themeConfig: {
        logo: '/web-base.png',
        nav: [
            {text: 'Home', link: '/'},
            {
                text: '基础',
                items: [
                    {text: '数据结构', link: '/base/data-structure/'},
                    //base

                ],
            },
            {
                text: '笔记',
                items: [
                    {text: '数据结构', link: '/note/data-structure/'},
                    //note

                ],
            },
            {
                text: '翻译计划',
                items: [
                    {text: '30秒代码', link: '/translate/30secondsofcode/'},
                    //translate

                ],
            },
            {
                text: 'tools',
                items: [
                    {text: 'node', link: '/tools/node/'},
                    {text: 'devOps', link: '/tools/devOps/'},
                    //tools
                ],
            },
            //type

            {text: 'Github', link: 'https://github.com/NorthSeacoder'},
        ],
        sidebar: {
            '/base/data-structure/': getSidebarConfig('./base/data-structure/'),

            '/note/data-structure/': getSidebarConfig('./note/data-structure/'),

            '/translate/30secondsofcode/': getSidebarConfig('./translate/30secondsofcode/'),
            
            '/tools/node/': getSidebarConfig('./tools/node/'),
            
            '/tools/devOps/': getSidebarConfig('./tools/devOps/'),
            //sidebar
            
        },
    },
    stylus: {
        preferPathResolver: 'webpack',
        use: [stylusPlugin()],
    },
};
