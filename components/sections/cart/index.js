import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
library.add(faTimes);
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
        overflowY: "auto",
        width: "500px"
      }
    : {
        transform: "translateX(500px)",
        transition: "all 0.2s ease-in-out",
        WebkitTransition: "all 0.2s ease-in-out",
        overflowY: "auto",
        width: "500px"
      };
  let items = Object.entries(props.cart.items).map((item, index) => {
    return (
      <CartItem
        key={item[1]._id}
        val={{ ...item[1], sotiId: item[0] }}
        {...props}
        index={index}
      />
    );
  });

  return (
    <div
      style={viewCart}
      className="w-500 text-black text-3xl sm:w-screen max-w-screen z-50 pin-t pin-r h-screen bg-white fixed pb-12 shadow-lg"
    >
      <h2
        onClick={() => props.setVisibleScreen("viewCart")}
        className="text-red-dark w-full h-16 text-center mt-8 cursor-pointer"
      >
        Cart
      </h2>
      <p
        onClick={() => props.setVisibleScreen("viewCart")}
        className="absolute pin-t pin-r mt-8 mr-8 text-red-dark cursor-pointer"
      >
        <FontAwesomeIcon icon={faTimes} className="fa-lg" />
      </p>
      <div className="min-h-500 w-full">
        {items.length > 0 ? (
          items
        ) : (
          <p className="text-center my-12">No items in cart!</p>
        )}
      </div>

      {items.length > 0 ? (
        <Link href="/checkout">
          <button
            onClick={() => props.setVisibleScreen("viewCart")}
            className="mx-auto block px-8 py-2 border border-red-dark text-red-dark"
          >
            Checkout
          </button>
        </Link>
      ) : null}
    </div>
  );
};

export default cart;
