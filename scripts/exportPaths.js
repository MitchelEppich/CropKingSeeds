const fs = require("fs-extra");

module.exports = strains => {
  const fileObj = {};

  const walkSync = (dir, strains) => {
    // Get all files of the current directory & iterate over them
    const files = fs.readdirSync(dir);
    let noMap = [
      "_app.js",
      "_document.js",
      "animation.js",
      "article.js",
      "articles.js",
      "cms.js",
      "germination.js",
      "_error.js",
      "confirmation"
    ];
    files.forEach(file => {
      if (noMap.includes(file)) {
        return;
      }
      let changefreq = "yearly",
        priority = 0.3;
      if (file == "index.js") {
        const filePath = `${dir}${file}`;
        const fileStat = fs.statSync(filePath);
        const cleanFileName = "";

        // Add this file to `fileObj`
        fileObj[`/${cleanFileName}`] = {
          page: `/${cleanFileName}`,
          lastModified: fileStat.mtime,
          changefreq: "weekly",
          priority: 1,
          imageLoc:
            "https://dcfgweqx7od72.cloudfront.net/logos/cks-logo-header.png",
          name: "Crop King Seeds"
        };
        return;
      }
      if (file == "product.js") {
        const filePath = `${dir}${file}`;
        const fileStat = fs.statSync(filePath);
        for (let i = 0; i < strains.length; i++) {
          let name = strains[i].name;
          if (strains[i].name.toLowerCase().includes("cali")) {
            name = strains[i].name.replace("&", "+");
          }
          const fileName =
            filePath
              .substr(0, filePath.lastIndexOf("."))
              .replace("pages/", "") +
            "/" +
            name
              .toLowerCase()
              .split(" ")
              .join("-");
          fileObj[`/${fileName}`] = {
            page: `/${fileName}`,
            lastModified: fileStat.mtime,
            changefreq: "monthly",
            priority: 0.7,
            imageLoc:
              "https://dcfgweqx7od72.cloudfront.net/packages/" +
              strains[i]._doc.sotiId +
              ".png",
            name: name + " Seeds"
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
        const cleanFileName = filePath
          .substr(0, filePath.lastIndexOf("."))
          .replace("pages/", "");

        // Add this file to `fileObj`
        fileObj[`/${cleanFileName}`] = {
          page: `/${cleanFileName}`,
          lastModified: fileStat.mtime,
          changefreq: changefreq,
          priority: priority,
          imageLoc: "No Image",
          name: "No Name"
        };
      }
    });
  };

  // Start recursion to fill `fileObj`
  walkSync("pages/", strains);
  return fileObj;
};
