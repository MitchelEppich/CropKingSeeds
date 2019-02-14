const fs = require("fs-extra");

module.exports = strains => {
    let strainsData = "module.exports = " + strains;
    return fs.writeFileSync("static/strainsSchemaData.js", strainsData);
};
