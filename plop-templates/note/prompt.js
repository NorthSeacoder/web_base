const {isExist, notEmpty, getActions, getDocsName} = require('../utils.js');

module.exports = {
    description: 'generate web_base template',
    prompts: [
        {
            type: 'list',
            name: 'type',
            message: '请选择笔记类型',
            choices: getDocsName,
        },
        {
            type: 'input',
            name: 'typeName',
            message: '请输入新增类型(请以驼峰命名)',
            validate: isExist('类型'),
            when: ({type}) => type === 'new',
        },
        {
            type: 'list',
            name: 'note',
            message: '请选择笔记名称',
            choices: getDocsName,
            when: ({type}) => type !== 'new',
        },
        {
            type: 'input',
            name: 'noteName',
            message: '请输入笔记名称(请以驼峰命名)',
            validate: notEmpty('笔记名称'),
            when: ({type, note}) => type === 'new' || note === 'new',
        },
        {
            type: 'list',
            name: 'chapter',
            message: '请选择章节名称',
            choices: getDocsName,
            when: ({type}) => type !== 'new' && note !== 'new',
        },
        {
            type: 'input',
            name: 'chapterName',
            message: '请输入章节名称(请以驼峰命名)',
            validate: notEmpty('章节名称'),
            when: ({type, note, chapter}) => type === 'new' || note === 'new' || chapter === 'new',
            default: 'chapter-1',
        },
    ],
    actions: (data) => {
        const noteActions = getActions(data);
        return [...noteActions];
    },
};
