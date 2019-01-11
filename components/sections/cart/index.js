import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faAngleDoubleRight
} from "@fortawesome/free-solid-svg-icons";
library.add(faLongArrowAltLeft);
import CartItem from "./cartItem";
import Link from "next/link";

//takes list of cart items as prop
// returns the cart, offscreen to the right until the cart icon is clicked
const cart = props => {
  //styles
  let viewCart;
  viewCart = props.misc.visibleScreen.includes("viewCart")
    ? {
        transform: "translateX(0px)",
        transition: "all 0.2s ease-in-out",
        WebkitTransition: "all 0.2s ease-in-out",
        width: "500px"
      }
    : {
        transform: "translateX(500px)",
        transition: "all 0.2s ease-in-out",
        WebkitTransition: "all 0.2s ease-in-out",
        width: "500px"
      };
  let items = Object.entries(props.cart.items).map((item, index) => {
    return (
      <React.Fragment key={item[0]}>
        <CartItem
          item={{
            ...item[1],
            productIdentifier: item[0]
          }}
          {...props}
          index={index}
        />
        <hr className="hr__cart" />
      </React.Fragment>
    );
  });

  return (
    <div
      style={viewCart}
      className="w-500 text-black text-3xl sm:w-screen max-w-screen z-50 pin-t pin-r h-screen bg-white fixed pb-12 shadow-lg pt-56">
      <div className="relative h-20 w-full fixed">
        <div className="absolute w-full">
          <p
            onClick={() =>
              props.setVisibleScreen({
                input: "viewCart"
              })
            }
            className="absolute pin-t pin-l mt-4 ml-12 text-red-dark cursor-pointer">
            <FontAwesomeIcon icon={faAngleDoubleRight} className="fa-lg" />
          </p>
          <h2
            onClick={() =>
              props.setVisibleScreen({
                input: "viewCart"
              })
            }
            className="text-red-dark border-b-2 border-red-dark w-full h-16 text-center text-3/5xl font-extrabold mt-4 cursor-pointer">
            Cart
          </h2>
        </div>
      </div>
      <div className="min-h-300 h-full w-full font-thin bg-smoke-grey overflow-y-auto pb-32">
        {items.length > 0 ? (
          items
        ) : (
          <div className="text-center text-base">
            <p className="text-3xl mb-2 mt-64 font-extrabold">
              Sorry, your cart is empty!
            </p>
            <p>Looks like you have no items in your shopping cart.</p>
            <p>Check back after more shopping.</p>
          </div>
        )}
      </div>
      <div className="pr-4 pb-4 h-24 items-center flex bg-white text-red-dark flex absolute pin-b border-t-2 border-red-dark w-500">
        <Link href="/checkout">
          <button
            onClick={() =>
              props.setVisibleScreen({
                input: "viewCart"
              })
            }
            className={`mx-auto ml-16 bg-red-dark  py-1 h-12 text-lg block px-8 py-2  hover:bg-grey font-extrabold hover:text-white slow text-white  ${
              items.length == 0 ? "opacity-50 pointer-events-none" : ""
            }`}>
            Checkout
          </button>
        </Link>
        <div className="flex mr-4 items-center">
          <p className="inline-block mr-4 text-xl font-medium text-grey">
            Subtotal:
          </p>
          <p className="inline-block text-2xl font-extrabold text-red-dark">
            ${props.cart.price.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default cart;
