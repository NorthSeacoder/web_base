const path = require('path');
const fs = require('fs');

exports.notEmpty = (name) => {
    return (v) => {
        if (!v || v.trim === '') {
            return `${name} 必须填写`;
        }
        return true;
    };
};
exports.isExist = (name) => {
    return (v) => {
        if (!v || v.trim === '') return `${name} 必须填写`;
        if (getDocsName().some(({name}) => name === v)) return `${name} 不能重复`;
        return true;
    };
};
// 下划线转换驼峰
function camelCase(name) {
    return name
        .replace(/[\_|-](\w)/g, function(all, letter) {
            return letter.toUpperCase();
        })
        .replace(/./, (_) => _.toUpperCase());
}
// 驼峰转换中划线
function kebabCase(name) {
    return name.replace(/([A-Z])/g, '-$1').toLowerCase();
}

function getNewSrcActions(data) {
    const kebabName = kebabCase(data.name);
    const componentName = camelCase(data.name);
    const typeReg = new RegExp(`//${data.type}`);
    return [
        {
            type: 'add',
            path: `src/${data.type}/${kebabName}/src/${kebabName}.vue`,
            templateFile: 'plop-templates/component/index.hbs',
            data: {
                componentName,
                kebabName,
                template: true,
                script: true,
                style: true,
            },
        },
        {
            type: 'add',
            path: `src/${data.type}/${kebabName}/index.js`,
            templateFile: 'plop-templates/component/export.hbs',
            data: {
                componentName,
                kebabName,
            },
        },
        {
            type: 'add',
            path: `src/styles/${data.type}/${kebabName}.scss`,
            templateFile: 'plop-templates/component/css.hbs',
        },
        {
            type: 'modify',
            path: `src/${data.type}/index.js`,
            pattern: typeReg,
            template: '//{{type}}\r\n\t{{componentName}},',
            data: {
                componentName,
            },
        },
        {
            type: 'modify',
            path: `src/${data.type}/index.js`,
            pattern: new RegExp(`//import`),
            template: "//import\r\nimport {{componentName}} from './{{kebabName}}';",
            data: {
                componentName,
                kebabName,
            },
        },
        {
            type: 'modify',
            path: `src/styles/${data.type}/index.scss`,
            pattern: new RegExp(`//import`),
            template: "//import\r\n@import './{{kebabName}}.scss';",
            data: {
                kebabName,
                componentName,
            },
        },
    ];
}

function getNewMdActions(data) {
    const kebabName = kebabCase(data.name);
    const compTypeReg = new RegExp(`//${data.compType}`);
    return [
        {
            type: 'add',
            path: `docs/comp/${kebabName}.md`,
            templateFile: 'plop-templates/component/md.hbs',
            data: {
                kebabName,
            },
        },
        {
            type: 'modify',
            path: `docs/.vuepress/constant/componentsSidebar.js`,
            pattern: compTypeReg,
            template: '//{{compType}}\r\n\t\t\t\t"{{kebabName}}",',
            data: {
                kebabName,
                compType: data.compType,
            },
        },
    ];
}
function getNewTestActions(data) {
    const kebabName = kebabCase(data.name);
    const componentName = camelCase(data.name);
    return [
        {
            type: 'add',
            path: `test/specs/${kebabName}.js`,
            templateFile: 'plop-templates/component/test.hbs',
            data: {
                kebabName,
                componentName,
            },
        },
    ];
}

const data = {
    type: 'base',
    noteName: '',
    chapterName: 'base',
};
console.log(path.resolve(__dirname, '../docs', data.type, data.noteName));

const getDocsName = (v) => {
    const {type = '', noteName = '', chapterName = ''} = v;

    const docsPath = path.resolve(__dirname, '../docs', type, noteName, chapterName);
    const files = fs.readdirSync(docsPath);
    return files
        .filter((name) => !name.includes('.'))
        .map((name) => ({name, value: name}))
        .concat([
            {
                name: 'new',
                value: 'new',
            },
        ]);
};

function getChapterAction({typeName, noteName, chapterName}) {
    //新增 chapter-readme
    //修改 config.json - 新增章节
    return [
        {
            type: 'add',
            path: `docs/${typeName}/${noteName}/${chapterName}/README.md`,
            templateFile: 'plop-templates/note/hbs/chapter/readme.hbs',
            data: {
                chapterName,
            },
        },
        {
            type: 'modify',
            path: `docs/${typeName}/${noteName}/config.json`,
            pattern: new RegExp('"plop-temp":""'),
            templateFile: 'plop-templates/note/hbs/chapter/config.hbs',
            data: {
                chapterName,
            },
        },
    ];
}
function getNoteActions({typeName, noteName}) {
    //新增 note-readme
    //建立 config.json
    //修改 sidebar - 增加新的侧边栏
    //修改 nav - 增加 item
    return [
        {
            type: 'add',
            path: `docs/${typeName}/${noteName}/README.md`,
            templateFile: 'plop-templates/note/hbs/note/readme.hbs',
            data: {
                noteName,
            },
        },
        {
            type: 'add',
            path: `docs/${typeName}/${noteName}/config.json`,
            templateFile: 'plop-templates/note/hbs/note/config.hbs',
        },
        {
            type: 'modify',
            path: 'docs/.vuepress/config.js',
            pattern: new RegExp(`//sidebar`),
            templateFile: 'plop-templates/note/hbs/note/sidebar.hbs',
            data: {
                typeName,
                noteName,
            },
        },
        {
            type: 'modify',
            path: 'docs/.vuepress/config.js',
            pattern: new RegExp(`//${typeName}`),
            templateFile: 'plop-templates/note/hbs/note/nav.hbs',
            data: {
                typeName,
                noteName,
            },
        },
    ];
}
function getTypeActions({typeName}) {
    //修改 config.js 新增 nav
    return [
        {
            type: 'modify',
            path: 'docs/.vuepress/config.js',
            pattern: new RegExp(`//type`),
            templateFile: 'plop-templates/note/hbs/type/type.hbs',
            data: {
                typeName,
            },
        },
    ];
}
exports.test = (data) => {
    const actions = [];
    const {noteName, typeName, chapterName} = data;
    actions.push(...getTypeActions({typeName}));
    actions.push(...getNoteActions({typeName, noteName}));
    actions.push(...getChapterAction({typeName, noteName, chapterName}));
    return actions;
};

function getnewNote(data) {
    const {type, noteName, typeName, chapterName} = data;
    return [
        {
            type: 'add',
            path: `docs/${typeName}/${noteName}/README.md`,
            templateFile: 'plop-templates/note/hbs/note-readme.hbs',
            data: {
                typeName,
                noteName,
            },
        },
        {
            type: 'add',
            path: `docs/${typeName}/${noteName}/config.json`,
            templateFile: 'plop-templates/note/hbs/config.hbs',
            data: {
                noteName,
                chapterName,
            },
        },
        {
            type: 'add',
            path: `docs/${typeName}/${noteName}/${chapterName}/README.md`,
            templateFile: 'plop-templates/note/hbs/chapter-readme.hbs',
            data: {
                noteName,
            },
        },
        {
            type: 'modify',
            path: 'docs/.vuepress/config.js',
            pattern: new RegExp(`//type`),
            templateFile: 'plop-templates/note/hbs/type.hbs',
            data: {
                typeName,
                noteName,
            },
        },
        {
            type: 'modify',
            path: 'docs/.vuepress/config.js',
            pattern: new RegExp(`//sidebar`),
            templateFile: 'plop-templates/note/hbs/sidebar.hbs',
            data: {
                typeName,
                noteName,
            },
        },
    ];
}
function getActions(data) {
    const actions = [];
    const {type, noteName, typeName, chapterName} = data;
    if (type === 'new') {
        actions.push(...getnewNote(data));
    } else {
        actions.push({});
    }
    return actions;
}
exports.getDocsName = getDocsName;
exports.getActions = getActions;

exports.getNewMdActions = getNewMdActions;
exports.getNewSrcActions = getNewSrcActions;
exports.getNewTestActions = getNewTestActions;
exports.camelCase = camelCase;
exports.kebabCase = kebabCase;
