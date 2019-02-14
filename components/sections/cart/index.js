import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faLongArrowAltLeft,
  faLongArrowAltRight,
  faAngleDoubleRight,
  faTimes,
  faTrash
} from "@fortawesome/free-solid-svg-icons";
library.add(faLongArrowAltLeft);
import CartItem from "./cartItem";
import Link from "next/link";

//takes list of cart items as prop
// returns the cart, offscreen to the right until the cart icon is clicked
const cart = props => {
  let currency = props.checkout.viewCurrency;
  //styles
  let viewCart;
  viewCart = props.misc.visibleScreen.includes("viewCart")
    ? {
        transform: "translateX(0px)",
        transition: "all 0.4s ease-in-out",
        WebkitTransition: "all 0.4s ease-in-out"
      }
    : {
        transform: "translateX(1000px)",
        transition: "all 0.4s ease-in-out",
        WebkitTransition: "all 0.4s ease-in-out"
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
      className="w-500 sm:w-full lg:w-400 md:w-400 text-black text-3xl sm:w-300 max-w-screen z-40 pin-t pin-r h-screen bg-white fixed pb-12 shadow-lg pt-32"
    >
      <div className="relative h-20 sm:h-16 w-full">
        <div className="absolute w-full">
          <p
            onClick={() =>
              props.setVisibleScreen({
                input: "viewCart"
              })
            }
            className="absolute pin-t pin-l mt-4 ml-12 text-red-dark cursor-pointer"
          >
            <FontAwesomeIcon
              icon={faAngleDoubleRight}
              className="fa-lg sm:px-1"
            />
          </p>
          <h2
            onClick={() =>
              props.setVisibleScreen({
                input: "viewCart"
              })
            }
            className="text-red-dark border-b-2 border-red-dark w-full h-16 sm:h-12 text-center text-3/5xl sm:text-3xl font-extrabold mt-4 cursor-pointer"
          >
            Cart
          </h2>
        </div>
      </div>
      <div className="min-h-300 h-full w-full font-thin bg-smoke-grey overflow-y-auto pb-32">
        {items.length > 0 ? (
          <div className="justify-end flex mr-5 underline">
            <div
              onClick={() => {
                props.purgeCart();
              }}
              className="inline-flex font-bold text-grey-light text-lg p-2 items-center rounded cursor-pointer hover:text-grey-light scale-item text-lg"
            >
              <p className="flex items-center">Clear Cart</p>
              <FontAwesomeIcon
                icon={faTrash}
                className=" ml-2 items-center flex"
              />
            </div>
          </div>
        ) : null}
        {items.length > 0 ? (
          <CartItem {...props} />
        ) : (
          <div className="text-center text-base">
            <p className="text-3xl mb-2 mt-64 sm:mt-48 font-extrabold">
              Sorry, your cart is empty!
            </p>
            <p>Looks like you have no items in your shopping cart.</p>
            <p>Check back after more shopping.</p>
          </div>
        )}
      </div>
      <div className="pr-4 h-16 items-center flex bg-white text-red-dark flex absolute pin-b border-t-2 border-red-dark w-500 sm:w-full md:w-full">
        <Link prefetch href="/checkout">
          <button
            name="viewCart"
            onClick={() =>
              props.setVisibleScreen({
                input: "viewCart"
              })
            }
            className={`mx-auto ml-16 bg-red-dark md:ml-6 sm:ml-6 lg:mx-8 py-1 h-12 text-lg block px-8 py-2 sm:h-10 sm:px-3 hover:bg-grey font-extrabold hover:text-white slow text-white ${
              items.length == 0 ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            Checkout
          </button>
        </Link>
        <div className="flex mr-4 items-center sm:mx-4">
          <p className="inline-block mr-4 text-xl font-medium text-grey sm:text-lg">
            Subtotal:
          </p>
          <p className="inline-block text-2xl font-extrabold sm:text-xl text-red-dark">
            {currency != null
              ? `${currency.symbol}${(
                  currency.convert * props.cart.price
                ).toFixed(2)}`
              : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default cart;
