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
const getDocsName = () => {
    const docsPath = path.resolve(__dirname, '../docs');
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

function getDemoActions(data) {
    const actions = [];
    const {type, noteName, typeName, chapterName} = data;
    if (type === 'new') {
        actions.push([
            {
                type: 'add',
                path: `docs/${typeName}/${noteName}/README.md`,
                templateFile: 'plop-templates/note/hbs/note-readme.hbs',
                data: {
                    typeName,
                    noteName,
                    chapterName,
                },
            },
            {
                type: 'add',
                path: `docs/${typeName}/${noteName}/config.json`,
                templateFile: 'plop-templates/note/hbs/readme.hbs',
                data: {
                    noteName,
                    chapterName,
                },
            },
            {
                type: 'add',
                path: `docs/${typeName}/${noteName}/${chapterName}/README.md`,
                templateFile: 'plop-templates/note/hbs/note-readme.hbs',
                data: {
                    noteName,
                },
            },
            {
                type: 'add',
                path: `docs/${typeName}/${noteName}/${chapterName}/README.md`,
                templateFile: 'plop-templates/note/hbs/note-readme.hbs',
                data: {
                    noteName,
                },
            },
        ]);
    }
    return actions;
}
console.log(getDocsName());
exports.getDocsName = getDocsName;
exports.getNewMdActions = getNewMdActions;
exports.getNewSrcActions = getNewSrcActions;
exports.getNewTestActions = getNewTestActions;
exports.getDemoActions = getDemoActions;
exports.camelCase = camelCase;
exports.kebabCase = kebabCase;
