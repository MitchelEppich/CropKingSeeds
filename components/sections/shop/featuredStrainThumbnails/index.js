import ProductThumbnail from "../productGrid/productThumbnail";
import Router from "next/router";
import FeaturedStrainThumbnail from "./featuredStrainThumbnail";

const index = props => {
  let hoverId = props.misc.hoverId;
  let products = props.misc.featuredStrains;
  let route = Router.asPath.slice(0);
  let isSmallMediumOrLargeDevice = ["sm", "md", "lg"].includes(
    props.misc.mediaSize
  );
  let count = props.count ? props.count : 8;
  count = isSmallMediumOrLargeDevice ? 2 : count;

  products = products.map((product, index) => {
    return (
      <div
        key={index}
        onMouseEnter={() => {
          if (isSmallMediumOrLargeDevice) {
            return null;
          }
          props.setHoverId(product._id, true);
        }}
        onMouseLeave={() => {
          if (isSmallMediumOrLargeDevice) {
            return null;
          }
          props.setHoverId(product._id, false);
        }}
        onClick={e => {
          props.setCurrentProduct({ product });
          if (isSmallMediumOrLargeDevice) {
            Router.push(
              "/product/" +
                product.name
                  .toLowerCase()
                  .split(" ")
                  .join("-")
            );
          }
        }}
        className={
          hoverId == product._id
            ? "h-full relative bg-white m-6 w-full rounded-lg overflow-hidden shadow-md slowishish"
            : "h-full relative bg-white m-6 w-full rounded-lg overflow-hidden shadow-md slowishish"
        }
      >
        <FeaturedStrainThumbnail
          isSmallMediumOrLargeDevice={isSmallMediumOrLargeDevice}
          hoverId={hoverId}
          index={index}
          product={product}
          {...props}
        />
      </div>
    );
  });
  return (
    <div className="flex flex-wrap w-full py-6 pb-12 sm:justify-center md:justify-center lg:justify-center xl:justify-center xxl:justify-around sm:overflow-hidden">
      {products.slice(0, count)}
    </div>
  );
};

export default index;
