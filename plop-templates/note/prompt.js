const { notEmpty ,getDemoActions,getDocsName,getNewTestActions} = require("../utils.js");

module.exports = {
  description: "generate web_base template",
  prompts: [
    {
      type: "list",
      name: "type",
      message: "请选择笔记类型",
      choices: getDocsName()
    },
    {
      type: "input",
      name: "typeName",
      message: "请输入新增类型(请以驼峰命名)",
      when:({type})=>type==='new'
    },
    {
      type: "input",
      name: "noteName",
      message: "请输入笔记名称(请以驼峰命名)",
      validate: notEmpty("笔记名称")
    },
    {
      type: "input",
      name: "chapterName",
      message: "请输入章节名称(请以驼峰命名)",
      validate: notEmpty("章节名称"),
      default:'chapter-1'
    },
  ],
  actions: data => {

    const mdActions=getDemoActions(data);

    return [...mdActions];
  }
};
