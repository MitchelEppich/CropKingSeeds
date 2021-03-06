import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Images from "./images";
import Details from "./details";
import AddToCartModule from "./addToCartModule";
import Prices from "./prices";

import Router from "next/router";
const isClient = typeof document !== "undefined";

const index = props => {
  let hover = props.hoverId == props.product._id;
  let overlayClass = hover ? "overlayClass--hover" : "overlayClass";
  return (
    <div
      onClick={() => {
        if (!isClient) return;
        if (props.misc.lowGPUMode || window.innerHeight < 750) {
          props.setCurrentProduct({ product: props.product });
          Router.push(
            "/product",
            "/product/" + props.product.name.toLowerCase().replace(/ /g, "-")
          );
          window.scrollTo(0, 0);
        }
      }}
      className={overlayClass}
    >
      <div className="xl:hidden xxl:hidden">
        <FontAwesomeIcon
          onClick={() => {
            enableScroll();
            props.setHoverId(props.product._id, false);
          }}
          icon={faTimes}
          className={`
          ${
            hover
              ? "cursor-pointer fa-2x text-grey-light absolute z-50 pin-t pin-r mt-3 mr-3"
              : "hidden"
          } `}
        />
      </div>
      <Images hover={hover} {...props} />
      <div
        onClick={() => {
          enableScroll();
          props.setCurrentProduct({ product: props.product });
        }}
        className={
          hover
            ? "overflow-hidden w-full bg-white pt-4 justify-center flex"
            : "relative"
        }
      >
        <div>
          <Details hover={hover} {...props} />
          <AddToCartModule {...props} hover={hover} />
          <Prices {...props} hover={hover} />
          <div
            className={
              hover
                ? "w-full mx-auto text-center p-1 flex justify-between"
                : "hidden slow"
            }
          >
            <span className="text-sm font-bold py-1 text-grey-light text-right ml-6">
              * May vary
            </span>
            <span className="text-sm italic uppercase font-bold py-1 text-red-dark text-right mr-6">
              {props.product.inStock ? "In Stock" : "Sold Out"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

function preventDefault(e) {
  e = e || window.event;
  if (e.preventDefault) e.preventDefault();
  e.returnValue = false;
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

function disableScroll() {
  if (window.addEventListener)
    // older FF
    window.addEventListener("DOMMouseScroll", preventDefault, false);
  window.onwheel = preventDefault; // modern standard
  window.onmousewheel = document.onmousewheel = preventDefault; // older browsers, IE
  window.ontouchmove = preventDefault; // mobile
  document.onkeydown = preventDefaultForScrollKeys;
}

function enableScroll() {
  if (window.removeEventListener)
    window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.onmousewheel = document.onmousewheel = null;
  window.onwheel = null;
  window.ontouchmove = null;
  document.onkeydown = null;
}

export default index;
