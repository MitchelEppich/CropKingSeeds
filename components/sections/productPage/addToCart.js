import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
library.add(faPlus, faMinus);
import SeedSelectModule from "./seedSelectModule";

const addToCart = props => {
  let currentProduct = props.viewProduct.currentProduct;

  return (
    <div className="w-2/3 flex flex-wrap">
      <p className="w-full text-left text-3xl text-grey-light mx-auto my-3">
        Price:{" "}
        <span className="font-bold">
          ${currentProduct.price[props.shop.quickAddToCartQty].toFixed(2)}
        </span>
      </p>
      <SeedSelectModule {...props} product={currentProduct} />
      <button
        className="bg-red-dark h-12 w-32 text-center text-white mx-4 p-4"
        onClick={() => {
          let _identifier =
            currentProduct.sotiId + [5, 10, 25][props.shop.quickAddToCartQty];
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
      <Link href="/checkout">
        <button
          className="bg-red-dark h-12 w-32 text-center text-white p-4"
          onClick={() => {
            let _identifier =
              currentProduct.sotiId + [5, 10, 25][props.shop.quickAddToCartQty];
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
  );
};

export default addToCart;
