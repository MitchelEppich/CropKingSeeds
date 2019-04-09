import FeaturedStrainThumbnail from "./featuredStrainThumbnail";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp, faAngleDown } from "@fortawesome/free-solid-svg-icons";

const index = props => {
  let hoverId = props.misc.hoverId;
  let products =
    props.page == "product"
      ? props.misc.relatedStrains
      : props.misc.featuredStrains;

  if (products == null) return <div />;

  let isSmallMediumOrLargeDevice = ["sm", "md", "lg"].includes(
    props.misc.mediaSize
  );
  let count = props.initialCount;
  let max =
    props.specificMax == null
      ? products.length
      : Math.min(products.length, props.specificMax);

  if (props.misc.featureCount > count && props.page == "shop") {
    count = props.misc.featureCount;
  }
  if (props.misc.mediaSize == "xl" && props.page != "shop") {
    count = 3;
  }
  if (isSmallMediumOrLargeDevice) {
    count = 2;
    max = 2;
  }

  products = products.slice(0, count).map((product, index) => {
    return (
      <Link
        key={index}
        href="/product"
        as={"/product/" + product.name.toLowerCase().replace(/ /g, "-")}
      >
        <a>
          <span
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
                  props.quickAddToCartQty(
                    _index,
                    props.shop.quickAddToCartQty,
                    product._id
                  );
                  props.modifyPotentialQuantity({
                    potentialQuantity: props.cart.potentialQuantity,
                    action: "SET",
                    tag: product._id,
                    quantity: 1,
                    max: props.cart.maxPerPackage
                  });
                });
              });
            }}
            className={
              "block " +
              (hoverId == product._id
                ? "relative bg-white mx-4 xl:w-54 xl:mx-1 my-2 w-64 sm:w-48 h-350 md:w-48 col md:mx-4 col sm:mx-1 rounded overflow-hidden shadow-md slowish sm:h-300"
                : "relative bg-white mx-4 xl:w-54 xl:mx-1 my-2 w-64 sm:w-48 h-350 md:w-48 col md:mx-4 col sm:mx-1 rounded overflow-hidden shadow-md slowish sm:h-300")
            }
          >
            <FeaturedStrainThumbnail
              isSmallMediumOrLargeDevice={isSmallMediumOrLargeDevice}
              hoverId={hoverId}
              index={index}
              product={product}
              {...props}
            />
          </span>
        </a>
      </Link>
    );
  });
  return (
    <div className="flex flex-wrap w-full py-6 pb-4 sm:justify-center md:justify-center lg:justify-center xl:justify-center xxl:justify-around sm:overflow-hidden">
      {products}

      <div className="w-container mt-2 mx-auto">
        {count < max && props.page == "shop" ? (
          <p
            onClick={() => {
              props.showMoreFeatures({
                max,
                count: count + 2
              });
            }}
            className="text-grey-light rounded opacity-75 text-center w-full cursor-pointer p-3 font-bold bg-grey-lightest hover:bg-red-light hover:text-white inline-flex items-center justify-center"
          >
            Load More{" "}
            <FontAwesomeIcon icon={faAngleDown} className="fa-lg ml-2" />
          </p>
        ) : props.initialCount != props.specificMax &&
          !isSmallMediumOrLargeDevice ? (
          <p
            onClick={() => {
              props.showMoreFeatures({
                max,
                count: max == 2 ? 1 : 2
              });
            }}
            className="text-grey-light rounded opacity-75 text-center w-full mx-auto my-4 cursor-pointer p-3 font-bold bg-grey-lightest hover:bg-red-light flex justify-center hover:text-white inline-flex items-center"
          >
            Collapse <FontAwesomeIcon icon={faAngleUp} className="fa-lg ml-2" />
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default index;
