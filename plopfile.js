const componentGenerator = require("./plop-templates/base/prompt");
const note = require("./plop-templates/note/prompt");

module.exports = plop => {

  plop.setGenerator("base", componentGenerator);
  plop.setGenerator("note", note);
};
