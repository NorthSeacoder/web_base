# commitizen 插件@nsea/cz

## 功能
执行npm run commit自动生成commit-message,格式为:
```js
[type][scope] message
```
## 用法

```base
npm i commitizen @nsea/cz
```

```js
//package.json添加
"config": {
    "commitizen": {
      "path": "./node_modules/@nsea/cz"
    }
  }
"scripts": {
    "commit": "git-cz"
}
//根目录下新增czrc.json
{
    "types":{
        "feat": {//key值是最终写入commit-message的内容
            "description": '增加新功能',//展示在命令行中的描述
            "title": 'Features',
        },
    },
    "defaultType":"",

    "defaultScope":""
}
```
