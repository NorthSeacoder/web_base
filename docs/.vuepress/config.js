const path = require('path');

module.exports = {
    base: '/web_base/',
    title: '基础',
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
            '/base/data-structure/': getGuideSidebar(),
            '/base/computer-networks/': [
                {
                    title: '计算机网络',
                    collapsable: false,
                    children: ['start-1']
                }
            ],

            '/note/data-structure/': [
                {
                    title: '绪论',
                    collapsable: false,
                    children: [
                        ['intro/big-o', '大O记号'],
                        ['intro/dp', '动态规划'],
                    ]
                }
            ]
        }
    }
};

function getGuideSidebar() {
    return [
        {
            title: '链表',
            collapsable: false,
            children: ['LinkedList']
        },
        {
            title: '栈',
            collapsable: false,
            children: ['Stack']
        },
        {
            title: '队列',
            collapsable: false,
            children: ['Queue']
        },
        {
            title: '树',
            collapsable: false,
            children: ['Tree']
        },
        {
            title: '图',
            collapsable: false,
            children: ['Graph']
        }
    ];
}
