import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLongArrowAltLeft } from "@fortawesome/free-solid-svg-icons";
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
            <React.Fragment key={item[0]}>
                <CartItem item={{ ...item[1], sotiIdQty: item[0] }} {...props} index={index} />
                <hr className="hr__cart" />
            </React.Fragment>

        );

    });

    return (
        <div style={viewCart} className="w-500 text-black text-3xl sm:w-screen max-w-screen z-50 pin-t pin-r h-screen bg-white fixed pb-12 shadow-lg pt-16">
            <p
                onClick={() => props.setVisibleScreen({ input: "viewCart" })}
                className="absolute pin-t pin-l mt-8 ml-12 text-red-dark cursor-pointer"
            >
                <FontAwesomeIcon icon={faLongArrowAltLeft} className="fa-lg" />
            </p>
            <h2 onClick={() => props.setVisibleScreen({ input: "viewCart" })} className="text-red-dark w-full h-16 text-center font-thin mt-8 cursor-pointer" >
                Cart
            </h2>
            <div className="min-h-300 w-full mt-4 pt-8 mb-8 font-thin bg-smoke-grey">
                {items.length > 0 ? items : <p className="text-center">No items in cart!</p>}
            </div>
            <div className="pl-32 pr-4 my-4 flex justify-between">
                <p className="inline-block">Sub Total</p>
                <p className="inline-block">$</p>
            </div>

            {items.length > 0 ? (
                <Link href="/checkout">
                    <button
                        onClick={() => props.setVisibleScreen({ input: "viewCart" })}
                        className="mx-auto mt-8 block px-8 py-2 border border-red-dark hover:bg-red-dark hover:text-white slow text-red-dark"
                    >
                        Checkout
                    </button>
                </Link>
            ) : null}
        </div>
    );
};

export default cart;
