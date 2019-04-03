// const strainsData = require("../static/strainsSchemaData");

module.exports = strain => {
  // return strains.map((strain, index) => {
  let reviews,
    priceLength = strain.price[0] > 0;
  if (strain.reviews != null && strain.reviews.length > 0) {
    reviews = strain.reviews.map((review, index) => {
      let str = review;
      let { 0: name, 1: email, 2: body, 3: rating, 4: time } =
        str != "" ? str.split("&=>") : ["", "", "", ""];
      return {
        "@type": "Review",
        reviewBody: body,
        datePublished: time,
        author: {
          "@type": "Person",
          name: name
        },
        reviewRating: {
          "@type": "Rating",
          ratingValue: rating
        }
      };
    });
  }
  return {
    "@context": "http://schema.org/",
    "@type": "Product",
    name: strain.name,
    description: strain.description,
    image: "http://dcfgweqx7od72.cloudfront.net" + strain.packageImg,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: strain.rating,
      reviewCount: strain.reviews.length
    },
    offers: {
      "@type": "AggregateOffer",
      highPrice: strain.price[2],
      lowPrice: strain.price[0] > 0 ? strain.price[0] : strain.price[1],
      priceCurrency: "USD",
      offers: [
        {
          "@type": "Offer",
          url:
            "cropkingseeds.com/product/" +
            strain.name.toLowerCase().replace(/ /g, "-")
        }
      ]
    },
    brand: "Crop King Seeds",
    review: reviews[0],
    reviews: reviews.slice(1)
  };
  // });
};
