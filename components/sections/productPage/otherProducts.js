import ProductThumbnail from "../shop/productGrid/productThumbnail";
import FeaturedStrainThumbnail from "../shop/featuredStrainThumbnail";

const otherProducts = props => {
  let hoverId = props.misc.hoverId;
  let fbt = props.misc.strains;
  let qty = 3;
  let isSmallMediumOrLargeDevice = ["sm", "md", "lg"].includes(
    props.misc.mediaSize
  );
  fbt = fbt.slice(0, qty).map((product, index) => {
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
        className={
          props.misc.hoverId == product._id
            ? "h-full relative bg-white m-1 xl:w-250 xxl:w-300 w-64 md:mt-4 xl:mx-2 sm:mt-4 lg:mt-4 rounded-lg overflow-hidden shadow-md slowishish"
            : "h-full relative bg-white m-1 xl:w-250 xxl:w-300 w-64 md:mt-4 xl:mx-2 sm:mt-4 lg:mt-4 rounded-lg overflow-hidden shadow-md slowishish"
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
    <div className="w-full flex flex-shrink md:flex-wrap sm:flex-wrap justify-around content-center">
      {fbt}
    </div>
  );
};

export default otherProducts;
