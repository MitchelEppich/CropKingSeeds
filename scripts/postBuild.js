const fs = require("fs-extra");

const formatDate = require("./formatDate");
const getPathsObject = require("./exportPaths");

const pathsObj = getPathsObject();

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"> 
  ${Object.keys(pathsObj).map(
      path => `<url>
    <loc>https://cropkingeeds${path}</loc>
    <lastmod>${formatDate(new Date(pathsObj[path].lastModified))}</lastmod>
  </url>`
  )}
</urlset>`;

fs.writeFileSync("out/sitemap.xml", sitemapXml);
