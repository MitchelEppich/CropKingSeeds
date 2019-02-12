import ProductThumbnail from "../productGrid/productThumbnail";
import Router from "next/router";
import FeaturedStrainThumbnail from "./featuredStrainThumbnail";
import Link from "next/link";

const index = props => {
  let hoverId = props.misc.hoverId;
  let products = props.misc.featuredStrains;
  let route = Router.asPath.slice(0);
  let isSmallMediumOrLargeDevice = ["sm", "md", "lg"].includes(
    props.misc.mediaSize
  );
  let count = props.initialCount;
  let specificMax = props.specificMax,
    max = products.length;

  if (props.misc.featureCount > count && props.page == "shop") {
    count = props.misc.featureCount;
  }
  if (props.misc.mediaSize == "xl" && props.page != "shop") {
    count = 3;
  }
  if (isSmallMediumOrLargeDevice) {
    count = 2;
  }

  products = products.map((product, index) => {
    return (
      <Link
        key={index}
        href="/product"
        as={"/product/" + product.name.toLowerCase().replace(/ /g, "-")}
      >
        <div
          onMouseEnter={() => {
            if (isSmallMediumOrLargeDevice) {
              return null;
            }
            props.setHoverId(product._id, true);
            // let _index = 0;
            // while (product.price[_index] == -1) {
            //   _index++;
            // }
            // props.quickAddToCartQty(_index);
            // props.modifyPotentialQuantity({
            //   potentialQuantity: props.cart.potentialQuantity,
            //   action: "SET",
            //   quantity: 1
            // });
          }}
          onMouseLeave={() => {
            if (isSmallMediumOrLargeDevice) {
              return null;
            }
            props.setHoverId(product._id, false);
          }}
          onClick={e => {
            let strains = props.misc.strains;
            props.getStrain({ sotiId: product.sotiId, strains }).then(res => {
              props.setCurrentProduct({ product: res }).then(() => {
                let product = props.viewProduct.currentProduct;
                let _index = 0;
                while (product.price[_index] == -1) {
                  _index++;
                }
                props.quickAddToCartQty(_index);
              });
            });
          }}
          className={
            hoverId == product._id
              ? "relative bg-white mx-4 my-2 w-64 h-350 md:w-200 md:mx-1 rounded overflow-hidden shadow-md slowishish scale-item"
              : "relative bg-white mx-4 my-2 w-64 h-350 md:w-200 md:mx-1 rounded overflow-hidden shadow-md slowishish scale-item"
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
      </Link>
    );
  });
  return (
    <div className="flex flex-wrap w-full py-6 pb-12 sm:justify-center md:justify-center lg:justify-center xl:justify-start xxl:justify-around sm:overflow-hidden">
      {products.slice(0, count)}
      {count < specificMax && props.page == "shop" ? (
        <p
          onClick={() =>
            props.showMoreFeatures({
              max: max,
              count: props.misc.featureCount + 2
            })
          }
          className="text-grey-light rounded opacity-75 text-center w-64 mx-auto my-4 cursor-pointer p-3 font-bold bg-grey-lightest hover:bg-red-light hover:text-white"
        >
          Load More
        </p>
      ) : null}
    </div>
  );
};

export default index;
