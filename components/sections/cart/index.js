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
  let totalPrice = 0;
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
    totalPrice += item[1].price;
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
      className="w-500 text-black text-3xl sm:w-screen max-w-screen z-50 pin-t pin-r h-screen bg-white fixed pb-12 shadow-lg pt-16"
    >
      <div className="relative h-24 w-full fixed">
        <div className="absolute w-full">
          <p
            onClick={() =>
              props.setVisibleScreen({
                input: "viewCart"
              })
            }
            className="absolute pin-t pin-l mt-8 ml-12 text-red-dark cursor-pointer"
          >
            <FontAwesomeIcon icon={faAngleDoubleRight} className="fa-lg" />
          </p>
          <h2
            onClick={() =>
              props.setVisibleScreen({
                input: "viewCart"
              })
            }
            className="text-red-dark border-b-2 border-red-dark w-full h-16 text-center text-3/5xl font-extrabold mt-8 cursor-pointer"
          >
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
      <div className="pr-4 pb-4 h-20 items-center flex bg-white flex absolute pin-b border-t-2 border-red-dark w-500 pt-4">
        <Link href="/checkout">
          <button
            onClick={() =>
              props.setVisibleScreen({
                input: "viewCart"
              })
            }
            className={`mx-auto ml-16 py-1 px-4 border h-12 text-lg block px-8 py-2 border border-red-dark hover:bg-red-dark font-extrabold hover:text-white slow text-red-dark ${
              items.length == 0 ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            Checkout
          </button>
        </Link>
        <div className="flex mr-4">
          <p className="inline-block mr-4 text-2xl font-extrabold">Subtotal</p>
          <p className="inline-block text-2xl font-extrabold text-red-dark">
            ${totalPrice.toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default cart;
