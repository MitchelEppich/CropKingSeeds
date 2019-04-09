const oldUrls = require("./redirectUrls");
let categories = [
  "feminized",
  "auto",
  "regular",
  "cbd",
  "germinat",
  "buy",
  "chart",
  "mix",
  "news",
  "grow",
  "events",
  "seeds",
  "sale",
  "order",
  "products-page"
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
    let urlPath = oldUrl
      .replace("https://www.cropkingseeds.com", "")
      .trim()
      .toLowerCase();
    if (urlPath.includes("http://www.cropkingseeds.com")) {
      urlPath = urlPath
        .replace("http://www.cropkingseeds.com", "")
        .trim()
        .toLowerCase();
    }
    url.from = urlPath;
    if (urlPath.includes("products-page")) {
      for (let i = 0; i < strainNames.length; i++) {
        if (urlPath.includes("white-widow") && urlPath.includes("auto")) {
          url.to = "/product/white-widow-autoflower";
        }
        if (urlPath.includes("feminized-mix")) {
          url.to = "/product/feminized-mixed";
        }
        if (
          urlPath.includes("auto-feminized-mix") ||
          (urlPath.includes("auto") && urlPath.includes("mix"))
        ) {
          url.to = "/product/autoflower-mixed";
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
      if (urlPath.includes(categorie.toLowerCase())) {
        switch (categorie) {
          case "mix":
            if (urlPath.includes("auto")) {
              url.to = "/product/autoflower-mixed";
            } else {
              url.to = "/product/feminized-mixed";
            }
            break;
          case "regular":
            url.to = "/shop?regular";
            break;
          case "auto":
            url.to = "/shop?autoflower";
            break;
          case "feminized":
            url.to = "/shop?feminized";
            break;
          case "cbd":
            url.to = "/shop?cbd";
            break;
          case "germinat":
            url.to = "/germination";
            break;
          case "chart":
            url.to = "/charts";
            break;
          case "news" || "events":
            url.to = "/news";
            break;
          case "products-page":
            url.to = "/shop";
            break;
          case "buy" || "sale" || "seeds" || "order":
            url.to = "/shop";
            break;
          default:
            url.to = "/shop";
            break;
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
