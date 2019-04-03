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
module.exports = strains => {
  let strainNames = strains.map((strain, index) => {
    return strain.name;
  });
  let arr = oldUrls;
  let sortedArray = arr.slice().sort(function(a, b) {
    return a > b ? 1 : 0;
  });
  let results = [];
  results.push(sortedArray[0]);
  for (let i = 1, length = sortedArray.length; i < length; i++) {
    if (sortedArray[i] !== sortedArray[i - 1]) {
      results.push(sortedArray[i]);
    }
  }
  // console.log("RESULTS", results);
  let redirects = results.map((oldUrl, index) => {
    let url = {
      from: null,
      to: null
    };
    url.to = "/";
    let urlPath = oldUrl.replace("https://www.cropkingseeds.com", "").trim();
    if (urlPath.includes("http://www.cropkingseeds.com")) {
      urlPath = urlPath.replace("http://www.cropkingseeds.com", "").trim();
    }
    url.from = urlPath;
    if (urlPath.includes("products-page")) {
      for (let i = 0; i < strainNames.length; i++) {
        if (urlPath.includes("white-widow") && urlPath.includes("auto")) {
          url.to = "/product/white-widow-autoflower";
        }
        if (
          urlPath
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
      if (urlPath.includes(categorie)) {
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
          if (urlPath.includes("auto")) {
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
  // return [{ from: "/adam", to: "/shop" }];

  return redirects;
};
