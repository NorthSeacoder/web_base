module.exports = {
    base: '/web-base/',
    title: 'Base',
    description: 'Just playing around',
    head: [['link', {rel: 'icon', href: '/web-base.png'}]],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: '数据结构', link: '/data-structure/' },
          { text: '操作系统', link: '/operating-system/' },
          { text: '计算机网络', link: '/computer-networks/' },
          { text: '计算机组成原理', link: '/computer-organization/' },
        ],
        sidebar: {
          '/data-structure/':[{
            title:'数据结构',
            collapsable: false,
            children:[
              'start',
            ]
          }]
        }
        
      }
};
