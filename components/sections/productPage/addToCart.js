import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus, faCheck } from "@fortawesome/free-solid-svg-icons";
import SeedSelectModule from "./seedSelectModule";

const addToCart = props => {
  let currentProduct = props.viewProduct.currentProduct;
  let currency = props.checkout.viewCurrency;
  let _coupon = props.checkout.orderDetails.coupon;

  return (
    <div className="w-full relative">
      <div className="absolute pin-r mr-16 sm:mr-0 sm:relative">
        <p className="w-125 p-2 xxl:text-center text-right p-2 text-red-light font-bold sm:w-full sm:text-right">
          {currentProduct.inStock ? "In Stock" : "Sold Out"}
        </p>
      </div>
      <div>
        <div className="w-container sm:w-full md:w-full mx-auto mt-4 sm:mt-0">
          <div className="inline-flex items-center flex w-full my-2 opacity-50">
            <div className="">
              <p className="w-100 text-left text-sm text-grey font-bold mx-auto">
                Price per Pack:{" "}
              </p>
            </div>
            <p className="font-bold text-xl text-grey-darkest ml-4">
              {currency != null
                ? `${currency.symbol}${(
                    currency.convert *
                    currentProduct.price[
                      props.shop.quickAddToCartQty[currentProduct._id]
                    ]
                  ).toFixed(2)}`
                : ""}
            </p>
          </div>
        </div>
        <div className="w-1/4 h-8 sm:w-full md:w-full w-container mx-auto">
          <div className="inline-flex flex my-2 items-center">
            <div>
              <p className="w-100 text-left text-sm text-grey font-bold mx-auto">
                Total Price:{" "}
              </p>
            </div>

            <p className="font-bold text-xl text-grey-darkest ml-4">
              {currency != null
                ? `${currency.symbol}${(
                    currency.convert *
                    (currentProduct.price[
                      props.shop.quickAddToCartQty[currentProduct._id]
                    ] *
                      props.cart.potentialQuantity[currentProduct._id])
                  ).toFixed(2)}`
                : ""}
            </p>
          </div>
        </div>
      </div>

      <div
        className={`w-container sm:w-full md:w-full mx-auto ${
          currentProduct.inStock
            ? ""
            : "unselectable opacity-50 pointer-events-none"
        }`}
      >
        <div className="w-full ml-0 flex justify-start">
          <SeedSelectModule {...props} product={currentProduct} />
        </div>
        <div className="w-full inline-flex">
          <div className="w-1/2 mr-2 pt-2">
            <button
              className="bg-red-dark h-10 w-full text-center text-white mr-2 hover:bg-red-light px-4 font-bold"
              onClick={() => {
                let _identifier =
                  currentProduct.sotiId +
                  [5, 10, 25][props.shop.quickAddToCartQty[currentProduct._id]];
                props.modifyCart({
                  items: props.cart.items,
                  action: "APPEND",
                  max: props.cart.maxPerPackage,
                  productIdentifier: _identifier,
                  product: currentProduct,
                  quantity: props.cart.potentialQuantity[currentProduct._id],
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
              {props.cart.recentAdd.includes(
                props.viewProduct.currentProduct._id
              ) ? (
                <div className="inline-flex slowish">
                  Added
                  <FontAwesomeIcon icon={faCheck} className="ml-1" />
                </div>
              ) : (
                "Add to Cart"
              )}
            </button>
          </div>
          <div className="w-1/2 pt-2">
            <Link prefetch href="/checkout">
              <button
                className="bg-grey-dark h-10 w-full text-center text-white hover:bg-grey-light px-4 font-bold"
                onClick={() => {
                  let _identifier =
                    currentProduct.sotiId +
                    [5, 10, 25][props.shop.quickAddToCartQty];
                  props.modifyCart({
                    items: props.cart.items,
                    action: "APPEND",
                    max: props.cart.maxPerPackage,
                    productIdentifier: _identifier,
                    product: currentProduct,
                    quantity: props.cart.potentialQuantity[currentProduct._id],
                    coupon: _coupon
                  });
                }}
              >
                Buy Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default addToCart;
