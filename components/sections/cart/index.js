import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
library.add(faTimes);
import CartItem from "./cartItem"
import Link from "next/link";

//takes list of cart items as prop
// returns the cart, offscreen to the right until the cart icon is clicked
const cart = props => {

  //styles
    let viewCart;
    viewCart = props.misc.visibleScreen.includes("viewCart") ? {
        transform: "translateX(0px)",
        transition: "all 0.2s ease-in-out",
        "WebkitTransition": "all 0.2s ease-in-out",
         overflowY: "auto",
         width: "500px"
    } : {
        transform: "translateX(500px)",
        transition: "all 0.2s ease-in-out",
        "WebkitTransition": "all 0.2s ease-in-out",
         overflowY: "auto",
         width: "500px"
    };
   
    
    return (
      <div style={viewCart} onClick={() => props.setVisibleScreen("viewCart")} className="w-500 sm:w-screen max-w-screen z-50 pin-t pin-r h-screen bg-white fixed pb-12 shadow-lg">
        
      </div>
    );
  };
  
  export default cart;