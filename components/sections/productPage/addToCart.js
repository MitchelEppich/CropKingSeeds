import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus, faMinus);
import SeedSelectModule from "./seedSelectModule";

const addToCart = props => {
  let currentProduct = props.viewProduct.currentProduct;
  let currency = props.checkout.viewCurrency;

  return (
    <div className="w-full">
      <div className="w-container sm:w-full md:w-full mx-auto mt-4">
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
                  currentProduct.price[props.shop.quickAddToCartQty]
                ).toFixed(2)}`
              : ""}
          </p>
        </div>
      </div>
      <div className="w-1/4 h-8 sm:w-full md:w-full w-container mx-auto">
        <div className="inline-flex flex my-2 items-center ">
          <div>
            <p className="w-100 text-left text-sm text-grey font-bold mx-auto">
              Total Price:{" "}
            </p>
          </div>

          <p className="font-bold text-xl text-grey-darkest ml-4">
            {currency != null
              ? `${currency.symbol}${(
                  currency.convert *
                  (currentProduct.price[props.shop.quickAddToCartQty] *
                    props.cart.potentialQuantity)
                ).toFixed(2)}`
              : ""}
          </p>
        </div>
      </div>

      <div className="w-container sm:w-full md:w-full mx-auto">
        <div className="w-full ml-0 flex justify-start">
          <SeedSelectModule {...props} product={currentProduct} />
        </div>
        <div className="w-full inline-flex">
          <div className="w-1/2 mr-2 pt-2">
            <button
              className="bg-red-dark h-10 w-full text-center text-white mr-2 hover:bg-grey-light px-4"
              onClick={() => {
                let _identifier =
                  currentProduct.sotiId +
                  [5, 10, 25][props.shop.quickAddToCartQty];
                props.modifyCart({
                  items: props.cart.items,
                  action: "APPEND",
                  productIdentifier: _identifier,
                  product: currentProduct,
                  quantity: props.cart.potentialQuantity
                });
              }}
            >
              Add to Cart
            </button>
          </div>
          <div className="w-1/2 pt-2">
            <Link href="/checkout">
              <button
                className="bg-grey-dark h-10 w-full text-center text-white hover:bg-grey-light px-4"
                onClick={() => {
                  let _identifier =
                    currentProduct.sotiId +
                    [5, 10, 25][props.shop.quickAddToCartQty];
                  props.modifyCart({
                    items: props.cart.items,
                    action: "APPEND",
                    productIdentifier: _identifier,
                    product: currentProduct,
                    quantity: props.cart.potentialQuantity
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
