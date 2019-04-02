const oldUrls = require("./redirectUrls");
let categories = [
  "products-page",
  "germination",
  "buy",
  "chart",
  "mix",
  "news",
  "events"
];
let redirectUrls = strains => {
  let strainNames = strains.map((strain, index) => {
    return strain.name;
  });
  let redirects = oldUrls.map((oldUrl, index) => {
    let url = {
      from: null,
      to: null
    };
    url.to = "/";
    oldUrl = oldUrl.replace("https://www.cropkingseeds.com", "").trim();
    oldUrl = oldUrl.replace("http://www.cropkingseeds.com", "").trim();
    url.from = oldUrl;
    cleanOldUrl = url.from;
    if (cleanOldUrl.includes("products-page")) {
      for (var i = 0, len = strainNames.length; i < len; i++) {
        if (
          cleanOldUrl.includes("white-widow") &&
          cleanOldUrl.includes("auto")
        ) {
          url.to = "/product/white-widow-autoflower";
        }
        if (
          cleanOldUrl
            .toLowerCase()
            .replace(/-/g, "")
            .includes(
              strainNames[i]
                .toLowerCase()
                .replace(/ /g, "")
                .replace(/feminized/g, "")
                .replace(/regular/g, "")
                .replace(/autoflower/g, "")
            )
        ) {
          url.to =
            "/product/" +
            strainNames[i]
              .toLowerCase()
              .split(" ")
              .join("-");
          break;
        }
      }
      if (url.to != "/") {
        return url;
      }
    }
    for (categorie of categories) {
      if (cleanOldUrl.includes(categorie)) {
        if (categorie == "products-page") {
          url.to = "/shop";
        }
        if (categorie == "germination") {
          url.to = "/germination";
        }
        if (categorie == "buy") {
          url.to = "/shop";
        }
        if (categorie == "chart") {
          url.to = "/charts";
        }
        if (categorie == "news") {
          url.to = "/news";
        }
        if (categorie == "events") {
          url.to = "/news";
        }
        if (categorie == "mix") {
          if (cleanOldUrl.includes("auto")) {
            url.to = "/product/autoflower-mixed";
          } else {
            url.to = "/product/feminized-mixed";
          }
        }
      }
      if (url.to != "/") {
        return url;
      }
    }
    return url;
  });
  return redirects;
};

module.exports = redirectUrls;
