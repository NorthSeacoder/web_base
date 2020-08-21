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
exports.isExist = (field) => {
    return (v) => {
        if (!v || v.trim === '') return `${field} 必须填写`;
        if (getDocsName({}).some(({name}) => name === v)) return `${field} 不能重复`;
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

const getDocsName = (v) => {
    const {type = '', note = '', chapter = ''} = v;

    const docsPath = path.resolve(__dirname, '../docs', type, note, chapter);
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
            templateFile: 'plop-templates/hbs/chapter/readme.hbs',
            data: {
                chapterName,
            },
        },
        {
            type: 'modify',
            path: `docs/${typeName}/${noteName}/config.json`,
            pattern: new RegExp('"plop-temp":""'),
            templateFile: 'plop-templates/hbs/chapter/config.hbs',
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
            templateFile: 'plop-templates/hbs/note/readme.hbs',
            data: {
                noteName,
            },
        },
        {
            type: 'add',
            path: `docs/${typeName}/${noteName}/config.json`,
            templateFile: 'plop-templates/hbs/note/config.hbs',
        },
        {
            type: 'modify',
            path: 'docs/.vuepress/config.js',
            pattern: new RegExp(`//sidebar`),
            templateFile: 'plop-templates/hbs/note/sidebar.hbs',
            data: {
                typeName,
                noteName,
            },
        },
        {
            type: 'modify',
            path: 'docs/.vuepress/config.js',
            pattern: new RegExp(`//${typeName}`),
            templateFile: 'plop-templates/hbs/note/nav.hbs',
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
            templateFile: 'plop-templates/hbs/type/type.hbs',
            data: {
                typeName,
            },
        },
    ];
}
function getnewType(data) {
    const actions = [];
    const {noteName, typeName, chapterName} = data;
    actions.push(...getTypeActions({typeName}));
    actions.push(...getNoteActions({typeName, noteName}));
    actions.push(...getChapterAction({typeName, noteName, chapterName}));
    return actions;
}
function getNewNote(data) {
    const actions = [];
    const {noteName, typeName, chapterName} = data;
    actions.push(...getNoteActions({typeName, noteName}));
    actions.push(...getChapterAction({typeName, noteName, chapterName}));
    return actions;
}
function getNewChapter(data) {
    const actions = [];
    const {noteName, typeName, chapterName} = data;
    actions.push(...getChapterAction({typeName, noteName, chapterName}));
    return actions;
}
function getActions(data) {
    const {type, note, chapter} = data;
    console.log(data)
    if (type === 'new') return getnewType(data); //新增类别
    if (note === 'new') return getNewNote({...data, typeName: type});
    if (chapter === 'new') return getNewChapter({...data, typeName: type,noteName:note});
}
exports.getDocsName = getDocsName;
exports.getActions = getActions;

exports.camelCase = camelCase;
exports.kebabCase = kebabCase;
