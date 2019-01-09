import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus, faMinus);
import SeedSelectModule from "./seedSelectModule";

const addToCart = props => {
  let currentProduct = props.viewProduct.currentProduct;

  return (
    <div className="w-full flex flex-wrap">
      <p className="w-full text-left text-3xl text-grey-light mx-auto my-3">
        Price:{" "}
        <span className="font-bold">
          ${currentProduct.price[props.shop.quickAddToCartQty].toFixed(2)}
        </span>
      </p>
      <div className="w-container">
        <div className="w-3/5 ml-0 flex justify-start">
          <SeedSelectModule {...props} product={currentProduct} />
        </div>
        <div className="w-3/5 inline-flex">
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
              }}>
              Add to Cart
            </button>
          </div>
          <div className="w-1/2 pt-2">
            <Link href="/checkout">
              <button
                className="bg-red-dark h-10 w-full text-center text-white hover:bg-grey-light px-4"
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
                }}>
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
