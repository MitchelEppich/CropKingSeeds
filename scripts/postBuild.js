const fs = require("fs-extra");

const formatDate = require("./formatDate");

module.exports = strains => {
  const getPathsObject = require("./exportPaths");
  const pathsObj = getPathsObject(strains);

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1"> 
        ${Object.keys(pathsObj).map(
          path =>
            `<url>
                <loc>https://www.cropkingseeds.com${path}</loc>
                <lastmod>${formatDate(
                  new Date(pathsObj[path].lastModified)
                )}</lastmod>
                <changefreq>${pathsObj[path].changefreq}</changefreq>
                <priority>${pathsObj[path].priority}</priority>
                <image:image>
                    <image:loc>${pathsObj[path].imageLoc}</image:loc>
                    <image:caption></image:caption>
                    <image:title>${pathsObj[path].name}</image:title>
                </image:image >
            </url>`
        )}
        </urlset>`;

  return fs.writeFileSync("static/sitemap.xml", sitemapXml);
};
