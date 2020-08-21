const { notEmpty ,getNewMdActions,getNewSrcActions,getNewTestActions} = require("../utils.js");

module.exports = {
  description: "generate web_base template",
  prompts: [
    {
      type: "input",
      name: "name",
      message: "请输入组件名字(请以驼峰命名)",
      validate: notEmpty("组件名字")
    },
    {
      type: "list",
      name: "type",
      message: "请选择类型",
      choices: [
        {
          name: "指令directive",
          value: "directive"
        },
        {
          name: "组件component",
          value: "component"
        },
        {
          name: "插件plugin",
          value: "plugin"
        }
      ]
    },
    {
      type: "list",
      name: "compType",
      message: "请选择组件类型",
      choices: [
        {
          name: "基础类basic",
          value: "basic"
        },
        {
          name: "表单类form",
          value: "form"
        },
        {
          name: "插件类plugin",
          value: "plugin"
        }
      ]
    }
  ],
  actions: data => {
    const srcActions=getNewSrcActions(data);
    const mdActions=getNewMdActions(data);
    const testActions=getNewTestActions(data);

    return [...srcActions,...mdActions,...testActions];
  }
};
