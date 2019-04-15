module.exports = pages => {
  let urlPath = "https://www.cropkingseeds.com/";
  let listItems = pages.map((page, index) => {
    return {
      "@type": "SiteNavigationElement",
      position: index + 1,
      name: page.name,
      description: page.description,
      url: urlPath + page.path
    };
  });
  let schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: listItems
  };
  return schema;
};
