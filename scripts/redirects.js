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
  return [{ from: "/adam", to: "/shop" }];
  // let strainNames = strains.map((strain, index) => {
  //   return strain.name;
  // });
  // let arr = oldUrls;
  // let sortedArray = arr.slice().sort(function(a, b) {
  //   return a > b ? 1 : 0;
  // });
  // let results = [];
  // results.push(sortedArray[0]);
  // for (let i = 1, length = sortedArray.length; i < length; i++) {
  //   if (sortedArray[i] !== sortedArray[i - 1]) {
  //     results.push(sortedArray[i]);
  //   }
  // }
  // let redirects = results.map((oldUrl, index) => {
  //   let url = {
  //     from: null,
  //     to: null
  //   };
  //   url.to = "/";
  //   oldUrl = oldUrl.replace("https://www.cropkingseeds.com", "").trim();
  //   oldUrl = oldUrl.replace("http://www.cropkingseeds.com", "").trim();
  //   url.from = oldUrl;
  //   cleanOldUrl = url.from;
  //   if (cleanOldUrl.includes("products-page")) {
  //     for (let i = 0, len = strainNames.length; i < len; i++) {
  //       if (
  //         cleanOldUrl.includes("white-widow") &&
  //         cleanOldUrl.includes("auto")
  //       ) {
  //         url.to = "/product/white-widow-autoflower";
  //       }
  //       if (
  //         cleanOldUrl
  //           .toLowerCase()
  //           .replace(/-/g, "")
  //           .includes(
  //             strainNames[i]
  //               .toLowerCase()
  //               .replace(/ /g, "")
  //               .replace(/feminized/g, "")
  //               .replace(/regular/g, "")
  //               .replace(/autoflower/g, "")
  //           )
  //       ) {
  //         url.to =
  //           "/product/" +
  //           strainNames[i]
  //             .toLowerCase()
  //             .split(" ")
  //             .join("-");
  //         break;
  //       }
  //     }
  //     if (url.to != "/") {
  //       return url;
  //     }
  //   }
  //   for (categorie of categories) {
  //     if (cleanOldUrl.includes(categorie)) {
  //       if (categorie == "products-page") {
  //         url.to = "/shop";
  //       }
  //       if (categorie == "germination") {
  //         url.to = "/germination";
  //       }
  //       if (categorie == "buy") {
  //         url.to = "/shop";
  //       }
  //       if (categorie == "chart") {
  //         url.to = "/charts";
  //       }
  //       if (categorie == "news") {
  //         url.to = "/news";
  //       }
  //       if (categorie == "events") {
  //         url.to = "/news";
  //       }
  //       if (categorie == "mix") {
  //         if (cleanOldUrl.includes("auto")) {
  //           url.to = "/product/autoflower-mixed";
  //         } else {
  //           url.to = "/product/feminized-mixed";
  //         }
  //       }
  //     }
  //     if (url.to != "/") {
  //       return url;
  //     }
  //   }
  //   return url;
  // });
  // return redirects;
};
// const oldUrls = require("./redirectUrls");
// let categories = ["products-page", "germination", "grow", "buy"];
// module.exports = oldUrls.map((oldUrl, index) => {
//   let newUrl = "/",
//     cleanOldUrl = oldUrl.replace("https://www.cropkingseeds.com", "").trim();
//   for (categorie of categories) {
//     if (cleanOldUrl.includes(categorie)) {
//       if (categorie == "products-page") {
//         newUrl = "/shop";
//       }
//       if (categorie == "germination" || categorie == "grow") {
//         newUrl =
//           "https://www.marijuanaseeds.com/how-to-germinate-marijuana-seeds-successfully/";
//       }
//       if (categorie == "buy") {
//         newUrl = "/shop";
//       }
//     }
//   }

//   return {
//     from: cleanOldUrl,
//     to: newUrl
//   };
// });
