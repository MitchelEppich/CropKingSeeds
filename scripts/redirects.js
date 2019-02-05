const oldUrls = require("./redirectUrls");
let categories = ["products-page", "germination", "grow", "buy"];
module.exports = oldUrls.map((oldUrl, index) => {
  let newUrl = "/",
    cleanOldUrl = oldUrl.replace("https://www.cropkingseeds.com", "").trim();
  for (categorie of categories) {
    if (cleanOldUrl.includes(categorie)) {
      if (categorie == "products-page") {
        newUrl = "/shop";
      }
      if (categorie == "germination" || categorie == "grow") {
        newUrl = "/germination";
      }
      if (categorie == "buy") {
        newUrl = "/shop";
      }
    }
  }

  return {
    from: cleanOldUrl,
    to: newUrl
  };
});
