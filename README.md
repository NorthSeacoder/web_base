# web_base

## 新建笔记

### 新页面

-   新增 plop 脚本,支持 npm run new 自动配置笔记
    - 添加章节内 md 文件就手动添加并修改 config.json,保留相关注释
    - 如需展示中文需要手动修改 config.json.
-   docs/.vuepress/config 内配置 nav 和 sidebar
-   docs 下新增文件夹,配置 config.json+README.md

### 原笔记新内容

-   docs/内 配置 config.json

## 规则

-   每页笔记内均有 README.md 记录整体目录,已加入 antV G6 配置思维导图
    -   为了脑图正常生成,笔记内标题均不能相同
-   每章填写 README.md 本章目标及本章脑图,引入 goal 组件
-   除 README 以外文件名全小写
