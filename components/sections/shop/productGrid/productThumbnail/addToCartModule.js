import Link from "next/link";
import SeedSelectModule from "../../../productPage/seedSelectModule";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const addToCartModule = props => {
  let _coupon = props.checkout.orderDetails.coupon;
  let productIdentifier =
    props.product.sotiId +
    [5, 10, 25][props.shop.quickAddToCartQty[props.product._id]];

  return (
    <div
      className={
        props.hover
          ? "flex justify-center px-4 md:px-1 items-center flex"
          : "flex flex-wrap justify-center px-4 md:px-1 hidden"
      }
    >
      {props.hover ? (
        <div
          className={`w-full ${
            props.product.inStock
              ? ""
              : "unselectable opacity-50 pointer-events-none"
          }`}
        >
          <div className="w-full">
            <SeedSelectModule {...props} product={props.product} />
          </div>
          <div
            className={`w-full inline-flex sm:mt-0 mt-0 ${
              props.misc.lowGPUMode ? "sm:flex-col md:flex-col" : ""
            }`}
          >
            <button
              className={`bg-red-dark w-full text-center text-white h-10 px-2 py-2 hover:bg-red-light slowish ${
                props.misc.lowGPUMode
                  ? "md:mr-0 md:mb-1 mr-1 sm:mr-0 sm:mb-1"
                  : "mr-1"
              }`}
              onClick={e => {
                e.stopPropagation();
                let _product = props.product;
                props.modifyCart({
                  items: props.cart.items,
                  action: "APPEND",
                  max: props.cart.maxPerPackage,
                  productIdentifier: productIdentifier,
                  product: _product,
                  quantity: props.cart.potentialQuantity[props.product._id],
                  coupon: _coupon
                });
                props.toggleCartAnimation();
                props.updateRecentAdded({
                  recentAdd: props.cart.recentAdd,
                  sotiId: props.viewProduct.currentProduct._id
                });
                setTimeout(() => {
                  props.updateRecentAdded({
                    recentAdd: props.cart.recentAdd,
                    sotiId: props.viewProduct.currentProduct._id
                  });
                }, 800);
              }}
            >
              {props.shop.cartAnimation &&
              Object.keys(props.cart.items).length > 0 &&
              Object.keys(props.cart.items)[
                Object.keys(props.cart.items).length - 1
              ].includes(props.product.sotiId) ? (
                <div className="inline-flex slowish">
                  Added
                  <FontAwesomeIcon icon={faCheck} className="ml-1" />
                </div>
              ) : (
                "Add to Cart"
              )}
            </button>
            <Link prefetch href="/checkout">
              <button
                className={`bg-grey-dark w-full text-center text-white h-10 px-2 py-2 hover:bg-grey-light ${
                  props.misc.lowGPUMode
                    ? "md:ml-0 md:mb-1 ml-1 sm:ml-0 sm:mb-1"
                    : "ml-1"
                }`}
                onClick={e => {
                  e.stopPropagation();
                  props.modifyCart({
                    items: props.cart.items,
                    action: "APPEND",
                    max: props.cart.maxPerPackage,
                    productIdentifier: productIdentifier,
                    product: props.product,
                    quantity: props.cart.potentialQuantity[props.product._id],
                    coupon: _coupon
                  });
                }}
              >
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default addToCartModule;
