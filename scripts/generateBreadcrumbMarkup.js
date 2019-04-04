module.exports = path => {
  let listItems = path.split("/").slice(1);
  let url = "https://cropkingseeds.com/";
  listItems = listItems.map((item, index) => {
    url += item + "/";
    return {
      "@type": "ListItem",
      position: index + 1,
      name: item,
      item: url
    };
  });
  let schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: listItems
  };
  return schema;
};
