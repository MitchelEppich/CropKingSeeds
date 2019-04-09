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
  let mobile = ["sm", "md"].includes(props.misc.mediaSize);
  let currency = props.checkout.viewCurrency;
  //styles
  let viewCart;
  viewCart = props.misc.showCartMenu
    ? {
        transform: "translateX(0px)",
        transition: "all 0.2s ease-in-out",
        WebkitTransition: "all 0.2s ease-in-out"
      }
    : {
        transform: "translateX(1000px)",
        transition: "all 0.2s ease-in-out",
        WebkitTransition: "all 0.2s ease-in-out"
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
      <div className="relative h-16 sm:h-12 w-full">
        <div className="absolute w-full sm:h-12">
          <div
            onClick={() => {
              props.toggleCartMenu(!props.misc.showCartMenu);
            }}
            className="absolute pin-t pin-l mt-4 sm:mt-0 h-10 w-10 hover:bg-grey-lightest hover:text-grey sm:ml-6 ml-12 text-red-dark cursor-pointer flex justify-center items-center"
          >
            <FontAwesomeIcon
              icon={!mobile ? faAngleDoubleRight : faTimes}
              className="fa-lg cursor-pointer sm:px-1"
            />
          </div>
          <div className="w-full">
            <h2
              onClick={() => props.toggleCartMenu(!props.misc.showCartMenu)}
              className="text-red-dark border-b-2 border-red-dark w-full sm:h-12 text-center text-3/5xl sm:text-3xl font-extrabold mt-4 sm:mt-0 cursor-pointer"
            >
              Cart
            </h2>
          </div>
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
            <p className="text-3xl mb-2 mt-64 sm:mt-24 sm:text-2xl font-extrabold">
              Sorry, your cart is empty!
            </p>
            <p className="sm:text-base sm:w-main sm:mx-auto">
              Looks like you have no items in your shopping cart.
            </p>
            <p className="sm:text-base sm:mt-6">
              Check back after more shopping.
            </p>
          </div>
        )}
      </div>
      <div className="pr-4 h-16 sm:h-24 items-center flex bg-white sm:bg-grey text-red-dark flex absolute pin-b border-t-2 border-red-dark w-500 sm:w-full md:w-full">
        <Link prefetch href="/checkout">
          <button
            name="viewCart"
            onClick={() => props.toggleCartMenu(!props.misc.showCartMenu)}
            className={`mx-auto ml-16 bg-red-dark sm:bg-red-dark md:ml-6 sm:ml-6 lg:mx-8 text-lg block px-8 py-3 sm:h-16 sm:px-3 hover:bg-grey font-extrabold hover:text-white slow text-white ${
              items.length == 0 ? "opacity-50 pointer-events-none" : ""
            }`}
          >
            Checkout
          </button>
        </Link>
        <div className="flex mr-4 items-center sm:mx-4">
          <p className="inline-block mr-4 text-xl font-medium text-grey sm:text-white sm:text-lg">
            Subtotal:
          </p>
          <p className="inline-block text-2xl font-extrabold sm:text-xl sm:text-white text-red-dark">
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
