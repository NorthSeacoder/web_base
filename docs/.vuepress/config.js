const path = require('path');
const {getSidebarConfig} =require('./utils')

module.exports = {
    base: '/web_base/',
    title: '前端补完计划',
    description: 'Just playing around',
    head: [['link', {rel: 'icon', href: '/web-base.png'}]],
    markdown: {
        lineNumbers: true
    },
    plugins: [
      [
        'live',
        {
          // to use a custom layout for your vue components
          layout: path.resolve(__dirname, './layout.vue'),
        }
      ],
    ],
    themeConfig: {
        logo: '/web-base.png',
        nav: [
            {text: 'Home', link: '/'},
            {
                text: '基础',
                ariaLabel: 'Language Menu',
                items: [
                    {text: '数据结构', link: '/base/data-structure/'}
                    // {text: '操作系统', link: '/base/operating-system/'},
                    // {text: '计算机网络', link: '/base/computer-networks/'},
                    // {text: '计算机组成原理', link: '/base/computer-organization/'}
                ]
            },
            {
                text: '笔记',
                ariaLabel: 'Language Menu',
                items: [
                    {text: '数据结构', link: '/note/data-structure/'}
                    // {text: '操作系统', link: '/base/operating-system/'},
                    // {text: '计算机网络', link: '/base/computer-networks/'},
                    // {text: '计算机组成原理', link: '/base/computer-organization/'}
                ]
            },
            {text: 'Github', link: 'https://github.com/NorthSeacoder'}
        ],
        sidebar: {
            '/base/data-structure/': getSidebarConfig('./base/data-structure/'),
            
            '/note/data-structure/': getSidebarConfig('./note/data-structure/'),
            '/base/computer-networks/': [
                {
                    title: '计算机网络',
                    collapsable: false,
                    children: ['start-1']
                }
            ],

            
        }
    }
};
