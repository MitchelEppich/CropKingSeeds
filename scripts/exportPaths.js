const fs = require("fs-extra");
const strains = require("./strains");

module.exports = () => {
    const fileObj = {};

    const walkSync = dir => {
        // Get all files of the current directory & iterate over them
        const files = fs.readdirSync(dir);
        let noMap = ["_app.js", "_document.js", "animation.js", "article.js", "articles.js", "cms.js"];
        files.forEach(file => {
            if (noMap.includes(file)) {
                return;
            }
            if (file == "product.js") {
                const filePath = `${dir}${file}`;
                const fileStat = fs.statSync(filePath);
                for (let i = 0; i < strains.length; i++) {
                    const fileName =
                        filePath.substr(0, filePath.lastIndexOf(".")).replace("pages/", "") + "/" + strains[i];
                    fileObj[`/${fileName}`] = {
                        page: `/${fileName}`,
                        lastModified: fileStat.mtime
                    };
                }
                return;
            }
            // Construct whole file-path & retrieve file's stats
            const filePath = `${dir}${file}`;
            const fileStat = fs.statSync(filePath);
            if (fileStat.isDirectory()) {
                // Recurse one folder deeper
                walkSync(`${filePath}/`);
            } else {
                // Construct this file's pathname excluding the "pages" folder & its extension
                const cleanFileName = filePath.substr(0, filePath.lastIndexOf(".")).replace("pages/", "");

                // Add this file to `fileObj`
                fileObj[`/${cleanFileName}`] = {
                    page: `/${cleanFileName}`,
                    lastModified: fileStat.mtime
                };
            }
        });
    };

    // Start recursion to fill `fileObj`
    walkSync("pages/");

    return fileObj;
};
