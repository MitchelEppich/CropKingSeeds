import Link from "next/link";
import SeedSelectModule from "../../../productPage/seedSelectModule";

import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const addToCartModule = props => {
  let _coupon = props.checkout.orderDetails.coupon;
  let productIdentifier =
    props.product.sotiId + [5, 10, 25][props.shop.quickAddToCartQty];

  return (
    <div
      className={
        props.hover
          ? "flex justify-center px-4 items-center flex"
          : "flex flex-wrap justify-center px-4 hidden"
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
          <div className="w-full inline-flex sm:mt-0 mt-2">
            <button
              className="bg-red-dark mr-1 w-full text-center text-white h-10 px-2 py-2 hover:bg-red-light slowish rounded"
              onClick={() => {
                props.modifyCart({
                  items: props.cart.items,
                  action: "APPEND",
                  max: props.cart.maxPerPackage,
                  productIdentifier: productIdentifier,
                  product: props.product,
                  quantity: props.cart.potentialQuantity,
                  coupon: _coupon
                });
                props.toggleCartAnimation();
              }}
            >
              {props.shop.cartAnimation &&
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
                className="bg-grey-dark ml-1 w-full text-center text-white h-10 px-2 py-2 hover:bg-grey-light rounded"
                onClick={() => {
                  props.modifyCart({
                    items: props.cart.items,
                    action: "APPEND",
                    max: props.cart.maxPerPackage,
                    productIdentifier: productIdentifier,
                    product: props.product,
                    quantity: props.cart.potentialQuantity,
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
